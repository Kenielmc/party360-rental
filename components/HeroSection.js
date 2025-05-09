// ✅ DEFAULT EXPORT
export default function HeroSection() {
    return (
      <section className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white text-center py-20 px-6 rounded-xl shadow-lg mb-10">
        <h1 className="text-5xl font-bold mb-4">🎥 Capture the Moment in 360°</h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Book our 360 Party Camera and bring your event to life with immersive, unforgettable videos!
        </p>
        <a href="#booking" className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full hover:bg-purple-100 transition">
          Book Now
        </a>
      </section>
    );
  }