import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:5000/api/bookings', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBookings(res.data);
      } catch (err) {
        alert('Access Denied or Error');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-6 overflow-x-auto">
      <h1 className="text-2xl font-bold mb-4">All Bookings</h1>
      <table className="min-w-full bg-white shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-4 py-2">User</th>
            <th className="text-left px-4 py-2">Package</th>
            <th className="text-left px-4 py-2">Date</th>
            <th className="text-left px-4 py-2">Travelers</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b._id} className="border-t">
              <td className="px-4 py-2">{b.user.fullName}</td>
              <td className="px-4 py-2">{b.package.title}</td>
              <td className="px-4 py-2">{b.travelDate}</td>
              <td className="px-4 py-2">{b.travelers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
