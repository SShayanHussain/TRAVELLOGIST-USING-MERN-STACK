
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <span className="navbar-logo">
          <span><img src='/images/travellogist.png'></img></span>
          <span><a href="/">TRAVELLOGIST</a></span>
        </span>
        <nav className="navbar-links">
          <a href="/">Home</a>
          
          <a href="/destinations">Destinations</a>
          <a href="/about">Packages</a>
          <a href="/trip-types/domastic">Domestic</a>
          <a href="/trip-types/international">International</a>
          <a href="/umrah">Umrah</a>
          <a href="/visa">Visa</a>
          <a href="/gallery">Gallery</a>
          <a href="/about">About Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
