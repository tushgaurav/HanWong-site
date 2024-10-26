import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import IntroTextSection from "../components/ui/IntroTextSection";
import ToolKit from "../components/ui/ToolKit";
import YoutubeEmbed from "../components/YoutubeEmbed";
import Charities from "../components/ui/Charities";

export default function Home() {
  return (
    <>
      <Head>
        <title>FastTKD - Achieve balance & strength</title>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      {/* <LogoGrid /> */}
      <YoutubeEmbed />
      <IntroTextSection />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <Charities />
      <FooterCTA />
    </>
  );
}
