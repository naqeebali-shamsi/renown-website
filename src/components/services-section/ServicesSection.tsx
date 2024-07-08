import React from 'react';
import { FaBatteryFull, FaCog, FaWater, FaTachometerAlt, FaLink, FaGem, FaCrown, FaSprayCan } from 'react-icons/fa';
import { GiUltrasound, GiWatch, GiSparkles  } from 'react-icons/gi';

const services = [
  { name: 'Battery Replacement', icon: <FaBatteryFull className="w-8 h-8" /> },
  { name: 'Complete Overhaul', icon: <GiSparkles className="w-8 h-8" /> },
  { name: 'Ultrasonic Cleaning', icon: <GiUltrasound className="w-8 h-8" /> },
  { name: 'Pressure Test', icon: <FaTachometerAlt className="w-8 h-8" /> },
  { name: 'Strap Replacement', icon: <FaLink className="w-8 h-8" /> },
  { name: 'Bracelet Repair', icon: <FaLink className="w-8 h-8" /> },
  { name: 'Link Removal', icon: <FaLink className="w-8 h-8" /> },
  { name: 'Crystal Replacement', icon: <FaGem className="w-8 h-8" /> },
  { name: 'Crown Replacement', icon: <FaCrown className="w-8 h-8" /> },
  { name: 'Polishing', icon: <FaSprayCan className="w-8 h-8" /> },
];

const ServiceCard = ({ name, icon }: { name: string, icon: React.ReactNode }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-amber-500/50 hover:-translate-y-1">
    <div className="text-amber-500 mb-4">{icon}</div>
    <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-900" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} name={service.name} icon={service.icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;