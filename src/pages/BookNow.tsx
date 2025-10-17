import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { CalendarIcon, UsersIcon, MapPinIcon, CreditCardIcon, CheckIcon, StarIcon } from 'lucide-react';
export const BookNow = () => {
  const [selectedPackage, setSelectedPackage] = useState('standard');
  const [guests, setGuests] = useState(2);
  // Sample package data
  const packageDetails = {
    name: 'Santorini Island Escape',
    location: 'Santorini, Greece',
    duration: '7 days, 6 nights',
    rating: 4.9,
    reviews: 284,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    description: 'Experience the magic of Santorini with this premium travel package. Enjoy breathtaking sunsets, explore white-washed villages, and relax on volcanic beaches. This carefully curated experience includes luxury accommodations, guided tours, and authentic Greek dining experiences.',
    highlights: ['Sunset cruise around the caldera', 'Wine tasting tour at local vineyards', 'Guided walking tour of Oia and Fira', 'Day trip to the volcanic hot springs', 'Traditional Greek cooking class'],
    packages: {
      standard: {
        name: 'Standard Package',
        price: 1899,
        features: ['3-star hotel accommodation', 'Daily breakfast', 'Airport transfers', 'Guided island tour', 'Sunset cruise']
      },
      premium: {
        name: 'Premium Package',
        price: 2499,
        features: ['4-star hotel with caldera view', 'Daily breakfast and dinner', 'Private airport transfers', 'All guided tours included', 'Sunset cruise with dinner', 'Wine tasting experience']
      },
      luxury: {
        name: 'Luxury Package',
        price: 3299,
        features: ['5-star luxury resort with private pool', 'All meals included', 'Private transfers in luxury vehicle', 'Private guided tours', 'Exclusive sunset yacht cruise', 'Wine tasting with sommelier', 'Spa treatment']
      }
    }
  };
  const selectedDetails = packageDetails.packages[selectedPackage];
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {packageDetails.name}
            </h1>
            <div className="flex items-center text-gray-600">
              <MapPinIcon size={16} className="mr-1" />
              <span>{packageDetails.location}</span>
              <span className="mx-3">•</span>
              <CalendarIcon size={16} className="mr-1" />
              <span>{packageDetails.duration}</span>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <StarIcon size={16} className="text-yellow-500 fill-current mr-1" />
                <span className="font-medium">{packageDetails.rating}</span>
                <span className="text-sm ml-1">
                  ({packageDetails.reviews} reviews)
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Package Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="h-80 overflow-hidden">
                  <img src={packageDetails.image} alt={packageDetails.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Package Overview</h2>
                  <p className="text-gray-600 mb-6">
                    {packageDetails.description}
                  </p>
                  <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {packageDetails.highlights.map((highlight, index) => <li key={index} className="flex items-start">
                        <CheckIcon size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>)}
                  </ul>
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-lg font-semibold mb-3">
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {selectedDetails.features.map((feature, index) => <li key={index} className="flex items-start">
                          <CheckIcon size={18} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Book Your Trip</h2>
                {/* Package Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Package
                  </label>
                  <div className="space-y-3">
                    {Object.keys(packageDetails.packages).map(pkg => <div key={pkg} onClick={() => setSelectedPackage(pkg)} className={`border rounded-lg p-4 cursor-pointer transition ${selectedPackage === pkg ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">
                              {packageDetails.packages[pkg].name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {packageDetails.packages[pkg].features.length}{' '}
                              features included
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-blue-600">
                              ${packageDetails.packages[pkg].price}
                            </div>
                            <div className="text-xs text-gray-500">
                              per person
                            </div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Travel Dates
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative">
                      <div className="flex items-center border rounded-lg p-3">
                        <CalendarIcon size={18} className="text-gray-400 mr-2" />
                        <input type="text" placeholder="Check in" className="w-full focus:outline-none text-sm" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="flex items-center border rounded-lg p-3">
                        <CalendarIcon size={18} className="text-gray-400 mr-2" />
                        <input type="text" placeholder="Check out" className="w-full focus:outline-none text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Guests */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Guests
                  </label>
                  <div className="flex items-center border rounded-lg p-3">
                    <UsersIcon size={18} className="text-gray-400 mr-2" />
                    <select className="w-full focus:outline-none bg-transparent text-sm" value={guests} onChange={e => setGuests(Number(e.target.value))}>
                      {[1, 2, 3, 4, 5, 6].map(num => <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>)}
                    </select>
                  </div>
                </div>
                {/* Price Summary */}
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Package Price</span>
                    <span>
                      ${selectedDetails.price} × {guests}
                    </span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Taxes & Fees</span>
                    <span>
                      ${Math.round(selectedDetails.price * guests * 0.12)}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4">
                    <span>Total</span>
                    <span>
                      $
                      {selectedDetails.price * guests + Math.round(selectedDetails.price * guests * 0.12)}
                    </span>
                  </div>
                </div>
                {/* Book Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition text-center block font-medium">
                  Book Now
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  You won't be charged yet. Payment details will be collected on
                  the next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};