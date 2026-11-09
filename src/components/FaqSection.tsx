import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';

interface FaqSectionProps {
  lang: 'en' | 'hi';
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 text-teal-700 text-xs font-semibold mb-3 border border-teal-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'सामान्य प्रश्न व उत्तर' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'आपके सवालों के स्पष्ट जवाब' : 'Common Patient Questions Answered'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Have questions about root canal, braces, or appointment timing? Here is what you need to know.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 sm:px-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-teal-50 text-teal-700 border-teal-200' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp assistance banner */}
        <div className="mt-10 p-6 rounded-2xl bg-teal-50 border border-teal-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-teal-900">
              {lang === 'hi' ? 'कोई अन्य प्रश्न है? सीधे डॉक्टर से पूछें' : 'Have a specific question not listed here?'}
            </h4>
            <p className="text-xs text-teal-700 mt-0.5">
              Dr. Ankit and our friendly clinic staff are available on WhatsApp for quick inquiries.
            </p>
          </div>

          <a
            href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I have a question regarding dental treatment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shrink-0 shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
