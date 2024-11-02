import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/images/community.png";
import Image from "next/image";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className="custom-screen">
        <div className="items-center gap-12 flex-col lg:flex">
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Why Online Tournaments?
            </h2>
          </div>
          <Image
            src={ctaImage}
            className="rounded-lg md:max-w-lg"
            alt="Create Successful Business Models with Our IT Solutions"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
