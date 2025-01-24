import SectionWrapper from "../../SectionWrapper";

const NextTournament = () => {
  return (
    <SectionWrapper>
      <div className="max-w-screen-xl mt-10 mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
          <h1 className="text-orange-600 text-3xl font-semibold text-center sm:text-4xl mb-10">
            Next Tournament
          </h1>

          <div className="flex flex-col items-center space-y-2">
            <p className="text-2xl font-semibold">5th Scotland Open Online Poomsae And Speed Kicking Championship 2025</p>
          </div>
         
          <div className=" max-w-2xl mx-auto">
            <img 
              src="/images/poster.jpg" 
              alt="2nd Edinburgh Open Online Poomsae And Speed Kicking Championship 2024 Poster"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NextTournament;
