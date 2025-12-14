import Link from "next/link";
import { Tool, categoryInfo } from "@/data/tools";
import { generateToolJsonLd, generateBreadcrumbJsonLd } from "@/lib/seo";
import { FAQ } from "./FAQ";
import { AdPlaceholder } from "./AdPlaceholder";

interface ToolLayoutProps {
    tool: Tool;
    children: React.ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
    const category = categoryInfo[tool.category];

    // JSON-LD structured data
    const jsonLd = generateToolJsonLd({
        name: tool.name,
        description: tool.description,
        url: `https://pentorasec.online/tools/${tool.slug}`,
        faqs: tool.faqs,
    });

    const breadcrumbJsonLd = generateBreadcrumbJsonLd([
        { name: "Ana Sayfa", url: "https://pentorasec.online" },
        { name: category.name, url: `https://pentorasec.online/#${tool.category}` },
        { name: tool.name, url: `https://pentorasec.online/tools/${tool.slug}` },
    ]);

    return (
        <>
            {/* JSON-LD Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            <div className="container mx-auto px-4 py-8">
                {/* Top Ad */}
                <AdPlaceholder slot="top" className="mb-8" />

                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <Link
                        href="/"
                        className="hover:text-brand-500 transition-colors"
                    >
                        Ana Sayfa
                    </Link>
                    <span>/</span>
                    <Link
                        href={`/#${tool.category}`}
                        className="hover:text-brand-500 transition-colors"
                    >
                        {category.name}
                    </Link>
                    <span>/</span>
                    <span className="text-gray-900 dark:text-white font-medium">
                        {tool.name}
                    </span>
                </nav>

                <div className="lg:grid lg:grid-cols-[1fr,300px] lg:gap-8">
                    {/* Main Content */}
                    <div>
                        {/* Header */}
                        <header className="mb-8">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 dark:from-brand-500/20 dark:to-brand-600/20 flex items-center justify-center text-3xl">
                                    {tool.icon}
                                </div>
                                <div>
                                    <span className={`category-badge ${category.color} mb-1`}>
                                        {category.name}
                                    </span>
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                                        {tool.name}
                                    </h1>
                                </div>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-lg">
                                {tool.description}
                            </p>
                        </header>

                        {/* Tool UI */}
                        <div className="card p-6 mb-8">{children}</div>

                        {/* In-content Ad */}
                        <AdPlaceholder slot="in-content" className="mb-8" />

                        {/* FAQ Section */}
                        <FAQ faqs={tool.faqs} />
                    </div>

                    {/* Sidebar */}
                    <aside className="hidden lg:block space-y-6">
                        <AdPlaceholder slot="sidebar" />

                        {/* Related Info Card */}
                        <div className="card p-5">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                🔒 Gizlilik Garantisi
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Verileriniz tarayıcınızdan asla çıkmaz. Tüm işlemler
                                cihazınızda gerçekleşir.
                            </p>
                        </div>

                        {/* Premium Banner */}
                        <div className="card p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800">
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                ⭐ Premium'a Geç
                            </h3>
                            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4">
                                <li>✓ Reklamsız deneyim</li>
                                <li>✓ Toplu işlem limitsiz</li>
                                <li>✓ Öncelikli destek</li>
                            </ul>
                            <button className="w-full btn-primary text-sm">
                                Premium Al
                            </button>
                        </div>
                    </aside>
                </div>

                {/* Bottom Ad */}
                <AdPlaceholder slot="bottom" className="mt-8" />
            </div>
        </>
    );
}
