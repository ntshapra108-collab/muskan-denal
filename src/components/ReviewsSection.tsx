import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, MessageSquare, Quote } from 'lucide-react';
import { PATIENT_REVIEWS, CLINIC_INFO } from '../data/clinicData';

interface ReviewsSectionProps {
  lang: 'en' | 'hi';
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ lang }) => {
  const [filter, setFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: lang === 'hi' ? 'सभी समीक्षाएं (All)' : 'All 5-Star Reviews' },
    { id: 'Orthodontics', label: lang === 'hi' ? 'तार व क्लिप (Braces)' : 'Braces & Smile' },
    { id: 'Root Canal', label: lang === 'hi' ? 'रूट कैनाल (RCT)' : 'Root Canal (RCT)' },
    { id: 'Gentle Care', label: lang === 'hi' ? 'सौम्य व्यवहार (Gentle)' : 'Gentle Care & Polite' },
  ];

  const filteredReviews = filter === 'all'
    ? PATIENT_REVIEWS
    : PATIENT_REVIEWS.filter(r => r.tag.toLowerCase().includes(filter.toLowerCase()) || r.treatment.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header with 5.0 Google Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-teal-700 font-bold mb-1.5">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{lang === 'hi' ? 'गूगल मैप्स प्रमाणित समीक्षाएं' : 'Verified Google Reviews'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'hi' ? 'मरीजों का अटूट विश्वास व अनुभव' : 'Loved by Over 77+ Patients in Bhatapara'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              Real testimonials from patients treated by Dr. Ankit Mahendru at Muskaan Dental Clinic. Every review reflects our commitment to gentle care.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex items-center gap-6 self-start lg:self-auto shrink-0">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums">
                5.0
              </div>
              <div className="flex items-center justify-center gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-[11px] text-slate-500 mt-1 font-medium">
                77 Google Reviews
              </div>
            </div>

            <div className="h-12 w-px bg-slate-200" />

            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-12 text-slate-500">5 Star</span>
                <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-amber-500 rounded-full" />
                </div>
                <span className="font-mono text-slate-700 font-bold">100%</span>
              </div>
              <div className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1 pt-1">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Zero negative ratings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {filterOptions.map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                filter === btn.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Reviews Masonry / Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map(review => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header with patient avatar initial & stars */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-800 font-bold text-sm flex items-center justify-center shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                        <span>{review.name}</span>
                        {review.localGuide && (
                          <span className="text-[10px] text-teal-700 font-medium">· Local Guide</span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {review.timeAgo}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>

                {/* Treatment tag as clean unboxed text */}
                <div className="text-xs text-teal-800 font-medium mb-3 flex items-center gap-1">
                  <span>Treatment:</span>
                  <span className="text-slate-700">{review.treatment}</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                  "{review.text}"
                </p>

                {/* Clinic Owner Reply if present */}
                {review.ownerReply && (
                  <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50/70 p-3 rounded-xl text-xs text-slate-500">
                    <div className="font-semibold text-slate-700 text-[11px] mb-0.5">
                      Response from Dr. Ankit Mahendru:
                    </div>
                    <div>{review.ownerReply}</div>
                  </div>
                )}
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="text-teal-700 font-medium">#{review.tag}</span>
                <span className="flex items-center gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3 text-emerald-500" />
                  Verified Patient
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Google Maps */}
        <div className="mt-10 text-center">
          <a
            href="https://maps.google.com/?cid=2768310344199972687"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span>Read all 77 reviews directly on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
