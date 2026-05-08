"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(600);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      if (width > 0) setContainerWidth(width);
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-4 w-full">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-brown/10 w-full">
        <Document
          file={url}
          onLoadSuccess={onLoadSuccess}
          loading={
            <div className="w-full h-[700px] bg-cream animate-pulse" />
          }
        >
          <Page
            pageNumber={pageNumber}
            width={containerWidth}
            renderTextLayer={true}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {numPages > 0 && (
        <div className="flex items-center gap-6">
          <button
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="w-11 h-11 rounded-full bg-terracotta text-cream text-xl flex items-center justify-center disabled:opacity-30 hover:bg-brown transition-colors"
          >
            ‹
          </button>
          <span className="text-brown/70 text-base font-medium">
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="w-11 h-11 rounded-full bg-terracotta text-cream text-xl flex items-center justify-center disabled:opacity-30 hover:bg-brown transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
