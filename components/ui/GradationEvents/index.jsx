const GradationEvents = () => (
  <section className="bg-white py-16" id="events">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Gradation Events
      </h2>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Belt Progression
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our belt system progresses from white (beginner) through yellow, green, 
            blue, red, and ultimately to black belt. Each level represents mastery 
            of specific techniques and principles of Taekwondo.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Gradation Process
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Promotions are based on technical proficiency, dedication to training, 
            and time invested at each belt level. Students demonstrate their skills 
            in formal ceremonies evaluated by senior instructors.
          </p>
        </div>

        <div className="border-t pt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            Next Gradation Sessions
          </h3>
          <div className="flex justify-center gap-8 mb-8 text-gray-600">
            <p>Offline: December 15, 2023</p>
            <p>Online: January 10, 2024</p>
          </div>
          <div className="text-center">
            <a
              href="/register"
              className="inline-block bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GradationEvents;
