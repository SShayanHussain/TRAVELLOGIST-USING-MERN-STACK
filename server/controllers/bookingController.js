import Booking from '../models/Booking.js';

export const createBooking = async (req, res) => {
  const { packageId, travelers, travelDate, specialNote } = req.body;
  try {
    const booking = new Booking({
      user: req.user.id,
      package: packageId,
      travelers,
      travelDate,
      specialNote,
    });
    await booking.save();
    res.status(201).json({ message: 'Booking successful', booking });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate('package');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user').populate('package');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

