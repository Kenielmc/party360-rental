import { connectDB } from '@/lib/db';

export default async function handler(req, res) {
  const db = await connectDB();

  if (req.method === 'POST') {
    const { name, email, eventDate, package: selectedPackage, notes } = req.body;

    try {
      console.log('Received form:', req.body);

      const [result] = await db.execute(
        'INSERT INTO bookings (name, email, event_date, package, notes) VALUES (?, ?, ?, ?, ?)',
        [name, email, eventDate, selectedPackage, notes]
      );

      return res.status(201).json({ message: 'Booking saved', id: result.insertId });
    } catch (err) {
      console.error('❌ Database Error:', err.message);
      return res.status(500).json({ error: 'Database error', details: err.message });
    }
  }

  res.status(405).json({ message: 'Method not allowed' });
}
