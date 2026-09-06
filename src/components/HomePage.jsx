import { NavLink } from 'react-router-dom';

 function HomePage() {
  return (
    <main className="hero-content">
      <div className= "welcome-banner">
          <p className="welcome-sub">Welcome to ♡</p>
          <h1 className="main-title">Rooted</h1>
       </div>

        <div className="card-container">
          <NavLink to="/plants" className="action-cards">
            <h3>Add Plants</h3>
            <p>Grow till your heart content</p>
          </NavLink>

          <NavLink to="/AddSupplies" className="action-cards">
            <h3>Add Supplies</h3>
            <p>Log soil, fertilizers and pest control</p>
          </NavLink>
        </div>
    

    </main>
  );
}
export default HomePage 