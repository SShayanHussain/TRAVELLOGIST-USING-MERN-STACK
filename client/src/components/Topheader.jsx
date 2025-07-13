import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Topheader.css';
import { Link } from 'react-router-dom';

const EmailIcon = () => (
  <span className="gg-mail"></span>
);

function Topheader() {
  return (
    <div className="top-header">
      <div className="top-header-left">
        <span className="email-container">
          <EmailIcon />
          <span id="text">info@travellogist.com</span>
        </span>
        <span className="phone-container">
          <FontAwesomeIcon icon={faPhone} className="phone-icon" />
          <span id="text">+92 123 4567890</span>
        </span>
      </div>

      <div className="top-header-right">
        <span className="outer">
          <span id="text">
            <a href="#">Support</a>
          </span>
        </span>
        <span className="outer">
          <span id="text">
            <Link to="/login">Login/Sign up</Link>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Topheader;
