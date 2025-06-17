import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ProTenda</h1>
          <nav className="space-x-4">
            <a href="#" className="hover:underline">How It Works</a>
            <a href="#" className="hover:underline">For Pros</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Connect with Trusted Local Professionals
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Post your job and get matched with verified service providers near you.
        </p>
        <div className="space-x-4">
          <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700">
            Get Quotes
          </a>
          <a href="#" className="bg-gray-200 px-6 py-3 rounded-full shadow hover:bg-gray-300">
            Join as a Pro
          </a>
        </div>
      </main>

      <footer className="bg-gray-100 text-gray-600 p-6 mt-10 text-center">
        &copy; {new Date().getFullYear()} ProTenda. All rights reserved.
      </footer>
    </div>
  );
              }
