"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { copyToClipboard } from "@/lib/utils";

const tool = getToolBySlug("json-formatlayici")!;

type TabType = "format" | "minify" | "validate";

export default function JsonFormatlayiciPage() {
    const [input, setInput] = useState("");
    const [indentSize, setIndentSize] = useState(2);
    const [activeTab, setActiveTab] = useState<TabType>("format");
    const [copied, setCopied] = useState(false);

    const result = useMemo(() => {
        if (!input.trim()) {
            return { output: "", error: null, isValid: null };
        }

        try {
            const parsed = JSON.parse(input);

            let output: string;
            switch (activeTab) {
                case "format":
                    output = JSON.stringify(parsed, null, indentSize);
                    break;
                case "minify":
                    output = JSON.stringify(parsed);
                    break;
                case "validate":
                    output = JSON.stringify(parsed, null, 2);
                    break;
                default:
                    output = "";
            }

            return { output, error: null, isValid: true };
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : "Geçersiz JSON";
            return { output: "", error: errorMessage, isValid: false };
        }
    }, [input, indentSize, activeTab]);

    const handleCopy = async () => {
        if (!result.output) return;
        const success = await copyToClipboard(result.output);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setInput(text);
        } catch {
            // Clipboard access denied
        }
    };

    const handleSample = () => {
        const sample = {
            name: "PentoraSEO",
            type: "web-tools",
            features: ["free", "fast", "secure"],
            stats: {
                tools: 15,
                users: 10000,
            },
        };
        setInput(JSON.stringify(sample));
    };

    return (
        <ToolLayout tool={tool}>
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
                {[
                    { id: "format", name: "Formatla", icon: "✨" },
                    { id: "minify", name: "Küçült", icon: "📦" },
                    { id: "validate", name: "Doğrula", icon: "✓" },
                ].map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as TabType)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeTab === tab.id
                                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        {tab.icon} {tab.name}
                    </button>
                ))}
            </div>

            {/* Indent Size (only for format) */}
            {activeTab === "format" && (
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Girinti:
                    </span>
                    <div className="flex gap-2">
                        {[2, 4].map((size) => (
                            <button
                                key={size}
                                onClick={() => setIndentSize(size)}
                                className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${indentSize === size
                                        ? "bg-brand-500 text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {size} boşluk
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Input/Output Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
                {/* Input */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Giriş JSON
                        </label>
                        <div className="flex gap-2">
                            <button
                                onClick={handlePaste}
                                className="text-xs text-brand-500 hover:text-brand-600"
                            >
                                Yapıştır
                            </button>
                            <button
                                onClick={handleSample}
                                className="text-xs text-brand-500 hover:text-brand-600"
                            >
                                Örnek
                            </button>
                        </div>
                    </div>
                    <textarea
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='{"key": "value"}'
                        className={`input-base min-h-[300px] resize-y font-mono text-sm ${result.error ? "border-red-500 dark:border-red-500" : ""
                            }`}
                        spellCheck={false}
                    />
                </div>

                {/* Output */}
                <div>
                    <div className="flex items-center justify-between mb-2">
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Çıkış
                            {result.isValid !== null && (
                                <span
                                    className={`ml-2 ${result.isValid ? "text-green-500" : "text-red-500"
                                        }`}
                                >
                                    {result.isValid ? "✓ Geçerli" : "✗ Hatalı"}
                                </span>
                            )}
                        </label>
                    </div>
                    <textarea
                        value={result.error || result.output}
                        readOnly
                        placeholder="Çıkış burada görünecek..."
                        className={`input-base min-h-[300px] resize-y font-mono text-sm ${result.error
                                ? "text-red-500 bg-red-50 dark:bg-red-900/20"
                                : "bg-gray-50 dark:bg-gray-800/50"
                            }`}
                        spellCheck={false}
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
                <button
                    onClick={handleCopy}
                    className="btn-primary"
                    disabled={!result.output}
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
                            Kopyala
                        </>
                    )}
                </button>
                <button onClick={() => setInput("")} className="btn-secondary" disabled={!input}>
                    Temizle
                </button>
            </div>
        </ToolLayout>
    );
}
