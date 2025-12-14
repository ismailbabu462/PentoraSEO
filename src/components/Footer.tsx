import Link from "next/link";

const footerLinks = {
    tools: [
        { name: "Kelime Sayacı", href: "/tools/kelime-sayaci" },
        { name: "JSON Formatlayıcı", href: "/tools/json-formatlayici" },
        { name: "Görsel Sıkıştırma", href: "/tools/gorsel-sikistirma" },
        { name: "PDF Birleştirici", href: "/tools/pdf-birlestirici" },
    ],
    categories: [
        { name: "Metin Araçları", href: "/#text" },
        { name: "Veri Araçları", href: "/#data" },
        { name: "Görsel Araçları", href: "/#image" },
        { name: "Hesaplayıcılar", href: "/#calculator" },
    ],
    company: [
        { name: "Hakkımızda", href: "/about" },
        { name: "Gizlilik Politikası", href: "/privacy" },
        { name: "Kullanım Koşulları", href: "/terms" },
        { name: "İletişim", href: "/contact" },
    ],
};

export function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white font-bold text-lg">
                                P
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                Pentora<span className="text-brand-500">SEO</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            PentoraSEO, ücretsiz online SEO araçları ve geliştirici yardımcıları sunan bir platformdur.
                            Hızlı, güvenli ve tamamen ücretsiz. Tüm işlemler tarayıcınızda gerçekleşir.
                        </p>
                    </div>

                    {/* Popular Tools */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Popüler Araçlar
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.tools.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Kategoriler
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.categories.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                            Şirket
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-gray-500 dark:text-gray-500">
                            © {new Date().getFullYear()} PentoraSEO. Tüm hakları saklıdır.
                        </p>
                        <p className="text-xs text-gray-400 dark:text-gray-600">
                            Verileriniz tarayıcınızdan asla çıkmaz
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
