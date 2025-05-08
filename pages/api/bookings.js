import { connectDB } from '@/lib/db';

export default async function handler(req, res) {
  const db = await connectDB();

  if (req.method === 'POST') {
    const { name, email, eventDate, package: selectedPackage, notes } = req.body;

    try {
      const [result] = await db.execute(
        'INSERT INTO bookings (name, email, event_date, package, notes) VALUES (?, ?, ?, ?, ?)',
        [name, email, eventDate, selectedPackage, notes]
      );
      res.status(201).json({ message: 'Booking saved', id: result.insertId });
    } catch (err) {
      res.status(500).json({ error: 'Database error', details: err.message });
    }
  }

  else if (req.method === 'GET') {
    try {
      const [rows] = await db.execute('SELECT * FROM bookings');
      res.status(200).json(rows);
    } catch (err) {
      res.status(500).json({ error: 'Could not fetch bookings', details: err.message });
    }
  }

  else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
