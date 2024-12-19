import React, { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';

export default function Footer() {
  const [state, handleSubmit] = useForm("mqakrkld");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccessMessage(true);
      setEmail(""); // Clear the input box
      const timer = setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [state.succeeded]);

  return (
    <footer className="bg-gray-900 text-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              We curate the finest stationery products from around the world to bring you an exceptional writing experience.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates about new products and special offers.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <div className="flex">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-l-md text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="bg-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-600"
                  disabled={state.submitting}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Success Message */}
      {showSuccessMessage && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-green-500 px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300 ease-in-out">
          🎉 Thanks for subscribing! Stay tuned for updates.
        </div>
      )}
    </footer>
  );
}
