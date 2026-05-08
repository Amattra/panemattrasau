"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./PdfViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-[340px] h-[480px] bg-cream animate-pulse rounded-2xl" />
  ),
});

export default function PdfViewerWrapper({ url }: { url: string }) {
  return <PdfViewer url={url} />;
}
