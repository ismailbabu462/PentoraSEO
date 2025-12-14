"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { copyToClipboard, generateSlug } from "@/lib/utils";

const tool = getToolBySlug("slug-olusturucu")!;

export default function SlugOlusturucuPage() {
    const [inputText, setInputText] = useState("");
    const [separator, setSeparator] = useState<"-" | "_">("-");
    const [copied, setCopied] = useState(false);

    const slug = useMemo(
        () => generateSlug(inputText, separator),
        [inputText, separator]
    );

    const handleCopy = async () => {
        if (!slug) return;
        const success = await copyToClipboard(slug);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <ToolLayout tool={tool}>
            {/* Separator Selection */}
            <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Ayraç:
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setSeparator("-")}
                        className={`px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all ${separator === "-"
                                ? "bg-brand-500 text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        tire (-)
                    </button>
                    <button
                        onClick={() => setSeparator("_")}
                        className={`px-4 py-2 rounded-lg text-sm font-mono font-medium transition-all ${separator === "_"
                                ? "bg-brand-500 text-white"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        alt çizgi (_)
                    </button>
                </div>
            </div>

            {/* Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Metin Girin
                </label>
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Örn: SEO Uyumlu Blog Yazısı Başlığı"
                    className="input-base text-lg"
                    autoFocus
                />
            </div>

            {/* Output */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Oluşturulan Slug
                </label>
                <div className="relative">
                    <input
                        type="text"
                        value={slug}
                        readOnly
                        placeholder="slug-burada-gorunecek"
                        className="input-base text-lg font-mono bg-gray-50 dark:bg-gray-800/50 pr-24"
                    />
                    {slug && (
                        <button
                            onClick={handleCopy}
                            className="absolute right-2 top-1/2 -translate-y-1/2 btn-primary text-sm py-1.5"
                        >
                            {copied ? "Kopyalandı!" : "Kopyala"}
                        </button>
                    )}
                </div>
            </div>

            {/* Turkish Character Info */}
            <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                    🇹🇷 Türkçe Karakter Dönüşümü
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-sm">
                    {[
                        ["ş", "s"],
                        ["ğ", "g"],
                        ["ü", "u"],
                        ["ö", "o"],
                        ["ç", "c"],
                        ["ı", "i"],
                    ].map(([from, to]) => (
                        <div
                            key={from}
                            className="flex items-center justify-center gap-1 bg-white dark:bg-gray-800 rounded-lg p-2"
                        >
                            <span className="font-mono text-red-500">{from}</span>
                            <span className="text-gray-400">→</span>
                            <span className="font-mono text-green-500">{to}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Example */}
            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                <strong>Örnek:</strong> "Türkçe Öğreniyorum! #2024" →{" "}
                <code className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded font-mono">
                    turkce-ogreniyorum-2024
                </code>
            </div>
        </ToolLayout>
    );
}
