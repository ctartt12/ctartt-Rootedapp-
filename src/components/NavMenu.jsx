import { NavLink } from 'react-router-dom';

function NavMenu() {
    return (
      <>
        <nav>
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/About" className="nav-link">About</NavLink>
          <NavLink to="/MyPlants" className="nav-link">MyPlants</NavLink>
          <NavLink to="/MySupplies" className="nav-link">MySupplies</NavLink>
        </nav>
        
      </>
    )
};

export default NavMenu 