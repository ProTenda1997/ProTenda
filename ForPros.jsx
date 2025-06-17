import React from "react";

export default function ForPros() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Grow Your Business with ProTenda</h1>
        <p className="text-gray-700 text-center mb-12 text-lg">
          ProTenda connects you with customers who are actively looking for your services. Here’s how it works for pros:
        </p>
        <ul className="space-y-10">
          <li>
            <h2 className="text-2xl font-semibold">1. Create Your Profile</h2>
            <p className="text-gray-700">
              Add your business info, services offered, and service areas to start appearing in searches.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">2. View Local Leads</h2>
            <p className="text-gray-700">
              Browse real-time job requests from local customers who need your help.
            </p>
          </li>
          <li>
            <h2 className="text-2xl font-semibold">3. Pay Per Lead</h2>
            <p className="text-gray-700">
              Only pay when you choose to contact a customer. No monthly fees, no risk.
            </p>
          </li>
        </ul>
        <div className="text-center mt-12">
          <a href="/join" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700">
            Join ProTenda
          </a>
        </div>
      </div>
    </div>
  );
}