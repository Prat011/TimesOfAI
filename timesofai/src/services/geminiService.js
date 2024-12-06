import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

export const generateAIContent = async (article) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `
      Analyze this news article and provide a detailed response in markdown format.
      Include the following sections:

      # Key Points
      - List the main points from the article
      
      # Analysis
      Provide a detailed analysis of the news
      
      # Context
      Add relevant background information
      
      # Implications
      Discuss potential implications and future impact
      
      Article Title: "${article.title}"
      Content: ${article.description}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating AI content:', error);
    throw error;
  }
};
