import React from 'react';
import { SearchBar } from './SearchBar';
export const HeroSection = () => {
  return <div className="relative w-full h-screen min-h-[600px] bg-gradient-to-b from-blue-500 to-blue-700">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')"
    }}></div>
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Find Your Perfect Getaway
          </h1>
          <p className="text-xl text-white opacity-90 max-w-2xl mx-auto">
            Discover amazing destinations and book your dream vacation with just
            a few clicks
          </p>
        </div>
        <SearchBar />
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 text-white flex items-center">
            <span className="font-semibold mr-2">1000+</span> Destinations
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 text-white flex items-center">
            <span className="font-semibold mr-2">Best</span> Price Guarantee
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-2 text-white flex items-center">
            <span className="font-semibold mr-2">24/7</span> Customer Support
          </div>
        </div>
      </div>
    </div>;
};