export const NewsItem = ({ title, description, src, url, theme }) => {
  return (
    <div
      className="card h-100"
      style={{
        width: "100%",
        maxWidth: "380px",
        minHeight: "480px",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: theme === 'dark' ? "#1a1a2e" : "#ffffff",
        border: theme === 'light' ? '1px solid #e0e0e0' : 'none',
        boxShadow: theme === 'dark' 
          ? '0 8px 24px rgba(0,0,0,0.4)' 
          : '0 8px 24px rgba(0,0,0,0.12)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = theme === 'dark' 
          ? '0 12px 32px rgba(0,0,0,0.5)' 
          : '0 12px 32px rgba(0,0,0,0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = theme === 'dark' 
          ? '0 8px 24px rgba(0,0,0,0.4)' 
          : '0 8px 24px rgba(0,0,0,0.12)';
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={src || "https://via.placeholder.com/380x220?text=No+Image"}
          className="card-img-top"
          alt={title || "News"}
          style={{
            height: "220px",
            objectFit: "cover",
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div 
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.6)',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: '600'
          }}
        >
          📰 News
        </div>
      </div>
      
      <div className="card-body d-flex flex-column p-4">
        <h5 
          className="card-title fw-bold mb-3" 
          style={{ 
            fontSize: '1.15rem',
            lineHeight: '1.4',
            color: theme === 'dark' ? '#fff' : '#2c3e50',
            minHeight: '3.2em'
          }}
        >
          {title ? title.slice(0, 80) : "Untitled News"}
          {title && title.length > 80 ? "..." : ""}
        </h5>
        
        <p 
          className="card-text mb-4" 
          style={{ 
            fontSize: "0.95rem", 
            color: theme === 'dark' ? "#b8b8b8" : "#5a6c7d",
            lineHeight: '1.6',
            flex: '1'
          }}
        >
          {description
            ? description.slice(0, 120) + "..."
            : "No description available for this news article."}
        </p>
        
        <div className="mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn w-100 fw-semibold"
            style={{
              background: theme === 'dark' 
                ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
                : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              padding: '0.7rem',
              borderRadius: '12px',
              fontSize: '0.95rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(102, 126, 234, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
            }}
          >
            Read Full Article →
          </a>
        </div>
      </div>
    </div>
  );
};
