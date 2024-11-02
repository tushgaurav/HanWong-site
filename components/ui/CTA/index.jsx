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
              Why Online Tournaments?
            </h2>
            <p className="mt-3 text-gray-600">
              <b>Cost-Effective:</b> Get the same exposure at just 1/50th of the
              usual cost.
              <br /> <b>Support a Cause: </b>Every kick, every poomsae you
              perform makes a difference, helping someone in need.
              <br />
              <b>Easy Entry Point: </b>A perfect stepping stone for anyone
              starting their international career.
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
