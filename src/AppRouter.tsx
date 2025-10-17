import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Admin } from './pages/Admin';
import { Profile } from './pages/Profile';
import { Explore } from './pages/Explore';
import { BookNow } from './pages/BookNow';
import { PackageDetail } from './pages/PackageDetail';
import { Bookings } from './pages/Bookings';
import { Packages } from './pages/Packages';
import { Contact } from './pages/Contact';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/book-now" element={<BookNow />} />
        <Route path="/spot/:id" element={<PackageDetail />} />
        <Route path="/package/:id" element={<PackageDetail />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>;
}