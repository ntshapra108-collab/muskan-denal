import React, { useState } from 'react';
import { X, Calendar, User, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, ClinicService } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'hi';
  initialService?: ClinicService | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  lang,
  initialService
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceName, setServiceName] = useState(
    initialService ? initialService.title : 'General Consultation / Checkup'
  );
  const [day, setDay] = useState('Tomorrow');
  const [slot, setSlot] = useState('Morning (10:00 AM – 1:00 PM)');

  React.useEffect(() => {
    if (initialService) {
      setServiceName(initialService.title);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert('Please fill in your name and phone number.');
      return;
    }

    const message = `Hello Dr. Ankit Mahendru,
I want to schedule an appointment at Muskaan Dental Clinic, Bhatapara:

• Patient Name: ${name.trim()}
• Phone: ${phone.trim()}
• Treatment: ${serviceName}
• Preferred Day: ${day}
• Preferred Time: ${slot}

Please let me know if this slot is available. Thank you!`;

    const url = `https://wa.me/91${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base sm:text-lg">
              {lang === 'hi' ? 'अपॉइंटमेंट बुक करें' : 'Schedule Dental Appointment'}
            </h3>
            <p className="text-xs text-slate-300">
              Muskaan Dental Clinic · Dr. Ankit Mahendru
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {lang === 'hi' ? 'मरीज का नाम *' : 'Patient Name *'}
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {lang === 'hi' ? 'मोबाइल नंबर *' : 'Mobile Number *'}
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 9876543210"
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
              {lang === 'hi' ? 'उपचार / सेवा' : 'Treatment / Inquiry'}
            </label>
            <select
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-slate-900"
            >
              <option value="General Consultation / Checkup">General Dental Checkup</option>
              <option value="Advanced Root Canal (RCT)">Advanced Root Canal (RCT)</option>
              <option value="Braces & Invisible Aligners">Orthodontic Braces & Aligners</option>
              <option value="Teeth Whitening & Cleaning">Teeth Cleaning & Whitening</option>
              <option value="Dental Implants & Crowns">Dental Implants & Crown</option>
              <option value="Painless Tooth Extraction">Painless Tooth Extraction</option>
              <option value="Complete / Flexible Dentures">Dentures (बत्तीसी)</option>
              <option value="Severe Tooth Pain Emergency">Emergency Pain Relief</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Day
              </label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-slate-900"
              >
                <option value="Today (Same Day)">Today</option>
                <option value="Tomorrow">Tomorrow</option>
                <option value="This Saturday">Saturday</option>
                <option value="Sunday (By Appointment)">Sunday</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Time Slot
              </label>
              <select
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:bg-white text-slate-900"
              >
                <option value="Morning (10:00 AM – 1:00 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Evening (4:30 PM – 7:30 PM)">Evening (4:30 PM - 7:30 PM)</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp (+91 88893 33184)</span>
            </button>
            <p className="text-[11px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              Direct instant confirmation with clinic reception
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
