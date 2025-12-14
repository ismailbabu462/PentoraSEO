"use client";

import { useState } from "react";
import { FAQ as FAQType } from "@/lib/seo";
import { cn } from "@/lib/utils";

interface FAQProps {
    faqs: FAQType[];
}

export function FAQ({ faqs }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    if (faqs.length === 0) return null;

    return (
        <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-3">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="card border border-gray-200 dark:border-gray-700"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-4 text-left"
                        >
                            <span className="font-medium text-gray-900 dark:text-white pr-4">
                                {faq.question}
                            </span>
                            <svg
                                className={cn(
                                    "w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0",
                                    openIndex === index && "rotate-180"
                                )}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                        <div
                            className={cn(
                                "faq-content",
                                openIndex === index && "open"
                            )}
                        >
                            <div>
                                <div className="px-4 pb-4 text-gray-600 dark:text-gray-400">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
