"use client";

import { useState, useMemo } from "react";
import { tools, categoryInfo, ToolCategory, searchTools } from "@/data/tools";
import { ToolCard } from "@/components/ToolCard";

const categories = Object.entries(categoryInfo) as [
    ToolCategory,
    (typeof categoryInfo)[ToolCategory]
][];

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<ToolCategory | "all">("all");

    const filteredTools = useMemo(() => {
        let result = searchQuery ? searchTools(searchQuery) : tools;
        if (selectedCategory !== "all") {
            result = result.filter((tool) => tool.category === selectedCategory);
        }
        return result;
    }, [searchQuery, selectedCategory]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-500/5 via-white to-purple-500/5 dark:from-brand-500/10 dark:via-gray-950 dark:to-purple-500/10">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Ücretsiz Online
                            <span className="gradient-text block">Araçlar</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
                            Kelime sayacı, JSON formatlayıcı, görsel sıkıştırma ve daha
                            fazlası. Hızlı, güvenli ve tamamen ücretsiz.
                        </p>

                        {/* Search */}
                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Araç ara... (örn: json, pdf, kelime)"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="input-base pl-12 text-lg"
                            />
                            <svg
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>

                        {/* Stats */}
                        <div className="flex justify-center gap-8 mt-8 text-sm">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-brand-500">15+</div>
                                <div className="text-gray-500">Araç</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-brand-500">100%</div>
                                <div className="text-gray-500">Ücretsiz</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-brand-500">🔒</div>
                                <div className="text-gray-500">Gizlilik</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-500/10 rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2" />
            </section>

            {/* Tools Section */}
            <section id="tools" className="container mx-auto px-4 py-12">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8 justify-center">
                    <button
                        onClick={() => setSelectedCategory("all")}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === "all"
                                ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                    >
                        Tüm Araçlar ({tools.length})
                    </button>
                    {categories.map(([key, value]) => {
                        const count = tools.filter((t) => t.category === key).length;
                        return (
                            <button
                                key={key}
                                id={key}
                                onClick={() => setSelectedCategory(key)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === key
                                        ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                    }`}
                            >
                                {value.icon} {value.name} ({count})
                            </button>
                        );
                    })}
                </div>

                {/* Tools Grid */}
                {filteredTools.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredTools.map((tool) => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Araç bulunamadı
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            "{searchQuery}" ile eşleşen araç yok. Farklı bir terim deneyin.
                        </p>
                        <button
                            onClick={() => {
                                setSearchQuery("");
                                setSelectedCategory("all");
                            }}
                            className="btn-secondary mt-4"
                        >
                            Filtreleri Temizle
                        </button>
                    </div>
                )}
            </section>

            {/* Premium Section */}
            <section id="premium" className="container mx-auto px-4 py-16">
                <div className="card p-8 md:p-12 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800 text-center">
                    <div className="max-w-2xl mx-auto">
                        <span className="premium-badge mb-4 inline-flex">⭐ Premium</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Daha Fazlası İçin Premium
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                            Reklamsız deneyim, limitsiz toplu işlem ve öncelikli destek ile
                            verimliliğinizi artırın.
                        </p>

                        <div className="grid sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4">
                                <div className="text-2xl mb-2">🚫</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Reklamsız
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Temiz arayüz
                                </p>
                            </div>
                            <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4">
                                <div className="text-2xl mb-2">♾️</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Limitsiz
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Toplu işlem
                                </p>
                            </div>
                            <div className="bg-white/50 dark:bg-gray-900/50 rounded-xl p-4">
                                <div className="text-2xl mb-2">💬</div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    Öncelikli
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Destek
                                </p>
                            </div>
                        </div>

                        <button className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transition-all hover:scale-105">
                            Premium Al - Yakında
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                    Neden PentoraSEO?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-brand-500/10 dark:bg-brand-500/20 flex items-center justify-center text-3xl mx-auto mb-4">
                            ⚡
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Hızlı
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Tüm işlemler tarayıcınızda gerçekleşir. Sunucu bekleme yok.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center text-3xl mx-auto mb-4">
                            🔒
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Güvenli
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Verileriniz cihazınızdan asla çıkmaz. Tam gizlilik garantisi.
                        </p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-3xl mx-auto mb-4">
                            💯
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                            Ücretsiz
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Tüm temel özellikler sonsuza kadar ücretsiz.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
