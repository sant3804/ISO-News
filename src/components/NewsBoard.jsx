import { useState, useEffect } from "react";
import { NewsItem } from "./NewsItem";

export const NewsBoard = ({category, theme}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    // Use Vercel serverless function instead of direct API call
    let url = `/api/news?category=${category}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.status === 'ok' && data.articles) {
          setArticles(data.articles);
        } else {
          setError(data.message || 'Failed to fetch news');
          setArticles([]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 
          className="fw-bold mb-2" 
          style={{ 
            fontSize: '2.5rem',
            color: theme === 'dark' ? '#fff' : '#2c3e50',
            textShadow: theme === 'dark' ? '0 2px 4px rgba(0,0,0,0.3)' : 'none'
          }}
        >
          Latest <span 
            className="badge" 
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              fontSize: '2rem',
              padding: '0.3rem 1rem',
              verticalAlign: 'middle'
            }}
          >News</span>
        </h1>
        <p style={{ 
          color: theme === 'dark' ? '#bbb' : '#6c757d',
          fontSize: '1.1rem'
        }}>
          Stay updated with the latest headlines from around the world
        </p>
      </div>
      
      {loading && (
        <div className="text-center my-5">
          <div className="spinner-border" role="status" style={{ 
            width: '3rem', 
            height: '3rem',
            color: theme === 'dark' ? '#667eea' : '#764ba2'
          }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3" style={{ color: theme === 'dark' ? '#bbb' : '#6c757d' }}>
            Loading news...
          </p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mx-auto" style={{ maxWidth: '600px' }}>
          <h5>⚠️ Error Loading News</h5>
          <p className="mb-0">{error}</p>
        </div>
      )}

      {!loading && !error && articles.length === 0 && (
        <div className="text-center my-5">
          <p style={{ 
            color: theme === 'dark' ? '#bbb' : '#6c757d',
            fontSize: '1.2rem'
          }}>
            📰 No news articles available for this category.
          </p>
        </div>
      )}
      
      <div className="row g-4 justify-content-center">
        {!loading && articles && articles.map((news, index) => (
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center" key={index}>
            <NewsItem
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              theme={theme}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
