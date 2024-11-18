import SectionWrapper from "../../SectionWrapper";

const NextTournament = () => {
  return (
    <SectionWrapper>
      <div className="max-w-screen-xl mt-10 mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h1 className="text-gray-800 text-3xl font-semibold text-center sm:text-4xl mb-10">
            Next Tournament
          </h1>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-2xl font-semibold">June 2025</p>
            <p className="text-lg">1st - 3rd</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <p className="text-2xl font-semibold">Location</p>
            <p className="text-lg">New Delhi, India & Online</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NextTournament;
