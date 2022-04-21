import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DCollectionSection from '../components/desktop/DCollectionSection';
import DRoadmapSection from '../components/desktop/DRoadmapSection';
import TeamSection from '../components/TeamSection';
import Footer from '../components/Footer';
import MCollectionSection from '../components/mobile/MCollectionSection';
import MRoadmapSection from '../components/mobile/MRoadmapSection';
import FaqSection from '../components/FaqSection';
import JoinCommunitySection from '../components/JoinComunitySection';

export default function Home() {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>Chuel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HeroSection />

      {/* For Desktop */}
      <div className="hidden md:block">
        <DCollectionSection />
        <DRoadmapSection />
      </div>

      {/* For Mobile */}
      <div className="block md:hidden">
        <MCollectionSection />
        <MRoadmapSection />
      </div>

      <FaqSection />
      <JoinCommunitySection />
      <TeamSection />
      <Footer />
    </div>
  );
}
