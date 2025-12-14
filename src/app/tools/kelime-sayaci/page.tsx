"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { copyToClipboard, formatNumber } from "@/lib/utils";

const tool = getToolBySlug("kelime-sayaci")!;

interface Stats {
    characters: number;
    charactersNoSpaces: number;
    words: number;
    sentences: number;
    paragraphs: number;
    readingTime: string;
}

function calculateStats(text: string): Stats {
    const trimmedText = text.trim();

    if (!trimmedText) {
        return {
            characters: 0,
            charactersNoSpaces: 0,
            words: 0,
            sentences: 0,
            paragraphs: 0,
            readingTime: "0 dk",
        };
    }

    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const words = trimmedText.split(/\s+/).filter(Boolean).length;
    const sentences = trimmedText.split(/[.!?]+/).filter((s) => s.trim()).length;
    const paragraphs = trimmedText.split(/\n\s*\n/).filter((p) => p.trim()).length || 1;

    // Average reading speed: 200 words per minute
    const minutes = Math.ceil(words / 200);
    const readingTime = minutes < 1 ? "< 1 dk" : `${minutes} dk`;

    return {
        characters,
        charactersNoSpaces,
        words,
        sentences,
        paragraphs,
        readingTime,
    };
}

export default function KelimeSayaciPage() {
    const [text, setText] = useState("");
    const [copied, setCopied] = useState(false);

    const stats = useMemo(() => calculateStats(text), [text]);

    const handleCopy = async () => {
        const statsText = `Kelime: ${stats.words}\nKarakter: ${stats.characters}\nKarakter (boşluksuz): ${stats.charactersNoSpaces}\nCümle: ${stats.sentences}\nParagraf: ${stats.paragraphs}\nOkuma Süresi: ${stats.readingTime}`;
        const success = await copyToClipboard(statsText);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleClear = () => {
        setText("");
    };

    return (
        <ToolLayout tool={tool}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
                <StatCard label="Kelime" value={formatNumber(stats.words)} primary />
                <StatCard label="Karakter" value={formatNumber(stats.characters)} />
                <StatCard
                    label="Karakter (boşluksuz)"
                    value={formatNumber(stats.charactersNoSpaces)}
                />
                <StatCard label="Cümle" value={formatNumber(stats.sentences)} />
                <StatCard label="Paragraf" value={formatNumber(stats.paragraphs)} />
                <StatCard label="Okuma Süresi" value={stats.readingTime} />
            </div>

            {/* Textarea */}
            <div className="relative">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Metninizi buraya yazın veya yapıştırın..."
                    className="input-base min-h-[300px] resize-y"
                    autoFocus
                />

                {/* Character limit indicator (optional) */}
                {text.length > 0 && (
                    <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {formatNumber(text.length)} karakter
                    </div>
                )}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mt-4">
                <button onClick={handleCopy} className="btn-primary">
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                                />
                            </svg>
                            Sonuçları Kopyala
                        </>
                    )}
                </button>

                <button onClick={handleClear} className="btn-secondary" disabled={!text}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                    Temizle
                </button>
            </div>
        </ToolLayout>
    );
}

function StatCard({
    label,
    value,
    primary = false,
}: {
    label: string;
    value: string;
    primary?: boolean;
}) {
    return (
        <div
            className={`p-4 rounded-xl text-center ${primary
                    ? "bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/20"
                    : "bg-gray-50 dark:bg-gray-800"
                }`}
        >
            <div
                className={`text-2xl font-bold mb-1 ${primary ? "text-brand-500" : "text-gray-900 dark:text-white"
                    }`}
            >
                {value}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">{label}</div>
        </div>
    );
}
