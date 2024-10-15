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
          alt="Gain Confidence"
        />
      ),
      title: "Gain Confidence",
      desc: "Experience rapid progress and gain confidence as you master taekwondo skills. Our program emphasizes quick learning and joyful achievement.",
    },
    {
      icon: (
        <Image
          src="/icons/community.png"
          width={48}
          height={48}
          alt="Huge Community"
        />
      ),
      title: "Huge Community",
      desc: "Join our community of successful students who have transformed their lives through taekwondo. From beginners to black belts, every journey inspires.",
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
      title: "Legacy of Champions",
      desc: "Our students have competed and won in national and international tournaments. Be part of a legacy of champions and push your limits.",
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
