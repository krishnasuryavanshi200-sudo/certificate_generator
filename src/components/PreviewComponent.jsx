import React from "react";
import Certificate from "./Certificate";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const PreviewComponent = ({ certificateData, styles }) => {
  return (
    <div className="lg:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-lg flex flex-col border border-slate-200">
      <h1 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        🎓 Certificate Preview
      </h1>

      <div className="flex-1 border-2 border-dashed border-slate-300 rounded-xl overflow-hidden min-h-[500px] bg-white shadow-inner">
        {certificateData.name ? (
          <PDFViewer
            key={Date.now()}
            width="100%"
            height="100%"
            className="min-h-[500px]"
          >
            <Certificate {...certificateData} styles={styles} />
          </PDFViewer>
        ) : (
          <div className="flex justify-center items-center h-full text-slate-500 text-lg font-medium">
            ✍️ Enter details to generate preview
          </div>
        )}
      </div>

      <div className="mt-6">
        <PDFDownloadLink
          key={Date.now()}
          document={<Certificate {...certificateData} styles={styles} />}
          fileName="certificate.pdf"
        >
          {({ loading }) => (
            <button
              disabled={loading || !certificateData.name}
              className={`w-full py-3 rounded-xl transition-all duration-300 ${
                loading || !certificateData.name
                  ? "bg-slate-300 cursor-not-allowed text-slate-600"
                  : "bg-gradient-to-r from-emerald-500 to-emerald-700 hover:shadow-lg hover:scale-[1.02] text-white"
              } font-semibold shadow`}
            >
              {loading ? "⏳ Preparing document..." : "⬇️ Download Certificate"}
            </button>
          )}
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default PreviewComponent;
