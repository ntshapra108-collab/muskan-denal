import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface FooterProps {
  lang: 'en' | 'hi';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Doctor */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center font-bold text-sm">
                MDC
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {lang === 'hi' ? 'मुस्कान डेंटल क्लिनिक' : 'Muskaan Dental Clinic'}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'hi'
                ? 'डॉ. अंकित महेंद्रू (BDS, MDS) के नेतृत्व में भाटापारा का विश्वसनीय दंत चिकित्सा केंद्र। 100% संतुष्टि और 5.0 गूगल रेटिंग।'
                : 'Premier dental practice led by Dr. Ankit Mahendru (BDS, MDS Orthodontics) in Bhatapara, Chhattisgarh. Advanced pain-free treatments, braces, and cosmetic smile care.'}
            </p>

            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1 text-amber-400 font-semibold text-xs">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 Star Rated on Google (77 Reviews)</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <a
                href={`https://wa.me/91${CLINIC_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600/30 border border-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {CLINIC_INFO.phone}</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'hi' ? 'प्रमुख उपचार' : 'Key Treatments'}
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Orthodontic Braces & Aligners</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Painless Root Canal (RCT)</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Dental Implants & Crowns</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Teeth Whitening & Scaling</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Tooth-Colored Fillings</a></li>
              <li><a href="#services" className="hover:text-teal-400 transition-colors">Pediatric Kids Dental Care</a></li>
            </ul>
          </div>

          {/* Col 3: Timings & Location */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {lang === 'hi' ? 'पता व समय' : 'Visit & Contact'}
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address}</span>
              </p>
              <p className="text-slate-500 text-[11px] pl-6">
                Landmark: {CLINIC_INFO.landmark} (Plus Code: {CLINIC_INFO.plusCode})
              </p>
              <p className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.timings.weekdays}</span>
              </p>
              <p className="text-[11px] text-slate-500 pl-6">
                {CLINIC_INFO.timings.sunday}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Muskaan Dental Clinic (मुस्कान डेंटल क्लिनिक). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#location" className="hover:text-slate-300 transition-colors">
              Google Maps Location
            </a>
            <span>·</span>
            <a href={`tel:${CLINIC_INFO.phoneRaw}`} className="hover:text-slate-300 transition-colors">
              Emergency: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
