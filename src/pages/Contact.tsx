import React from 'react';
import { Navbar } from '../components/Navbar';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, SendIcon } from 'lucide-react';
export const Contact = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // This would normally send the form data to a server
    alert('Thank you for your message! We will get back to you soon.');
  };
  return <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our travel packages or need assistance
              planning your trip? Our travel experts are here to help you create
              the perfect travel experience.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-700"></div>
                <div className="px-6 py-8">
                  <h2 className="text-xl font-bold mb-6">Get in Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-full mr-4">
                        <PhoneIcon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                        <p className="text-gray-600">+1 (555) 987-6543</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-full mr-4">
                        <MailIcon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-gray-600">info@travelcompany.com</p>
                        <p className="text-gray-600">
                          support@travelcompany.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-full mr-4">
                        <MapPinIcon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Address</h3>
                        <p className="text-gray-600">
                          123 Travel Plaza, Suite 400
                          <br />
                          New York, NY 10001
                          <br />
                          United States
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-2 bg-blue-100 rounded-full mr-4">
                        <ClockIcon size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9am - 6pm
                          <br />
                          Saturday: 10am - 4pm
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h3 className="font-medium mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition">
                        <FacebookIcon size={20} />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition">
                        <TwitterIcon size={20} />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition">
                        <InstagramIcon size={20} />
                      </a>
                      <a href="#" className="p-2 bg-gray-100 rounded-full text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition">
                        <LinkedinIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="John" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="john.doe@example.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" placeholder="Inquiry about Greek Island Hopping Adventure" required />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 h-40" placeholder="Please provide details about your inquiry..." required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition text-center block font-medium flex items-center justify-center">
                    <SendIcon size={18} className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};