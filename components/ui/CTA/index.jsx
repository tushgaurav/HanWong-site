import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/images/community.png";
import Image from "next/image";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="custom-screen">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <Image
              src={ctaImage}
              className="rounded-2xl shadow-lg w-full h-auto"
              alt="Online Taekwondo Tournament Community"
              priority
            />
          </div>
          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-4xl text-orange-600 font-extrabold mb-6 leading-tight">
              How COVID-19 Impacted Taekwondo and How We Came Out Stronger
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The COVID-19 pandemic posed significant challenges to Taekwondo practitioners worldwide. With no offline events or competitions being conducted, practitioners were forced to adapt to an entirely new way of training. Many struggled to maintain physical and mental well-being while missing out on the community aspect of the sport.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Recognizing this, Grandmaster Han Wong initiated online Taekwondo championships, allowing practitioners to compete safely from their homes. The event fees supported those affected by the pandemic, showcasing Taekwondo's resilience and compassion.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              These initiatives have since become a symbol of turning adversity into opportunity, keeping the Taekwondo community connected and thriving even in challenging times.
            </p>
            <div className="flex gap-x-4 mt-8">
              <NavLink
                href="https://forms.gle/ZCcZiYHpGUa5KqeWA"
                className="px-6 py-3 text-white bg-orange-600 rounded-lg shadow-md hover:bg-orange-700 font-medium transition"
              >
                Contact Us
              </NavLink>
              {/* <NavLink
                href="/learn-more"
                className="px-6 py-3 text-orange-600 bg-white border border-orange-600 rounded-lg shadow-md hover:bg-orange-50 font-medium transition"
              >
                Learn More
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
