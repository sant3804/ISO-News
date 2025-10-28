export const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)' 
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '3rem 0 1.5rem 0',
        marginTop: '5rem',
        boxShadow: '0 -4px 12px rgba(0,0,0,0.15)'
      }}
    >
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h3 className="fw-bold mb-3">
              📰 <span style={{
                background: 'linear-gradient(90deg, #fff, #ffd700)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Iso News</span>
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.6', opacity: 0.9 }}>
              Your trusted source for the latest news from around the world. 
              Stay informed, stay updated!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ opacity: 0.9, transition: 'opacity 0.3s' }}
                   onMouseEnter={(e) => e.target.style.opacity = 1}
                   onMouseLeave={(e) => e.target.style.opacity = 0.9}>
                  🏠 Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ opacity: 0.9, transition: 'opacity 0.3s' }}
                   onMouseEnter={(e) => e.target.style.opacity = 1}
                   onMouseLeave={(e) => e.target.style.opacity = 0.9}>
                  ℹ️ About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ opacity: 0.9, transition: 'opacity 0.3s' }}
                   onMouseEnter={(e) => e.target.style.opacity = 1}
                   onMouseLeave={(e) => e.target.style.opacity = 0.9}>
                  📧 Contact
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ opacity: 0.9, transition: 'opacity 0.3s' }}
                   onMouseEnter={(e) => e.target.style.opacity = 1}
                   onMouseLeave={(e) => e.target.style.opacity = 0.9}>
                  🔒 Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media & Contact */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Connect With Us</h5>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-white" style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                📘
              </a>
              <a href="#" className="text-white" style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                🐦
              </a>
              <a href="#" className="text-white" style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                📷
              </a>
              <a 
                href="https://www.linkedin.com/in/santosh-kumar08-cse/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white" 
                style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              >
                💼
              </a>
            </div>
            <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>
              📧 sk1231384@gmail.com<br/>
              📞 +91 91425 32685
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr style={{ borderColor: 'rgba(255,255,255,0.2)', margin: '2rem 0 1.5rem 0' }} />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0" style={{ fontSize: '0.9rem', opacity: 0.85 }}>
              © {currentYear} Iso News. All rights reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0" style={{ fontSize: '0.9rem' }}>
              Made with ❤️ by <strong style={{
                background: 'linear-gradient(135deg, #ff6a00, #ee0979)',
                padding: '0.2rem 0.6rem',
                borderRadius: '12px',
                fontWeight: '600'
              }}>Santosh Kumar</strong>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
