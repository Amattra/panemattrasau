"use client";

import { useState, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = useCallback(({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="rounded-2xl overflow-hidden shadow-xl border border-brown/10">
        <Document
          file={url}
          onLoadSuccess={onLoadSuccess}
          loading={
            <div className="w-[340px] h-[480px] bg-cream animate-pulse rounded-2xl" />
          }
        >
          <Page
            pageNumber={pageNumber}
            width={340}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>

      {numPages > 0 && (
        <div className="flex items-center gap-4">
          <button
            onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
            disabled={pageNumber <= 1}
            className="w-9 h-9 rounded-full bg-terracotta text-cream flex items-center justify-center disabled:opacity-30 hover:bg-brown transition-colors"
          >
            ‹
          </button>
          <span className="text-brown/70 text-sm">
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
            disabled={pageNumber >= numPages}
            className="w-9 h-9 rounded-full bg-terracotta text-cream flex items-center justify-center disabled:opacity-30 hover:bg-brown transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
