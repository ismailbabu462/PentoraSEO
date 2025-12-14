(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/pentoraSEO/src/data/tools.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pentoraSEO/src/lib/seo.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pentoraSEO/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculatePercentage",
    ()=>calculatePercentage,
    "cn",
    ()=>cn,
    "copyToClipboard",
    ()=>copyToClipboard,
    "debounce",
    ()=>debounce,
    "downloadFile",
    ()=>downloadFile,
    "fileToBase64",
    ()=>fileToBase64,
    "formatFileSize",
    ()=>formatFileSize,
    "formatNumber",
    ()=>formatNumber,
    "generateSlug",
    ()=>generateSlug,
    "replaceTurkishChars",
    ()=>replaceTurkishChars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch  {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand("copy");
            return true;
        } catch  {
            return false;
        } finally{
            textArea.remove();
        }
    }
}
function downloadFile(content, filename, mimeType = "text/plain") {
    const blob = content instanceof Blob ? content : new Blob([
        content
    ], {
        type: mimeType
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
function formatFileSize(bytes) {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = [
        "B",
        "KB",
        "MB",
        "GB"
    ];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}
/**
 * Turkish character map for slug generation
 */ const turkishCharMap = {
    ş: "s",
    Ş: "S",
    ı: "i",
    İ: "I",
    ğ: "g",
    Ğ: "G",
    ü: "u",
    Ü: "U",
    ö: "o",
    Ö: "O",
    ç: "c",
    Ç: "C"
};
function replaceTurkishChars(text) {
    return text.replace(/[şŞıİğĞüÜöÖçÇ]/g, (char)=>turkishCharMap[char] || char);
}
function generateSlug(text, separator = "-") {
    return replaceTurkishChars(text).toLowerCase().trim().replace(/[^\w\s-]/g, "") // Remove non-word chars
    .replace(/[\s_-]+/g, separator) // Replace spaces and underscores
    .replace(new RegExp(`^${separator}+|${separator}+$`, "g"), ""); // Trim separators
}
function debounce(func, wait) {
    let timeoutId;
    return (...args)=>{
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>func(...args), wait);
    };
}
function formatNumber(num) {
    return num.toLocaleString("tr-TR");
}
function calculatePercentage(part, total) {
    if (total === 0) return 0;
    return Math.round(part / total * 100);
}
function fileToBase64(file) {
    return new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = ()=>resolve(reader.result);
        reader.onerror = (error)=>reject(error);
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pentoraSEO/src/components/FAQ.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQ",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FAQ({ faqs }) {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (faqs.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-900 dark:text-white mb-6",
                children: "Sıkça Sorulan Sorular"
            }, void 0, false, {
                fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "card border border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                className: "w-full flex items-center justify-between p-4 text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900 dark:text-white pr-4",
                                        children: faq.question
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                                        lineNumber: 31,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0", openIndex === index && "rotate-180"),
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 9l-7 7-7-7"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                                            lineNumber: 43,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                                        lineNumber: 34,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                                lineNumber: 27,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("faq-content", openIndex === index && "open"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "px-4 pb-4 text-gray-600 dark:text-gray-400",
                                        children: faq.answer
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                                        lineNumber: 58,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                                lineNumber: 51,
                                columnNumber: 25
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pentoraSEO/src/components/FAQ.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this);
}
_s(FAQ, "7z1SfW1ag/kVV/D8SOtFgmPOJ8o=");
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pentoraSEO/src/components/AdPlaceholder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdPlaceholder",
    ()=>AdPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AdPlaceholder({ slot, className = "" }) {
    // Check for premium mode (feature flag)
    const isPremium = false; // Replace with actual premium check
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const sizes = {
        top: "h-[90px]",
        sidebar: "h-[250px]",
        bottom: "h-[90px]",
        "in-content": "h-[250px]"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `ad-placeholder ${sizes[slot]} ${className}`,
        "data-ad-slot": slot,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Reklam Alanı"
        }, void 0, false, {
            fileName: "[project]/Desktop/pentoraSEO/src/components/AdPlaceholder.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/pentoraSEO/src/components/AdPlaceholder.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = AdPlaceholder;
var _c;
__turbopack_context__.k.register(_c, "AdPlaceholder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToolLayout",
    ()=>ToolLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$data$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/data/tools.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/lib/seo.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/components/FAQ.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$AdPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/components/AdPlaceholder.tsx [app-client] (ecmascript)");
;
;
;
;
;
;
function ToolLayout({ tool, children }) {
    const category = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$data$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryInfo"][tool.category];
    // JSON-LD structured data
    const jsonLd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateToolJsonLd"])({
        name: tool.name,
        description: tool.description,
        url: `https://pentoraseo.com/tools/${tool.slug}`,
        faqs: tool.faqs
    });
    const breadcrumbJsonLd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$lib$2f$seo$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateBreadcrumbJsonLd"])([
        {
            name: "Ana Sayfa",
            url: "https://pentoraseo.com"
        },
        {
            name: category.name,
            url: `https://pentoraseo.com/#${tool.category}`
        },
        {
            name: tool.name,
            url: `https://pentoraseo.com/tools/${tool.slug}`
        }
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(jsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbJsonLd)
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$AdPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPlaceholder"], {
                        slot: "top",
                        className: "mb-8"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-brand-500 transition-colors",
                                children: "Ana Sayfa"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/#${tool.category}`,
                                className: "hover:text-brand-500 transition-colors",
                                children: category.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "/"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-900 dark:text-white font-medium",
                                children: tool.name
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:grid lg:grid-cols-[1fr,300px] lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                        className: "mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-4 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/10 to-brand-600/10 dark:from-brand-500/20 dark:to-brand-600/20 flex items-center justify-center text-3xl",
                                                        children: tool.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `category-badge ${category.color} mb-1`,
                                                                children: category.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                                className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white",
                                                                children: tool.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                lineNumber: 71,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-lg",
                                                children: tool.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                lineNumber: 84,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-6 mb-8",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                        lineNumber: 90,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$AdPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPlaceholder"], {
                                        slot: "in-content",
                                        className: "mb-8"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                        lineNumber: 93,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$FAQ$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FAQ"], {
                                        faqs: tool.faqs
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                className: "hidden lg:block space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$AdPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPlaceholder"], {
                                        slot: "sidebar"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                        lineNumber: 101,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 dark:text-white mb-3",
                                                children: "🔒 Gizlilik Garantisi"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                lineNumber: 105,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400",
                                                children: "Verileriniz tarayıcınızdan asla çıkmaz. Tüm işlemler cihazınızda gerçekleşir."
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                lineNumber: 108,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                        lineNumber: 104,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "card p-5 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-semibold text-gray-900 dark:text-white mb-2",
                                                children: "⭐ Premium'a Geç"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                lineNumber: 116,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 space-y-1 mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "✓ Reklamsız deneyim"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "✓ Toplu işlem limitsiz"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: "✓ Öncelikli destek"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                lineNumber: 119,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "w-full btn-primary text-sm",
                                                children: "Premium Al"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                                lineNumber: 124,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                        lineNumber: 115,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                                lineNumber: 100,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$AdPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdPlaceholder"], {
                        slot: "bottom",
                        className: "mt-8"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                        lineNumber: 132,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_c = ToolLayout;
var _c;
__turbopack_context__.k.register(_c, "ToolLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MaasHesaplayiciPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$ToolLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/components/ToolLayout.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$data$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/pentoraSEO/src/data/tools.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const tool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$data$2f$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getToolBySlug"])("maas-hesaplayici");
// 2024 Turkey tax rates and deductions (simplified)
const SGK_EMPLOYEE_RATE = 0.14; // 14% SGK employee share
const UNEMPLOYMENT_RATE = 0.01; // 1% unemployment insurance
const STAMP_TAX_RATE = 0.00759; // 0.759% stamp duty
const MIN_WAGE_2024 = 17002; // Minimum wage for SGK base
// Income tax brackets for 2024
const TAX_BRACKETS = [
    {
        limit: 110000,
        rate: 0.15
    },
    {
        limit: 230000,
        rate: 0.20
    },
    {
        limit: 580000,
        rate: 0.27
    },
    {
        limit: 3000000,
        rate: 0.35
    },
    {
        limit: Infinity,
        rate: 0.40
    }
];
function calculateNetFromGross(gross) {
    // SGK deduction (14% of gross, max based on ceiling)
    const sgkCeiling = MIN_WAGE_2024 * 7.5;
    const sgkBase = Math.min(gross, sgkCeiling);
    const sgk = sgkBase * SGK_EMPLOYEE_RATE;
    // Unemployment insurance (1%)
    const unemployment = sgkBase * UNEMPLOYMENT_RATE;
    // Taxable income (gross - sgk - unemployment)
    const taxableIncome = gross - sgk - unemployment;
    // Income tax (simplified - monthly calculation)
    let incomeTax = 0;
    let remaining = taxableIncome * 12; // Annualize
    let previousLimit = 0;
    for (const bracket of TAX_BRACKETS){
        if (remaining <= 0) break;
        const taxableInBracket = Math.min(remaining, bracket.limit - previousLimit);
        incomeTax += taxableInBracket * bracket.rate;
        remaining -= taxableInBracket;
        previousLimit = bracket.limit;
    }
    incomeTax = incomeTax / 12; // Monthly
    // Stamp tax
    const stampTax = gross * STAMP_TAX_RATE;
    const totalDeductions = sgk + unemployment + incomeTax + stampTax;
    const net = gross - totalDeductions;
    return {
        net,
        deductions: {
            sgk,
            unemployment,
            incomeTax,
            stampTax,
            total: totalDeductions
        }
    };
}
function calculateGrossFromNet(targetNet) {
    // Binary search to find gross
    let low = targetNet;
    let high = targetNet * 2;
    for(let i = 0; i < 50; i++){
        const mid = (low + high) / 2;
        const result = calculateNetFromGross(mid);
        if (Math.abs(result.net - targetNet) < 0.01) {
            return {
                gross: mid,
                deductions: result.deductions
            };
        }
        if (result.net < targetNet) {
            low = mid;
        } else {
            high = mid;
        }
    }
    const finalResult = calculateNetFromGross((low + high) / 2);
    return {
        gross: (low + high) / 2,
        deductions: finalResult.deductions
    };
}
function MaasHesaplayiciPage() {
    _s();
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [calcType, setCalcType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("grossToNet");
    const amountNum = parseFloat(amount.replace(/[^0-9.,]/g, "").replace(",", ".")) || 0;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MaasHesaplayiciPage.useMemo[result]": ()=>{
            if (!amountNum) return null;
            if (calcType === "grossToNet") {
                const { net, deductions } = calculateNetFromGross(amountNum);
                return {
                    gross: amountNum,
                    net,
                    deductions
                };
            } else {
                const { gross, deductions } = calculateGrossFromNet(amountNum);
                return {
                    gross,
                    net: amountNum,
                    deductions
                };
            }
        }
    }["MaasHesaplayiciPage.useMemo[result]"], [
        amountNum,
        calcType
    ]);
    const formatCurrency = (num)=>{
        return new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
            minimumFractionDigits: 2
        }).format(num);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$src$2f$components$2f$ToolLayout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolLayout"], {
        tool: tool,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCalcType("grossToNet"),
                        className: `flex-1 py-3 rounded-xl text-sm font-medium transition-all ${calcType === "grossToNet" ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,
                        children: "Brüt → Net"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setCalcType("netToGross"),
                        className: `flex-1 py-3 rounded-xl text-sm font-medium transition-all ${calcType === "netToGross" ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`,
                        children: "Net → Brüt"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                        children: calcType === "grossToNet" ? "Brüt Maaş" : "Net Maaş"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: amount,
                                onChange: (e)=>setAmount(e.target.value),
                                placeholder: "0.00",
                                className: "input-base text-2xl font-bold pr-12",
                                autoFocus: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium",
                                children: "₺"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, this),
            result && amountNum > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border border-green-200 dark:border-green-800 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid sm:grid-cols-2 gap-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "Brüt Maaş"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                            lineNumber: 171,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold text-gray-900 dark:text-white",
                                            children: formatCurrency(result.gross)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                            lineNumber: 172,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                    lineNumber: 170,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 mb-1",
                                            children: "Net Maaş"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                            lineNumber: 177,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl font-bold text-green-600 dark:text-green-400",
                                            children: formatCurrency(result.net)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                            lineNumber: 178,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                            lineNumber: 169,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 168,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-gray-900 dark:text-white mb-4",
                                children: "📊 Kesinti Detayları"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                lineNumber: 187,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "SGK İşçi Payı (%14)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 190,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 font-medium",
                                                children: [
                                                    "-",
                                                    formatCurrency(result.deductions.sgk)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 191,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                        lineNumber: 189,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "İşsizlik Sigortası (%1)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 font-medium",
                                                children: [
                                                    "-",
                                                    formatCurrency(result.deductions.unemployment)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 195,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Gelir Vergisi"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 198,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 font-medium",
                                                children: [
                                                    "-",
                                                    formatCurrency(result.deductions.incomeTax)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Damga Vergisi (%0.759)"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500 font-medium",
                                                children: [
                                                    "-",
                                                    formatCurrency(result.deductions.stampTax)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-gray-200 dark:border-gray-700 pt-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between font-medium",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-900 dark:text-white",
                                                    children: "Toplam Kesinti"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-red-500",
                                                    children: [
                                                        "-",
                                                        formatCurrency(result.deductions.total)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                                    lineNumber: 208,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                            lineNumber: 206,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                                lineNumber: 188,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 186,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-medium text-amber-900 dark:text-amber-300 mb-1",
                        children: "⚠️ Tahmini Hesaplama"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 218,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$pentoraSEO$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-amber-800 dark:text-amber-400",
                        children: "Bu hesaplama 2024 yılı vergi oranlarına göre yaklaşık bir değer verir. Kesin hesaplama için mali müşavirinize danışın. AGİ, SGK tavanı ve kümülatif vergi dilimi etkileri tam olarak yansıtılmayabilir."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                        lineNumber: 221,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
                lineNumber: 217,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/pentoraSEO/src/app/tools/maas-hesaplayici/page.tsx",
        lineNumber: 122,
        columnNumber: 9
    }, this);
}
_s(MaasHesaplayiciPage, "+y3MF+nq98oYHvhu7YNbqg1A5GA=");
_c = MaasHesaplayiciPage;
var _c;
__turbopack_context__.k.register(_c, "MaasHesaplayiciPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_pentoraSEO_src_87612a08._.js.map