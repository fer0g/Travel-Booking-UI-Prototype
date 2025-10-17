import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, ClockIcon, CreditCardIcon, ChevronRightIcon, TrashIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
export const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [bookingToCancel, setBookingToCancel] = useState(null);
  useEffect(() => {
    // Load bookings from localStorage
    const loadBookings = () => {
      const savedBookings = localStorage.getItem('bookedItems');
      if (savedBookings) {
        setBookings(JSON.parse(savedBookings));
      }
      setIsLoading(false);
    };
    loadBookings();
  }, []);
  const handleCancelBooking = booking => {
    setBookingToCancel(booking);
    setShowCancelModal(true);
  };
  const confirmCancelBooking = () => {
    const updatedBookings = bookings.filter(booking => booking.bookingDate !== bookingToCancel.bookingDate);
    setBookings(updatedBookings);
    localStorage.setItem('bookedItems', JSON.stringify(updatedBookings));
    setShowCancelModal(false);
    setBookingToCancel(null);
  };
  const formatDate = dateString => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const getPaymentIcon = method => {
    switch (method) {
      case 'credit':
        return <CreditCardIcon size={16} className="mr-1 text-blue-600" />;
      case 'paypal':
        return <span className="mr-1 text-blue-600 font-bold text-sm">P</span>;
      case 'bank':
        return <span className="mr-1 text-blue-600 font-bold text-sm">B</span>;
      default:
        return <CreditCardIcon size={16} className="mr-1 text-blue-600" />;
    }
  };
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
            <p className="text-gray-600 mt-2 md:mt-0">
              Manage your travel bookings
            </p>
          </div>
          {isLoading ? <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div> : bookings.length > 0 ? <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  Your Upcoming Trips
                </h2>
                <div className="divide-y divide-gray-100">
                  {bookings.map((booking, index) => <div key={index} className="py-6 first:pt-0 last:pb-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="h-48 md:h-32 md:w-48 rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                          <img src={booking.image} alt={booking.name} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                              <h3 className="text-lg font-bold">
                                {booking.name}
                              </h3>
                              <div className="flex items-center text-gray-600 text-sm mt-1">
                                <CalendarIcon size={14} className="mr-1" />
                                <span>
                                  Booked on {formatDate(booking.bookingDate)}
                                </span>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 text-right">
                              <div className="text-lg font-bold text-blue-600">
                                ${booking.price}
                              </div>
                              <div className="text-sm text-gray-600">
                                {booking.duration}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4 mt-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <ClockIcon size={14} className="mr-1" />
                              <span>{booking.duration}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              {getPaymentIcon(booking.paymentMethod)}
                              <span>
                                {booking.paymentMethod === 'credit' ? 'Credit Card' : booking.paymentMethod === 'paypal' ? 'PayPal' : 'Bank Transfer'}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <Link to={`/package/${booking.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center">
                              View Details{' '}
                              <ChevronRightIcon size={16} className="ml-1" />
                            </Link>
                            <button onClick={() => handleCancelBooking(booking)} className="text-sm font-medium text-red-600 hover:text-red-800 flex items-center">
                              Cancel Booking{' '}
                              <TrashIcon size={16} className="ml-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </div> : <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <CalendarIcon size={32} className="text-blue-600" />
              </div>
              <h2 className="text-xl font-semibold mb-2">No Bookings Yet</h2>
              <p className="text-gray-600 mb-6">
                You haven't booked any trips yet. Start exploring to find your
                next adventure!
              </p>
              <Link to="/explore" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition text-center font-medium">
                Explore Destinations
              </Link>
            </div>}
        </div>
      </div>
      {/* Cancel Booking Modal */}
      {showCancelModal && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h3 className="text-xl font-bold mb-4">Cancel Booking</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel your booking for{' '}
              <span className="font-semibold">{bookingToCancel?.name}</span>?
              This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button onClick={() => setShowCancelModal(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium flex items-center">
                <XCircleIcon size={18} className="mr-1" /> Keep Booking
              </button>
              <button onClick={confirmCancelBooking} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium flex items-center">
                <CheckCircleIcon size={18} className="mr-1" /> Cancel Booking
              </button>
            </div>
          </div>
        </div>}
    </div>;
};