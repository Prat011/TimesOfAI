import React from 'react';
import Header from './components/Header';
import NewsFeed from './components/NewsFeed';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <NewsFeed />
      </main>
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About Times of AI</h3>
              <p className="text-gray-600">
                Where traditional journalism meets artificial intelligence, bringing you the future of news today.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Home</a></li>
                <li><a href="#" className="hover:text-blue-600">Archives</a></li>
                <li><a href="#" className="hover:text-blue-600">About AI Analysis</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest AI-powered insights.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p> {new Date().getFullYear()} Times of AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
