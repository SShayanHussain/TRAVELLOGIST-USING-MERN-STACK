import Package from '../models/packageModel.js';

// GET all
export const getPackages = async (req, res) => {
  const packages = await Package.find();
  res.json(packages);
};

// CREATE
export const createPackage = async (req, res) => {
  const { title, type, price, duration, image } = req.body;

  const newPackage = new Package({ title, type, price, duration, image });
  const saved = await newPackage.save();

  res.status(201).json(saved);
};

// UPDATE
export const updatePackage = async (req, res) => {
  const { id } = req.params;
  const updated = await Package.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// DELETE
export const deletePackage = async (req, res) => {
  await Package.findByIdAndDelete(req.params.id);
  res.json({ message: 'Package deleted' });
};
