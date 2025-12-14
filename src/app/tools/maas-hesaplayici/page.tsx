"use client";

import { useState, useMemo } from "react";
import { ToolLayout } from "@/components/ToolLayout";
import { getToolBySlug } from "@/data/tools";

const tool = getToolBySlug("maas-hesaplayici")!;

type CalculationType = "netToGross" | "grossToNet";

// 2024 Turkey tax rates and deductions (simplified)
const SGK_EMPLOYEE_RATE = 0.14; // 14% SGK employee share
const UNEMPLOYMENT_RATE = 0.01; // 1% unemployment insurance
const STAMP_TAX_RATE = 0.00759; // 0.759% stamp duty
const MIN_WAGE_2024 = 17002; // Minimum wage for SGK base

// Income tax brackets for 2024
const TAX_BRACKETS = [
    { limit: 110000, rate: 0.15 },
    { limit: 230000, rate: 0.20 },
    { limit: 580000, rate: 0.27 },
    { limit: 3000000, rate: 0.35 },
    { limit: Infinity, rate: 0.40 },
];

function calculateNetFromGross(gross: number): { net: number; deductions: Record<string, number> } {
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

    for (const bracket of TAX_BRACKETS) {
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
            total: totalDeductions,
        },
    };
}

function calculateGrossFromNet(targetNet: number): { gross: number; deductions: Record<string, number> } {
    // Binary search to find gross
    let low = targetNet;
    let high = targetNet * 2;

    for (let i = 0; i < 50; i++) {
        const mid = (low + high) / 2;
        const result = calculateNetFromGross(mid);

        if (Math.abs(result.net - targetNet) < 0.01) {
            return { gross: mid, deductions: result.deductions };
        }

        if (result.net < targetNet) {
            low = mid;
        } else {
            high = mid;
        }
    }

    const finalResult = calculateNetFromGross((low + high) / 2);
    return { gross: (low + high) / 2, deductions: finalResult.deductions };
}

export default function MaasHesaplayiciPage() {
    const [amount, setAmount] = useState<string>("");
    const [calcType, setCalcType] = useState<CalculationType>("grossToNet");

    const amountNum = parseFloat(amount.replace(/[^0-9.,]/g, "").replace(",", ".")) || 0;

    const result = useMemo(() => {
        if (!amountNum) return null;

        if (calcType === "grossToNet") {
            const { net, deductions } = calculateNetFromGross(amountNum);
            return { gross: amountNum, net, deductions };
        } else {
            const { gross, deductions } = calculateGrossFromNet(amountNum);
            return { gross, net: amountNum, deductions };
        }
    }, [amountNum, calcType]);

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
                    onClick={() => setCalcType("grossToNet")}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${calcType === "grossToNet"
                            ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                >
                    Brüt → Net
                </button>
                <button
                    onClick={() => setCalcType("netToGross")}
                    className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${calcType === "netToGross"
                            ? "bg-brand-500 text-white shadow-lg shadow-brand-500/25"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                        }`}
                >
                    Net → Brüt
                </button>
            </div>

            {/* Amount Input */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {calcType === "grossToNet" ? "Brüt Maaş" : "Net Maaş"}
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

            {/* Result */}
            {result && amountNum > 0 && (
                <>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/50 border border-green-200 dark:border-green-800 mb-6">
                        <div className="grid sm:grid-cols-2 gap-6 text-center">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Brüt Maaş</p>
                                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {formatCurrency(result.gross)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Net Maaş</p>
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                    {formatCurrency(result.net)}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Deductions Breakdown */}
                    <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-4">📊 Kesinti Detayları</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">SGK İşçi Payı (%14)</span>
                                <span className="text-red-500 font-medium">-{formatCurrency(result.deductions.sgk)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">İşsizlik Sigortası (%1)</span>
                                <span className="text-red-500 font-medium">-{formatCurrency(result.deductions.unemployment)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Gelir Vergisi</span>
                                <span className="text-red-500 font-medium">-{formatCurrency(result.deductions.incomeTax)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600 dark:text-gray-400">Damga Vergisi (%0.759)</span>
                                <span className="text-red-500 font-medium">-{formatCurrency(result.deductions.stampTax)}</span>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                                <div className="flex justify-between font-medium">
                                    <span className="text-gray-900 dark:text-white">Toplam Kesinti</span>
                                    <span className="text-red-500">-{formatCurrency(result.deductions.total)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Disclaimer */}
            <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
                <h3 className="font-medium text-amber-900 dark:text-amber-300 mb-1">
                    ⚠️ Tahmini Hesaplama
                </h3>
                <p className="text-sm text-amber-800 dark:text-amber-400">
                    Bu hesaplama 2024 yılı vergi oranlarına göre yaklaşık bir değer verir.
                    Kesin hesaplama için mali müşavirinize danışın. AGİ, SGK tavanı ve
                    kümülatif vergi dilimi etkileri tam olarak yansıtılmayabilir.
                </p>
            </div>
        </ToolLayout>
    );
}
