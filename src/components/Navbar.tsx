import React, { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import CartIcon from './cart/CartIcon';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for routing

export default function Navbar() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchVisible, setSearchVisible] = useState(false); // State to show/hide search input
  const navigate = useNavigate(); // React Router hook to navigate programmatically

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      // Navigate to /featured-products with a query parameter
      navigate(`/featured-products?search=${searchKeyword}`);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 sm:hidden" />
            {/* Replace the a tag with Link */}
            <Link to="/" className="ml-4 text-2xl font-serif font-bold text-gray-900">
              Paper
            </Link>
          </div>

          <div className="hidden sm:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Notebooks</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pens</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Paper</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a>
            
            {/* Use Link for routing */}
            <Link to="/featured-products" className="text-gray-600 hover:text-gray-900">Products</Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Search icon that triggers the search bar toggle */}
            <Search className="h-6 w-6 text-gray-600 cursor-pointer" onClick={() => setSearchVisible(!searchVisible)} />
            
            {/* Conditionally render search input */}
            {searchVisible && (
              <div className="flex items-center">
                <input
                  type="text"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className="ml-2 px-4 py-2 border border-gray-300 rounded-l-md"
                  placeholder="Search..."
                />
                <button
                  onClick={handleSearch}
                  className="ml-2 px-4 py-2 border border-black text-black rounded-r-md hover:bg-black hover:text-white transition-colors"
                >
                  Search
                </button>
              </div>
            )}

            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}
