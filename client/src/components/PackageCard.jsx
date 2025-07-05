import React from 'react';
import { Link } from 'react-router-dom';

const PackageCard = ({ _id, title, price, duration, image, type }) => {
  return (
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-600">{title}</h3>
        <p className="text-sm text-gray-500 capitalize">{type}</p>
        <p className="text-gray-700 mt-2">Duration: {duration}</p>
        <p className="text-green-600 font-semibold">PKR {price.toLocaleString()}</p>
        <Link to={`/book/${_id}`} className="block mt-3 px-4 py-2 bg-blue-600 text-white rounded text-center hover:bg-blue-700">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
