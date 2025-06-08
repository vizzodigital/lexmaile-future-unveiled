import { useEffect, useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface PdfFlipViewerProps {
  fileUrl: string;
}

export const PdfFlipViewer = ({ fileUrl }: PdfFlipViewerProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageWidth, setPageWidth] = useState<number>(1200);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setPageWidth(Math.min(width - 32, 1200));
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div ref={containerRef} className="w-full flex justify-center px-4">
        <div className="relative w-full max-w-[90vw] rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-[#FF3950] to-[#BB2AFF]">
          {isLoading && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/80 rounded-2xl">
              <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#FF3950] border-opacity-50"></div>
            </div>
          )}
          <Document file={fileUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              key={`page_${pageNumber}`}
              pageNumber={pageNumber}
              width={pageWidth}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </div>
      </div>

      {/* Navegação */}
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4 px-4">
        <button
          onClick={() => setPageNumber((p) => Math.max(1, p - 1))}
          disabled={pageNumber <= 1}
          className="bg-[#BB2AFF] px-6 py-3 rounded-xl text-white font-semibold disabled:opacity-30"
        >
          {"<"}
        </button>

        <span className="text-lg font-medium text-white">
          {pageNumber}/{numPages}
        </span>

        <button
          onClick={() => setPageNumber((p) => Math.min(numPages, p + 1))}
          disabled={pageNumber >= numPages}
          className="bg-[#FF3950] px-6 py-3 rounded-xl text-white font-semibold disabled:opacity-30"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
