module.exports = [
"[project]/Desktop/pentoraSEO/src/lib/seo.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateBreadcrumbJsonLd",
    ()=>generateBreadcrumbJsonLd,
    "generateToolJsonLd",
    ()=>generateToolJsonLd,
    "generateToolMetadata",
    ()=>generateToolMetadata
]);
const siteConfig = {
    name: "PentoraSEO",
    url: "https://pentoraseo.com",
    locale: "tr_TR"
};
function generateToolMetadata({ title, description, keywords = [], path, noIndex = false }) {
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
            siteConfig.name.toLowerCase()
        ],
        alternates: {
            canonical: url
        },
        openGraph: {
            title: fullTitle,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            type: "website"
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description
        },
        robots: noIndex ? {
            index: false,
            follow: false
        } : {
            index: true,
            follow: true
        }
    };
}
function generateToolJsonLd({ name, description, url, faqs = [] }) {
    const jsonLd = [
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
                priceCurrency: "TRY"
            },
            provider: {
                "@type": "Organization",
                name: siteConfig.name,
                url: siteConfig.url
            }
        }
    ];
    // Add FAQ schema if provided
    if (faqs.length > 0) {
        jsonLd.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq)=>({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer
                    }
                }))
        });
    }
    return jsonLd;
}
function generateBreadcrumbJsonLd(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index)=>({
                "@type": "ListItem",
                position: index + 1,
                name: item.name,
                item: item.url
            }))
    };
}
}),
"[project]/Desktop/pentoraSEO/src/data/tools.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "categoryInfo",
    ()=>categoryInfo,
    "getCategoriesWithCount",
    ()=>getCategoriesWithCount,
    "getToolBySlug",
    ()=>getToolBySlug,
    "getToolsByCategory",
    ()=>getToolsByCategory,
    "searchTools",
    ()=>searchTools,
    "tools",
    ()=>tools
]);
const categoryInfo = {
    text: {
        name: "Metin Araçları",
        icon: "📝",
        color: "category-text"
    },
    data: {
        name: "Veri Araçları",
        icon: "💻",
        color: "category-data"
    },
    image: {
        name: "Görsel Araçları",
        icon: "🖼️",
        color: "category-image"
    },
    pdf: {
        name: "PDF Araçları",
        icon: "📄",
        color: "category-pdf"
    },
    calculator: {
        name: "Hesaplayıcılar",
        icon: "🧮",
        color: "category-calculator"
    }
};
const tools = [
    // TEXT TOOLS
    {
        id: "kelime-sayaci",
        slug: "kelime-sayaci",
        name: "Kelime & Karakter Sayacı",
        shortDescription: "Metindeki kelime, karakter ve cümle sayısını hesapla",
        description: "Metinlerinizdeki kelime sayısını, karakter sayısını (boşluklu ve boşluksuz), cümle ve paragraf sayısını anında hesaplayın. İçerik yazarları, öğrenciler ve SEO uzmanları için ideal.",
        category: "text",
        icon: "🔢",
        keywords: [
            "kelime sayacı",
            "karakter sayacı",
            "harf sayacı",
            "metin analizi"
        ],
        faqs: [
            {
                question: "Kelime sayacı ne işe yarar?",
                answer: "Kelime sayacı, metinlerinizdeki toplam kelime, karakter, cümle ve paragraf sayısını hesaplar. Blog yazıları, akademik ödevler ve sosyal medya paylaşımları için karakter limitlerini kontrol etmenize yardımcı olur."
            },
            {
                question: "Boşluklu ve boşluksuz karakter sayısı arasındaki fark nedir?",
                answer: "Boşluklu karakter sayısı metindeki boşlukları da dahil eder, boşluksuz ise sadece harf ve sembolleri sayar. Twitter, Instagram gibi platformlar genellikle boşluklu sayıyı kullanır."
            }
        ]
    },
    {
        id: "metin-donusturucu",
        slug: "metin-donusturucu",
        name: "Metin Dönüştürücü",
        shortDescription: "Metni büyük/küçük harf, cümle veya slug formatına dönüştür",
        description: "Metinlerinizi büyük harfe, küçük harfe, başlık formatına veya URL-uyumlu slug formatına anında dönüştürün. Yazım düzeltmeleri ve format dönüşümleri için hızlı ve kolay.",
        category: "text",
        icon: "🔄",
        keywords: [
            "metin dönüştürücü",
            "büyük harf",
            "küçük harf",
            "case converter"
        ],
        faqs: [
            {
                question: "Hangi metin formatları destekleniyor?",
                answer: "BÜYÜK HARF, küçük harf, Başlık Formatı, cÜMLE FORMATI ve url-slug-formati desteklenmektedir."
            }
        ]
    },
    {
        id: "slug-olusturucu",
        slug: "slug-olusturucu",
        name: "SEO Uyumlu Slug Oluşturucu",
        shortDescription: "Türkçe karakterleri destekleyen SEO dostu URL oluştur",
        description: "Türkçe karakterleri otomatik olarak ASCII karşılıklarına dönüştüren (ş→s, ğ→g, ü→u) SEO uyumlu slug oluşturucu. Blog yazıları ve web sayfaları için temiz URL'ler oluşturun.",
        category: "text",
        icon: "🔗",
        keywords: [
            "slug oluşturucu",
            "url oluşturucu",
            "seo url",
            "türkçe slug"
        ],
        faqs: [
            {
                question: "Slug nedir ve neden önemlidir?",
                answer: "Slug, bir web sayfasının URL'sindeki okunabilir kısımdır (örn: /blog/seo-ipuclari). SEO için önemlidir çünkü arama motorları URL'lerdeki anahtar kelimeleri değerlendirir."
            },
            {
                question: "Türkçe karakterler neden dönüştürülüyor?",
                answer: "ş, ğ, ü, ö, ç, ı gibi Türkçe karakterler bazı sistemlerde sorun çıkarabilir. Bu yüzden URL'lerde ASCII karakterlere (s, g, u, o, c, i) dönüştürülür."
            }
        ]
    },
    {
        id: "metin-karsilastirma",
        slug: "metin-karsilastirma",
        name: "Metin Karşılaştırma (Diff)",
        shortDescription: "İki metni karşılaştır ve farklılıkları görüntüle",
        description: "İki metin arasındaki farkları yan yana görüntüleyin. Eklenen, silinen ve değiştirilen satırları renkli olarak vurgular. Kod inceleme ve doküman karşılaştırma için ideal.",
        category: "text",
        icon: "⚖️",
        keywords: [
            "metin karşılaştırma",
            "diff",
            "fark bulma",
            "compare text"
        ],
        faqs: [
            {
                question: "Diff aracı ne işe yarar?",
                answer: "Diff aracı iki metin arasındaki farkları tespit eder. Eklenen satırlar yeşil, silinen satırlar kırmızı olarak gösterilir. Kod versiyonları, doküman revizyonları ve çeviri kontrolü için kullanılır."
            }
        ]
    },
    {
        id: "regex-test",
        slug: "regex-test",
        name: "Regex Test Aracı",
        shortDescription: "Düzenli ifadeleri canlı olarak test et ve debug yap",
        description: "Regular expression (regex) kalıplarınızı gerçek zamanlı olarak test edin. Eşleşmeleri vurgular, hataları gösterir ve yaygın regex kalıpları için örnekler sunar.",
        category: "text",
        icon: "🎯",
        keywords: [
            "regex",
            "regular expression",
            "düzenli ifade",
            "pattern matching"
        ],
        faqs: [
            {
                question: "Regex nedir?",
                answer: "Regex (Regular Expression), metin içinde kalıp aramak için kullanılan bir dildir. Email doğrulama, telefon numarası bulma gibi işlemler için kullanılır."
            },
            {
                question: "Hangi regex flag'leri destekleniyor?",
                answer: "g (global), i (case-insensitive), m (multiline), s (dotAll), u (unicode) flag'leri desteklenmektedir."
            }
        ]
    },
    // DATA TOOLS
    {
        id: "json-formatlayici",
        slug: "json-formatlayici",
        name: "JSON Formatlayıcı & Doğrulayıcı",
        shortDescription: "JSON verilerini formatla, doğrula ve düzenle",
        description: "JSON verilerinizi güzelleştirin, doğrulayın ve düzenleyin. Hatalı JSON'ları tespit edin, minify yapın veya okunabilir formata dönüştürün. API geliştirme için olmazsa olmaz.",
        category: "data",
        icon: "{ }",
        keywords: [
            "json formatlayıcı",
            "json validator",
            "json beautifier",
            "json minify"
        ],
        faqs: [
            {
                question: "JSON nedir?",
                answer: "JSON (JavaScript Object Notation), veri alışverişi için kullanılan hafif bir format. API'ler, konfigürasyon dosyaları ve veri depolama için yaygın olarak kullanılır."
            },
            {
                question: "JSON doğrulama neden önemlidir?",
                answer: "Hatalı JSON, uygulamaların çökmesine neden olabilir. Doğrulayıcı, eksik virgül, tırnak veya parantez gibi hataları tespit eder."
            }
        ]
    },
    {
        id: "base64",
        slug: "base64",
        name: "Base64 Encode / Decode",
        shortDescription: "Metin veya dosyaları Base64 formatına dönüştür",
        description: "Metin veya dosyaları Base64 formatına encode edin veya Base64 verilerini decode edin. Email ekleri, data URI'ler ve API istekleri için kullanışlı.",
        category: "data",
        icon: "🔐",
        keywords: [
            "base64 encode",
            "base64 decode",
            "base64 converter",
            "base64 çevirici"
        ],
        faqs: [
            {
                question: "Base64 nedir?",
                answer: "Base64, binary verileri ASCII karakterlere dönüştüren bir encoding yöntemi. Email ekleri, CSS'te gömülü resimler ve API'lerde veri transferi için kullanılır."
            }
        ]
    },
    {
        id: "uuid-olusturucu",
        slug: "uuid-olusturucu",
        name: "UUID Oluşturucu",
        shortDescription: "Benzersiz UUID v4 değerleri oluştur",
        description: "Evrensel benzersiz tanımlayıcı (UUID) v4 değerleri oluşturun. Tek seferde 100'e kadar UUID üretebilirsiniz. Veritabanı, API ve uygulamalar için ideal.",
        category: "data",
        icon: "🆔",
        keywords: [
            "uuid generator",
            "uuid oluşturucu",
            "guid generator",
            "unique id"
        ],
        faqs: [
            {
                question: "UUID nedir ve ne için kullanılır?",
                answer: "UUID (Universally Unique Identifier), 128-bit benzersiz bir tanımlayıcıdır. Veritabanı kayıtları, API kaynakları ve dağıtık sistemlerde benzersiz ID'ler için kullanılır."
            },
            {
                question: "UUID v4 nasıl oluşturulur?",
                answer: "UUID v4, rastgele sayılar kullanılarak oluşturulur. Çakışma olasılığı astronomik olarak düşüktür (2^122'de 1)."
            }
        ]
    },
    {
        id: "hash-olusturucu",
        slug: "hash-olusturucu",
        name: "Hash Oluşturucu",
        shortDescription: "MD5, SHA-1, SHA-256 hash değerleri oluştur",
        description: "Metinlerinizin MD5, SHA-1 ve SHA-256 hash değerlerini hesaplayın. Dosya bütünlüğü kontrolü, şifre hashleme ve veri doğrulama için kullanışlı.",
        category: "data",
        icon: "#️⃣",
        keywords: [
            "hash generator",
            "md5",
            "sha1",
            "sha256",
            "hash oluşturucu"
        ],
        faqs: [
            {
                question: "Hash nedir?",
                answer: "Hash, herhangi bir veriden sabit uzunlukta benzersiz bir değer üreten tek yönlü bir fonksiyondur. Aynı giriş her zaman aynı çıkışı verir ama tersine dönüştürülemez."
            },
            {
                question: "Hangi hash algoritmasını kullanmalıyım?",
                answer: "MD5 ve SHA-1 artık güvenli kabul edilmiyor. Güvenlik gerektiren işlemler için SHA-256 veya daha güçlü algoritmalar tercih edilmeli."
            }
        ]
    },
    // IMAGE TOOLS
    {
        id: "gorsel-sikistirma",
        slug: "gorsel-sikistirma",
        name: "Görsel Sıkıştırma",
        shortDescription: "Görselleri kalite kaybı olmadan sıkıştır",
        description: "JPEG, PNG ve WebP görsellerinizi tarayıcınızda sıkıştırın. Dosyalarınız sunucuya gönderilmez, tamamen gizli. Öncesi/sonrası karşılaştırması ile boyut tasarrufunu görün.",
        category: "image",
        icon: "🗜️",
        keywords: [
            "görsel sıkıştırma",
            "resim sıkıştırma",
            "image compression",
            "optimize"
        ],
        faqs: [
            {
                question: "Görsellerim sunucuya yükleniyor mu?",
                answer: "Hayır! Tüm işlemler tarayıcınızda gerçekleşir. Görselleriniz bilgisayarınızdan asla çıkmaz, tam gizlilik sağlanır."
            },
            {
                question: "Sıkıştırma kaliteyi düşürür mü?",
                answer: "Akıllı algoritmalar kullanarak görünür kalite kaybı olmadan dosya boyutunu %50-80 oranında azaltabilirsiniz."
            }
        ]
    },
    {
        id: "gorsel-donusturucu",
        slug: "gorsel-donusturucu",
        name: "Görsel Format Dönüştürücü",
        shortDescription: "JPG, PNG ve WebP arasında dönüşüm yap",
        description: "Görsellerinizi JPG, PNG ve WebP formatları arasında dönüştürün. Modern WebP formatı ile dosya boyutunuzu küçültün veya şeffaf arka plan için PNG kullanın.",
        category: "image",
        icon: "🔄",
        keywords: [
            "format dönüştürücü",
            "jpg to png",
            "png to webp",
            "image converter"
        ],
        faqs: [
            {
                question: "Hangi formatı ne zaman kullanmalıyım?",
                answer: "JPEG: Fotoğraflar için, PNG: Şeffaflık gereken görseller için, WebP: Modern tarayıcılarda en iyi sıkıştırma için."
            }
        ]
    },
    // PDF TOOLS
    {
        id: "pdf-birlestirici",
        slug: "pdf-birlestirici",
        name: "PDF Birleştirici",
        shortDescription: "Birden fazla PDF'i tek dosyada birleştir",
        description: "Birden fazla PDF dosyasını sürükle-bırak ile sıralayın ve tek bir PDF'te birleştirin. Sıralama değiştirilebilir, tüm işlemler tarayıcıda gerçekleşir.",
        category: "pdf",
        icon: "📎",
        keywords: [
            "pdf birleştirici",
            "pdf merge",
            "pdf combine",
            "pdf concat"
        ],
        faqs: [
            {
                question: "Kaç PDF birleştirebilirim?",
                answer: "Tarayıcı bellek sınırları dahilinde istediğiniz kadar PDF birleştirebilirsiniz. Pratik kullanımda 50+ dosya sorunsuz çalışır."
            },
            {
                question: "Birleştirme sırası değiştirilebilir mi?",
                answer: "Evet! Dosyaları sürükle-bırak ile istediğiniz sıraya getirebilirsiniz."
            }
        ]
    },
    {
        id: "pdf-ayirici",
        slug: "pdf-ayirici",
        name: "PDF Ayırıcı",
        shortDescription: "PDF'ten belirli sayfaları ayır veya böl",
        description: "PDF dosyalarından belirli sayfaları çıkarın veya ayrı dosyalara bölün. Sayfa aralığı seçimi ile ihtiyacınız olan sayfaları alın.",
        category: "pdf",
        icon: "✂️",
        keywords: [
            "pdf ayırıcı",
            "pdf split",
            "pdf bölme",
            "sayfa çıkarma"
        ],
        faqs: [
            {
                question: "Sayfa aralığı nasıl belirtilir?",
                answer: "1-5 (1'den 5'e), 1,3,5 (sadece belirtilen sayfalar), 1-3,7,9-12 (karma) formatlarını kullanabilirsiniz."
            }
        ]
    },
    // CALCULATOR TOOLS
    {
        id: "kdv-hesaplayici",
        slug: "kdv-hesaplayici",
        name: "KDV Hesaplayıcı",
        shortDescription: "KDV dahil/hariç fiyat hesaplama",
        description: "KDV dahil veya hariç fiyatları anında hesaplayın. %1, %10, %20 ve özel KDV oranları desteklenir. Net ve brüt tutarları kolayca hesaplayın.",
        category: "calculator",
        icon: "💰",
        keywords: [
            "kdv hesaplama",
            "vat calculator",
            "vergi hesaplama",
            "kdv hesaplayıcı"
        ],
        faqs: [
            {
                question: "KDV oranları nelerdir?",
                answer: "Türkiye'de temel ürünler için %1, bazı ürünler için %10 ve genel oran olarak %20 KDV uygulanmaktadır."
            }
        ]
    },
    {
        id: "maas-hesaplayici",
        slug: "maas-hesaplayici",
        name: "Net ↔ Brüt Maaş Hesaplayıcı",
        shortDescription: "Net ve brüt maaş arasında dönüşüm yap",
        description: "Net maaştan brüt tutarı veya brüt maaştan net tutarı hesaplayın. SGK, gelir vergisi ve damga vergisi kesintilerini görün.",
        category: "calculator",
        icon: "💵",
        keywords: [
            "maaş hesaplama",
            "net brüt",
            "salary calculator",
            "maaş hesaplayıcı"
        ],
        faqs: [
            {
                question: "Hesaplamada hangi kesintiler dahil?",
                answer: "SGK işçi payı (%14), işsizlik sigortası (%1), gelir vergisi (kümülatif) ve damga vergisi (%0.759) dahildir."
            }
        ]
    }
];
function getToolsByCategory(category) {
    return tools.filter((tool)=>tool.category === category);
}
function getToolBySlug(slug) {
    return tools.find((tool)=>tool.slug === slug);
}
function getCategoriesWithCount() {
    const categories = Object.keys(categoryInfo);
    return categories.map((category)=>({
            category,
            count: tools.filter((t)=>t.category === category).length
        }));
}
function searchTools(query) {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return tools;
    return tools.filter((tool)=>tool.name.toLowerCase().includes(normalizedQuery) || tool.shortDescription.toLowerCase().includes(normalizedQuery) || tool.keywords.some((k)=>k.toLowerCase().includes(normalizedQuery)));
}
}),
"[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx <module evaluation>", "default");
}),
"[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx", "default");
}),
"[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/layout.tsx [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/lib/seo.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$data$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/data/tools.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-rsc] (ecmascript)");
;
;
const tool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$data$2f$tools$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getToolBySlug"])("maas-hesaplayici");
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateToolMetadata"])({
    title: tool.name,
    description: tool.description,
    keywords: tool.keywords,
    path: `/tools/${tool.slug}`
});
;
}),
"[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
    "metadata",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["metadata"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/layout.tsx [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$app$2f$tools$2f$maas$2d$hesaplayici$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Desktop_pentoraSEO_src_d406b7ed._.js.map