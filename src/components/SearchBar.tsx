import React, { useState } from 'react';
import { SearchIcon, CalendarIcon, UsersIcon, MapPinIcon } from 'lucide-react';
export const SearchBar = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  return <div className={`w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg transition-all ${searchFocus ? 'scale-105' : ''}`}>
      <div className="flex flex-col md:flex-row p-4">
        <div className="flex-1 mb-3 md:mb-0 md:mr-3">
          <div className="flex items-center border rounded-lg p-3 h-full">
            <MapPinIcon size={20} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Where are you going?" className="w-full focus:outline-none" onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)} />
          </div>
        </div>
        <div className="flex flex-1 mb-3 md:mb-0 md:mr-3">
          <div className="flex items-center border rounded-lg p-3 w-1/2 mr-2">
            <CalendarIcon size={20} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Check in" className="w-full focus:outline-none" />
          </div>
          <div className="flex items-center border rounded-lg p-3 w-1/2">
            <CalendarIcon size={20} className="text-gray-400 mr-2" />
            <input type="text" placeholder="Check out" className="w-full focus:outline-none" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex items-center border rounded-lg p-3 mr-3 flex-1">
            <UsersIcon size={20} className="text-gray-400 mr-2" />
            <select className="w-full focus:outline-none bg-transparent">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition flex items-center justify-center min-w-[48px]">
            <SearchIcon size={20} />
          </button>
        </div>
      </div>
    </div>;
};