import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import CountrySelector from './CountrySelector';
import { fetchNews } from '../services/newsService';

const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('us');

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const articles = await fetchNews(selectedCountry);
        if (articles.length === 0) {
          setError('No news available for the selected region at the moment.');
        } else {
          setNews(articles);
        }
      } catch (err) {
        setError(
          err.response?.data?.message ||
          err.message ||
          'Failed to load news. Please try again later.'
        );
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [selectedCountry]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <CountrySelector
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
          />
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <CountrySelector
          selectedCountry={selectedCountry}
          onCountryChange={setSelectedCountry}
        />
      </div>

      {error ? (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* Featured Article */}
          {news[0] && (
            <div className="mb-12">
              <NewsCard article={news[0]} />
            </div>
          )}

          {/* Regular Articles Grid */}
          {news.slice(1).length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.slice(1).map((article, index) => (
                <NewsCard key={`${article.title}-${index}`} article={article} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default NewsFeed;
