import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams(); // packageId from URL
  const [form, setForm] = useState({ travelers: 1, travelDate: '', specialNote: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:5000/api/bookings', {
        packageId: id,
        ...form,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Booking successful!');
    } catch (err) {
      alert(err.response?.data?.message || 'Booking failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Book This Package</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="date" name="travelDate" onChange={handleChange} className="w-full border px-4 py-2 rounded" required />
        <input type="number" name="travelers" min="1" onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Travelers" required />
        <textarea name="specialNote" onChange={handleChange} className="w-full border px-4 py-2 rounded" placeholder="Special Note" />
        <button className="bg-blue-600 text-white w-full py-2 rounded">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
