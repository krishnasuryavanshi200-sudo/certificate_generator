import React, { useState } from "react";

const FormComponent = ({ onPreview }) => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handlePreview = () => {
    onPreview({ name });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePreview();
    }
  };

  return (
    <div className="lg:col-span-1 bg-gradient-to-br from-slate-50 to-slate-100 p-8 rounded-2xl shadow-md border border-slate-200">
  
      <h1 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        ✨ Generate Certificate
      </h1>

      <div className="space-y-5">
        <label className="block">
          <span className="text-sm font-medium text-slate-700">
            Recipient's Name
          </span>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Enter recipient's name"
            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none mt-2 shadow-sm transition"
          />
        </label>

        <button
          onClick={handlePreview}
          disabled={!name.trim()}
          className={`w-full py-3 rounded-xl font-semibold shadow transition-all duration-300 ${
            !name.trim()
              ? "bg-slate-300 cursor-not-allowed text-slate-600"
              : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:shadow-lg hover:scale-[1.02]"
          }`}
        >
          🚀 Update Preview
        </button>
      </div>
    </div>
  );
};

export default FormComponent;
