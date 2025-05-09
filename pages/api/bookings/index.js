import { connectDB } from '@/lib/db'; // adjust if your db import path is different

export default async function handler(req, res) {
  const db = await connectDB();

  if (req.method === 'GET') {
    try {
      const [rows] = await db.execute('SELECT * FROM bookings ORDER BY event_date DESC');
      return res.status(200).json(rows);
    } catch (error) {
      return res.status(500).json({ message: 'Failed to fetch bookings', error });
    }
  }

  if (req.method === 'POST') {
    const { name, email, eventDate, package: selectedPackage, notes } = req.body;

    if (!name || !email || !eventDate || !selectedPackage) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
      await db.execute(
        'INSERT INTO bookings (name, email, event_date, package, notes) VALUES (?, ?, ?, ?, ?)',
        [name, email, eventDate, selectedPackage, notes]
      );
      return res.status(201).json({ message: 'Booking created' });
    } catch (error) {
      return res.status(500).json({ message: 'Failed to create booking', error });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).json({ message: `Method ${req.method} not allowed` });
}
