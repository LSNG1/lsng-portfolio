"use client";

import Header from '@/components/Header';
import IntroductionSection from '@/components/IntroductionSection';
import ApprentissageSection from '@/components/ApprentissageSection';
import ProjetsSection from '@/components/ProjetsSection';
import CompetencesSection from '@/components/CompetencesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Page() {
  const sections = ['introduction', 'apprentissage', 'projets', 'competences', 'contact'];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Header sections={sections} />
      <main className="pt-16">
        <IntroductionSection />
        <ApprentissageSection />
        <ProjetsSection />
        <CompetencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
