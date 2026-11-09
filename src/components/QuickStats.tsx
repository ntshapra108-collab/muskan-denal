import React from 'react';
import { Star, Award, ShieldCheck, Cpu } from 'lucide-react';

interface QuickStatsProps {
  lang: 'en' | 'hi';
}

export const QuickStats: React.FC<QuickStatsProps> = ({ lang }) => {
  const stats = [
    {
      icon: Star,
      value: "5.0 ★",
      title: lang === 'hi' ? 'गूगल रेटिंग' : 'Google Rating',
      subtitle: lang === 'hi' ? '77+ संतुष्ट मरीजों की समीक्षा' : '100% 5-Star Reviews (77 Reviews)',
      highlight: 'text-amber-500'
    },
    {
      icon: Award,
      value: "10+ Yrs",
      title: lang === 'hi' ? 'विशेषज्ञ अनुभव' : 'Clinical Expertise',
      subtitle: lang === 'hi' ? 'डॉ. अंकित महेंद्रू (BDS, MDS)' : 'Dr. Ankit Mahendru (Orthodontics)',
      highlight: 'text-teal-600'
    },
    {
      icon: ShieldCheck,
      value: "100%",
      title: lang === 'hi' ? 'स्टेरिलाइजेशन सुरक्षा' : 'Sterilization Protocol',
      subtitle: lang === 'hi' ? 'क्लास-B ऑटोक्लेव व संक्रमण मुक्त' : 'Class-B Autoclave Disinfection',
      highlight: 'text-emerald-600'
    },
    {
      icon: Cpu,
      value: "Digital",
      title: lang === 'hi' ? 'आधुनिक उपकरण' : 'Modern Equipment',
      subtitle: lang === 'hi' ? 'डिजिटल RVG एक्स-रे व रोटरी RCT' : 'RVG Sensor & Rotary Endodontics',
      highlight: 'text-teal-700'
    }
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50/70 border border-slate-200/60 hover:border-slate-300 transition-colors"
              >
                <div className={`p-2.5 rounded-lg bg-white border border-slate-200 shadow-xs ${stat.highlight} shrink-0`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-slate-900 font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-800 mt-0.5">
                    {stat.title}
                  </div>
                  <div className="text-[11px] text-slate-500 leading-tight mt-0.5">
                    {stat.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
