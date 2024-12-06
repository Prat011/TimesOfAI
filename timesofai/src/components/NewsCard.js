import React, { useState } from 'react';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { generateAIContent } from '../services/geminiService';

const NewsCard = ({ article }) => {
  const [aiAnalysis, setAiAnalysis] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);

  const fetchAIAnalysis = async () => {
    if (!aiAnalysis && !loading) {
      setLoading(true);
      try {
        const analysis = await generateAIContent(article);
        setAiAnalysis(analysis);
      } catch (error) {
        console.error('Error getting AI analysis:', error);
      } finally {
        setLoading(false);
      }
    }
    setShowAnalysis(!showAnalysis);
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        {article.urlToImage && (
          <>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <time>{moment(article.publishedAt).format('MMM D, YYYY')}</time>
          <span className="mx-2">•</span>
          <span>{article.source.name}</span>
        </div>

        <h2 className="text-2xl font-serif font-bold mb-3 leading-tight hover:text-blue-600 transition-colors">
          {article.title}
        </h2>
        
        <p className="text-gray-600 mb-6 line-clamp-3">{article.description}</p>
        
        <div className="space-y-6">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Read full article
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <button
            onClick={fetchAIAnalysis}
            className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating Analysis...
              </>
            ) : (
              showAnalysis ? 'Hide AI Analysis' : 'Show AI Analysis'
            )}
          </button>

          {showAnalysis && aiAnalysis && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-900">AI Analysis:</h3>
              <div className="prose prose-sm max-w-none">
                <ReactMarkdown>{aiAnalysis}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
