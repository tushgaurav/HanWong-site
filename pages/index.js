import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import Testimonials from "../components/ui/Testimonials";
import IntroTextSection from "../components/ui/IntroTextSection";
import AboutUs from "../components/ui/AboutUs";
import ToolKit from "../components/ui/ToolKit";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Charities from "../components/ui/Charities";
import NextTournament from "../components/ui/NextTournament";
import KeyPillars from "../components/ui/KeyPillars";
import CovidImpact from "../components/ui/CovidImpact";
import Evolution from "../components/ui/Evolution";
import Events from "../components/ui/Events";
import GradationEvents from "../components/ui/GradationEvents";

export default function Home() {
  return (
    <>
      <Head>
        <title>FastTKD - Achieve balance & strength</title>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      <YoutubeEmbed />
      <NextTournament />
      <AboutUs />
      <KeyPillars />
      <IntroTextSection />
      <GradientWrapper>
        <CTA />
        <Features />
      </GradientWrapper>
      <CovidImpact />
      <GradationEvents />
      <ToolKit />
      <Evolution />
      {/* <Events /> */}
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <Charities />
      <FooterCTA />
    </>
  );
}
