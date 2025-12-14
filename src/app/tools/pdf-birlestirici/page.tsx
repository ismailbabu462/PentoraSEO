"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { formatFileSize } from "@/lib/utils";
import { PDFDocument } from "pdf-lib";

const tool = getToolBySlug("pdf-birlestirici")!;

interface PDFFile {
    file: File;
    pageCount: number;
}

export default function PdfBirlestiriciPage() {
    const [files, setFiles] = useState<PDFFile[]>([]);
    const [processing, setProcessing] = useState(false);
    const [dragIndex, setDragIndex] = useState<number | null>(null);

    const handleFiles = useCallback(async (fileList: FileList | File[]) => {
        const pdfFiles = Array.from(fileList).filter(f => f.type === "application/pdf");

        setProcessing(true);
        try {
            const newFiles: PDFFile[] = [];
            for (const file of pdfFiles) {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFDocument.load(arrayBuffer);
                newFiles.push({
                    file,
                    pageCount: pdf.getPageCount(),
                });
            }
            setFiles(prev => [...prev, ...newFiles]);
        } catch (error) {
            console.error("Failed to load PDF:", error);
        } finally {
            setProcessing(false);
        }
    }, []);

    const handleDragStart = (index: number) => {
        setDragIndex(index);
    };

    const handleDragOver = (e: React.DragEvent, index: number) => {
        e.preventDefault();
        if (dragIndex === null || dragIndex === index) return;

        const newFiles = [...files];
        const [removed] = newFiles.splice(dragIndex, 1);
        newFiles.splice(index, 0, removed);
        setFiles(newFiles);
        setDragIndex(index);
    };

    const handleRemove = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleMerge = async () => {
        if (files.length < 2) return;

        setProcessing(true);
        try {
            const mergedPdf = await PDFDocument.create();

            for (const { file } of files) {
                const arrayBuffer = await file.arrayBuffer();
                const pdf = await PDFDocument.load(arrayBuffer);
                const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
                pages.forEach(page => mergedPdf.addPage(page));
            }

            const mergedBytes = await mergedPdf.save();
            const blob = new Blob([mergedBytes.buffer as ArrayBuffer], { type: "application/pdf" });
            const url = URL.createObjectURL(blob);

            const link = document.createElement("a");
            link.href = url;
            link.download = "birlestirilmis.pdf";
            link.click();

            URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Merge failed:", error);
        } finally {
            setProcessing(false);
        }
    };

    const totalPages = files.reduce((sum, f) => sum + f.pageCount, 0);
    const totalSize = files.reduce((sum, f) => sum + f.file.size, 0);

    return (
        <ToolLayout tool={tool}>
            {/* Drop Zone */}
            <div
                onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:border-brand-500 transition-colors mb-6"
            >
                <input
                    type="file"
                    multiple
                    accept="application/pdf"
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                    className="hidden"
                    id="pdf-input"
                />
                <label htmlFor="pdf-input" className="cursor-pointer">
                    <div className="text-5xl mb-4">📎</div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        PDF dosyalarını sürükleyip bırakın
                    </p>
                    <p className="text-sm text-gray-500">
                        veya <span className="text-brand-500">dosya seçmek için tıklayın</span>
                    </p>
                </label>
            </div>

            {/* File List */}
            {files.length > 0 && (
                <>
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-500">
                            {files.length} dosya • {totalPages} sayfa • {formatFileSize(totalSize)}
                        </div>
                        <p className="text-xs text-gray-400">Sırayı değiştirmek için sürükleyin</p>
                    </div>

                    <div className="space-y-2 mb-6">
                        {files.map((pdf, index) => (
                            <div
                                key={index}
                                draggable
                                onDragStart={() => handleDragStart(index)}
                                onDragOver={(e) => handleDragOver(e, index)}
                                onDragEnd={() => setDragIndex(null)}
                                className={`card p-4 flex items-center gap-4 cursor-move ${dragIndex === index ? "opacity-50" : ""
                                    }`}
                            >
                                <div className="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500 font-bold">
                                    {index + 1}
                                </div>
                                <div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-gray-900 dark:text-white truncate">
                                        {pdf.file.name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {pdf.pageCount} sayfa • {formatFileSize(pdf.file.size)}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleRemove(index)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleMerge}
                        className="btn-primary w-full"
                        disabled={files.length < 2 || processing}
                    >
                        {processing ? (
                            <>
                                <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                                Birleştiriliyor...
                            </>
                        ) : (
                            <>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                PDF'leri Birleştir ve İndir
                            </>
                        )}
                    </button>
                </>
            )}

            {/* Empty State */}
            {files.length === 0 && !processing && (
                <div className="text-center py-8 text-gray-400">
                    Birleştirmek için en az 2 PDF yükleyin
                </div>
            )}
        </ToolLayout>
    );
}
