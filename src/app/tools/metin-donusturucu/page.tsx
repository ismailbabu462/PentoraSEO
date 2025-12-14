"use client";

import { useState } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { copyToClipboard } from "@/lib/utils";

const tool = getToolBySlug("metin-donusturucu")!;

type TransformType = "uppercase" | "lowercase" | "titlecase" | "sentencecase" | "slug";

const transforms: { id: TransformType; name: string; icon: string }[] = [
    { id: "uppercase", name: "BÜYÜK HARF", icon: "AA" },
    { id: "lowercase", name: "küçük harf", icon: "aa" },
    { id: "titlecase", name: "Başlık Formatı", icon: "Aa" },
    { id: "sentencecase", name: "Cümle formatı", icon: "A." },
    { id: "slug", name: "url-slug-formati", icon: "/-" },
];

function transformText(text: string, type: TransformType): string {
    switch (type) {
        case "uppercase":
            return text.toUpperCase();
        case "lowercase":
            return text.toLowerCase();
        case "titlecase":
            return text
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
        case "sentencecase":
            return text
                .toLowerCase()
                .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
        case "slug":
            const turkishMap: Record<string, string> = {
                ş: "s", Ş: "S", ı: "i", İ: "I", ğ: "g", Ğ: "G",
                ü: "u", Ü: "U", ö: "o", Ö: "O", ç: "c", Ç: "C",
            };
            return text
                .split("")
                .map((char) => turkishMap[char] || char)
                .join("")
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, "")
                .replace(/[\s_-]+/g, "-")
                .replace(/^-+|-+$/g, "");
        default:
            return text;
    }
}

export default function MetinDonusturucuPage() {
    const [inputText, setInputText] = useState("");
    const [activeTransform, setActiveTransform] = useState<TransformType>("uppercase");
    const [copied, setCopied] = useState(false);

    const outputText = inputText ? transformText(inputText, activeTransform) : "";

    const handleCopy = async () => {
        if (!outputText) return;
        const success = await copyToClipboard(outputText);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <ToolLayout tool={tool}>
            {/* Transform Options */}
            <div className="flex flex-wrap gap-2 mb-6">
                {transforms.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTransform(t.id)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTransform === t.id
                                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        <span className="mr-2 font-mono">{t.icon}</span>
                        {t.name}
                    </button>
                ))}
            </div>

            {/* Input/Output Grid */}
            <div className="grid md:grid-cols-2 gap-4">
                {/* Input */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Giriş Metni
                    </label>
                    <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Dönüştürmek istediğiniz metni yazın..."
                        className="input-base min-h-[200px] resize-y"
                        autoFocus
                    />
                </div>

                {/* Output */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Çıkış Metni
                    </label>
                    <textarea
                        value={outputText}
                        readOnly
                        placeholder="Dönüştürülmüş metin burada görünecek..."
                        className="input-base min-h-[200px] resize-y bg-gray-50 dark:bg-gray-800/50"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-4">
                <button
                    onClick={handleCopy}
                    className="btn-primary"
                    disabled={!outputText}
                >
                    {copied ? (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Kopyalandı!
                        </>
                    ) : (
                        <>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Sonucu Kopyala
                        </>
                    )}
                </button>

                <button
                    onClick={() => setInputText("")}
                    className="btn-secondary"
                    disabled={!inputText}
                >
                    Temizle
                </button>
            </div>
        </ToolLayout>
    );
}
