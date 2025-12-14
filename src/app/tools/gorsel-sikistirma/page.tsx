"use client";

import { useState, useCallback } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { formatFileSize } from "@/lib/utils";
import imageCompression from "browser-image-compression";

const tool = getToolBySlug("gorsel-sikistirma")!;

interface CompressedImage {
    original: File;
    compressed: Blob;
    originalUrl: string;
    compressedUrl: string;
    savings: number;
}

export default function GorselSikistirmaPage() {
    const [images, setImages] = useState<CompressedImage[]>([]);
    const [quality, setQuality] = useState(0.8);
    const [maxWidth, setMaxWidth] = useState(1920);
    const [processing, setProcessing] = useState(false);
    const [dragOver, setDragOver] = useState(false);

    const compressImage = useCallback(async (file: File): Promise<CompressedImage> => {
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: maxWidth,
            initialQuality: quality,
            useWebWorker: true,
        };

        const compressed = await imageCompression(file, options);
        const savings = Math.round((1 - compressed.size / file.size) * 100);

        return {
            original: file,
            compressed,
            originalUrl: URL.createObjectURL(file),
            compressedUrl: URL.createObjectURL(compressed),
            savings,
        };
    }, [quality, maxWidth]);

    const handleFiles = useCallback(async (files: FileList | File[]) => {
        const imageFiles = Array.from(files).filter(f => f.type.startsWith("image/"));
        if (imageFiles.length === 0) return;

        setProcessing(true);
        try {
            const results = await Promise.all(imageFiles.map(compressImage));
            setImages(prev => [...prev, ...results]);
        } catch (error) {
            console.error("Compression failed:", error);
        } finally {
            setProcessing(false);
        }
    }, [compressImage]);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        handleFiles(e.dataTransfer.files);
    }, [handleFiles]);

    const handleDownload = (image: CompressedImage) => {
        const link = document.createElement("a");
        link.href = image.compressedUrl;
        const ext = image.original.name.split(".").pop();
        link.download = image.original.name.replace(`.${ext}`, `-compressed.${ext}`);
        link.click();
    };

    const handleDownloadAll = () => {
        images.forEach(handleDownload);
    };

    const handleRemove = (index: number) => {
        setImages(prev => {
            const newImages = [...prev];
            URL.revokeObjectURL(newImages[index].originalUrl);
            URL.revokeObjectURL(newImages[index].compressedUrl);
            newImages.splice(index, 1);
            return newImages;
        });
    };

    const totalSavings = images.reduce((acc, img) => {
        return acc + (img.original.size - img.compressed.size);
    }, 0);

    return (
        <ToolLayout tool={tool}>
            {/* Settings */}
            <div className="flex flex-wrap gap-6 mb-6">
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
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Maks. Genişlik
                    </label>
                    <select
                        value={maxWidth}
                        onChange={(e) => setMaxWidth(parseInt(e.target.value))}
                        className="input-base py-2"
                    >
                        <option value={1920}>1920px (Full HD)</option>
                        <option value={1280}>1280px (HD)</option>
                        <option value={800}>800px (Web)</option>
                        <option value={400}>400px (Thumbnail)</option>
                    </select>
                </div>
            </div>

            {/* Drop Zone */}
            <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${dragOver
                        ? "border-brand-500 bg-brand-50 dark:bg-brand-900/20"
                        : "border-gray-300 dark:border-gray-700 hover:border-brand-500"
                    }`}
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
                    <div className="text-5xl mb-4">🖼️</div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Görselleri sürükleyip bırakın
                    </p>
                    <p className="text-sm text-gray-500">
                        veya <span className="text-brand-500">dosya seçmek için tıklayın</span>
                    </p>
                </label>
            </div>

            {/* Processing */}
            {processing && (
                <div className="mt-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-center">
                    <div className="animate-spin inline-block w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full mb-2" />
                    <p className="text-blue-800 dark:text-blue-300">Sıkıştırılıyor...</p>
                </div>
            )}

            {/* Results */}
            {images.length > 0 && (
                <div className="mt-6">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <span className="text-lg font-semibold text-gray-900 dark:text-white">
                                {images.length} görsel sıkıştırıldı
                            </span>
                            <span className="ml-4 text-green-500 font-medium">
                                Toplam tasarruf: {formatFileSize(totalSavings)}
                            </span>
                        </div>
                        <button onClick={handleDownloadAll} className="btn-primary">
                            Tümünü İndir
                        </button>
                    </div>

                    <div className="space-y-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="card p-4 flex flex-col md:flex-row gap-4"
                            >
                                {/* Before/After Preview */}
                                <div className="flex gap-4 flex-1">
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-1">Önce</p>
                                        <img
                                            src={image.originalUrl}
                                            alt="Original"
                                            className="w-full h-32 object-cover rounded-lg"
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            {formatFileSize(image.original.size)}
                                        </p>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs text-gray-500 mb-1">Sonra</p>
                                        <img
                                            src={image.compressedUrl}
                                            alt="Compressed"
                                            className="w-full h-32 object-cover rounded-lg"
                                        />
                                        <p className="text-sm text-green-500 mt-1">
                                            {formatFileSize(image.compressed.size)}
                                            <span className="ml-2 text-xs">
                                                ({image.savings}% azalma)
                                            </span>
                                        </p>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex md:flex-col gap-2 justify-end">
                                    <button
                                        onClick={() => handleDownload(image)}
                                        className="btn-primary text-sm"
                                    >
                                        İndir
                                    </button>
                                    <button
                                        onClick={() => handleRemove(index)}
                                        className="btn-secondary text-sm"
                                    >
                                        Kaldır
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Privacy Note */}
            <div className="mt-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <h3 className="font-medium text-green-900 dark:text-green-300 mb-1">
                    🔒 Tam Gizlilik
                </h3>
                <p className="text-sm text-green-800 dark:text-green-400">
                    Tüm işlemler tarayıcınızda gerçekleşir. Görselleriniz hiçbir sunucuya yüklenmez.
                </p>
            </div>
        </ToolLayout>
    );
}
