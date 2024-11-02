import SectionWrapper from "../../SectionWrapper";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import Image from "next/image";
const ToolKit = () => {
  const features = [
    {
      videoId: "dhK_nj3Zz1A",
      title: "Beginner Taekwondo",
      desc: "Perfect for those new to martial arts.",
    },
    {
      videoId: "7DUV4t9eHBc",
      title: "Advanced Techniques",
      desc: "For experienced practitioners looking to refine their skills.",
    },
    {
      videoId: "7IoJp-OVVKc",
      title: "Youth Classes",
      desc: "Tailored for children and teenagers.",
    },
    {
      videoId: "IIVAr9dStaY",
      title: "Fitness-Focused Taekwondo",
      desc: "Emphasizing physical conditioning.",
    },
    {
      videoId: "IIVAr9dStaY",
      title: "Meditation and Mindfulnes",
      desc: "Integrating spiritual aspects of martial arts.",
    },
    {
      videoId: "IIVAr9dStaY",
      title: "Main Event",
      desc: "Figma is a web-based graphics editing and user interface design app.",
    },

    {
      videoId: "e7BHUa63mgE",
      title: "4th Scotland Taekwondo Open",
      desc: "Emphasizing physical conditioning.",
    },
    {
      videoId: "o1QJnnGLxIU",
      title: "Han Wong World Wide International - Speed Kicking",
      desc: "Integrating spiritual aspects of martial arts.",
    },
    {
      videoId: "IIVAr9dStaY",
      title: "Figma",
      desc: "Figma is a web-based graphics editing and user interface design app.",
    },
  ];

  return (
    <SectionWrapper>
      <div
        id="toolkit"
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
                <div className="mt-3">
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-1">{item.desc}</p>
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
