import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { CalendarIcon, DollarSignIcon, StarIcon, FilterIcon, BookmarkIcon, ChevronRightIcon } from 'lucide-react';
export const Packages = () => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  // Travel packages data
  const travelPackages = [{
    id: 1,
    name: 'Greek Island Hopping Adventure',
    image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '10 days',
    price: 1899,
    description: 'Explore Athens, Mykonos, Santorini, and Crete with guided tours, ferry transfers, and boutique accommodations.',
    category: 'beach',
    rating: 4.8,
    reviews: 356
  }, {
    id: 2,
    name: 'Japan Cultural Immersion',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '14 days',
    price: 2499,
    description: 'Journey through Tokyo, Kyoto, Osaka, and Hiroshima with traditional ryokan stays and authentic cultural experiences.',
    category: 'cultural',
    rating: 4.9,
    reviews: 421
  }, {
    id: 3,
    name: 'Peruvian Highlights',
    image: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '12 days',
    price: 2199,
    description: 'Discover Lima, Cusco, the Sacred Valley, and Machu Picchu with expert guides and premium accommodations.',
    category: 'adventure',
    rating: 4.8,
    reviews: 289
  }, {
    id: 4,
    name: 'Italian Romance',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '11 days',
    price: 2299,
    description: 'Experience Rome, Florence, Venice, and the Amalfi Coast with private transfers and luxury accommodations.',
    category: 'cultural',
    rating: 4.7,
    reviews: 342
  }, {
    id: 5,
    name: 'Tropical Paradise Escape',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '7 days',
    price: 2799,
    description: 'Relax in an overwater bungalow in Bora Bora with daily breakfast, sunset cruise, and snorkeling excursion.',
    category: 'beach',
    rating: 4.9,
    reviews: 198
  }, {
    id: 6,
    name: 'African Safari Adventure',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '9 days',
    price: 3499,
    description: 'Witness the Great Migration in the Serengeti and explore Ngorongoro Crater with luxury tented camps and expert guides.',
    category: 'adventure',
    rating: 4.8,
    reviews: 267
  }, {
    id: 7,
    name: 'New Zealand Nature Explorer',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '15 days',
    price: 3199,
    description: 'Discover the stunning landscapes of New Zealand, from the Bay of Islands to Milford Sound, with guided hikes and outdoor adventures.',
    category: 'adventure',
    rating: 4.9,
    reviews: 183
  }, {
    id: 8,
    name: 'Thailand Island Paradise',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '10 days',
    price: 1699,
    description: 'Explore the beautiful islands of Thailand, including Phuket, Phi Phi, and Krabi, with snorkeling, beach time, and authentic Thai experiences.',
    category: 'beach',
    rating: 4.7,
    reviews: 312
  }];
  // Filter packages based on selected category
  const filteredPackages = filter === 'all' ? travelPackages : travelPackages.filter(pkg => pkg.category === filter);
  // Sort packages based on selected sort option
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      case 'rating':
        return b.rating - a.rating;
      default:
        // recommended
        return b.reviews - a.reviews;
    }
  });
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Travel Packages
            </h1>
            <p className="text-gray-600 mt-2 md:mt-0">
              Exclusive travel packages curated for unforgettable experiences
            </p>
          </div>
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-4 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Filter by:
                </label>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full text-sm ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    All Packages
                  </button>
                  <button onClick={() => setFilter('beach')} className={`px-4 py-2 rounded-full text-sm ${filter === 'beach' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Beach Getaways
                  </button>
                  <button onClick={() => setFilter('adventure')} className={`px-4 py-2 rounded-full text-sm ${filter === 'adventure' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Adventure
                  </button>
                  <button onClick={() => setFilter('cultural')} className={`px-4 py-2 rounded-full text-sm ${filter === 'cultural' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    Cultural
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sort by:
                </label>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600">
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration">Duration</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
          </div>
          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedPackages.map(pkg => <div key={pkg.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                    {pkg.category === 'beach' ? 'Beach Getaway' : pkg.category === 'adventure' ? 'Adventure' : 'Cultural'}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <div className="flex items-center">
                      <StarIcon size={16} className="text-yellow-500 fill-current" />
                      <span className="ml-1 text-sm font-medium">
                        {pkg.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {pkg.description}
                  </p>
                  <div className="flex items-center text-gray-600 mb-4">
                    <CalendarIcon size={16} className="mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                    <DollarSignIcon size={16} className="ml-4 mr-1" />
                    <span className="text-sm font-medium">${pkg.price}</span>
                  </div>
                  <Link to={`/package/${pkg.id}`} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-center block text-sm font-medium">
                    View Details
                  </Link>
                </div>
              </div>)}
          </div>
          {/* Empty state */}
          {sortedPackages.length === 0 && <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FilterIcon size={32} className="text-gray-400" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No packages found</h2>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters to find the perfect travel package.
              </p>
              <button onClick={() => setFilter('all')} className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition text-center font-medium">
                Show All Packages
              </button>
            </div>}
        </div>
      </div>
    </div>;
};