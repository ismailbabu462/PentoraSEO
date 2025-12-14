"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import * as Diff from "diff";

const tool = getToolBySlug("metin-karsilastirma")!;

type DiffMode = "words" | "lines" | "chars";

export default function MetinKarsilastirmaPage() {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [mode, setMode] = useState<DiffMode>("words");

    const diffResult = useMemo(() => {
        if (!text1 && !text2) return [];

        switch (mode) {
            case "words":
                return Diff.diffWords(text1, text2);
            case "lines":
                return Diff.diffLines(text1, text2);
            case "chars":
                return Diff.diffChars(text1, text2);
            default:
                return [];
        }
    }, [text1, text2, mode]);

    const stats = useMemo(() => {
        let added = 0;
        let removed = 0;
        let unchanged = 0;

        diffResult.forEach((part) => {
            const count = part.value.length;
            if (part.added) added += count;
            else if (part.removed) removed += count;
            else unchanged += count;
        });

        return { added, removed, unchanged };
    }, [diffResult]);

    return (
        <ToolLayout tool={tool}>
            {/* Mode Selection */}
            <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Karşılaştırma Modu:
                </span>
                <div className="flex gap-2">
                    {[
                        { id: "words", name: "Kelime" },
                        { id: "lines", name: "Satır" },
                        { id: "chars", name: "Karakter" },
                    ].map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setMode(m.id as DiffMode)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === m.id
                                    ? "bg-brand-500 text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {m.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Orijinal Metin
                    </label>
                    <textarea
                        value={text1}
                        onChange={(e) => setText1(e.target.value)}
                        placeholder="İlk metni buraya girin..."
                        className="input-base min-h-[200px] resize-y font-mono text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Değiştirilmiş Metin
                    </label>
                    <textarea
                        value={text2}
                        onChange={(e) => setText2(e.target.value)}
                        placeholder="İkinci metni buraya girin..."
                        className="input-base min-h-[200px] resize-y font-mono text-sm"
                    />
                </div>
            </div>

            {/* Stats */}
            {(text1 || text2) && (
                <div className="flex gap-4 mb-6">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Eklenen: {stats.added}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Silinen: {stats.removed}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            Değişmeyen: {stats.unchanged}
                        </span>
                    </div>
                </div>
            )}

            {/* Diff Output */}
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Farklar
                </label>
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 min-h-[150px] font-mono text-sm whitespace-pre-wrap overflow-auto">
                    {diffResult.length === 0 ? (
                        <span className="text-gray-400">
                            Karşılaştırma sonuçları burada görünecek...
                        </span>
                    ) : (
                        diffResult.map((part, index) => (
                            <span
                                key={index}
                                className={
                                    part.added
                                        ? "bg-green-200 dark:bg-green-900/50 text-green-800 dark:text-green-300"
                                        : part.removed
                                            ? "bg-red-200 dark:bg-red-900/50 text-red-800 dark:text-red-300 line-through"
                                            : ""
                                }
                            >
                                {part.value}
                            </span>
                        ))
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mt-4">
                <button
                    onClick={() => {
                        setText1("");
                        setText2("");
                    }}
                    className="btn-secondary"
                    disabled={!text1 && !text2}
                >
                    Temizle
                </button>
                <button
                    onClick={() => {
                        const temp = text1;
                        setText1(text2);
                        setText2(temp);
                    }}
                    className="btn-secondary"
                    disabled={!text1 && !text2}
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Metinleri Değiştir
                </button>
            </div>
        </ToolLayout>
    );
}
