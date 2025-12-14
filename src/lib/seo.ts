import { Metadata } from "next";

interface SEOConfig {
    title: string;
    description: string;
    keywords?: string[];
    path: string;
    noIndex?: boolean;
}

const siteConfig = {
    name: "PentoraSEO",
    url: "https://pentorasec.online",
    locale: "tr_TR",
};

/**
 * Generate Next.js metadata for tool pages
 */
export function generateToolMetadata({
    title,
    description,
    keywords = [],
    path,
    noIndex = false,
}: SEOConfig): Metadata {
    const fullTitle = `${title} | ${siteConfig.name}`;
    const url = `${siteConfig.url}${path}`;

    return {
        title,
        description,
        keywords: [
            ...keywords,
            "online araç",
            "ücretsiz",
            "hızlı",
            siteConfig.name.toLowerCase(),
        ],
        alternates: {
            canonical: url,
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description,
        },
        robots: noIndex
            ? { index: false, follow: false }
            : { index: true, follow: true },
    };
}

export interface FAQ {
    question: string;
    answer: string;
}

/**
 * Generate JSON-LD structured data for tool pages
 */
export function generateToolJsonLd({
    name,
    description,
    url,
    faqs = [],
}: {
    name: string;
    description: string;
    url: string;
    faqs?: FAQ[];
}) {
    const jsonLd: Record<string, unknown>[] = [
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name,
            description,
            url,
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "TRY",
            },
            provider: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url,
            },
        },
    ];

    // Add FAQ schema if provided
    if (faqs.length > 0) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                },
            })),
        });
    }

    return jsonLd;
}

/**
 * Generate breadcrumb JSON-LD
 */
export function generateBreadcrumbJsonLd(
    items: { name: string; url: string }[]
) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}
