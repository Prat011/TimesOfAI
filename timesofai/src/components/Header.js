import React from 'react';
import moment from 'moment';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="py-2 border-b border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div>{moment().format('dddd, MMMM D, YYYY')}</div>
            <div>Today's Digital Edition</div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="py-8 text-center">
          <h1 className="text-6xl font-serif font-bold text-gray-900 mb-2 tracking-tight">
            Times of AI
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-500">
            <span className="h-px bg-gray-300 w-12"></span>
            <p className="text-lg italic">News with no ads and complete context</p>
            <span className="h-px bg-gray-300 w-12"></span>
          </div>
        </div>

        {/* Navigation */}
        {/* <nav className="py-3 border-t border-b border-gray-200">
          <ul className="flex justify-center space-x-8 text-gray-600">
            <li className="hover:text-blue-600 cursor-pointer">Breaking News</li>
            <li className="hover:text-blue-600 cursor-pointer">Technology</li>
            <li className="hover:text-blue-600 cursor-pointer">World</li>
            <li className="hover:text-blue-600 cursor-pointer">Business</li>
            <li className="hover:text-blue-600 cursor-pointer">Science</li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
