"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { formatFileSize } from "@/lib/utils";

const tool = getToolBySlug("gorsel-donusturucu")!;

type OutputFormat = "jpeg" | "png" | "webp";

interface ConvertedImage {
    original: File;
    converted: Blob;
    originalUrl: string;
    convertedUrl: string;
    format: OutputFormat;
}

export default function GorselDonusturucuPage() {
    const [images, setImages] = useState<ConvertedImage[]>([]);
    const [outputFormat, setOutputFormat] = useState<OutputFormat>("webp");
    const [quality, setQuality] = useState(0.9);
    const [processing, setProcessing] = useState(false);

    const convertImage = useCallback(async (file: File): Promise<ConvertedImage> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;

                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    reject(new Error("Canvas context not available"));
                    return;
                }

                ctx.drawImage(img, 0, 0);

                canvas.toBlob(
                    (blob) => {
                        if (!blob) {
                            reject(new Error("Conversion failed"));
                            return;
                        }

                        resolve({
                            original: file,
                            converted: blob,
                            originalUrl: URL.createObjectURL(file),
                            convertedUrl: URL.createObjectURL(blob),
                            format: outputFormat,
                        });
                    },
                    `image/${outputFormat}`,
                    quality
                );
            };
            img.onerror = () => reject(new Error("Failed to load image"));
            img.src = URL.createObjectURL(file);
        });
    }, [outputFormat, quality]);

    const handleFiles = useCallback(async (files: FileList | File[]) => {
        const imageFiles = Array.from(files).filter(f => f.type.startsWith("image/"));
        if (imageFiles.length === 0) return;

        setProcessing(true);
        try {
            const results = await Promise.all(imageFiles.map(convertImage));
            setImages(prev => [...prev, ...results]);
        } catch (error) {
            console.error("Conversion failed:", error);
        } finally {
            setProcessing(false);
        }
    }, [convertImage]);

    const handleDownload = (image: ConvertedImage) => {
        const link = document.createElement("a");
        link.href = image.convertedUrl;
        const baseName = image.original.name.replace(/\.[^/.]+$/, "");
        link.download = `${baseName}.${image.format}`;
        link.click();
    };

    const handleRemove = (index: number) => {
        setImages(prev => {
            const newImages = [...prev];
            URL.revokeObjectURL(newImages[index].originalUrl);
            URL.revokeObjectURL(newImages[index].convertedUrl);
            newImages.splice(index, 1);
            return newImages;
        });
    };

    return (
        <ToolLayout tool={tool}>
            {/* Settings */}
            <div className="flex flex-wrap gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Çıktı Formatı
                    </label>
                    <div className="flex gap-2">
                        {(["jpeg", "png", "webp"] as OutputFormat[]).map((format) => (
                            <button
                                key={format}
                                onClick={() => setOutputFormat(format)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium uppercase transition-all ${outputFormat === format
                                        ? "bg-brand-500 text-white"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {format}
                            </button>
                        ))}
                    </div>
                </div>

                {outputFormat !== "png" && (
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            Kalite: {Math.round(quality * 100)}%
                        </label>
                        <input
                            type="range"
                            min={0.1}
                            max={1}
                            step={0.1}
                            value={quality}
                            onChange={(e) => setQuality(parseFloat(e.target.value))}
                            className="w-40"
                        />
                    </div>
                )}
            </div>

            {/* Drop Zone */}
            <div
                onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center hover:border-brand-500 transition-colors"
            >
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                    className="hidden"
                    id="image-input"
                />
                <label htmlFor="image-input" className="cursor-pointer">
                    <div className="text-5xl mb-4">🔄</div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Görselleri sürükleyip bırakın
                    </p>
                    <p className="text-sm text-gray-500">
                        JPG, PNG, WebP formatları desteklenir
                    </p>
                </label>
            </div>

            {/* Processing */}
            {processing && (
                <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-center">
                    <div className="animate-spin inline-block w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full mb-2" />
                    <p className="text-blue-800 dark:text-blue-300">Dönüştürülüyor...</p>
                </div>
            )}

            {/* Results */}
            {images.length > 0 && (
                <div className="mt-6 space-y-4">
                    {images.map((image, index) => (
                        <div key={index} className="card p-4 flex items-center gap-4">
                            <img
                                src={image.convertedUrl}
                                alt="Converted"
                                className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                                <p className="font-medium text-gray-900 dark:text-white">
                                    {image.original.name.replace(/\.[^/.]+$/, "")}.{image.format}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {formatFileSize(image.original.size)} → {formatFileSize(image.converted.size)}
                                </p>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => handleDownload(image)} className="btn-primary text-sm">
                                    İndir
                                </button>
                                <button onClick={() => handleRemove(index)} className="btn-secondary text-sm">
                                    Kaldır
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Format Info */}
            <div className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white mb-3">Format Karşılaştırması</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">JPEG</p>
                        <p className="text-gray-500">Fotoğraflar için ideal. Küçük dosya boyutu.</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">PNG</p>
                        <p className="text-gray-500">Şeffaflık desteği. Kalitesiz kayıp olmaz.</p>
                    </div>
                    <div>
                        <p className="font-medium text-gray-700 dark:text-gray-300">WebP</p>
                        <p className="text-gray-500">Modern format. En iyi sıkıştırma oranı.</p>
                    </div>
                </div>
            </div>
        </ToolLayout>
    );
}
