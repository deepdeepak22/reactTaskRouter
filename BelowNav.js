import { Routes, Route, Link } from "react-router-dom";

export function BelowNav() {
  const image = "https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-1536x236.png";
  return (
    <div>
      <div className="container-nav-img">
        <img className="below-nav-img" src={image} alt={image} />
        <div className="navbar-2">
          <Link className="all" to="/">
            ALL
          </Link>

          <Link className="full-stack-development" to="/fullstackdevelopment">
            FULL STACK DEVELOPMENT
          </Link>

          <Link className="data-science" to="/datascience">
            DATA SCIENCE
          </Link>

          <Link className="cyber-security" to="/cybersecurity">
            CYBER SECURITY
          </Link>

          <Link className="career" to="/career">
            CAREER
          </Link>
        </div>
      </div>

      <div className="header-nav">
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstackdevelopment" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />

        </Routes>
      </div>
    </div>
  );
  function All() {
    return (
      <div>
        <p></p>
      </div>
    );
  }
  function FullStack() {
    return (
      <div>
        <p>full stack</p>
      </div>
    );
  }
  function DataScience() {
    return (
      <div>
        <p>data science</p>
      </div>
    );
  }
  function CyberSecurity() {
    return (
      <div>
        <p>cyber security</p>
      </div>
    );
  }
  function Career() {
    return (
      <div>
        <p>career</p>
      </div>
    );
  }
}
