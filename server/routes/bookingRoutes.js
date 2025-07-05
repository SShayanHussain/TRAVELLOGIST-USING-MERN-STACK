import express from 'express';
import { createBooking, getUserBookings } from '../controllers/bookingController.js';
import auth, { adminOnly } from '../middleware/authMiddleware.js';
import { getAllBookings } from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.get('/my', authMiddleware, getUserBookings); 
router.get('/', auth, adminOnly, getAllBookings);


export default router;

