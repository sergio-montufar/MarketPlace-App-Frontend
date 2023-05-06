import {Link} from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/products">
        <h3>Market</h3>
      </Link>
      <Link to="/profile">
        <h3 id="profile">Profile</h3>
      </Link>
    </nav>
  )
}

export default Header;