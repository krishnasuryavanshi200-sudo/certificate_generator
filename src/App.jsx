import { StyleSheet, Font } from "@react-pdf/renderer";
import PreviewComponent from "./components/PreviewComponent";
import FormComponent from "./FormComponent";
import { useState } from "react";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 14,
    textAlign: "center",
    backgroundColor: "#fdfdfd",
    height: "100%",
  },
  border: {
    border: "5pt solid #4f46e5",
    padding: 20,
    borderRadius: 12,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    alignSelf: "center",
    borderRadius: 60,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontFamily: "Oswald",
    color: "#4f46e5",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    fontFamily: "Times-Roman",
    color: "#444",
  },
  name: {
    fontSize: 26,
    marginVertical: 20,
    fontFamily: "Oswald",
    color: "#111",
  },
  body: {
    fontSize: 16,
    marginBottom: 40,
    fontFamily: "Times-Roman",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    paddingHorizontal: 40,
  },
  signature: {
    borderTop: "1pt solid #000",
    width: 150,
    textAlign: "center",
    paddingTop: 5,
    fontSize: 12,
    fontFamily: "Times-Roman",
  },
  date: {
    marginTop: 20,
    fontSize: 12,
    color: "grey",
  },
});

function App() {
  const [certificateData, setCertificateData] = useState({ name: "" });

  const handlePreview = (input) => {
    setCertificateData(input);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="transform transition hover:scale-[1.01] hover:shadow-lg">
          <FormComponent onPreview={handlePreview} />
        </div>

        <div className="lg:col-span-2 transform transition hover:scale-[1.005] hover:shadow-lg">
          <PreviewComponent
            certificateData={certificateData}
            styles={styles}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
