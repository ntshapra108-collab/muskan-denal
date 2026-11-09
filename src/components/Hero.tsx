import React from 'react';
import { Star, ShieldCheck, Phone, MessageCircle, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  lang: 'en' | 'hi';
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-slate-50 to-white pt-8 pb-16 lg:py-20 border-b border-slate-200">
      {/* Background soft subtle medical grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Unboxed clean metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600 font-medium">
              <span className="flex items-center gap-1 text-amber-600 font-semibold">
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                <span>5.0 Star Rating</span>
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>77+ Verified Google Reviews</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Bhatapara, Chhattisgarh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] text-balance">
              {lang === 'hi' ? (
                <>
                  हर मुस्कान बने खास, <br className="hidden sm:inline" />
                  <span className="text-teal-700">सटीक व दर्द-रहित</span> दंत चिकित्सा के साथ।
                </>
              ) : (
                <>
                  Painless Modern Dentistry for Your <br className="hidden sm:inline" />
                  <span className="text-teal-700">Healthiest, Most Confident Smile.</span>
                </>
              )}
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {lang === 'hi'
                ? 'मुस्कान डेंटल क्लिनिक में डॉ. अंकित महेंद्रू (BDS, MDS) द्वारा अत्याधुनिक डिजिटल एक्स-रे, एडवांस रोटरी रूट कैनाल, तार व क्लिप द्वारा दांत सीधे करना एवं फिक्स दांतों का संपूर्ण विश्वसनीय इलाज।'
                : 'Led by Dr. Ankit Mahendru (BDS, MDS Orthodontics), Muskaan Dental Clinic delivers gentle, world-class dental solutions in Bhatapara. From painless root canals to metal/ceramic braces and dental implants.'}
            </p>

            {/* Unboxed trust checklist */}
            <div className="grid sm:grid-cols-2 gap-2.5 text-sm text-slate-700 pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Single-Sitting Painless Rotary RCT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Orthodontic Braces & Aligners</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Digital Low-Radiation RVG X-Rays</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>100% Class-B Sterilization Standard</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I would like to book a dental consultation at Muskaan Dental Clinic.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg shadow-emerald-600/20 text-sm whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{lang === 'hi' ? 'व्हाट्सएप पर अपॉइंटमेंट लें' : 'Chat on WhatsApp'}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition-colors shadow-sm text-sm whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 text-teal-700" />
                <span>{lang === 'hi' ? 'समय चुनें' : 'Schedule Visit'}</span>
              </button>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-teal-50 transition-colors text-sm font-medium whitespace-nowrap"
              >
                <span>{lang === 'hi' ? 'अधिकृत ब्रॉशर देखें' : 'View Official Brochure'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Clinic Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 sm:p-7 relative overflow-hidden">
              {/* Decorative accent top hairline */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-700" />

              {/* Clinic Header Inside Card */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <div className="text-xs uppercase tracking-wider text-teal-700 font-bold mb-1">
                    {lang === 'hi' ? 'दंत चिकित्सा क्लिनिक' : 'Specialized Dental Centre'}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === 'hi' ? 'मुस्कान डेंटल क्लिनिक' : 'Muskaan Dental Clinic'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Dr. Ankit Mahendru (BDS, MDS Orthodontics)
                  </p>
                </div>

                <div className="bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-md border border-emerald-200 text-right">
                  <span>Open Today</span>
                  <div className="text-[10px] text-emerald-600 font-normal">Closes 7:30 PM</div>
                </div>
              </div>

              {/* Official Clinic Document Photo Banner */}
              <div className="my-3 rounded-xl overflow-hidden border border-slate-200 bg-slate-100 relative group">
                <img
                  src={CLINIC_INFO.clinicCoverImg}
                  alt="Muskaan Dental Clinic Bhatapara official cover"
                  className="w-full h-32 object-cover object-top"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-2 text-white flex items-center justify-between text-[11px]">
                  <span className="font-semibold truncate">Dr. Ankit Mahendru (BDS)</span>
                  <a href="#gallery" className="text-teal-300 hover:text-white font-medium underline text-[10px] shrink-0">
                    View Brochure
                  </a>
                </div>
              </div>

              {/* Direct Call & WhatsApp Highlights */}
              <div className="grid grid-cols-2 gap-3 my-3">
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="flex flex-col p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 transition-colors group"
                >
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <Phone className="w-3 h-3 text-teal-600" />
                    Direct Call
                  </span>
                  <span className="font-bold text-slate-900 text-sm mt-1 group-hover:text-teal-700 transition-colors">
                    {CLINIC_INFO.phone}
                  </span>
                </a>

                <a
                  href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I need dental advice.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col p-3 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200/80 transition-colors group"
                >
                  <span className="text-xs text-emerald-700 flex items-center gap-1 font-medium">
                    <MessageCircle className="w-3 h-3 text-emerald-600" />
                    Instant WhatsApp
                  </span>
                  <span className="font-bold text-emerald-900 text-sm mt-1">
                    Click to Chat
                  </span>
                </a>
              </div>

              {/* Key Facilities preview */}
              <div className="space-y-2.5 pt-2 text-xs text-slate-600">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Consultation Timings</span>
                  <span className="text-slate-500">10 AM - 2 PM & 4:30 - 7:30 PM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Location</span>
                  <span className="text-slate-500 truncate max-w-[200px]">Baloda Bazar Rd, Bhatapara</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
                  <span className="font-medium text-slate-700">Google Rating</span>
                  <span className="text-amber-600 font-semibold flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    5.0 (77 Reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="font-medium text-slate-700">Specialty</span>
                  <span className="text-teal-700 font-semibold">Orthodontics & Painless RCT</span>
                </div>
              </div>

              {/* Action Button inside card */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 px-4 rounded-xl text-center font-semibold text-sm text-white bg-teal-700 hover:bg-teal-800 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'क्लिनिक में समय बुक करें' : 'Book a Consultation Now'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
