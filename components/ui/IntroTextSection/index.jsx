import SectionWrapper from "../../SectionWrapper";

const IntroTextSection = () => {
  return (
    <SectionWrapper>
      <div className="max-w-screen-xl mx-auto px-4 text-orange-600 md:px-8">
        <div className="max-w-3xl mx-auto space-y-3 sm:text-center">
          <h1 className="text-gray-800 text-4xl font-bold sm:text-5xl mb-12">
            Who is Grand Master Han Wong?
          </h1>
          <div className="relative">
            <img 
              src="/images/han.png" 
              alt="Grand Master Han Wong" 
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>
        </div>
        <div className="space-y-6 max-w-[75ch] mx-auto mt-16 text-lg leading-relaxed lg:text-center">
          <p className="font-medium text-xl text-gray-800">
            Grand Master Han Wong, originally from Malaysia, has been a pivotal
            figure in Taekwondo for over 50 years. As a pioneer of WTF-style
            Taekwondo in Edinburgh, Scotland, he initially came to the UK for
            education but has since made it his home, continuing to teach and
            inspire new generations of martial artists.
          </p>
          <p>
            Grand Master Han holds the unique honor of being the only Taekwondo
            Grand Master in the world to have earned a 9th Dan Black Belt from
            five prestigious organizations: Kukkiwon, Changmookwan, Global
            Taekwondo Federation, Jidokwan, and the Malaysian Global Taekwondo
            Federation. His Taekwondo journey began in the ITF style, where he
            earned his black belt under the legendary Grandmaster Rhee Ki-ha. He
            played a crucial role in promoting Taekwondo in the UK during its
            formative years.
          </p>
          <p>
            Throughout his career, Grand Master Han has received numerous
            accolades for his contributions to Taekwondo, including awards from
            the late General Choi Hong Hi. Despite having overcome cancer, he
            remains actively involved in teaching and holds roles such as
            International Class 1 Master Instructor by Kukkiwon, International
            Class 1 Poom Dan Examiner by Kukkiwon, and International Class 1
            Hanmadang Referee.
          </p>
          <p>
            Grand Master Han's influence extends beyond the UK, having
            established Jidokwan and Changmookwan schools in India and the
            Philippines. His charitable work over the past four years has
            positively impacted over 1,000 families, supporting flood victims
            and providing essentials such as food and clothing. He has also made
            it possible for underprivileged nations to participate in Taekwondo
            events without financial barriers. His charity efforts include blood
            donations, sanitary pad banks, wheelchair and tricycle donations,
            support for education, and clothing distribution.
          </p>
          <p>
            As a first-generation Taekwondo student, Grand Master Han trained
            with pioneers like Grandmasters Rhee Ki-ha, Choi Kwang Jo, and Park
            Jong So. His legacy is not only defined by his technical expertise,
            including his renowned split kick and flying side kick, but also by
            his dedication to passing on his knowledge and values to future
            generations.
          </p>
          <p className="text-xl text-gray-800">
            With a lifetime of achievements and a strong commitment to giving
            back, Grand Master Han Wong stands as a true icon and an inspiration
            within the Taekwondo community.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default IntroTextSection;
