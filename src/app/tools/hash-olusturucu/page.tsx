"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { copyToClipboard } from "@/lib/utils";

const tool = getToolBySlug("hash-olusturucu")!;

type HashAlgorithm = "MD5" | "SHA-1" | "SHA-256" | "SHA-512";

async function computeHash(text: string, algorithm: HashAlgorithm): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);

    // Map algorithm names to Web Crypto API names
    const algoMap: Record<HashAlgorithm, string> = {
        "MD5": "MD5", // Not supported by Web Crypto, will use fallback
        "SHA-1": "SHA-1",
        "SHA-256": "SHA-256",
        "SHA-512": "SHA-512",
    };

    if (algorithm === "MD5") {
        // MD5 implementation (simple version)
        return md5(text);
    }

    const hashBuffer = await crypto.subtle.digest(algoMap[algorithm], data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Simple MD5 implementation for browser
function md5(string: string): string {
    function rotateLeft(lValue: number, iShiftBits: number) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }

    function addUnsigned(lX: number, lY: number) {
        const lX8 = lX & 0x80000000;
        const lY8 = lY & 0x80000000;
        const lX4 = lX & 0x40000000;
        const lY4 = lY & 0x40000000;
        const lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
        if (lX4 & lY4) return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        if (lX4 | lY4) {
            if (lResult & 0x40000000) return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
        }
        return lResult ^ lX8 ^ lY8;
    }

    function f(x: number, y: number, z: number) { return (x & y) | (~x & z); }
    function g(x: number, y: number, z: number) { return (x & z) | (y & ~z); }
    function h(x: number, y: number, z: number) { return x ^ y ^ z; }
    function i(x: number, y: number, z: number) { return y ^ (x | ~z); }

    function ff(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
        a = addUnsigned(a, addUnsigned(addUnsigned(f(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function gg(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
        a = addUnsigned(a, addUnsigned(addUnsigned(g(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function hh(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
        a = addUnsigned(a, addUnsigned(addUnsigned(h(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function ii(a: number, b: number, c: number, d: number, x: number, s: number, ac: number) {
        a = addUnsigned(a, addUnsigned(addUnsigned(i(b, c, d), x), ac));
        return addUnsigned(rotateLeft(a, s), b);
    }

    function convertToWordArray(string: string) {
        let lWordCount;
        const lMessageLength = string.length;
        const lNumberOfWordsTemp1 = lMessageLength + 8;
        const lNumberOfWordsTemp2 = (lNumberOfWordsTemp1 - (lNumberOfWordsTemp1 % 64)) / 64;
        const lNumberOfWords = (lNumberOfWordsTemp2 + 1) * 16;
        const lWordArray = Array(lNumberOfWords - 1);
        let lBytePosition = 0;
        let lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition);
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }

    function wordToHex(lValue: number) {
        let wordToHexValue = "";
        for (let lCount = 0; lCount <= 3; lCount++) {
            const lByte = (lValue >>> (lCount * 8)) & 255;
            const wordToHexValueTemp = "0" + lByte.toString(16);
            wordToHexValue = wordToHexValue + wordToHexValueTemp.substr(wordToHexValueTemp.length - 2, 2);
        }
        return wordToHexValue;
    }

    const x = convertToWordArray(string);
    let a = 0x67452301, b = 0xefcdab89, c = 0x98badcfe, d = 0x10325476;

    const S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    const S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    const S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    const S41 = 6, S42 = 10, S43 = 15, S44 = 21;

    for (let k = 0; k < x.length; k += 16) {
        const AA = a, BB = b, CC = c, DD = d;
        a = ff(a, b, c, d, x[k + 0], S11, 0xd76aa478);
        d = ff(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
        c = ff(c, d, a, b, x[k + 2], S13, 0x242070db);
        b = ff(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
        a = ff(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
        d = ff(d, a, b, c, x[k + 5], S12, 0x4787c62a);
        c = ff(c, d, a, b, x[k + 6], S13, 0xa8304613);
        b = ff(b, c, d, a, x[k + 7], S14, 0xfd469501);
        a = ff(a, b, c, d, x[k + 8], S11, 0x698098d8);
        d = ff(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
        c = ff(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
        b = ff(b, c, d, a, x[k + 11], S14, 0x895cd7be);
        a = ff(a, b, c, d, x[k + 12], S11, 0x6b901122);
        d = ff(d, a, b, c, x[k + 13], S12, 0xfd987193);
        c = ff(c, d, a, b, x[k + 14], S13, 0xa679438e);
        b = ff(b, c, d, a, x[k + 15], S14, 0x49b40821);
        a = gg(a, b, c, d, x[k + 1], S21, 0xf61e2562);
        d = gg(d, a, b, c, x[k + 6], S22, 0xc040b340);
        c = gg(c, d, a, b, x[k + 11], S23, 0x265e5a51);
        b = gg(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
        a = gg(a, b, c, d, x[k + 5], S21, 0xd62f105d);
        d = gg(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = gg(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
        b = gg(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
        a = gg(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
        d = gg(d, a, b, c, x[k + 14], S22, 0xc33707d6);
        c = gg(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
        b = gg(b, c, d, a, x[k + 8], S24, 0x455a14ed);
        a = gg(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
        d = gg(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
        c = gg(c, d, a, b, x[k + 7], S23, 0x676f02d9);
        b = gg(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
        a = hh(a, b, c, d, x[k + 5], S31, 0xfffa3942);
        d = hh(d, a, b, c, x[k + 8], S32, 0x8771f681);
        c = hh(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
        b = hh(b, c, d, a, x[k + 14], S34, 0xfde5380c);
        a = hh(a, b, c, d, x[k + 1], S31, 0xa4beea44);
        d = hh(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
        c = hh(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
        b = hh(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
        a = hh(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
        d = hh(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
        c = hh(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
        b = hh(b, c, d, a, x[k + 6], S34, 0x4881d05);
        a = hh(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
        d = hh(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
        c = hh(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
        b = hh(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
        a = ii(a, b, c, d, x[k + 0], S41, 0xf4292244);
        d = ii(d, a, b, c, x[k + 7], S42, 0x432aff97);
        c = ii(c, d, a, b, x[k + 14], S43, 0xab9423a7);
        b = ii(b, c, d, a, x[k + 5], S44, 0xfc93a039);
        a = ii(a, b, c, d, x[k + 12], S41, 0x655b59c3);
        d = ii(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
        c = ii(c, d, a, b, x[k + 10], S43, 0xffeff47d);
        b = ii(b, c, d, a, x[k + 1], S44, 0x85845dd1);
        a = ii(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
        d = ii(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
        c = ii(c, d, a, b, x[k + 6], S43, 0xa3014314);
        b = ii(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
        a = ii(a, b, c, d, x[k + 4], S41, 0xf7537e82);
        d = ii(d, a, b, c, x[k + 11], S42, 0xbd3af235);
        c = ii(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
        b = ii(b, c, d, a, x[k + 9], S44, 0xeb86d391);
        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
    }

    return (wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d)).toLowerCase();
}

export default function HashOlusturucuPage() {
    const [input, setInput] = useState("");
    const [hashes, setHashes] = useState<Record<HashAlgorithm, string>>({
        "MD5": "",
        "SHA-1": "",
        "SHA-256": "",
        "SHA-512": "",
    });
    const [copied, setCopied] = useState<HashAlgorithm | null>(null);
    const [loading, setLoading] = useState(false);

    const generateHashes = async () => {
        if (!input.trim()) {
            setHashes({ "MD5": "", "SHA-1": "", "SHA-256": "", "SHA-512": "" });
            return;
        }

        setLoading(true);
        try {
            const algorithms: HashAlgorithm[] = ["MD5", "SHA-1", "SHA-256", "SHA-512"];
            const results: Record<HashAlgorithm, string> = {} as Record<HashAlgorithm, string>;

            for (const algo of algorithms) {
                results[algo] = await computeHash(input, algo);
            }

            setHashes(results);
        } catch (error) {
            console.error("Hash computation failed:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = async (algo: HashAlgorithm) => {
        const hash = hashes[algo];
        if (!hash) return;

        const success = await copyToClipboard(hash);
        if (success) {
            setCopied(algo);
            setTimeout(() => setCopied(null), 2000);
        }
    };

    return (
        <ToolLayout tool={tool}>
            {/* Input */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Metin Girin
                </label>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Hash değerini hesaplamak istediğiniz metni girin..."
                    className="input-base min-h-[120px] resize-y"
                />
            </div>

            <button
                onClick={generateHashes}
                className="btn-primary mb-6"
                disabled={loading || !input.trim()}
            >
                {loading ? (
                    <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Hesaplanıyor...
                    </>
                ) : (
                    <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Hash Oluştur
                    </>
                )}
            </button>

            {/* Results */}
            <div className="space-y-4">
                {(["MD5", "SHA-1", "SHA-256", "SHA-512"] as HashAlgorithm[]).map((algo) => (
                    <div key={algo} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {algo}
                                {algo === "MD5" && (
                                    <span className="ml-2 text-xs text-orange-500">⚠️ Güvenli değil</span>
                                )}
                                {algo === "SHA-1" && (
                                    <span className="ml-2 text-xs text-orange-500">⚠️ Zayıf</span>
                                )}
                            </span>
                            <button
                                onClick={() => handleCopy(algo)}
                                className="text-brand-500 hover:text-brand-600 text-sm"
                                disabled={!hashes[algo]}
                            >
                                {copied === algo ? "Kopyalandı!" : "Kopyala"}
                            </button>
                        </div>
                        <code className="block font-mono text-sm text-gray-800 dark:text-gray-200 break-all">
                            {hashes[algo] || <span className="text-gray-400">—</span>}
                        </code>
                    </div>
                ))}
            </div>

            {/* Security Info */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <h3 className="font-medium text-amber-900 dark:text-amber-300 mb-2">
                    ⚠️ Güvenlik Notu
                </h3>
                <p className="text-sm text-amber-800 dark:text-amber-400">
                    MD5 ve SHA-1 algoritmaları çakışma saldırılarına karşı savunmasızdır. Güvenlik
                    gerektiren uygulamalarda SHA-256 veya SHA-512 kullanın.
                </p>
            </div>
        </ToolLayout>
    );
}
