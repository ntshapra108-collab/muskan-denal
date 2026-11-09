import React, { useState } from 'react';
import { 
  Sparkles, 
  Smile, 
  ShieldAlert, 
  Crown, 
  Activity, 
  Zap, 
  Layers, 
  Baby, 
  CheckCircle, 
  Clock, 
  HeartHandshake,
  MessageCircle,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { CLINIC_SERVICES, ClinicService, CLINIC_INFO } from '../data/clinicData';

interface ServicesSectionProps {
  lang: 'en' | 'hi';
  onBookService: (service: ClinicService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onBookService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ClinicService | null>(null);

  const categories = [
    { id: 'all', label: lang === 'hi' ? 'सभी सुविधाएं (All)' : 'All Services' },
    { id: 'ortho', label: lang === 'hi' ? 'दांत सीधे करना (Braces)' : 'Braces & Aligners' },
    { id: 'general', label: lang === 'hi' ? 'रूट कैनाल व कैप (RCT/Crown)' : 'Root Canal & Crowns' },
    { id: 'cosmetic', label: lang === 'hi' ? 'सफाई व स्माइल (Cosmetic)' : 'Cleaning & Whitening' },
    { id: 'surgery', label: lang === 'hi' ? 'दांत निकालना (Extractions)' : 'Painless Extractions' },
    { id: 'preventive', label: lang === 'hi' ? 'बच्चे व मसूड़े (Kids/Gums)' : 'Kids & Gum Care' },
  ];

  const filteredServices = activeCategory === 'all'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile': return <Smile className="w-5 h-5 text-teal-700" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-teal-700" />;
      case 'Crown': return <Crown className="w-5 h-5 text-teal-700" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-teal-700" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-700" />;
      case 'Zap': return <Zap className="w-5 h-5 text-teal-700" />;
      case 'Layers': return <Layers className="w-5 h-5 text-teal-700" />;
      case 'Baby': return <Baby className="w-5 h-5 text-teal-700" />;
      default: return <CheckCircle className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-wider text-teal-700 font-bold mb-1.5">
              {lang === 'hi' ? 'आधुनिक सुविधाएं एवं उपचार' : 'Comprehensive Clinical Treatments'}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'क्लिनिक में उपलब्ध दंत सेवाएं' : 'Specialized Dental Treatments in Bhatapara'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              {lang === 'hi'
                ? 'डॉ. अंकित महेंद्रू द्वारा नवीनतम कंप्यूटर-गाइडेड तकनीकों से बिना दर्द, सुरक्षित और स्थायी उपचार।'
                : 'Every procedure is executed using sterilized instruments, digital diagnostics, and gentle anesthesia for minimal discomfort.'}
            </p>
          </div>

          <a
            href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I would like to know the cost and details for dental treatment.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200/80 border border-emerald-300 transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <MessageCircle className="w-4 h-4 text-emerald-700" />
            <span>{lang === 'hi' ? 'व्हाट्सएप पर उपचार परामर्श' : 'Ask Treatment Cost on WhatsApp'}</span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-teal-700 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Icon & Meta Bar */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-medium text-teal-800 bg-teal-50/80 px-2.5 py-0.5 rounded-md border border-teal-200/50">
                      {service.painLevel}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  {lang === 'hi' ? service.hindiTitle : service.title}
                </h3>
                {lang === 'en' && (
                  <p className="text-xs text-slate-400 font-normal mt-0.5">
                    {service.hindiTitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                  {lang === 'hi' ? service.hindiDescription : service.description}
                </p>

                {/* Benefits Bullet Points */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onBookService(service)}
                  className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{lang === 'hi' ? 'अपॉइंटमेंट' : 'Book Visit'}</span>
                </button>

                <a
                  href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(`Hello Dr. Ankit, I would like to inquire about ${service.title} at Muskaan Dental Clinic.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                  title="Direct WhatsApp chat for this service"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
