import SectionWrapper from "../../SectionWrapper";

const Testimonials = () => {
  const testimonials = [
    {
      avatar: "/images/testimonials/default.jpg",
      name: "Teresa Semmunegus",
      title: "United States of America",
      quote:
        "It was a great experience and what a noble cause. In today's lifestyle where egocentrism and selfishness are the rule, the work of charity is priceless. As Mother Teresa said 'Charity is above love.' I agree by more than 100%.",
    },
    {
      avatar: "/images/testimonials/jim.jpg", 
      name: "Jim Harp",
      title: "United States of America",
      quote:
        "I encourage anyone wanting to develop their Poomsae competition skills to enter the online tournaments sponsored by GM Han Wong. These are excellent opportunities to measure yourselves against international competition and contribute to charitable causes.",
    },
    {
      avatar: "/images/testimonials/russ.jpg",
      name: "Russ Wood",
      title: "Australia",
      quote:
        "These competitions are incredible events as the funds raised provide food for those less fortunate. Not only will competitors gain international experience without traveling overseas, but more importantly, they contribute to helping people who are less fortunate than ourselves.",
    },
    {
      avatar: "/images/testimonials/default.jpg",
      name: "Frederick Dytianquin",
      title: "Philippines",
      quote:
        "Thank you for your hard work and dedication in organizing this event. It was a wonderful experience, and we truly hope for more tournaments like this in the future where we can showcase our taekwondo skills while also contributing to helping others.",
    },
    {
      avatar: "/images/testimonials/default.jpg",
      name: "James Alistair Kolatowicz",
      title: "Australia",
      quote:
        "It's amazing to see people from different parts of the world coming together and giving it their best. The effort put into editing all the videos is truly commendable—it really brought the event to life!",
    },
    {
      avatar: "/images/testimonials/default.jpg",
      name: "Daryl Chua",
      title: "Singapore",
      quote:
        "Without competitions, students miss out on valuable opportunities to gain practical experience and showcase their skills. These events are essential for their growth and development.",
    },
  ];

  return (
    <SectionWrapper className="pb-4">
      <div id="testimonials" className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-2xl sm:text-center md:mx-auto">
          <h2 className="text-orange-600 text-3xl font-semibold sm:text-4xl">
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
