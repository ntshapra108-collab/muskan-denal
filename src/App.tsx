import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { ServicesSection } from './components/ServicesSection';
import { DoctorProfile } from './components/DoctorProfile';
import { ClinicGallerySection } from './components/ClinicGallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';
import { ClinicService } from './data/clinicData';

export default function App() {
  const [lang, setLang] = useState<'en' | 'hi'>('en');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ClinicService | null>(null);

  const handleOpenBooking = (service?: ClinicService) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-teal-500/20 selection:text-teal-900">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4-KPI Metric Strip */}
        <QuickStats lang={lang} />

        {/* Specialized Dental Services & Treatments */}
        <ServicesSection
          lang={lang}
          onBookService={(srv) => handleOpenBooking(srv)}
        />

        {/* Doctor Spotlight: Dr. Ankit Mahendru */}
        <DoctorProfile
          lang={lang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Official Clinic Brochure, Documents & Facilities Gallery (Replacing Video) */}
        <ClinicGallerySection lang={lang} />

        {/* 5.0 Star Google Reviews from Bhatapara Patients */}
        <ReviewsSection lang={lang} />

        {/* Interactive Booking Section */}
        <BookingSection
          lang={lang}
          preselectedService={selectedService}
        />

        {/* Google Map Embed & Location Details */}
        <LocationSection lang={lang} />

        {/* Frequently Asked Questions */}
        <FaqSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Sticky WhatsApp Button */}
      <WhatsAppFloatingButton lang={lang} />

      {/* Pop-up Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        lang={lang}
        initialService={selectedService}
      />
    </div>
  );
}
