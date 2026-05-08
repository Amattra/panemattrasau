"use client";

import PdfViewer from "./PdfViewer";

export default function PdfViewerWrapper({ url }: { url: string }) {
  return <PdfViewer url={url} />;
}
