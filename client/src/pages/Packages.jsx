import React, { useEffect, useState } from 'react';
import PackageCard from '../components/PackageCard';
import axios from 'axios';

const Packages = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const fetchPackages = async () => {
      const res = await axios.get('http://localhost:5000/api/packages');
      setPackages(res.data);
    };
    fetchPackages();
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <PackageCard key={pkg._id} {...pkg} />
      ))}
    </div>
  );
};

export default Packages;
