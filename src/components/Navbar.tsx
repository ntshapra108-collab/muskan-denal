import React from 'react';
import { Phone, MessageCircle, Clock, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  lang: 'en' | 'hi';
  setLang: (lang: 'en' | 'hi') => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, setLang, onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-bar for emergency & timing */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span className="truncate max-w-[280px] sm:max-w-none">
                {lang === 'hi' ? 'रेलवे फाटक के पास, बलौदा बाजार रोड, भाटापारा' : 'Baloda Bazar Rd, near Railway Crossing, Bhatapara'}
              </span>
            </span>
            <span className="hidden md:inline-block text-slate-600" aria-hidden="true">·</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>10:00 AM – 2:00 PM | 4:30 PM – 7:30 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-slate-200 hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-teal-400 shrink-0" />
              <span className="font-medium tracking-wide">{CLINIC_INFO.phone}</span>
            </a>
            <span className="text-slate-700" aria-hidden="true">|</span>
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="px-2 py-0.5 rounded text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              title="Toggle Hindi / English"
            >
              {lang === 'en' ? 'हिन्दी' : 'English'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar - strict 3-zone contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-teal-800 transition-colors">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M12 2C8.5 2 6 4.5 6 7.5c0 2 .5 4.5 1 7 .5 2.5 1 5.5 3 5.5 1.5 0 2-2 2-3.5 0 1.5.5 3.5 2 3.5 2 0 2.5-3 3-5.5.5-2.5 1-5 1-7C18 4.5 15.5 2 12 2z" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
              {lang === 'hi' ? 'मुस्कान डेंटल क्लिनिक' : 'Muskaan Dental Clinic'}
            </span>
            <span className="text-xs text-teal-700 font-medium whitespace-nowrap">
              {lang === 'hi' ? 'डॉ. अंकित महेंद्रू (BDS, MDS)' : 'Dr. Ankit Mahendru · BDS, MDS'}
            </span>
          </div>
        </a>

        {/* Zone 2: 4-5 single-line clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'उपचार व सेवाएं' : 'Services'}
          </a>
          <a href="#doctor" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'डॉक्टर परिचय' : 'About Doctor'}
          </a>
          <a href="#gallery" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'क्लिनिक विवरण' : 'Gallery & Brochure'}
          </a>
          <a href="#reviews" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'मरीज समीक्षाएं' : 'Patient Reviews'}
          </a>
          <a href="#location" className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0">
            {lang === 'hi' ? 'स्थान व मैप' : 'Map & Location'}
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <span>{lang === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Book Appointment'}</span>
          </button>

          <a
            href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I would like to consult with you at Muskaan Dental Clinic, Bhatapara.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};
