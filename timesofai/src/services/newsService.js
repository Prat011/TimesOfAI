import axios from 'axios';

const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchNews = async (country = 'us') => {
  try {
    console.log('Fetching news for country:', country); // Debug log
    console.log('Using API Key:', NEWS_API_KEY ? 'Present' : 'Missing'); // Debug API key
    const response = await axios({
      method: 'GET',
      url: BASE_URL,
      params: {
        country: country,
        apiKey: NEWS_API_KEY,
        pageSize: 20
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });
    
    console.log('API Response:', response.data); // Debug log
    console.log('Articles:', response.data.articles); // Debug articles
    console.log('Response status:', response.data.status); // Debug status
    
    if (response.data.status === 'error') {
      throw new Error(response.data.message || 'Failed to fetch news');
    }
    
    return response.data.articles || [];
  } catch (error) {
    console.error('Error fetching news:', error.response || error);
    console.error('Error details:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      message: error.message,
      data: error.response?.data
    });
    throw error;
  }
};
