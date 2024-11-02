import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";

const Features = () => {
  const features = [
    {
      icon: (
        <Image
          src="/icons/confidence.png"
          width={48}
          height={48}
          alt="Cost-Effective"
        />
      ),
      title: "Cost-Effective",
      desc: "Get the same exposure at just 1/50th of the usual cost.",
    },
    {
      icon: (
        <Image
          src="/icons/community.png"
          width={48}
          height={48}
          alt="Support a Cause"
        />
      ),
      title: "Support a Cause",
      desc: "Every kick, every poomsae you perform makes a difference, helping someone in need.",
    },
    {
      icon: (
        <Image
          src="/icons/tournament.png"
          width={48}
          height={48}
          alt="Legacy of Champions"
        />
      ),
      title: "Easy Entry Point",
      desc: "A perfect stepping stone for anyone starting their international career.",
    },
  ];

  return (
    <SectionWrapper>
      <div id="features" className="custom-screen text-gray-600">
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-3">
              <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-lg text-gray-800 font-semibold">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default Features;
