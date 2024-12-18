import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden bg-white"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?stationery,writing')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Craft your thoughts with elegance
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Discover our curated collection of premium stationery, designed to inspire creativity and elevate your writing experience.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#products"
              className="inline-flex items-center rounded-md bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Shop Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
