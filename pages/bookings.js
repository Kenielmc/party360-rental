import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.get('/api/bookings');
        setBookings(res.data);
      } catch (err) {
        console.error('Error fetching bookings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">📋 All Bookings</h1>
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-collapse bg-white rounded-lg shadow-lg">
            <thead className="bg-purple-100 text-left">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Date</th>
                <th className="p-3">Package</th>
                <th className="p-3">Notes</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-t hover:bg-purple-50">
                  <td className="p-3">{booking.name}</td>
                  <td className="p-3">{booking.email}</td>
                  <td className="p-3">{booking.event_date}</td>
                  <td className="p-3">{booking.package}</td>
                  <td className="p-3">{booking.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Layout>
  );
}
