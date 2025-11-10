export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json');
  
  const { category = 'general' } = req.query;
  const apiKey = process.env.VITE_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({ 
      status: 'error',
      message: 'API key not configured' 
    });
  }
  
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`
    );
    
    if (!response.ok) {
      throw new Error(`NewsAPI returned ${response.status}`);
    }
    
    const data = await response.json();
    
    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ 
      status: 'error',
      message: error.message || 'Failed to fetch news' 
    });
  }
}
