"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { formatFileSize } from "@/lib/utils";
import { PDFDocument } from "pdf-lib";

const tool = getToolBySlug("pdf-ayirici")!;

interface PDFInfo {
    file: File;
    pageCount: number;
}

export default function PdfAyiriciPage() {
    const [pdfInfo, setPdfInfo] = useState<PDFInfo | null>(null);
    const [pageRange, setPageRange] = useState("");
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleFile = useCallback(async (file: File) => {
        if (file.type !== "application/pdf") {
            setError("Lütfen geçerli bir PDF dosyası yükleyin");
            return;
        }

        setProcessing(true);
        setError(null);
        try {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await PDFDocument.load(arrayBuffer);
            setPdfInfo({
                file,
                pageCount: pdf.getPageCount(),
            });
            setPageRange(`1-${pdf.getPageCount()}`);
        } catch (err) {
            setError("PDF dosyası okunamadı");
        } finally {
            setProcessing(false);
        }
    }, []);

    const parsePageRange = (range: string, maxPage: number): number[] => {
        const pages: Set<number> = new Set();
        const parts = range.split(",").map(p => p.trim());

        for (const part of parts) {
            if (part.includes("-")) {
                const [start, end] = part.split("-").map(n => parseInt(n.trim()));
                if (!isNaN(start) && !isNaN(end)) {
                    for (let i = Math.max(1, start); i <= Math.min(maxPage, end); i++) {
                        pages.add(i);
                    }
                }
            } else {
                const page = parseInt(part);
                if (!isNaN(page) && page >= 1 && page <= maxPage) {
                    pages.add(page);
                }
            }
        }

        return Array.from(pages).sort((a, b) => a - b);
    };

    const handleExtract = async () => {
        if (!pdfInfo) return;

        const pages = parsePageRange(pageRange, pdfInfo.pageCount);
        if (pages.length === 0) {
            setError("Geçerli bir sayfa aralığı girin");
            return;
        }

        setProcessing(true);
        setError(null);
        try {
            const arrayBuffer = await pdfInfo.file.arrayBuffer();
            const sourcePdf = await PDFDocument.load(arrayBuffer);
            const newPdf = await PDFDocument.create();

            const copiedPages = await newPdf.copyPages(
                sourcePdf,
                pages.map(p => p - 1) // 0-indexed
            );
            copiedPages.forEach(page => newPdf.addPage(page));

            const pdfBytes = await newPdf.save();
            const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            const baseName = pdfInfo.file.name.replace(".pdf", "");
            link.download = `${baseName}-sayfa-${pages[0]}-${pages[pages.length - 1]}.pdf`;
            link.click();

            URL.revokeObjectURL(url);
        } catch (err) {
            setError("PDF ayırma başarısız oldu");
        } finally {
            setProcessing(false);
        }
    };

    const handleExtractAll = async () => {
        if (!pdfInfo) return;

        setProcessing(true);
        try {
            const arrayBuffer = await pdfInfo.file.arrayBuffer();
            const sourcePdf = await PDFDocument.load(arrayBuffer);

            for (let i = 0; i < sourcePdf.getPageCount(); i++) {
                const newPdf = await PDFDocument.create();
                const [page] = await newPdf.copyPages(sourcePdf, [i]);
                newPdf.addPage(page);

                const pdfBytes = await newPdf.save();
                const blob = new Blob([pdfBytes.buffer], { type: "application/pdf" });
                const url = URL.createObjectURL(blob);

                const link = document.createElement("a");
                link.href = url;
                const baseName = pdfInfo.file.name.replace(".pdf", "");
                link.download = `${baseName}-sayfa-${i + 1}.pdf`;
                link.click();

                URL.revokeObjectURL(url);
            }
        } catch (err) {
            setError("PDF ayırma başarısız oldu");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <ToolLayout tool={tool}>
            {/* File Upload */}
            {!pdfInfo ? (
                <div
                    onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files[0];
                        if (file) handleFile(file);
                    }}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:border-brand-500 transition-colors"
                >
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                        className="hidden"
                        id="pdf-input"
                    />
                    <label htmlFor="pdf-input" className="cursor-pointer">
                        <div className="text-5xl mb-4">✂️</div>
                        <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                            PDF dosyasını sürükleyip bırakın
                        </p>
                        <p className="text-sm text-gray-500">
                            veya <span className="text-brand-500">dosya seçmek için tıklayın</span>
                        </p>
                    </label>
                </div>
            ) : (
                <>
                    {/* File Info */}
                    <div className="card p-4 flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <p className="font-medium text-gray-900 dark:text-white">
                                {pdfInfo.file.name}
                            </p>
                            <p className="text-sm text-gray-500">
                                {pdfInfo.pageCount} sayfa • {formatFileSize(pdfInfo.file.size)}
                            </p>
                        </div>
                        <button
                            onClick={() => {
                                setPdfInfo(null);
                                setPageRange("");
                                setError(null);
                            }}
                            className="btn-secondary text-sm"
                        >
                            Değiştir
                        </button>
                    </div>

                    {/* Page Range Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Sayfa Aralığı
                        </label>
                        <input
                            type="text"
                            value={pageRange}
                            onChange={(e) => setPageRange(e.target.value)}
                            placeholder="Örn: 1-5, 7, 10-15"
                            className="input-base font-mono"
                        />
                        <p className="text-xs text-gray-500 mt-2">
                            Örnek formatlar: <code>1-5</code> (1'den 5'e), <code>1,3,5</code> (sadece bu sayfalar), <code>1-3,7,10-12</code> (karma)
                        </p>
                        {error && (
                            <p className="text-sm text-red-500 mt-2">{error}</p>
                        )}
                    </div>

                    {/* Preview */}
                    <div className="mb-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Seçilen sayfalar:{" "}
                            <span className="font-medium text-gray-900 dark:text-white">
                                {parsePageRange(pageRange, pdfInfo.pageCount).join(", ") || "Yok"}
                            </span>
                            <span className="ml-2 text-gray-400">
                                ({parsePageRange(pageRange, pdfInfo.pageCount).length} sayfa)
                            </span>
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button
                            onClick={handleExtract}
                            className="btn-primary flex-1"
                            disabled={processing || parsePageRange(pageRange, pdfInfo.pageCount).length === 0}
                        >
                            {processing ? (
                                <>
                                    <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                                    İşleniyor...
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Seçilen Sayfaları İndir
                                </>
                            )}
                        </button>
                        <button
                            onClick={handleExtractAll}
                            className="btn-secondary"
                            disabled={processing}
                        >
                            Tümünü Ayrı Ayrı İndir
                        </button>
                    </div>
                </>
            )}
        </ToolLayout>
    );
}
