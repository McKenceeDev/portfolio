// src/layouts/MainLayout.jsx
import React from 'react';
import { Navbar } from '../components/Layout/Navbar';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} YourName - Full Stack Developer
        </div>
      </footer>
    </div>
  );
};