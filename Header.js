import { Routes, Route, Link } from "react-router-dom";
import { OurProducts } from "./OurProducts";
import { Resources } from "./Resources";
import { Practice } from "./Practice";
import { LiveClasses } from "./LiveClasses";
import { Courses } from "./Courses";

export function Header() {
  const image = "https://www.guvi.in/blog/wp-content/uploads/2022/04/Guvi-blog-logo.png";
  return (
    <div>
      <div>
        <img className="logo-image" src={image} alt={image} />
        <div className="navbar">
          <Link className="course" to="/">
            COURSES
          </Link>

          <Link className="liveclass" to="/liveclass">
            LIVE CLASSES
          </Link>

          <Link className="practice" to="/practice">
            PRACTICE
          </Link>

          <Link className="resource" to="/resources">
            RESOURCES
          </Link>

          <Link className="products" to="/ourproducts">
            OUR PRODUCTS
          </Link>
        </div>
      </div>
      <div className="header-nav">
        <Routes>
          <Route path="/courses" element={<Courses />} />
          <Route path="/liveclass" element={<LiveClasses />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ourproducts" element={<OurProducts />} />
        </Routes>
      </div>
    </div>
  );
}
