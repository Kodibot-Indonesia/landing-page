"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#E18914]/50 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
      >
        <h3 className="text-lg font-bold text-[#2D2D2D] pr-8">{question}</h3>
        <ChevronDown
          className={`w-5 h-5 text-[#E18914] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <p className="text-[#6B7280] leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
