import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { SearchIcon, EditIcon, TrashIcon, UsersIcon, MapPinIcon, CalendarIcon, DollarSignIcon } from 'lucide-react';
// Sample data for the admin dashboard
const bookings = [{
  id: 1,
  customer: 'John Doe',
  destination: 'Bali, Indonesia',
  checkIn: '2023-10-15',
  checkOut: '2023-10-22',
  guests: 2,
  status: 'Confirmed',
  amount: '$1,299.00'
}, {
  id: 2,
  customer: 'Jane Smith',
  destination: 'Santorini, Greece',
  checkIn: '2023-11-05',
  checkOut: '2023-11-12',
  guests: 3,
  status: 'Pending',
  amount: '$1,899.00'
}, {
  id: 3,
  customer: 'Robert Johnson',
  destination: 'Tokyo, Japan',
  checkIn: '2023-09-20',
  checkOut: '2023-09-27',
  guests: 1,
  status: 'Completed',
  amount: '$1,499.00'
}, {
  id: 4,
  customer: 'Emily Davis',
  destination: 'Paris, France',
  checkIn: '2023-12-10',
  checkOut: '2023-12-17',
  guests: 2,
  status: 'Confirmed',
  amount: '$1,699.00'
}, {
  id: 5,
  customer: 'Michael Brown',
  destination: 'New York, USA',
  checkIn: '2023-10-25',
  checkOut: '2023-10-30',
  guests: 4,
  status: 'Pending',
  amount: '$1,299.00'
}];
// Dashboard stats
const stats = [{
  title: 'Total Bookings',
  value: '1,245',
  icon: <CalendarIcon className="text-blue-600" size={24} />
}, {
  title: 'Active Users',
  value: '5,678',
  icon: <UsersIcon className="text-green-600" size={24} />
}, {
  title: 'Destinations',
  value: '120+',
  icon: <MapPinIcon className="text-yellow-600" size={24} />
}, {
  title: 'Revenue',
  value: '$125,430',
  icon: <DollarSignIcon className="text-purple-600" size={24} />
}];
export const Admin = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Filter bookings based on search term
  const filteredBookings = bookings.filter(booking => booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) || booking.destination.toLowerCase().includes(searchTerm.toLowerCase()) || booking.status.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Admin Dashboard
            </h1>
            <div className="mt-4 md:mt-0">
              <div className="relative">
                <input type="text" placeholder="Search bookings..." className="w-full md:w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                <SearchIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
            </div>
          </div>
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center">
                <div className="p-3 rounded-full bg-gray-100 mr-4">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>)}
          </div>
          {/* Bookings Table */}
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">
                Recent Bookings
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Destination
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Check In/Out
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guests
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredBookings.map(booking => <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {booking.customer}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {booking.destination}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {booking.checkIn}
                        </div>
                        <div className="text-sm text-gray-500">
                          to {booking.checkOut}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {booking.guests}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {booking.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <EditIcon size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <TrashIcon size={16} />
                        </button>
                      </td>
                    </tr>)}
                </tbody>
              </table>
            </div>
            {filteredBookings.length === 0 && <div className="text-center py-4 text-gray-500">
                No bookings found matching your search.
              </div>}
          </div>
        </div>
      </div>
    </div>;
};