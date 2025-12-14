import { Metadata } from "next";
import { generateToolMetadata } from "@/lib/seo";
import { getToolBySlug } from "@/data/tools";

const tool = getToolBySlug("base64")!;

export const metadata: Metadata = generateToolMetadata({
    title: tool.name,
    description: tool.description,
    keywords: tool.keywords,
    path: `/tools/${tool.slug}`,
});

export { default } from "./page";
