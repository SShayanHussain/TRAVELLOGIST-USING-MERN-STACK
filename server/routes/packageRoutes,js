import express from 'express';
import { getPackages, createPackage } from '../controllers/packageController.js';

const router = express.Router();

router.get('/', getPackages);
router.post('/', createPackage); // will protect later with admin auth

export default router;
