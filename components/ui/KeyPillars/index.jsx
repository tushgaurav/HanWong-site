import SectionWrapper from "../../SectionWrapper";

const KeyPillars = () => (
  <SectionWrapper className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Key Pillars of Han Wong International
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Our organization is built upon foundational values that reflect our
          commitment to traditional Taekwondo, resilience, community, and global
          reach.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Tradition */}
        <div className="group p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tradition</h3>
          <p className="text-gray-600 leading-relaxed text center">
            At the heart of Han Wong International Taekwondo lies a commitment
            to tradition. We honor the time-tested techniques and philosophies
            established by Taekwondo's founders, preserving the discipline as a
            martial art deeply rooted in history and respect.
          </p>
        </div>

        {/* Resilience */}
        <div className="group p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Resilience</h3>
          <p className="text-gray-600 leading-relaxed">
            Resilience is integral to Taekwondo and to our approach. It is a
            discipline that builds inner strength, perseverance, and mental
            clarity, helping practitioners overcome personal and physical
            challenges.
          </p>
        </div>

        {/* Community */}
        <div className="group p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Community</h3>
          <p className="text-gray-600 leading-relaxed">
            Our organization believes in the strength of community, creating a
            supportive network for learning and mutual growth. We foster
            camaraderie and respect among Taekwondo practitioners worldwide.
          </p>
        </div>

        {/* Global Reach */}
        <div className="group p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-gray-50 hover:bg-white">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Global Reach</h3>
          <p className="text-gray-600 leading-relaxed">
            With a mission to spread authentic Taekwondo globally, Han Wong
            International reaches beyond borders, offering accessible training
            and fostering respect for Taekwondo worldwide.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default KeyPillars;
