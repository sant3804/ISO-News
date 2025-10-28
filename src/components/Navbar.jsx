import { useState } from "react";

export const Navbar = ({ setCategory, theme, toggleTheme }) => {
  const [active, setActive] = useState("technology");

  const categories = [
    "technology",
    "business",
    "health",
    "sports",
    "entertainment",
    "science"
  ];

  const handleClick = (cat) => {
    setCategory(cat);
    setActive(cat);
  };

  return (
    <nav 
      className={`navbar navbar-expand-lg py-3`}
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' 
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}
    >
      <div className="container-fluid">
        
        <div className="d-flex align-items-center gap-3">
          <a className="navbar-brand fw-bold fs-3 text-white" href="#" style={{ textDecoration: 'none' }}>
            <span className="d-flex align-items-center gap-2">
              📰 <span style={{ 
                background: 'linear-gradient(90deg, #fff, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '800'
              }}>Iso News</span>
            </span>
          </a>
          
          <span
            className="badge rounded-pill d-none d-md-inline-block"
            style={{
              background: "linear-gradient(135deg, #ff6a00, #ee0979)",
              fontSize: "0.75rem",
              fontWeight: "500",
              padding: "0.5rem 1rem",
              boxShadow: "0 2px 8px rgba(255, 106, 0, 0.4)",
            }}
          >
            🚀 By <strong>Santosh Kumar</strong>
          </span>
          
          <button
            onClick={toggleTheme}
            className="btn btn-light btn-sm ms-2"
            style={{ 
              minWidth: '90px',
              fontWeight: '600',
              borderRadius: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-3 mt-md-0" id="navbarNav">
          <ul className="navbar-nav ms-md-auto d-flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className={`btn btn-sm text-capitalize ${
                    active === cat ? "btn-warning text-dark fw-bold" : "btn-outline-light"
                  }`}
                  style={{
                    borderRadius: '20px',
                    padding: '0.4rem 1.2rem',
                    transition: 'all 0.3s ease',
                    fontWeight: active === cat ? '700' : '500'
                  }}
                  onClick={() => handleClick(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
