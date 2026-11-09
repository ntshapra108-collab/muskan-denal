import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Phone, Copy, Check, ExternalLink, ShieldCheck, CreditCard, Accessibility } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface LocationSectionProps {
  lang: 'en' | 'hi';
}

export const LocationSection: React.FC<LocationSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="location" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs uppercase tracking-wider text-teal-700 font-bold mb-1.5">
            {lang === 'hi' ? 'क्लिनिक का पता एवं गूगल मैप' : 'Clinic Location & Navigation'}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'आसानी से पहुंचें मुस्कान डेंटल क्लिनिक' : 'Visit Muskaan Dental Clinic in Bhatapara'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'भाटापारा में बलौदा बाजार रोड, रेलवे फाटक के पास स्थित। व्हीलचेयर सुलभ प्रवेश द्वार और सुविधाजनक पार्किंग।'
              : 'Centrally located on Baloda Bazar Road, near the Railway Crossing in Bhatapara. Wheelchair accessible with ample parking space.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-6">
              {/* Address Block */}
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-teal-600" />
                    <span>{lang === 'hi' ? 'पूरा पता' : 'Clinic Address'}</span>
                  </div>
                  <button
                    onClick={copyAddress}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 hover:text-teal-700 px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                <p className="text-sm font-semibold text-slate-900 mt-2 leading-relaxed">
                  {lang === 'hi' ? CLINIC_INFO.hindiAddress : CLINIC_INFO.address}
                </p>
                <div className="text-xs text-slate-500 mt-1">
                  <span className="font-medium text-slate-700">Landmark:</span> {CLINIC_INFO.landmark}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  <span className="font-medium text-slate-700">Plus Code:</span> {CLINIC_INFO.plusCode}
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-teal-700 uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 text-teal-600" />
                  <span>{lang === 'hi' ? 'क्लिनिक का समय' : 'Consultation Timings'}</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-slate-800">Monday – Saturday:</span>
                    <span className="text-slate-900 font-semibold">10:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between font-medium">
                    <span className="text-slate-800">Evening Shift:</span>
                    <span className="text-slate-900 font-semibold">4:30 PM – 7:30 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-500">
                    <span>Sunday:</span>
                    <span>10:30 AM – 1:30 PM (Appointments)</span>
                  </div>
                </div>
              </div>

              {/* Accessibility & Amenities */}
              <div className="pt-4 border-t border-slate-100">
                <div className="text-xs font-bold text-teal-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Accessibility className="w-4 h-4 text-teal-600" />
                  <span>{lang === 'hi' ? 'विशेष सुविधाएं व पहुंच' : 'Accessibility & Amenities'}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>Wheelchair Accessible</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>Hygienic Clean Restroom</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>AC Waiting Lounge</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>GPay, PhonePe & Cards</span>
                  </div>
                </div>
              </div>

              {/* Direction & Call CTA buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-bold text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'गूगल मैप्स में दिशा देखें' : 'Get Directions'}</span>
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="py-3 px-4 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (Exact embed link provided by user) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-2 sm:p-3 border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[480px] rounded-xl overflow-hidden bg-slate-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1904374.060705483!2d79.2039143!3d21.2127831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28615e61a58251%3A0x266af77c7d0f274f!2sMuskaan%20Dental%20Clinic!5e0!3m2!1sen!2snp!4v1794215298742!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Muskaan Dental Clinic Google Maps Location"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Bar */}
              <div className="p-3 bg-slate-50 mt-2 rounded-xl flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
                <span className="flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-teal-600" />
                  Muskaan Dental Clinic · PXMC+8G Bhatapara
                </span>
                <a
                  href={CLINIC_INFO.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 hover:text-teal-900 font-semibold inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps App</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
