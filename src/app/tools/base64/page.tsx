"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { copyToClipboard } from "@/lib/utils";

const tool = getToolBySlug("base64")!;

type Mode = "encode" | "decode";
type InputType = "text" | "file";

export default function Base64Page() {
    const [mode, setMode] = useState<Mode>("encode");
    const [inputType, setInputType] = useState<InputType>("text");
    const [textInput, setTextInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);

    const processText = useCallback(() => {
        if (!textInput.trim()) {
            setOutput("");
            setError(null);
            return;
        }

        try {
            if (mode === "encode") {
                // Encode text to Base64
                const encoded = btoa(unescape(encodeURIComponent(textInput)));
                setOutput(encoded);
                setError(null);
            } else {
                // Decode Base64 to text
                const decoded = decodeURIComponent(escape(atob(textInput.trim())));
                setOutput(decoded);
                setError(null);
            }
        } catch (e) {
            setError(mode === "decode" ? "Geçersiz Base64 formatı" : "Kodlama hatası");
            setOutput("");
        }
    }, [textInput, mode]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        const reader = new FileReader();

        reader.onload = () => {
            if (mode === "encode") {
                // File to Base64
                const base64 = (reader.result as string).split(",")[1];
                setOutput(base64);
                setError(null);
            }
        };

        reader.onerror = () => {
            setError("Dosya okunamadı");
        };

        reader.readAsDataURL(file);
    };

    const handleCopy = async () => {
        if (!output) return;
        const success = await copyToClipboard(output);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleClear = () => {
        setTextInput("");
        setOutput("");
        setError(null);
        setFileName(null);
    };

    // Process text when input changes
    useState(() => {
        if (inputType === "text") {
            processText();
        }
    });

    return (
        <ToolLayout tool={tool}>
            {/* Mode Selection */}
            <div className="flex gap-4 mb-6">
                <div className="flex gap-2">
                    <button
                        onClick={() => { setMode("encode"); handleClear(); }}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${mode === "encode"
                                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        🔒 Encode
                    </button>
                    <button
                        onClick={() => { setMode("decode"); handleClear(); }}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${mode === "decode"
                                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        🔓 Decode
                    </button>
                </div>

                {mode === "encode" && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => { setInputType("text"); handleClear(); }}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${inputType === "text"
                                    ? "bg-gray-200 dark:bg-gray-700"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                                }`}
                        >
                            Metin
                        </button>
                        <button
                            onClick={() => { setInputType("file"); handleClear(); }}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${inputType === "file"
                                    ? "bg-gray-200 dark:bg-gray-700"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-500"
                                }`}
                        >
                            Dosya
                        </button>
                    </div>
                )}
            </div>

            {/* Input */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {mode === "encode" ? "Giriş" : "Base64 Giriş"}
                </label>

                {inputType === "text" || mode === "decode" ? (
                    <textarea
                        value={textInput}
                        onChange={(e) => {
                            setTextInput(e.target.value);
                            // Debounced processing
                            setTimeout(processText, 100);
                        }}
                        onBlur={processText}
                        placeholder={mode === "encode" ? "Kodlanacak metni girin..." : "Base64 kodunu girin..."}
                        className={`input-base min-h-[150px] resize-y font-mono text-sm ${error ? "border-red-500" : ""
                            }`}
                    />
                ) : (
                    <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:border-brand-500 transition-colors">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="file-input"
                        />
                        <label htmlFor="file-input" className="cursor-pointer">
                            <div className="text-4xl mb-2">📁</div>
                            <p className="text-gray-600 dark:text-gray-400">
                                {fileName || "Dosya seçmek için tıklayın"}
                            </p>
                        </label>
                    </div>
                )}

                {error && (
                    <p className="mt-2 text-sm text-red-500">{error}</p>
                )}
            </div>

            {/* Output */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {mode === "encode" ? "Base64 Çıkış" : "Çözülmüş Metin"}
                </label>
                <textarea
                    value={output}
                    readOnly
                    placeholder="Sonuç burada görünecek..."
                    className="input-base min-h-[150px] resize-y font-mono text-sm bg-gray-50 dark:bg-gray-800/50"
                />
            </div>

            {/* Stats */}
            {output && (
                <div className="flex gap-4 mb-4 text-sm text-gray-500">
                    <span>Giriş: {textInput.length || fileName?.length || 0} karakter</span>
                    <span>Çıkış: {output.length} karakter</span>
                    {mode === "encode" && (
                        <span className="text-orange-500">
                            +{Math.round(((output.length / (textInput.length || 1)) - 1) * 100)}% boyut artışı
                        </span>
                    )}
                </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
                <button onClick={handleCopy} className="btn-primary" disabled={!output}>
                    {copied ? "Kopyalandı!" : "Kopyala"}
                </button>
                <button onClick={handleClear} className="btn-secondary">
                    Temizle
                </button>
            </div>
        </ToolLayout>
    );
}
