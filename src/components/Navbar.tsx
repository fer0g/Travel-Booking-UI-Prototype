import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, UserIcon, HomeIcon, PackageIcon, BookmarkIcon, LogInIcon, UserPlusIcon, PhoneIcon, ChevronDownIcon, ShieldIcon, CompassIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const menuItems = [{
    name: 'Home',
    icon: <HomeIcon size={18} />,
    path: '/'
  }, {
    name: 'Explore',
    icon: <CompassIcon size={18} />,
    path: '/explore'
  }, {
    name: 'Packages',
    icon: <PackageIcon size={18} />,
    path: '/packages'
  }, {
    name: 'Bookings',
    icon: <BookmarkIcon size={18} />,
    path: '/bookings'
  }, {
    name: 'Login',
    icon: <LogInIcon size={18} />,
    path: '/login'
  }, {
    name: 'Sign up',
    icon: <UserPlusIcon size={18} />,
    path: '/signup'
  }, {
    name: 'Contact',
    icon: <PhoneIcon size={18} />,
    path: '/contact'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button onClick={toggleMenu} className="mr-4 focus:outline-none" aria-label="Toggle menu">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
          <Link to="/" className="text-xl font-bold text-blue-600">
            TMS
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/explore" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
            <CompassIcon size={18} className="mr-1" />
            Explore
          </Link>
          <Link to="/packages" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
            <PackageIcon size={18} className="mr-1" />
            Packages
          </Link>
          <Link to="/book-now" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
            Book Now
          </Link>
          {/* Profile dropdown */}
          <div className="relative">
            <button onClick={toggleProfileDropdown} className="flex items-center text-gray-700 hover:text-blue-600 focus:outline-none">
              <UserIcon size={20} className="mr-1" />
              <ChevronDownIcon size={16} />
            </button>
            {isProfileDropdownOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                <Link to="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <UserIcon size={16} className="mr-2 text-blue-600" />
                  Profile
                </Link>
                <Link to="/bookings" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <BookmarkIcon size={16} className="mr-2 text-blue-600" />
                  My Bookings
                </Link>
                <Link to="/admin" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <ShieldIcon size={16} className="mr-2 text-blue-600" />
                  Admin
                </Link>
              </div>}
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`fixed top-[60px] left-0 w-64 h-screen bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="py-4">
          {menuItems.map((item, index) => <Link key={index} to={item.path} className="flex items-center px-6 py-3 hover:bg-gray-100 transition" onClick={() => setIsMenuOpen(false)}>
              <span className="mr-3 text-blue-600">{item.icon}</span>
              <span>{item.name}</span>
            </Link>)}
          <Link to="/admin" className="flex items-center px-6 py-3 hover:bg-gray-100 transition" onClick={() => setIsMenuOpen(false)}>
            <span className="mr-3 text-blue-600">
              <ShieldIcon size={18} />
            </span>
            <span>Admin</span>
          </Link>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30" onClick={toggleMenu}></div>}
      {/* Overlay for profile dropdown on mobile */}
      {isProfileDropdownOpen && <div className="fixed inset-0 z-30" onClick={toggleProfileDropdown}></div>}
    </nav>;
};