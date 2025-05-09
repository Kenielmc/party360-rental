import { connectDB } from '@/lib/db';

export default async function handler(req, res) {
  const { id } = req.query;

  const db = await connectDB();

  if (req.method === 'PUT') {
    const { name, email, eventDate, package: selectedPackage, notes } = req.body;

    try {
      await db.execute(
        `UPDATE bookings 
         SET name = ?, email = ?, event_date = ?, package = ?, notes = ?
         WHERE id = ?`,
        [name, email, eventDate, selectedPackage, notes, id]
      );
      return res.status(200).json({ message: 'Booking updated' });
    } catch (err) {
      return res.status(500).json({ error: 'Update failed', details: err.message });
    }
  }

  else if (req.method === 'DELETE') {
    try {
      await db.execute('DELETE FROM bookings WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Booking deleted' });
    } catch (err) {
      return res.status(500).json({ error: 'Delete failed', details: err.message });
    }
  }

  else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
