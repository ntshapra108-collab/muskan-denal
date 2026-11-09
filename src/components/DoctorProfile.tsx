import React from 'react';
import { Award, GraduationCap, Heart, CheckCircle2, MessageCircle, Phone, Stethoscope } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface DoctorProfileProps {
  lang: 'en' | 'hi';
  onOpenBooking: () => void;
}

export const DoctorProfile: React.FC<DoctorProfileProps> = ({ lang, onOpenBooking }) => {
  return (
    <section id="doctor" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Doctor visual / credential representation */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor Card */}
              <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Subtle medical watermark ornament */}
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <Stethoscope className="w-48 h-48 text-teal-300" />
                </div>

                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Lead Orthodontist & Dental Surgeon</span>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {CLINIC_INFO.doctor.name}
                    </h3>
                    <p className="text-teal-300 text-sm font-medium mt-1">
                      {CLINIC_INFO.doctor.qualifications}
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {CLINIC_INFO.doctor.experience}
                    </p>
                  </div>

                  <div className="space-y-3 pt-3 border-t border-slate-700/80 text-xs text-slate-300">
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Master of Dental Surgery (MDS) - Orthodontics</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Heart className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Dedicated to gentle, fear-free treatments</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Over 5,000+ happy smiles shaped in CG</span>
                    </div>
                  </div>

                  {/* Doctor Direct Contact Bar */}
                  <div className="pt-4 flex items-center gap-3">
                    <a
                      href={`https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent("Hello Dr. Ankit, I would like to consult with you directly.")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Dr. Ankit</span>
                    </a>

                    <a
                      href={`tel:${CLINIC_INFO.phoneRaw}`}
                      className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
                      title="Call Clinic"
                    >
                      <Phone className="w-4 h-4 text-teal-400" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio and Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-teal-700 font-bold mb-1.5">
                {lang === 'hi' ? 'विशेषज्ञ चिकित्सक परिचय' : 'Meet Your Dental Specialist'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'hi'
                  ? 'डॉ. अंकित महेंद्रू के साथ दंत चिकित्सा का सुरक्षित अनुभव'
                  : 'Gentle, Honest & Patient-Centered Dental Care'}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {lang === 'hi'
                ? CLINIC_INFO.doctor.hindiAbout + ' वे प्रत्येक मरीज की समस्या को धैर्यपूर्वक सुनकर, डिजिटल एक्स-रे के माध्यम से विस्तार से समझाते हैं ताकि इलाज के दौरान कोई संशय या डर न रहे।'
                : CLINIC_INFO.doctor.about}
            </p>

            {/* Core clinical strengths */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'hi' ? 'मरीजों को पूरी बात समझाना' : 'Clear & Transparent Explanations'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    No medical jargon or hidden charges. Dr. Ankit explains diagnosis and all treatment options with before-and-after digital scans.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'hi' ? 'दर्द-मुक्त एनेस्थीसिया तकनीक' : 'Painless & Gentle Approach'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Specially designed topical numbing gels and precise micro-anesthesia make procedures like root canals and extractions relaxing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {lang === 'hi' ? 'ऑर्थोडॉन्टिक्स (तार व क्लिप) में महारत' : 'Advanced Orthodontic Specialty'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Specialist mastery in straightening misaligned teeth, closing dental gaps, and correcting bite issues in children and adults.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Action */}
            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors text-sm shadow-sm"
              >
                <span>{lang === 'hi' ? 'डॉ. अंकित से अपॉइंटमेंट बुक करें' : 'Book Consultation with Dr. Ankit'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
