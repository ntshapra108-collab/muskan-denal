import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, Phone, User, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CLINIC_INFO, CLINIC_SERVICES, ClinicService } from '../data/clinicData';

interface BookingSectionProps {
  lang: 'en' | 'hi';
  preselectedService?: ClinicService | null;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ lang, preselectedService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState(preselectedService ? preselectedService.title : 'General Dental Consultation');
  const [dayPreference, setDayPreference] = useState('Tomorrow');
  const [timeSlot, setTimeSlot] = useState('Morning (10:30 AM – 1:00 PM)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Update treatment if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setTreatment(preselectedService.title);
    }
  }, [preselectedService]);

  const handleWhatsAppBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    const message = `Hello Dr. Ankit Mahendru,
I would like to book a dental appointment at Muskaan Dental Clinic, Bhatapara.

• Patient Name: ${name.trim()}
• Phone: ${phone.trim()}
• Treatment / Concern: ${treatment}
• Preferred Day: ${dayPreference}
• Preferred Time: ${timeSlot}
${notes.trim() ? `• Note / Symptoms: ${notes.trim()}` : ''}

Please confirm my appointment slot. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodedMessage}`;

    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="book" className="py-16 sm:py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-teal-50 text-teal-700 text-xs font-semibold mb-3 border border-teal-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'त्वरित व आसान बुकिंग' : 'Fast & Easy Appointment'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'hi' ? 'मुस्कान डेंटल क्लिनिक में समय बुक करें' : 'Book Your Dental Consultation'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            {lang === 'hi'
              ? 'अपना विवरण भरें और 1-क्लिक में सीधे व्हाट्सएप पर डॉ. अंकित महेंद्रू से अपना अपॉइंटमेंट कन्फर्म करें।'
              : 'Choose your convenient time and send your request directly to Dr. Ankit on WhatsApp for immediate confirmation.'}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-50/80 rounded-2xl border border-slate-200/90 shadow-lg p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {lang === 'hi' ? 'व्हाट्सएप संदेश तैयार है!' : 'WhatsApp Booking Initiated!'}
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {lang === 'hi'
                  ? 'आपका संदेश व्हाट्सएप में खुल गया है। कृपया सेंड दबाएं, क्लिनिक टीम जल्द ही स्लॉट कन्फर्म करेगी।'
                  : `Your request has been routed to WhatsApp (+91 ${CLINIC_INFO.phoneRaw}). Simply press 'Send' to complete confirmation.`}
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Book Another Appointment
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-teal-700 text-white hover:bg-teal-800 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleWhatsAppBooking} className="space-y-5">
              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'hi' ? 'मरीज का नाम (Patient Name) *' : 'Patient Name *'}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Verma"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'hi' ? 'मोबाइल नंबर (Mobile Phone) *' : 'Mobile Phone *'}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all text-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Treatment Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'उपचार / समस्या (Treatment or Concern)' : 'Treatment / Concern'}
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all text-slate-900 cursor-pointer"
                >
                  <option value="General Dental Consultation">General Dental Consultation / Checkup</option>
                  <option value="Advanced Root Canal (RCT)">Advanced Painless Root Canal (RCT)</option>
                  <option value="Braces & Invisible Aligners">Orthodontic Braces & Aligners</option>
                  <option value="Teeth Cleaning & Whitening">Ultrasonic Cleaning & Whitening</option>
                  <option value="Dental Implants & Crowns">Dental Implants & Zirconia Crown</option>
                  <option value="Painless Tooth Extraction">Painless Extraction / Wisdom Tooth</option>
                  <option value="Tooth Colored Composite Filling">Tooth-Colored Laser Filling</option>
                  <option value="Dentures (बत्तीसी)">Complete / Flexible Dentures</option>
                  <option value="Emergency Tooth Pain">Severe Tooth Pain / Emergency Care</option>
                </select>
              </div>

              {/* Day Preference & Time Slot */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'hi' ? 'पसंदीदा दिन (Preferred Day)' : 'Preferred Day'}
                  </label>
                  <select
                    value={dayPreference}
                    onChange={(e) => setDayPreference(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all text-slate-900 cursor-pointer"
                  >
                    <option value="Today (Emergency / Same Day)">Today (Same Day Walk-in)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Weekend (Saturday/Sunday)">This Weekend</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'hi' ? 'समय स्लॉट (Preferred Time Slot)' : 'Preferred Time Slot'}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all text-slate-900 cursor-pointer"
                  >
                    <option value="Morning (10:00 AM – 1:00 PM)">Morning: 10:00 AM – 1:00 PM</option>
                    <option value="Afternoon (1:00 PM – 2:00 PM)">Afternoon: 1:00 PM – 2:00 PM</option>
                    <option value="Evening (4:30 PM – 6:00 PM)">Evening: 4:30 PM – 6:00 PM</option>
                    <option value="Late Evening (6:00 PM – 7:30 PM)">Late Evening: 6:00 PM – 7:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {lang === 'hi' ? 'कोई विशेष लक्षण या टिप्पणी (Optional Notes)' : 'Symptoms or Questions (Optional)'}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Sensitivity to cold water, need quotation for braces..."
                  className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition-all text-slate-900 resize-none"
                />
              </div>

              {/* Submit via WhatsApp CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg shadow-emerald-600/20 text-sm flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप द्वारा तुरंत अपॉइंटमेंट बुक करें' : 'Confirm & Send Request via WhatsApp'}</span>
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                  <span>No prepayment needed. Official WhatsApp: +91 88893 33184</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
