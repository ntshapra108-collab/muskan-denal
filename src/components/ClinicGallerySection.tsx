import React, { useState } from 'react';
import { ZoomIn, X, CheckCircle2, ShieldCheck, MessageCircle, FileText, Sparkles, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface ClinicGallerySectionProps {
  lang: 'en' | 'hi';
}

export const ClinicGallerySection: React.FC<ClinicGallerySectionProps> = ({ lang }) => {
  const [activeLightboxImage, setActiveLightboxImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const officialFacilities = [
    { hi: 'दाँत का डिजिटल X-Ray (RVG)', en: 'Digital Dental X-Ray (RVG)' },
    { hi: 'लाइट क्योर कम्पोजिट यूनिट', en: 'Light Cure Unit' },
    { hi: 'ब्लीचिंग, मैटेलिक एवं सिरेमिक कैपिंग व ब्रिज', en: 'Bleaching, Metal & Ceramic Crowns' },
    { hi: 'डेंटल इम्प्लांट (Implant) की सुविधा', en: 'Permanent Dental Implants' },
    { hi: 'पोस्ट एवं क्योर मसूड़ों की शल्य चिकित्सा (पायरिया इलाज)', en: 'Flap Surgery & Pyorrhea Treatment' },
    { hi: 'स्माइल डिजाइनिंग (Smile Designing)', en: 'Cosmetic Smile Designing' },
    { hi: 'दाँत की नस का ईलाज, सिंगल सिटिंग रूट कैनाल पैक', en: 'Single Sitting Root Canal (RCT)' },
    { hi: 'सड़े-गले, टेढ़े-मेढ़े पैदायसी खराब दाँतों का ईलाज', en: 'Crooked & Damaged Teeth Correction' },
    { hi: 'मसूड़ों से खून व मवाद निकलने, दुर्गन्ध का उपचार', en: 'Bleeding Gums & Bad Breath Treatment' },
    { hi: 'दाँतो की सफाई अल्ट्रासॉनिक मशीन द्वारा', en: 'Ultrasonic Scaling & Cleaning' },
    { hi: 'बत्तीसी बनाने की सुविधा (Flexible & Complete)', en: 'Complete & Partial Dentures' },
    { hi: 'मुख रोग कैंसर का प्राथमिक परीक्षण व उपचार', en: 'Oral Cancer Early Detection' },
    { hi: 'बच्चों के दाँतों में कीड़े लगने से रोकने का उपचार (फ्लोराइड)', en: 'Pediatric Fluoride Cavity Protection' },
    { hi: 'टूटे हुये जबड़े को तार लगाकर ठीक करना', en: 'Jaw Fracture Emergency Wiring' },
    { hi: 'आधे टूटे हुये दाँतो को प्राकृतिक रूप देना', en: 'Aesthetic Chipped Tooth Repair' },
    { hi: 'मुख संबंधी बीमारियां : मुख न खुलना, मुंह में जलन, छाले', en: 'Mouth Opening Care (OSMF) & Ulcers' },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-500/20 text-teal-400 text-xs font-semibold mb-3 border border-teal-500/30">
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'क्लिनिक का अधिकृत विवरण' : 'Verified Clinic Documents & Gallery'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            {lang === 'hi'
              ? 'मुस्कान डेंटल क्लिनिक: अधिकृत सुविधाएं व विवरण'
              : 'Official Clinic Profile & Available Facilities'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2">
            {lang === 'hi'
              ? 'भाटापारा में डॉ. अंकित महेंद्रू द्वारा क्लिनिक में दी जाने वाली सभी प्रमाणित दंत सुविधाओं की सूची व अधिकृत पहचान पत्र।'
              : 'Directly view the authentic clinic brochure and medical registration details for Muskaan Dental Clinic in Bhatapara.'}
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Images */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Image 1: Prescription Cover */}
              <div className="group relative bg-slate-800 rounded-2xl p-2 border border-slate-700/80 shadow-xl overflow-hidden">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={CLINIC_INFO.clinicCoverImg}
                    alt="Muskaan Dental Clinic Official File Cover - Dr. Ankit Mahendru"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on hover */}
                  <div
                    onClick={() =>
                      setActiveLightboxImage({
                        src: CLINIC_INFO.clinicCoverImg,
                        title: "Muskaan Dental Clinic - Official File Cover",
                        subtitle: "Dr. Ankit Mahendru (BDS) · Near Railway Crossing, Baloda Bazar Rd, Bhatapara"
                      })
                    }
                    className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer p-4 text-center"
                  >
                    <ZoomIn className="w-8 h-8 text-teal-400 mb-2" />
                    <span className="text-xs font-bold">Click to Zoom</span>
                    <span className="text-[11px] text-slate-300 mt-1">Official Prescription File</span>
                  </div>
                </div>

                <div className="p-3 text-left">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>{lang === 'hi' ? 'क्लिनिक फाइल कवर' : 'Prescription File Cover'}</span>
                    <span className="text-[10px] text-teal-400 font-medium">Verified Official</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Dr. Ankit Mahendru · Mob: 8889333184
                  </p>
                </div>
              </div>

              {/* Image 2: Facilities Brochure */}
              <div className="group relative bg-slate-800 rounded-2xl p-2 border border-slate-700/80 shadow-xl overflow-hidden">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={CLINIC_INFO.facilitiesBrochureImg}
                    alt="Facilities Available at Muskaan Dental Clinic Bhatapara"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay on hover */}
                  <div
                    onClick={() =>
                      setActiveLightboxImage({
                        src: CLINIC_INFO.facilitiesBrochureImg,
                        title: "Official Facilities Available",
                        subtitle: "Comprehensive Dental Procedures at Muskaan Dental Clinic, Bhatapara (C.G.)"
                      })
                    }
                    className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white cursor-pointer p-4 text-center"
                  >
                    <ZoomIn className="w-8 h-8 text-teal-400 mb-2" />
                    <span className="text-xs font-bold">Click to Zoom</span>
                    <span className="text-[11px] text-slate-300 mt-1">Treatment Facilities Chart</span>
                  </div>
                </div>

                <div className="p-3 text-left">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span>{lang === 'hi' ? 'उपलब्ध सुविधाओं का विवरण' : 'Facilities Brochure'}</span>
                    <span className="text-[10px] text-teal-400 font-medium">Bhatapara, CG</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Complete list of 16 clinical procedures
                  </p>
                </div>
              </div>
            </div>

            {/* Quick action bar */}
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Govt. Certified & Registered Dental Facility</span>
              </span>

              <a
                href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I saw your clinic brochure on the website and would like to ask a question.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Full Text Breakdown of All 16 Facilities from Brochure */}
          <div className="lg:col-span-6 bg-slate-800/60 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span>
                    {lang === 'hi' ? 'ब्रॉशर में वर्णित सभी 16 सुविधाएं' : 'All 16 Certified Clinic Facilities'}
                  </span>
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Baloda Bazaar Road, Near Railway Crossing, Bhatapara
                </p>
              </div>
              <span className="text-xs font-mono text-teal-300 px-2 py-0.5 rounded bg-teal-900/50 border border-teal-700/50">
                100% In-Clinic
              </span>
            </div>

            {/* Facilities List */}
            <div className="grid sm:grid-cols-2 gap-3 mt-5">
              {officialFacilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-200 block">
                      {lang === 'hi' ? facility.hi : facility.en}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {lang === 'hi' ? facility.en : facility.hi}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Strip */}
            <div className="mt-6 pt-5 border-t border-slate-700 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs text-slate-300">
                <span>Doctor Helpline:</span>{' '}
                <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="font-bold text-teal-400 hover:underline">
                  +91 {CLINIC_INFO.phoneRaw}
                </a>
              </div>

              <a
                href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I need to consult regarding one of the treatments in your brochure.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-3xl max-h-[90vh] flex flex-col items-center">
            <img
              src={activeLightboxImage.src}
              alt={activeLightboxImage.title}
              className="max-h-[75vh] w-auto object-contain rounded-xl shadow-2xl border border-slate-700"
            />
            <div className="mt-4 text-center">
              <h4 className="text-base font-bold text-white">
                {activeLightboxImage.title}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {activeLightboxImage.subtitle}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
