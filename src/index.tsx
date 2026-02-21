import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <div className="logo">
          <span>■</span> LinuxLaptopDB
        </div>
        <nav>
          <a href="#">Browse</a>
          <a href="#">Submit Report</a>
          <a href="#">Help</a>
        </nav>
      </header>

      <section className="search-section">
        <div className="search-container">
          <input type="text" placeholder="Search laptop model, SKU, or hardware ID..." />
          <button>Search</button>
        </div>
        <div className="popular-searches">
          Popular Searches: 
          <a href="#">ThinkPad T14</a> | 
          <a href="#">XPS 13</a> | 
          <a href="#">Framework 13</a>
        </div>
      </section>

      <div className="browse-nav">
        Browse by: 
        <a href="#">Laptop Models</a> | 
        <a href="#">Wi-Fi Chips</a> | 
        <a href="#">GPUs</a> | 
        <a href="#">Fingerprint Readers</a> | 
        <a href="#">Docking Stations</a>
      </div>

      <div className="dashboard-grid">
        <div className="card trending">
          <h3>Trending Compatibility Reports</h3>
          <div className="report-item">
            <div className="report-img"></div>
            <div className="report-info">
              <h4>Lenovo ThinkPad T14 Gen 4 (AMD)</h4>
              <div className="report-meta">
                <span className="rating-stars">★★★★★</span> Platinum
              </div>
            </div>
          </div>
          <div className="report-item">
            <div className="report-img"></div>
            <div className="report-info">
              <h4>Dell XPS 13 9310</h4>
              <div className="report-meta">
                <span className="rating-stars">★★★★★</span> Gold
              </div>
            </div>
          </div>
          <div className="report-item">
            <div className="report-img"></div>
            <div className="report-info">
              <h4>HP Spectre x360 14</h4>
              <div className="report-meta">
                <span className="rating-stars">★★★☆☆</span> Silver
              </div>
            </div>
          </div>
          <div className="report-item">
            <div className="report-img"></div>
            <div className="report-info">
              <h4>Asus Zephyrus G14 (2023)</h4>
              <div className="report-meta">
                <span className="rating-stars">★★☆☆☆</span> Bronze
              </div>
            </div>
          </div>
        </div>

        <div className="card recent">
          <h3>Recent Submissions</h3>
          <div className="recent-item">
            <span>▶</span>
            <div>T480, Fedora 40: everything works except fingerprint</div>
          </div>
          <div className="recent-item">
            <span>▶</span>
            <div>XPS 15 9520, Ubuntu 24.04: suspend flaky, needs kernel tweak</div>
          </div>
        </div>
      </div>

      <section className="results-section">
        <h2>Results for "XPS 15 9520"</h2>
        
        <div className="result-card">
          <div className="result-img"></div>
          <div className="result-content">
            <h3>Dell XPS 15 9520 (2022)</h3>
            <div className="report-meta">
              <span className="rating-stars">★★★★★</span> Gold
            </div>
            <hr style={{opacity: 0.1, margin: '15px 0'}} />
            <div className="known-issues">
              <em>Known Issues:</em> Suspend, Hybrid GPU Switching, Webcam IR
            </div>
            <div className="known-issues">
              <em>Most Used Distros:</em> Ubuntu 24.04, Fedora 40, Arch
            </div>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>

        <div className="result-card">
          <div className="result-img"></div>
          <div className="result-content">
            <h3>Dell XPS 15 9510 (2021)</h3>
            <div className="report-meta">
              <span className="rating-stars">★★★☆☆</span> Silver
            </div>
            <hr style={{opacity: 0.1, margin: '15px 0'}} />
            <div className="known-issues">
              <em>Known Issues:</em> Audio crackle, Thunderdock issues
            </div>
            <button className="view-details-btn">View Details</button>
          </div>
        </div>
      </section>
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
