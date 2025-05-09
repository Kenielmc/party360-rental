export default function BookingForm() {
    return (
      <section id="booking" className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Book Your Date</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="date"
            name="eventDate"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <select
            name="package"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select a Package</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
          </select>
          <textarea
            name="notes"
            placeholder="Any special instructions?"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-600 text-white py-3 w-full rounded-md hover:bg-purple-700 transition"
          >
            Submit Booking
          </button>
        </form>
      </section>
    );
  }
  