import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/images/community.png";
import Image from "next/image";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Why Online Tournaments?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Online tournaments break down geographical barriers, making Taekwondo competitions accessible to practitioners worldwide. They provide a unique platform for showcasing skills, connecting with the global Taekwondo community, and continuing the tradition of martial arts excellence in the digital age.
            </p>
            <div className="flex gap-4">
              <NavLink
                href="/tournaments"
                className="inline-block px-8 py-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors duration-300"
              >
                Join Tournament
              </NavLink>
              <NavLink
                href="/learn-more"
                className="inline-block px-8 py-3 text-indigo-600 bg-white border-2 border-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition-colors duration-300"
              >
                Learn More
              </NavLink>
            </div>
          </div>
          <div className="lg:w-1/2">
            <Image
              src={ctaImage}
              className="rounded-2xl shadow-xl w-full"
              alt="Online Taekwondo Tournament Community"
              priority
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
