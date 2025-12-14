import Link from "next/link";
import { Tool, categoryInfo } from "@/data/tools";

interface ToolCardProps {
    tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
    const category = categoryInfo[tool.category];

    return (
        <Link
            href={`/tools/${tool.slug}`}
            className="tool-card card p-6 flex flex-col h-full group"
        >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {tool.icon}
            </div>

            {/* Category Badge */}
            <span className={`category-badge ${category.color} mb-3 self-start`}>
                {category.name}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-500 transition-colors">
                {tool.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {tool.shortDescription}
            </p>

            {/* SEO Tip */}
            <p className="text-xs text-gray-500 dark:text-gray-500 flex-1">
                {tool.seoTip}
            </p>

            {/* Arrow */}
            <div className="mt-4 flex items-center text-brand-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Kullan</span>
                <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </div>

            {/* Premium Badge */}
            {tool.isPremium && (
                <span className="premium-badge absolute top-4 right-4">
                    ⭐ Premium
                </span>
            )}
        </Link>
    );
}
