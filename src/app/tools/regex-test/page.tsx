"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";

const tool = getToolBySlug("regex-test")!;

type RegexFlag = "g" | "i" | "m" | "s" | "u";

const flagDescriptions: Record<RegexFlag, string> = {
    g: "Global - Tüm eşleşmeleri bul",
    i: "Case Insensitive - Büyük/küçük harf duyarsız",
    m: "Multiline - Çok satırlı mod",
    s: "DotAll - . karakteri satır sonlarını da eşleştirir",
    u: "Unicode - Unicode desteği",
};

const examples = [
    { name: "Email", pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}" },
    { name: "Telefon (TR)", pattern: "0?[0-9]{3}[\\s-]?[0-9]{3}[\\s-]?[0-9]{2}[\\s-]?[0-9]{2}" },
    { name: "URL", pattern: "https?:\\/\\/[^\\s]+" },
    { name: "Tarih (GG/AA/YYYY)", pattern: "\\d{2}\\/\\d{2}\\/\\d{4}" },
];

export default function RegexTestPage() {
    const [pattern, setPattern] = useState("");
    const [testString, setTestString] = useState("");
    const [flags, setFlags] = useState<RegexFlag[]>(["g"]);

    const result = useMemo(() => {
        if (!pattern || !testString) {
            return { error: null, matches: [], highlightedText: testString };
        }

        try {
            const regex = new RegExp(pattern, flags.join(""));
            const matches: { match: string; index: number; groups?: Record<string, string> }[] = [];
            let match;

            if (flags.includes("g")) {
                while ((match = regex.exec(testString)) !== null) {
                    matches.push({
                        match: match[0],
                        index: match.index,
                        groups: match.groups,
                    });
                }
            } else {
                match = regex.exec(testString);
                if (match) {
                    matches.push({
                        match: match[0],
                        index: match.index,
                        groups: match.groups,
                    });
                }
            }

            // Create highlighted text
            let highlightedText = testString;
            let offset = 0;

            // Reset regex for highlighting
            const highlightRegex = new RegExp(pattern, flags.includes("g") ? flags.join("") : flags.join("") + "g");
            highlightedText = testString.replace(highlightRegex, (match) =>
                `<mark class="bg-yellow-300 dark:bg-yellow-600 rounded px-0.5">${match}</mark>`
            );

            return { error: null, matches, highlightedText };
        } catch (e) {
            return {
                error: e instanceof Error ? e.message : "Geçersiz regex",
                matches: [],
                highlightedText: testString,
            };
        }
    }, [pattern, testString, flags]);

    const toggleFlag = (flag: RegexFlag) => {
        setFlags((prev) =>
            prev.includes(flag) ? prev.filter((f) => f !== flag) : [...prev, flag]
        );
    };

    return (
        <ToolLayout tool={tool}>
            {/* Pattern Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Regex Pattern
                </label>
                <div className="flex gap-2">
                    <div className="flex-1 relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-mono">/</span>
                        <input
                            type="text"
                            value={pattern}
                            onChange={(e) => setPattern(e.target.value)}
                            placeholder="[a-z]+"
                            className="input-base font-mono pl-6 pr-6"
                            autoFocus
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 font-mono">
                            /{flags.join("")}
                        </span>
                    </div>
                </div>
                {result.error && (
                    <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {result.error}
                    </p>
                )}
            </div>

            {/* Flags */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Flags
                </label>
                <div className="flex flex-wrap gap-2">
                    {(Object.keys(flagDescriptions) as RegexFlag[]).map((flag) => (
                        <button
                            key={flag}
                            onClick={() => toggleFlag(flag)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-mono transition-all ${flags.includes(flag)
                                    ? "bg-brand-500 text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                            title={flagDescriptions[flag]}
                        >
                            {flag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quick Examples */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Hazır Örnekler
                </label>
                <div className="flex flex-wrap gap-2">
                    {examples.map((ex) => (
                        <button
                            key={ex.name}
                            onClick={() => setPattern(ex.pattern)}
                            className="px-3 py-1.5 rounded-lg text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                            {ex.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Test String */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Test Metni
                </label>
                <textarea
                    value={testString}
                    onChange={(e) => setTestString(e.target.value)}
                    placeholder="Test etmek istediğiniz metni buraya yazın..."
                    className="input-base min-h-[150px] resize-y font-mono text-sm"
                />
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-2 gap-4">
                {/* Highlighted Text */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Eşleşmeler (Vurgulu)
                    </label>
                    <div
                        className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 min-h-[100px] font-mono text-sm whitespace-pre-wrap overflow-auto"
                        dangerouslySetInnerHTML={{
                            __html: result.highlightedText || '<span class="text-gray-400">Sonuçlar burada görünecek...</span>',
                        }}
                    />
                </div>

                {/* Match List */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Eşleşme Listesi ({result.matches.length})
                    </label>
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 min-h-[100px] max-h-[200px] overflow-auto">
                        {result.matches.length === 0 ? (
                            <span className="text-gray-400 text-sm">Eşleşme yok</span>
                        ) : (
                            <ul className="space-y-1">
                                {result.matches.map((m, i) => (
                                    <li key={i} className="text-sm font-mono">
                                        <span className="text-gray-400">[{m.index}]</span>{" "}
                                        <span className="text-brand-500">"{m.match}"</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
