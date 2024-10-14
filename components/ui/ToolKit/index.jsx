import SectionWrapper from "../../SectionWrapper";
import Image from "next/image";
import wordpress from "../../../public/icons/wordpress.svg";
import nextjs from "../../../public/icons/nextjs.svg";
import tailwind from "../../../public/icons/tailwind.svg";
import nodejs from "../../../public/icons/nodejs.svg";
import vercel from "../../../public/icons/vercel.svg";
import figma from "../../../public/icons/figma.svg";

const ToolKit = () => {
  const features = [
    {
      icon: wordpress,
      title: "Beginner Taekwondo",
      desc: "Perfect for those new to martial arts.",
    },
    {
      icon: nextjs,
      title: "Advanced Techniques",
      desc: "For experienced practitioners looking to refine their skills.",
    },
    {
      icon: tailwind,
      title: "Youth Classes",
      desc: "Tailored for children and teenagers.",
    },
    {
      icon: nodejs,
      title: "Fitness-Focused Taekwondo",
      desc: "Emphasizing physical conditioning.",
    },
    {
      icon: vercel,
      title: "Meditation and Mindfulnes",
      desc: "Integrating spiritual aspects of martial arts.",
    },
    {
      icon: figma,
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
            Our Programs
          </h2>
          <p>These are a few of our favourite things</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex gap-x-4">
                <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                  <Image src={item.icon} alt={item.title} />
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
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
