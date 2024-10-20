import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/images/community.png";
import Image from "next/image";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              How Covid Impacted Taekwondo and How we came out stronger?
            </h2>
            <p className="mt-3 text-gray-600">
              When COVID hit in early 2020, nearly all physical Taekwondo
              tournaments came to a halt, leaving our community struggling with
              employment and other hardships. In response, Grand Master Han Wong
              took action by launching online Taekwondo tournaments. These
              events not only provided participants with international exposure
              at a fraction of the usual cost but also helped raise funds
              through registration fees, which were directed to support
              communities in need.
            </p>
            <NavLink
              href="/get-started"
              className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
            >
              Get started
            </NavLink>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
