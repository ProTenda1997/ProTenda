import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <p className="text-gray-700 mb-8 text-center">
          Have a question or need help? Reach out to our support team.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" className="w-full mt-1 p-3 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="w-full mt-1 p-3 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea className="w-full mt-1 p-3 border rounded-md" rows="5" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}