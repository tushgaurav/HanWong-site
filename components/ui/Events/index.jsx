import { useState, useEffect } from "react";

const EventCountdown = ({ eventDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4">
      {Object.keys(timeLeft).length ? (
        <>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">{timeLeft.days}</span>
            <span className="text-xs uppercase text-gray-500">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">{timeLeft.hours}</span>
            <span className="text-xs uppercase text-gray-500">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">{timeLeft.minutes}</span>
            <span className="text-xs uppercase text-gray-500">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-indigo-600">{timeLeft.seconds}</span>
            <span className="text-xs uppercase text-gray-500">Seconds</span>
          </div>
        </>
      ) : (
        <span className="text-2xl font-bold text-green-600">Event Started!</span>
      )}
    </div>
  );
};

const Events = () => {
  const events = [
    {
      title: "Annual Taekwondo Seminar",
      date: "2024-02-20T10:00:00",
      imageUrl: "/images/seminar.jpg",
      description:
        "A comprehensive seminar covering advanced techniques and traditional forms.",
      link: "/events/seminar",
    },
    {
      title: "National Championship Tournament", 
      date: "2024-03-15T09:00:00",
      imageUrl: "/images/tournament.jpg",
      description:
        "Join top athletes from around the country for a thrilling Taekwondo tournament.",
      link: "/events/tournament",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events & Programs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for these exciting opportunities to learn, compete, and grow in your Taekwondo journey
          </p>
        </div>

        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white px-6 text-center">
                    {event.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  {event.description}
                </p>
                <div className="mb-6">
                  <EventCountdown eventDate={event.date} />
                </div>
                <div className="text-center">
                  <a
                    href={event.link}
                    className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-indigo-700 transform hover:-translate-y-1 transition-all duration-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/events"
            className="inline-flex items-center gap-2 bg-gray-900 text-white py-4 px-8 rounded-full font-bold hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-200"
          >
            View Full Events Calendar
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Events;
