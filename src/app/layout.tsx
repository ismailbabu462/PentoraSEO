import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: {
        default: "PentoraSEO - Ücretsiz Online Araçlar",
        template: "%s | PentoraSEO",
    },
    description:
        "Kelime sayacı, JSON formatlayıcı, görsel sıkıştırma ve daha fazlası. Hızlı, güvenli ve tamamen ücretsiz online araçlar.",
    keywords: [
        "online araçlar",
        "ücretsiz araçlar",
        "kelime sayacı",
        "json formatlayıcı",
        "görsel sıkıştırma",
        "pdf birleştirici",
        "seo araçları",
    ],
    authors: [{ name: "PentoraSEO" }],
    creator: "PentoraSEO",
    metadataBase: new URL("https://pentorasec.online"),
    openGraph: {
        type: "website",
        locale: "tr_TR",
        siteName: "PentoraSEO",
    },
    twitter: {
        card: "summary_large_image",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
        },
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr" suppressHydrationWarning>
            <body className={`${inter.variable} font-sans`}>
                <ThemeProvider>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-1">{children}</main>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
