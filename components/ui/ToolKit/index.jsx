import SectionWrapper from "../../SectionWrapper";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import Image from "next/image";
const ToolKit = () => {
  const features = [
    {
      videoId: "dhK_nj3Zz1A",
    },
    {
      videoId: "7DUV4t9eHBc",
    },
    {
      videoId: "7IoJp-OVVKc",
    },
    {
      videoId: "IIVAr9dStaY",
    },
    {
      videoId: "IIVAr9dStaY",
    },
    {
      videoId: "IIVAr9dStaY",
    },

    {
      videoId: "e7BHUa63mgE",
    },
    {
      videoId: "o1QJnnGLxIU",
    },
    {
      videoId: "IIVAr9dStaY",
    },
  ];

  return (
    <SectionWrapper>
      <div
        id="tournaments"
        className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8"
      >
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Our Previous Tournaments
          </h2>
          <p>These are a few of our favourite things</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="">
                <div className="rounded-2xl overflow-hidden">
                  <LiteYouTubeEmbed
                    id={item.videoId}
                    title="FT Taekwondo"
                    muted
                    poster="hqdefault"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
