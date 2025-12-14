interface AdPlaceholderProps {
    slot: "top" | "sidebar" | "bottom" | "in-content";
    className?: string;
}

export function AdPlaceholder({ slot, className = "" }: AdPlaceholderProps) {
    // Check for premium mode (feature flag)
    const isPremium = false; // Replace with actual premium check

    if (isPremium) return null;

    const sizes: Record<string, string> = {
        top: "h-[90px]",
        sidebar: "h-[250px]",
        bottom: "h-[90px]",
        "in-content": "h-[250px]",
    };

    return (
        <div
            className={`ad-placeholder ${sizes[slot]} ${className}`}
            data-ad-slot={slot}
        >
            <span>Reklam Alanı</span>
        </div>
    );
}
