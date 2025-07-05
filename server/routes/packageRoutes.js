import express from 'express';
import {
  getPackages,
  createPackage,
  updatePackage,
  deletePackage
} from '../controllers/packageController.js';

import auth, { adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getPackages);
router.post('/', auth, adminOnly, createPackage);
router.put('/:id', auth, adminOnly, updatePackage);
router.delete('/:id', auth, adminOnly, deletePackage);

export default router;
