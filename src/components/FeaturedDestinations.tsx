import React from 'react';
const destinations = [{
  id: 1,
  name: 'Bali, Indonesia',
  image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
  price: '$899',
  rating: 4.8
}, {
  id: 2,
  name: 'Santorini, Greece',
  image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  price: '$1299',
  rating: 4.9
}, {
  id: 3,
  name: 'Tokyo, Japan',
  image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80',
  price: '$1099',
  rating: 4.7
}];
export const FeaturedDestinations = () => {
  return <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Popular Destinations</h2>
          <p className="text-gray-600">Explore our most booked destinations</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map(destination => <div key={destination.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64">
                <img src={destination.image} alt={destination.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-sm font-semibold">
                  {destination.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                <div className="flex items-center mb-4">
                  {Array(5).fill(0).map((_, i) => <svg key={i} className={`w-5 h-5 ${i < Math.floor(destination.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>)}
                  <span className="ml-2 text-gray-600 text-sm">
                    {destination.rating} (124 reviews)
                  </span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-2 px-6 rounded-lg transition">
            View All Destinations
          </button>
        </div>
      </div>
    </div>;
};