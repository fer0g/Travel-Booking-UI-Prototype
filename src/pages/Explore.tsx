import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { MapPinIcon, StarIcon, CalendarIcon, DollarSignIcon, BookmarkIcon, CheckIcon, ChevronRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
// Sample data for trending spots
const trendingSpots = [{
  id: 1,
  name: 'Santorini, Greece',
  image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  rating: 4.9,
  reviews: 1204,
  description: 'Famous for its stunning sunsets, white-washed buildings, and blue domes that contrast against the deep blue Aegean Sea.'
}, {
  id: 2,
  name: 'Kyoto, Japan',
  image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.8,
  reviews: 987,
  description: "A city of temples, shrines, and traditional wooden houses, offering a glimpse into Japan's rich cultural heritage."
}, {
  id: 3,
  name: 'Machu Picchu, Peru',
  image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.9,
  reviews: 1456,
  description: 'This ancient Incan citadel set high in the Andes Mountains offers breathtaking views and fascinating archaeological wonders.'
}, {
  id: 4,
  name: 'Amalfi Coast, Italy',
  image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.7,
  reviews: 1089,
  description: 'A stunning coastline with dramatic cliffs, colorful fishing villages, and azure waters of the Mediterranean.'
}, {
  id: 5,
  name: 'Bora Bora, French Polynesia',
  image: 'https://images.unsplash.com/photo-1589197015603-f086497f9d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.9,
  reviews: 876,
  description: 'An island paradise known for its overwater bungalows, crystal-clear turquoise lagoon, and pristine white sand beaches.'
}, {
  id: 6,
  name: 'Serengeti National Park, Tanzania',
  image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  rating: 4.8,
  reviews: 932,
  description: 'Home to the spectacular Great Migration, where millions of wildebeest, zebra, and gazelle traverse the plains.'
}];
// Sample data for travel packages
const travelPackages = [{
  id: 1,
  name: 'Greek Island Hopping Adventure',
  image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  duration: '10 days',
  price: '$1,899',
  description: 'Explore Athens, Mykonos, Santorini, and Crete with guided tours, ferry transfers, and boutique accommodations.',
  bookmarked: false
}, {
  id: 2,
  name: 'Japan Cultural Immersion',
  image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  duration: '14 days',
  price: '$2,499',
  description: 'Journey through Tokyo, Kyoto, Osaka, and Hiroshima with traditional ryokan stays and authentic cultural experiences.',
  bookmarked: true
}, {
  id: 3,
  name: 'Peruvian Highlights',
  image: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  duration: '12 days',
  price: '$2,199',
  description: 'Discover Lima, Cusco, the Sacred Valley, and Machu Picchu with expert guides and premium accommodations.',
  bookmarked: false
}, {
  id: 4,
  name: 'Italian Romance',
  image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  duration: '11 days',
  price: '$2,299',
  description: 'Experience Rome, Florence, Venice, and the Amalfi Coast with private transfers and luxury accommodations.',
  bookmarked: true
}, {
  id: 5,
  name: 'Tropical Paradise Escape',
  image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  duration: '7 days',
  price: '$2,799',
  description: 'Relax in an overwater bungalow in Bora Bora with daily breakfast, sunset cruise, and snorkeling excursion.',
  bookmarked: false
}, {
  id: 6,
  name: 'African Safari Adventure',
  image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
  duration: '9 days',
  price: '$3,499',
  description: 'Witness the Great Migration in the Serengeti and explore Ngorongoro Crater with luxury tented camps and expert guides.',
  bookmarked: false
}];
export const Explore = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [packages, setPackages] = useState(travelPackages);
  const toggleBookmark = id => {
    setPackages(packages.map(pkg => pkg.id === id ? {
      ...pkg,
      bookmarked: !pkg.bookmarked
    } : pkg));
  };
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Explore</h1>
            <p className="text-gray-600 mt-2 md:mt-0">
              Discover trending destinations and exclusive travel packages
            </p>
          </div>
          {/* Tab Navigation */}
          <div className="mb-8 border-b border-gray-200">
            <div className="flex space-x-8">
              <button className={`pb-4 text-sm font-medium transition-colors duration-200 ${activeTab === 'trending' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('trending')}>
                Trending Spots
              </button>
              <div className="relative">
                <button className={`pb-4 text-sm font-medium transition-colors duration-200 flex items-center ${activeTab === 'packages' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} onClick={() => setActiveTab('packages')}>
                  <span className="ml-6">Travel Packages</span>
                </button>
                <div className="absolute left-0 top-0">
                  <button className={`p-1.5 rounded-full border ${packages.some(pkg => pkg.bookmarked) ? 'border-blue-600 bg-blue-600 text-white' : 'border-gray-300 text-gray-400 hover:border-blue-600 hover:text-blue-600'}`} aria-label="Bookmarks">
                    <BookmarkIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Trending Spots Content */}
          {activeTab === 'trending' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingSpots.map(spot => <div key={spot.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 overflow-hidden">
                    <img src={spot.image} alt={spot.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{spot.name}</h3>
                      <div className="flex items-center">
                        <StarIcon size={16} className="text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm font-medium">
                          {spot.rating}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {spot.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {spot.reviews} reviews
                      </span>
                      <Link to={`/spot/${spot.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                        Explore <ChevronRightIcon size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>)}
            </div>}
          {/* Travel Packages Content */}
          {activeTab === 'packages' && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map(pkg => <div key={pkg.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={pkg.image} alt={pkg.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                    <button onClick={() => toggleBookmark(pkg.id)} className={`absolute top-3 right-3 p-2 rounded-full ${pkg.bookmarked ? 'bg-blue-600 text-white' : 'bg-white/80 text-gray-600 hover:bg-white'}`}>
                      <BookmarkIcon size={16} fill={pkg.bookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <CalendarIcon size={16} className="mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                      <DollarSignIcon size={16} className="ml-4 mr-1" />
                      <span className="text-sm font-medium">{pkg.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {pkg.description}
                    </p>
                    <Link to={`/package/${pkg.id}`} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-center block text-sm font-medium">
                      View Details
                    </Link>
                  </div>
                </div>)}
            </div>}
        </div>
      </div>
    </div>;
};