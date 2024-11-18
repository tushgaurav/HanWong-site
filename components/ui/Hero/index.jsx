import React from "react";
import NavLink from "../NavLink";
import { Globe, Award, Users, Heart, Medal } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-orange-50/50 to-white">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ff570022_1px,transparent_1px)] bg-[length:32px_32px]" />
      </div>

      <div className="relative custom-screen min-h-screen flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8 text-center lg:text-left my-24 lg:my-0">
              <div className="space-y-6">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-800 flex items-center gap-2 font-medium border border-orange-200">
                    <Medal className="w-4 h-4" />
                    <span>Global Charity Tournaments</span>
                  </span>
                </div>

                <h1 className="relative text-5xl sm:text-7xl font-extrabold text-gray-900 pb-2">
                  Join Han Wong International!
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Join Taekwondo Tournaments Globally, Contributing to a Better World
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <NavLink
                  href="mailto:join@hanwong.in"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-white bg-orange-600 hover:bg-orange-500 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-orange-200"
                >
                  <Globe className="w-5 h-5" />
                  Join Us Now
                </NavLink>
                <NavLink
                  href="#tournaments"
                  className="w-full sm:w-auto px-8 py-4 rounded-full text-orange-600 border-2 border-orange-200 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-2"
                  scroll={false}
                >
                  <Medal className="w-5 h-5" />
                  View Previous Tournaments
                </NavLink>
              </div>
            </div>

            {/* Right content - Stats */}
            <div className="relative mb-40 md:mb-0">
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    value: "10+",
                    label: "Global Tournaments",
                    gradient: "from-orange-500 to-orange-600",
                  },
                  {
                    icon: Users,
                    value: "1000+",
                    label: "Active Athletes",
                    gradient: "from-orange-600 to-orange-700",
                  },
                  {
                    icon: Heart,
                    value: "$10K+",
                    label: "Donated to Charity",
                    gradient: "from-orange-500 to-orange-600",
                  },
                  {
                    icon: Medal,
                    value: "24/7",
                    label: "Online Assistance",
                    gradient: "from-orange-600 to-orange-700",
                  },
                ].map(({ icon: Icon, value, label }, idx) => (
                  <div
                    key={idx}
                    className="group relative p-6 rounded-2xl bg-white border border-orange-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300"
                    style={{
                      transform: `translateY(${idx % 2 ? "20px" : "0"})`,
                    }}
                  >
                    <Icon className="w-8 h-8 text-orange-600 mb-4" />
                    <h3 className="text-3xl font-bold text-gray-900 mb-1">
                      {value}
                    </h3>
                    <p className="text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/20 to-orange-100/20 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-orange-100/20 to-orange-50/20 blur-2xl -z-10" />
      </div>
    </section>
  );
};

export default Hero;
