"use client";

export default function PdfViewer({ url }: { url: string }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-brown/10" style={{ height: "700px" }}>
      <iframe
        src={`${url}#toolbar=1&navpanes=1&scrollbar=1`}
        className="w-full h-full"
        title="Catalogo PDF"
      />
    </div>
  );
}
