import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen" id="participation">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          How to participate?
        </h2>
        <p className="mt-3 text-gray-600">
          Get in touch with us today! We offer classes for all ages and skill
          levels. Whether you're a beginner or a seasoned practitioner, we have
          a class for you.
        </p>
        <div className="my-10 mb-5 rounded-2xl overflow-hidden">
          <LiteYouTubeEmbed
            id="EJ64vrUXUWc"
            title="Start your Taekwondo journey"
          />
        </div>
        <NavLink
          href="/get-started"
          className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
