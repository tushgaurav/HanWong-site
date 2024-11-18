import SectionWrapper from "../../SectionWrapper";

const AboutUs = () => {
  return (
    <SectionWrapper>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h1 className="text-gray-800 text-3xl font-semibold sm:text-4xl mb-10">
            About Han Wong International Taekwondo
          </h1>
        </div>
        <div className="space-y-8 max-w-[85ch] mx-auto mt-10 lg:text-center">
          <p className="text-lg leading-relaxed">
            At Han Wong International Taekwondo, our mission is to honor and promote the rich heritage of Taekwondo as a discipline rooted in tradition, respect, and resilience. Guided by the philosophy of "No Politics, Only Traditional Taekwondo Training," we strive to create an environment where students and practitioners can fully immerse themselves in the authentic practice of Taekwondo. Our focus is on cultivating mental strength, physical endurance, and personal growth, ensuring that each member gains a deeper understanding of Taekwondo's true values beyond competition.
          </p>
          <p className="text-lg leading-relaxed">
            Our commitment is to preserve the integrity of Taekwondo by offering training that respects its origins, without interference from commercial or political influences. We believe that every individual, regardless of background, deserves access to genuine Taekwondo teachings that prioritize personal development and respect over rivalry. Through our classes, seminars, and community programs, Han Wong International stands as a beacon of traditional Taekwondo, empowering practitioners to embrace the discipline's foundational values and carry forward its legacy with pride and authenticity.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
