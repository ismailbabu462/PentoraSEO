"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { copyToClipboard } from "@/lib/utils";
import { v4 as uuidv4 } from "uuid";

const tool = getToolBySlug("uuid-olusturucu")!;

export default function UuidOlusturucuPage() {
    const [uuids, setUuids] = useState<string[]>([]);
    const [count, setCount] = useState(1);
    const [copied, setCopied] = useState<number | "all" | null>(null);
    const [format, setFormat] = useState<"default" | "uppercase" | "no-dash">("default");

    const formatUuid = useCallback((uuid: string) => {
        switch (format) {
            case "uppercase":
                return uuid.toUpperCase();
            case "no-dash":
                return uuid.replace(/-/g, "");
            default:
                return uuid;
        }
    }, [format]);

    const generateUuids = () => {
        const newUuids = Array.from({ length: count }, () => formatUuid(uuidv4()));
        setUuids(newUuids);
    };

    const handleCopyOne = async (uuid: string, index: number) => {
        const success = await copyToClipboard(uuid);
        if (success) {
            setCopied(index);
            setTimeout(() => setCopied(null), 2000);
        }
    };

    const handleCopyAll = async () => {
        const success = await copyToClipboard(uuids.join("\n"));
        if (success) {
            setCopied("all");
            setTimeout(() => setCopied(null), 2000);
        }
    };

    return (
        <ToolLayout tool={tool}>
            {/* Controls */}
            <div className="flex flex-wrap items-end gap-4 mb-6">
                {/* Count */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Adet
                    </label>
                    <input
                        type="number"
                        min={1}
                        max={100}
                        value={count}
                        onChange={(e) => setCount(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                        className="input-base w-24"
                    />
                </div>

                {/* Format */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Format
                    </label>
                    <div className="flex gap-2">
                        {[
                            { id: "default", name: "Varsayılan" },
                            { id: "uppercase", name: "BÜYÜK HARF" },
                            { id: "no-dash", name: "Tiresiz" },
                        ].map((f) => (
                            <button
                                key={f.id}
                                onClick={() => setFormat(f.id as typeof format)}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${format === f.id
                                        ? "bg-brand-500 text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {f.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Generate Button */}
                <button onClick={generateUuids} className="btn-primary">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Oluştur
                </button>
            </div>

            {/* Results */}
            {uuids.length > 0 && (
                <>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            {uuids.length} UUID oluşturuldu
                        </span>
                        <button
                            onClick={handleCopyAll}
                            className="btn-secondary text-sm py-1.5"
                        >
                            {copied === "all" ? "Kopyalandı!" : "Tümünü Kopyala"}
                        </button>
                    </div>

                    <div className="space-y-2 max-h-[400px] overflow-y-auto p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                        {uuids.map((uuid, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between gap-4 p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 group"
                            >
                                <code className="font-mono text-sm text-gray-800 dark:text-gray-200 break-all">
                                    {uuid}
                                </code>
                                <button
                                    onClick={() => handleCopyOne(uuid, index)}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-500 hover:text-brand-600 flex-shrink-0"
                                >
                                    {copied === index ? (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Info */}
            <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <h3 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                    ℹ️ UUID v4 Hakkında
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-400">
                    UUID v4, rastgele sayılar kullanılarak oluşturulan 128-bit benzersiz tanımlayıcıdır.
                    Çakışma olasılığı astronomik olarak düşüktür (yaklaşık 2^122'de 1).
                </p>
            </div>
        </ToolLayout>
    );
}
