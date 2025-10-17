import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { MapPinIcon, StarIcon, CalendarIcon, DollarSignIcon, CheckIcon, CreditCardIcon, UserIcon, ClockIcon } from 'lucide-react';
// Get data from both trending spots and packages
const getItemData = (id, type) => {
  // Import data from Explore.tsx
  const trendingSpots = [{
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    rating: 4.9,
    reviews: 1204,
    description: 'Famous for its stunning sunsets, white-washed buildings, and blue domes that contrast against the deep blue Aegean Sea.',
    longDescription: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    price: 1899,
    duration: '7 days',
    highlights: ['Watch the famous sunset from Oia', 'Swim in the crystal clear waters of Amoudi Bay', 'Visit the ancient ruins of Akrotiri', 'Explore the narrow streets of Fira', 'Wine tasting tour at local vineyards']
  }, {
    id: 2,
    name: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviews: 987,
    description: "A city of temples, shrines, and traditional wooden houses, offering a glimpse into Japan's rich cultural heritage.",
    longDescription: "Kyoto, once the capital of Japan, is a city on the island of Honshu. It's famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It's also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.",
    price: 2499,
    duration: '10 days',
    highlights: ['Visit the iconic Fushimi Inari Shrine', 'Experience a traditional tea ceremony', 'Explore the bamboo groves of Arashiyama', 'See the golden pavilion of Kinkaku-ji', 'Stroll through the historic Gion district']
  }, {
    id: 3,
    name: 'Machu Picchu, Peru',
    image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviews: 1456,
    description: 'This ancient Incan citadel set high in the Andes Mountains offers breathtaking views and fascinating archaeological wonders.',
    longDescription: "Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it's renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments, and panoramic views. Its exact former use remains a mystery.",
    price: 2199,
    duration: '8 days',
    highlights: ['Guided tour of the ancient citadel', 'Hike the Inca Trail', 'Explore the Sacred Valley', 'Visit the colonial city of Cusco', 'Experience authentic Peruvian cuisine']
  }, {
    id: 4,
    name: 'Amalfi Coast, Italy',
    image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    reviews: 1089,
    description: 'A stunning coastline with dramatic cliffs, colorful fishing villages, and azure waters of the Mediterranean.',
    longDescription: "The Amalfi Coast is a 50-kilometer stretch of coastline along the southern edge of Italy's Sorrentine Peninsula, in the Campania region. It's a popular holiday destination, with sheer cliffs and a rugged shoreline dotted with small beaches and pastel-colored fishing villages. The coastal road between the port city of Salerno and clifftop Sorrento winds past grand villas, terraced vineyards and cliffside lemon groves.",
    price: 2299,
    duration: '9 days',
    highlights: ['Drive along the scenic coastal road', 'Visit the colorful town of Positano', 'Explore the historic center of Amalfi', 'Take a boat tour to Capri Island', 'Sample authentic Italian cuisine and limoncello']
  }, {
    id: 5,
    name: 'Bora Bora, French Polynesia',
    image: 'https://images.unsplash.com/photo-1589197015603-f086497f9d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    reviews: 876,
    description: 'An island paradise known for its overwater bungalows, crystal-clear turquoise lagoon, and pristine white sand beaches.',
    longDescription: "Bora Bora is a small South Pacific island northwest of Tahiti in French Polynesia. Surrounded by sand-fringed motus (islets) and a turquoise lagoon protected by a coral reef, it's known for its scuba diving. It's also a popular luxury resort destination where some guest bungalows are perched over the water on stilts.",
    price: 2799,
    duration: '7 days',
    highlights: ['Stay in an overwater bungalow', 'Snorkel in the crystal-clear lagoon', 'Hike up Mount Otemanu', 'Take a sunset cruise', 'Enjoy a traditional Polynesian dinner show']
  }, {
    id: 6,
    name: 'Serengeti National Park, Tanzania',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    reviews: 932,
    description: 'Home to the spectacular Great Migration, where millions of wildebeest, zebra, and gazelle traverse the plains.',
    longDescription: "The Serengeti National Park is a vast wilderness area in Tanzania. It's known for its annual migration of over 1.5 million white-bearded wildebeest and 250,000 zebra, along with smaller numbers of Grant's gazelle, Thomson's gazelle, impala and eland. The park is also home to the \"big five\" (elephant, lion, leopard, buffalo, rhino) and more than 500 bird species.",
    price: 3499,
    duration: '9 days',
    highlights: ['Witness the Great Migration', 'Game drives to spot the "big five"', 'Hot air balloon safari at sunrise', 'Visit a Maasai village', 'Stay in luxury tented camps']
  }];
  const travelPackages = [{
    id: 1,
    name: 'Greek Island Hopping Adventure',
    image: 'https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '10 days',
    price: 1899,
    description: 'Explore Athens, Mykonos, Santorini, and Crete with guided tours, ferry transfers, and boutique accommodations.',
    longDescription: 'Experience the best of Greece with this comprehensive island-hopping adventure. Begin in historic Athens before sailing to the stunning Cycladic islands of Mykonos, Santorini, and the largest Greek island, Crete. Enjoy guided tours of ancient sites, relax on beautiful beaches, and immerse yourself in authentic Greek culture and cuisine.',
    rating: 4.8,
    reviews: 356,
    highlights: ['Guided tour of the Acropolis in Athens', 'Explore the windmills and Little Venice in Mykonos', 'Watch the famous sunset in Oia, Santorini', 'Visit the Palace of Knossos in Crete', 'Island-hopping via high-speed ferries']
  }, {
    id: 2,
    name: 'Japan Cultural Immersion',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '14 days',
    price: 2499,
    description: 'Journey through Tokyo, Kyoto, Osaka, and Hiroshima with traditional ryokan stays and authentic cultural experiences.',
    longDescription: 'Immerse yourself in the fascinating culture of Japan on this comprehensive 14-day tour. Experience the perfect blend of ancient traditions and modern innovations as you explore vibrant Tokyo, historic Kyoto, food-loving Osaka, and poignant Hiroshima. Stay in a traditional ryokan, participate in a tea ceremony, and savor authentic Japanese cuisine throughout your journey.',
    rating: 4.9,
    reviews: 421,
    highlights: ["Explore Tokyo's mix of modern skyscrapers and ancient temples", 'Stay in a traditional ryokan with onsen hot springs', 'Participate in a traditional tea ceremony in Kyoto', 'Visit Hiroshima Peace Memorial Park', "Experience the food culture of Osaka, Japan's kitchen"]
  }, {
    id: 3,
    name: 'Peruvian Highlights',
    image: 'https://images.unsplash.com/photo-1531968455001-5c5272a41129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '12 days',
    price: 2199,
    description: 'Discover Lima, Cusco, the Sacred Valley, and Machu Picchu with expert guides and premium accommodations.',
    longDescription: 'Experience the best of Peru on this 12-day journey from the coastal capital of Lima to the ancient Incan citadel of Machu Picchu. Explore colonial architecture, discover archaeological wonders, and immerse yourself in the rich culture and cuisine of Peru. With expert guides and premium accommodations throughout, this tour offers the perfect blend of comfort and adventure.',
    rating: 4.8,
    reviews: 289,
    highlights: ['Guided city tour of Lima including the historic center', 'Explore the ancient Incan capital of Cusco', 'Visit the traditional markets of the Sacred Valley', 'Guided tour of Machu Picchu with time to explore', 'Sample authentic Peruvian cuisine including a Pachamanca feast']
  }, {
    id: 4,
    name: 'Italian Romance',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '11 days',
    price: 2299,
    description: 'Experience Rome, Florence, Venice, and the Amalfi Coast with private transfers and luxury accommodations.',
    longDescription: "Indulge in the romance of Italy on this 11-day journey through the country's most enchanting cities and coastlines. From the ancient ruins of Rome to the Renaissance splendor of Florence, the unique canals of Venice, and the stunning scenery of the Amalfi Coast, this tour showcases Italy's diverse beauty, rich history, and world-renowned cuisine.",
    rating: 4.7,
    reviews: 342,
    highlights: ['Skip-the-line access to the Vatican Museums and Colosseum in Rome', "Guided tour of Florence's Renaissance masterpieces", 'Private gondola ride in Venice', 'Drive along the scenic Amalfi Coast', 'Wine tasting in Tuscany']
  }, {
    id: 5,
    name: 'Tropical Paradise Escape',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '7 days',
    price: 2799,
    description: 'Relax in an overwater bungalow in Bora Bora with daily breakfast, sunset cruise, and snorkeling excursion.',
    longDescription: 'Escape to paradise with this luxurious 7-day retreat in Bora Bora, French Polynesia. Stay in an overwater bungalow with direct access to the crystal-clear lagoon, surrounded by stunning views of Mount Otemanu. This package includes daily breakfast, a romantic sunset cruise, guided snorkeling excursions, and plenty of time to relax on pristine beaches.',
    rating: 4.9,
    reviews: 198,
    highlights: ['Stay in an overwater bungalow with lagoon access', 'Daily breakfast included', 'Private sunset cruise with champagne', 'Guided snorkeling excursion to see colorful coral and tropical fish', 'Optional activities including jet skiing, parasailing, and helicopter tours']
  }, {
    id: 6,
    name: 'African Safari Adventure',
    image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    duration: '9 days',
    price: 3499,
    description: 'Witness the Great Migration in the Serengeti and explore Ngorongoro Crater with luxury tented camps and expert guides.',
    longDescription: 'Experience the ultimate African safari adventure in Tanzania. Witness the spectacular Great Migration in the Serengeti, where millions of wildebeest and zebra traverse the plains in search of fresh grass and water. Explore the Ngorongoro Crater, a UNESCO World Heritage Site home to an incredible concentration of wildlife. Stay in luxury tented camps with expert guides for an unforgettable safari experience.',
    rating: 4.8,
    reviews: 267,
    highlights: ['Game drives to witness the Great Migration in the Serengeti', 'Explore the wildlife-rich Ngorongoro Crater', 'Stay in luxury tented camps with all meals included', 'Expert guides and private 4x4 safari vehicles', 'Optional hot air balloon safari over the Serengeti plains']
  }];
  // Convert string price to number
  const packagesWithNumberPrice = travelPackages.map(pkg => ({
    ...pkg,
    price: typeof pkg.price === 'string' ? parseInt(pkg.price.replace(/[^0-9]/g, '')) : pkg.price
  }));
  if (type === 'spot') {
    return trendingSpots.find(spot => spot.id === parseInt(id));
  } else if (type === 'package') {
    return packagesWithNumberPrice.find(pkg => pkg.id === parseInt(id));
  }
  // If not found in either, try both
  return trendingSpots.find(spot => spot.id === parseInt(id)) || packagesWithNumberPrice.find(pkg => pkg.id === parseInt(id));
};
export const PackageDetail = () => {
  const {
    id,
    type
  } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [showPayment, setShowPayment] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [bookedItems, setBookedItems] = useState(() => {
    const saved = localStorage.getItem('bookedItems');
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    const itemData = getItemData(id, type);
    if (itemData) {
      setItem(itemData);
      // Check if this item is already booked
      const alreadyBooked = bookedItems.some(bookedItem => bookedItem.id === itemData.id && bookedItem.name === itemData.name);
      setIsBooked(alreadyBooked);
    }
  }, [id, type, bookedItems]);
  const handleBookNow = () => {
    if (isBooked) return;
    // Create booking object
    const booking = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price,
      duration: item.duration,
      bookingDate: new Date().toISOString(),
      paymentMethod: selectedPayment
    };
    // Add to booked items
    const updatedBookings = [...bookedItems, booking];
    setBookedItems(updatedBookings);
    localStorage.setItem('bookedItems', JSON.stringify(updatedBookings));
    // Update UI
    setIsBooked(true);
    // Show success message or redirect
    setTimeout(() => {
      navigate('/bookings');
    }, 2000);
  };
  if (!item) {
    return <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-24 pb-12 max-w-7xl mx-auto px-4">
          <p>Loading...</p>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {item.name}
            </h1>
            <div className="flex flex-wrap items-center text-gray-600 gap-y-2">
              <MapPinIcon size={16} className="mr-1" />
              <span>
                {type === 'spot' ? item.name.split(',')[1]?.trim() || 'Destination' : item.name.split(' ')[0]}
              </span>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <StarIcon size={16} className="text-yellow-500 fill-current mr-1" />
                <span className="font-medium">{item.rating}</span>
                <span className="text-sm ml-1">({item.reviews} reviews)</span>
              </div>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <ClockIcon size={16} className="mr-1" />
                <span>{item.duration}</span>
              </div>
              <span className="mx-3">•</span>
              <div className="flex items-center">
                <DollarSignIcon size={16} className="mr-1" />
                <span className="font-medium">${item.price}</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Package Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="h-80 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Overview</h2>
                  <p className="text-gray-600 mb-6">
                    {item.longDescription || item.description}
                  </p>
                  <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {item.highlights && item.highlights.map((highlight, index) => <li key={index} className="flex items-start">
                          <CheckIcon size={18} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>)}
                  </ul>
                  {/* Payment Selection */}
                  <div className="mt-8">
                    <button onClick={() => setShowPayment(!showPayment)} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition text-center block font-medium">
                      {showPayment ? 'Hide Payment Options' : 'Select Payment Method'}
                    </button>
                    {showPayment && <div className="mt-6 border-t border-gray-100 pt-6">
                        <h3 className="text-lg font-semibold mb-4">
                          Payment Method
                        </h3>
                        <div className="space-y-3 mb-6">
                          <div onClick={() => setSelectedPayment('credit')} className={`border rounded-lg p-4 cursor-pointer transition flex items-center ${selectedPayment === 'credit' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                            <CreditCardIcon size={24} className="text-blue-600 mr-3" />
                            <div>
                              <h4 className="font-medium">Credit Card</h4>
                              <p className="text-sm text-gray-500">
                                Pay securely with your credit card
                              </p>
                            </div>
                          </div>
                          <div onClick={() => setSelectedPayment('paypal')} className={`border rounded-lg p-4 cursor-pointer transition flex items-center ${selectedPayment === 'paypal' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                            <div className="w-6 h-6 mr-3 text-blue-600 flex items-center justify-center font-bold">
                              P
                            </div>
                            <div>
                              <h4 className="font-medium">PayPal</h4>
                              <p className="text-sm text-gray-500">
                                Fast and secure payment with PayPal
                              </p>
                            </div>
                          </div>
                          <div onClick={() => setSelectedPayment('bank')} className={`border rounded-lg p-4 cursor-pointer transition flex items-center ${selectedPayment === 'bank' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                            <UserIcon size={24} className="text-blue-600 mr-3" />
                            <div>
                              <h4 className="font-medium">Bank Transfer</h4>
                              <p className="text-sm text-gray-500">
                                Pay directly from your bank account
                              </p>
                            </div>
                          </div>
                        </div>
                        <button onClick={handleBookNow} disabled={isBooked} className={`w-full py-3 rounded-lg transition text-center block font-medium ${isBooked ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                          {isBooked ? 'Booked' : 'Book Now'}
                        </button>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">Trip Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Destination</span>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{item.duration}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <StarIcon size={16} className="text-yellow-500 fill-current mr-1" />
                      <span className="font-medium">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Price per person</span>
                    <span className="font-medium text-blue-600">
                      ${item.price}
                    </span>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-blue-800 mb-2">
                    What's included:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-blue-700">
                      <CheckIcon size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Accommodation as per itinerary</span>
                    </li>
                    <li className="flex items-start text-sm text-blue-700">
                      <CheckIcon size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Transportation and transfers</span>
                    </li>
                    <li className="flex items-start text-sm text-blue-700">
                      <CheckIcon size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Guided tours and activities</span>
                    </li>
                    <li className="flex items-start text-sm text-blue-700">
                      <CheckIcon size={16} className="text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                </div>
                {!showPayment && <button onClick={() => setShowPayment(true)} className={`w-full py-3 rounded-lg transition text-center block font-medium ${isBooked ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`} disabled={isBooked}>
                    {isBooked ? 'Booked' : 'Book This Trip'}
                  </button>}
                {isBooked && <p className="text-green-600 text-center mt-4 font-medium">
                    This trip is booked! View your bookings for details.
                  </p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};