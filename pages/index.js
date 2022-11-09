import { signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';

import NavbarTwo from "../components/_App/NavbarTwo";
// import MainBanner from '../components/HomeDigitalMarketing/MainBanner';
import Partner from '../components/Common/Partner';
import MarketingProcess from '../components/HomeDigitalMarketing/MarketingProcess';
import AboutContent from '../components/HomeDigitalMarketing/AboutContent';
import OurServices from '../components/HomeDigitalMarketing/OurServices';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
// import PricingCardStyleOne from '../components/PricingCard/PricingCardStyleOne';
// import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import LatestBlogPostStyleTwo from '../components/Common/LatestBlogPostStyleTwo';
import FooterTwo from '../components/_App/FooterTwo';
import Layout from "../components/_App/Layout";
import MainBanner from '../components/HomeITAgency/MainBanner';

export default function Index() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session == null) return;
    console.log('session.jwt', session.jwt);
  }, [session]);

  return (
    <Layout>
        <NavbarTwo />

        <MainBanner />

        <Partner />

        <MarketingProcess />

        <AboutContent />

        <OurServices />

        <FunFactsTwo />

        <TestimonialStyleTwo />

        <LatestBlogPostStyleTwo />
        
        <FooterTwo />
    </Layout>
  );
}

