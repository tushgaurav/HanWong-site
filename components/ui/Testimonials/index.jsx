import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "/images/testimonials/arjun.webp",
      name: "Arjun Patel",
      title: "16, I gained confidence through training.",
      quote:
        "FastTKD has been a game-changer for me! I used to be so shy, but now I feel super confident. The instructors are lit, and the training is tough but fun. It's not just about kicks and punches, it's about becoming a better version of yourself. 10/10 would recommend!",
    },
    {
      avatar: "/images/testimonials/priya.webp",
      name: "Priya Sharma",
      title: "22, Joined for weight loss but found a community!",
      quote:
        "I joined FastTKD to lose weight, but I gained so much more. The community here is like a second family. The workouts are intense, but everyone supports each other. Plus, learning self-defense makes me feel safer. It's been an amazing journey!",
    },
    {
      avatar: "/images/testimonials/rahul.webp",
      name: "Rahul Mehta",
      title: "28, Stress relief and focus.",
      quote:
        "As a working professional, FastTKD helps me de-stress after long office hours. The meditation sessions are a boon for mental peace. I've noticed improvement in my focus at work too. It's not just a workout, it's a lifestyle change.",
    },
    {
      avatar: "/images/testimonials/anjali.webp",
      name: "Anjali Desai",
      title: "19, Initially hesitant but found encouragement.",
      quote:
        "I was worried about joining as a complete beginner, but the instructors at FastTKD are so patient and encouraging. They break down complex moves and make learning fun. I've made great friends here and look forward to every class. Best decision ever!",
    },
    {
      avatar: "/images/testimonials/vikram.webp",
      name: "Vikram Singh",
      title: "14, Personal growth",
      quote:
        "My parents enrolled me in FastTKD to channel my energy, and now I'm hooked! The classes are challenging but exciting. I've learned discipline, respect, and how to set goals. My grades have improved too. FastTKD rocks!",
    },
    {
      avatar: "/images/testimonials/meera.webp",
      name: "Meera Reddy",
      title: "35, Family participation and bonding",
      quote:
        "FastTKD has been a blessing for our family. We joined together for fitness, but it's become our special bonding time. The instructors create a positive environment where we motivate each other. It's not just exercise, it's an investment in our health and happiness",
    },
  ];

  return (
    <SectionWrapper className="pb-4">
      <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Hear it from the community
          </h2>
          <p className="mt-3 text-gray-600">
            Reviews from our past participants.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li key={idx} className="bg-white border p-4 rounded-xl">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="w-14 h-14 object-cover rounded-full"
                      alt={item.name}
                    />
                    <div>
                      <span className="block text-gray-800 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
