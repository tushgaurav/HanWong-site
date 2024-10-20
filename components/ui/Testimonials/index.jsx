import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Arjun Patel",
      title: "16, I gained confidence through training.",
      quote:
        "FastTKD has been a game-changer for me! I used to be so shy, but now I feel super confident. The instructors are lit, and the training is tough but fun. It's not just about kicks and punches, it's about becoming a better version of yourself. 10/10 would recommend!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      name: "Priya Sharma",
      title: "22, Joined for weight loss but found a community!",
      quote:
        "I joined FastTKD to lose weight, but I gained so much more. The community here is like a second family. The workouts are intense, but everyone supports each other. Plus, learning self-defense makes me feel safer. It's been an amazing journey!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      name: "Rahul Mehta",
      title: "28, Stress relief and focus.",
      quote:
        "As a working professional, FastTKD helps me de-stress after long office hours. The meditation sessions are a boon for mental peace. I've noticed improvement in my focus at work too. It's not just a workout, it's a lifestyle change.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Anjali Desai",
      title: "19, Initially hesitant but found encouragement.",
      quote:
        "I was worried about joining as a complete beginner, but the instructors at FastTKD are so patient and encouraging. They break down complex moves and make learning fun. I've made great friends here and look forward to every class. Best decision ever!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
      name: "Vikram Singh",
      title: "14, Personal growth",
      quote:
        "My parents enrolled me in FastTKD to channel my energy, and now I'm hooked! The classes are challenging but exciting. I've learned discipline, respect, and how to set goals. My grades have improved too. FastTKD rocks!",
    },
    {
      avatar:
        "https://images.unsplash.com/photo-1590038767624-dac5740a997b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
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
            Voices of Transformation
          </h2>
          <p className="mt-3 text-gray-600">Hear from our FastTKD family</p>
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
