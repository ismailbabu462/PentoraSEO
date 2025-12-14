"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";
import { formatNumber } from "@/lib/utils";

const tool = getToolBySlug("kdv-hesaplayici")!;

type CalculationType = "add" | "remove";

const vatRates = [
    { value: 1, label: "%1 KDV" },
    { value: 10, label: "%10 KDV" },
    { value: 20, label: "%20 KDV" },
    { value: "custom", label: "Özel" },
];

export default function KdvHesaplayiciPage() {
    const [amount, setAmount] = useState<string>("");
    const [vatRate, setVatRate] = useState<number | "custom">(20);
    const [customRate, setCustomRate] = useState<string>("18");
    const [calcType, setCalcType] = useState<CalculationType>("add");

    const rate = vatRate === "custom" ? parseFloat(customRate) || 0 : vatRate;
    const amountNum = parseFloat(amount.replace(/[^0-9.,]/g, "").replace(",", ".")) || 0;

    const result = useMemo(() => {
        if (!amountNum || !rate) return null;

        if (calcType === "add") {
            // Amount is net, calculate gross
            const vatAmount = amountNum * (rate / 100);
            const gross = amountNum + vatAmount;
            return {
                net: amountNum,
                vat: vatAmount,
                gross: gross,
            };
        } else {
            // Amount is gross, calculate net
            const net = amountNum / (1 + rate / 100);
            const vatAmount = amountNum - net;
            return {
                net: net,
                vat: vatAmount,
                gross: amountNum,
            };
        }
    }, [amountNum, rate, calcType]);

    const formatCurrency = (num: number) => {
        return new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY",
            minimumFractionDigits: 2,
        }).format(num);
    };

    return (
        <ToolLayout tool={tool}>
            {/* Calculation Type */}
            <div className="flex gap-2 mb-6">
                <button
                    onClick={() => setCalcType("add")}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${calcType === "add"
                            ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                >
                    KDV Ekle (Net → Brüt)
                </button>
                <button
                    onClick={() => setCalcType("remove")}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${calcType === "remove"
                            ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                >
                    KDV Çıkar (Brüt → Net)
                </button>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {calcType === "add" ? "Net Tutar (KDV Hariç)" : "Brüt Tutar (KDV Dahil)"}
                </label>
                <div className="relative">
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="input-base text-2xl font-bold pr-12"
                        autoFocus
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                        ₺
                    </span>
                </div>
            </div>

            {/* VAT Rate Selection */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    KDV Oranı
                </label>
                <div className="flex flex-wrap gap-2">
                    {vatRates.map((r) => (
                        <button
                            key={String(r.value)}
                            onClick={() => setVatRate(r.value as number | "custom")}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${vatRate === r.value
                                    ? "bg-brand-500 text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>

                {vatRate === "custom" && (
                    <div className="mt-4 flex items-center gap-2">
                        <input
                            type="number"
                            value={customRate}
                            onChange={(e) => setCustomRate(e.target.value)}
                            className="input-base w-24"
                            min={0}
                            max={100}
                        />
                        <span className="text-gray-500">%</span>
                    </div>
                )}
            </div>

            {/* Result */}
            {result && amountNum > 0 && (
                <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-950/50 dark:to-brand-900/50 border border-brand-200 dark:border-brand-800">
                    <div className="grid sm:grid-cols-3 gap-6 text-center">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Net Tutar</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {formatCurrency(result.net)}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">KDV (%{rate})</p>
                            <p className="text-2xl font-bold text-brand-500">
                                {formatCurrency(result.vat)}
                            </p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Brüt Tutar</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {formatCurrency(result.gross)}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Info */}
            <div className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                <h3 className="font-medium text-gray-900 dark:text-white mb-2">📊 KDV Oranları</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    <li><strong>%1:</strong> Temel gıda ürünleri, gazete, kitap</li>
                    <li><strong>%10:</strong> İlaç, tekstil, turizm</li>
                    <li><strong>%20:</strong> Genel oran (çoğu mal ve hizmet)</li>
                </ul>
            </div>
        </ToolLayout>
    );
}
