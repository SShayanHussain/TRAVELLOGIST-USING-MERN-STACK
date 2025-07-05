import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import packageRoutes from './routes/packageRoutes.js';
import authRoutes from './routes/authRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

app.use('/api/bookings', bookingRoutes);



app.use('/api/auth', authRoutes);

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/packages', packageRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch(err => console.log(err));
