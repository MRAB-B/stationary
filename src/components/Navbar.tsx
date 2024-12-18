import React from 'react';
import { Menu, Search } from 'lucide-react';
import CartIcon from './cart/CartIcon';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 sm:hidden" />
            <h1 className="ml-4 text-2xl font-serif font-bold text-gray-900">Papier</h1>
          </div>
          
          <div className="hidden sm:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Notebooks</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pens</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Paper</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-6 w-6 text-gray-600" />
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}