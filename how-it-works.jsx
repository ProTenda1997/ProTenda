import React from "react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">How It Works</h1>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-blue-600 text-3xl font-bold">1</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Post Your Job</h2>
              <p className="text-gray-700">
                Describe the service you need, your location, and any details that help us match you with the right professional.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-blue-600 text-3xl font-bold">2</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Get Quotes</h2>
              <p className="text-gray-700">
                We'll send your request to qualified professionals near you. They'll respond with quotes and availability.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="text-blue-600 text-3xl font-bold">3</div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Hire with Confidence</h2>
              <p className="text-gray-700">
                Compare reviews, chat with pros, and choose the best fit. You’re in control from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}