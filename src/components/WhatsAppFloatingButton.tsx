import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface WhatsAppFloatingButtonProps {
  lang: 'en' | 'hi';
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const quickPrompts = [
    {
      title: lang === 'hi' ? '📅 नया अपॉइंटमेंट बुक करना है' : '📅 Book an Appointment',
      text: "Hello Dr. Ankit, I would like to schedule a dental checkup at Muskaan Dental Clinic."
    },
    {
      title: lang === 'hi' ? '🦷 दांत में दर्द / इमरजेंसी' : '🦷 Severe Toothache / Emergency',
      text: "Hello Doctor, I am experiencing acute tooth pain. Can I visit today for emergency care?"
    },
    {
      title: lang === 'hi' ? '😁 तार / ब्रेसेस का परामर्श' : '😁 Braces / Clear Aligners Inquiry',
      text: "Hello Dr. Ankit, I want to inquire about orthodontic braces and smile correction."
    },
    {
      title: lang === 'hi' ? '📍 क्लिनिक का पता व समय' : '📍 Clinic Timings & Location',
      text: "Hello, please share current clinic timings and directions from railway station."
    }
  ];

  const sendWhatsApp = (msg: string) => {
    const finalMsg = msg || "Hello Dr. Ankit, I am reaching out through the Muskaan Dental Clinic website.";
    const url = `https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Expanded Quick Chat Card */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
                  MDC
                </div>
                {/* Genuine status representation for live WhatsApp support */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">
                  Muskaan Dental Clinic
                </h4>
                <p className="text-[11px] text-emerald-100">
                  Dr. Ankit Mahendru · WhatsApp Support
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="p-3 bg-white rounded-xl text-xs text-slate-700 border border-slate-200/70 shadow-xs leading-relaxed">
              👋 <strong>Namaste!</strong> How can we assist with your dental health today? Select a quick option or type your question:
            </div>

            {/* Quick action chips */}
            <div className="space-y-1.5">
              {quickPrompts.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => sendWhatsApp(item.text)}
                  className="w-full text-left p-2.5 rounded-lg bg-white hover:bg-emerald-50 border border-slate-200/80 hover:border-emerald-300 text-xs font-medium text-slate-700 hover:text-emerald-800 transition-colors flex items-center justify-between group"
                >
                  <span>{item.title}</span>
                  <Send className="w-3 h-3 text-slate-300 group-hover:text-emerald-600 shrink-0" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (customText.trim()) sendWhatsApp(customText);
              }}
              className="flex items-center gap-2 pt-1"
            >
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-emerald-500 text-slate-900"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shrink-0"
                aria-label="Send WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl hover:shadow-emerald-600/30 transition-all hover:scale-105 cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline-block font-semibold">
          {isOpen ? 'Close' : 'Chat on WhatsApp'}
        </span>
      </button>
    </div>
  );
};
