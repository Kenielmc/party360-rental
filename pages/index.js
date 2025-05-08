import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', eventDate: '', package: '', notes: '' });
  const [msg, setMsg] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('/api/bookings', form);
      setMsg('✅ Booking submitted!');
      setForm({ name: '', email: '', eventDate: '', package: '', notes: '' });
    } catch (err) {
      setMsg('❌ Something went wrong.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '1rem' }}>
      <h1>📸 Rent Our 360 Party Camera</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
        <input name="eventDate" type="date" value={form.eventDate} onChange={handleChange} required /><br />
        <select name="package" value={form.package} onChange={handleChange} required>
          <option value="">Select Package</option>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="VIP">VIP</option>
        </select><br />
        <textarea name="notes" placeholder="Extra Notes" value={form.notes} onChange={handleChange} /><br />
        <button type="submit">Submit Booking</button>
      </form>
      <p>{msg}</p>
    </div>
  );
}
