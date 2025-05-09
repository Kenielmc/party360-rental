import { useState } from 'react';
import axios from 'axios';

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    eventDate: '',
    package: '',
    notes: ''
  });
  const [msg, setMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg('');
    try {
      const response = await axios.post('/api/bookings', form);
      if (response.status === 201) {
        setMsg('✅ Booking submitted successfully!');
        setForm({ name: '', email: '', eventDate: '', package: '', notes: '' });
      } else {
        setMsg('⚠️ Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setMsg('❌ Failed to submit booking.');
    }
  };

  return (
    <section id="booking" className="bg-white p-8 rounded-xl shadow-xl max-w-2xl mx-auto mb-12">
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Book Your Date</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="date"
          name="eventDate"
          value={form.eventDate}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <select
          name="package"
          value={form.package}
          onChange={handleChange}
          required
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
          value={form.notes}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white py-3 w-full rounded-md hover:bg-purple-700 transition"
        >
          Submit Booking
        </button>
        {msg && <p className="text-center mt-4 font-semibold text-indigo-700">{msg}</p>}
      </form>
    </section>
  );
}

  