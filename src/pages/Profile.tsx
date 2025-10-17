import React from 'react';
import { Navbar } from '../components/Navbar';
import { MapPinIcon, CalendarIcon, BookmarkIcon, SettingsIcon, CreditCardIcon, HeartIcon, UserIcon } from 'lucide-react';
export const Profile = () => {
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Profile Header */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
            <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-700"></div>
            <div className="px-6 py-4 md:flex md:items-center md:justify-between">
              <div className="flex items-center">
                <div className="relative -mt-16">
                  <div className="h-24 w-24 rounded-full border-4 border-white bg-white shadow-md overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" alt="Profile" className="h-full w-full object-cover" />
                  </div>
                </div>
                <div className="ml-4 mt-2 md:mt-0">
                  <h1 className="text-2xl font-bold">Sarah Thompson</h1>
                  <p className="text-gray-600 flex items-center mt-1">
                    <MapPinIcon size={16} className="mr-1" /> New York, USA
                  </p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
                  Edit Profile
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                  <SettingsIcon size={16} className="inline mr-1" /> Settings
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left Column - User Stats */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Travel Stats</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-blue-100 mr-3">
                        <MapPinIcon size={20} className="text-blue-600" />
                      </div>
                      <span>Countries Visited</span>
                    </div>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-green-100 mr-3">
                        <CalendarIcon size={20} className="text-green-600" />
                      </div>
                      <span>Trips Completed</span>
                    </div>
                    <span className="font-semibold">24</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-yellow-100 mr-3">
                        <BookmarkIcon size={20} className="text-yellow-600" />
                      </div>
                      <span>Bookmarked Places</span>
                    </div>
                    <span className="font-semibold">18</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-purple-100 mr-3">
                        <CreditCardIcon size={20} className="text-purple-600" />
                      </div>
                      <span>Reward Points</span>
                    </div>
                    <span className="font-semibold">4,250</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Account Settings</h2>
                <div className="space-y-3">
                  <button className="w-full text-left py-2 px-3 hover:bg-gray-50 rounded-lg transition flex items-center">
                    <UserIcon size={18} className="mr-3 text-gray-500" />
                    <span>Personal Information</span>
                  </button>
                  <button className="w-full text-left py-2 px-3 hover:bg-gray-50 rounded-lg transition flex items-center">
                    <CreditCardIcon size={18} className="mr-3 text-gray-500" />
                    <span>Payment Methods</span>
                  </button>
                  <button className="w-full text-left py-2 px-3 hover:bg-gray-50 rounded-lg transition flex items-center">
                    <SettingsIcon size={18} className="mr-3 text-gray-500" />
                    <span>Preferences</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Right Column - Recent Trips & Saved Places */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h2 className="text-lg font-semibold mb-4">Recent Trips</h2>
                <div className="space-y-4">
                  {[{
                  destination: 'Paris, France',
                  date: 'August 10-17, 2023',
                  image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }, {
                  destination: 'Rome, Italy',
                  date: 'May 5-12, 2023',
                  image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }].map((trip, index) => <div key={index} className="flex items-center border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                      <div className="h-16 w-16 rounded-lg overflow-hidden mr-4">
                        <img src={trip.image} alt={trip.destination} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-medium">{trip.destination}</h3>
                        <p className="text-sm text-gray-500">{trip.date}</p>
                      </div>
                    </div>)}
                </div>
                <button className="mt-4 w-full text-blue-600 hover:text-blue-700 text-sm font-medium py-2">
                  View All Trips
                </button>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Saved Places</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{
                  destination: 'Bali, Indonesia',
                  type: 'Beach Resort',
                  image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }, {
                  destination: 'Santorini, Greece',
                  type: 'Island Getaway',
                  image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }, {
                  destination: 'Swiss Alps',
                  type: 'Mountain Retreat',
                  image: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }, {
                  destination: 'Kyoto, Japan',
                  type: 'Cultural Experience',
                  image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
                }].map((place, index) => <div key={index} className="relative rounded-lg overflow-hidden group">
                      <div className="h-40 w-full">
                        <img src={place.image} alt={place.destination} className="h-full w-full object-cover" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
                        <h3 className="text-white font-medium">
                          {place.destination}
                        </h3>
                        <p className="text-white/80 text-sm">{place.type}</p>
                      </div>
                      <button className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        <HeartIcon size={18} fill="currentColor" />
                      </button>
                    </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};