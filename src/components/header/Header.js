
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'; 

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header
      className={`header ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">Navbar</Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" id='link1' to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id='link2' to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id='link3' to="/assessment">Assessment</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id='link4' to="/career-paths">Career Paths</Link>
            </li>
          </ul>
        </div>
        <form className="form-inline my-2 my-lg-0 mx-10" >
  <div className="input-group">
    <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
    <div className="input-group-append">
      <button className="btn btn-outline-success" type="submit">Search</button>
    </div>
  </div>
</form>

      </nav>

      {isHovered && (
        <div className="dropdown-card">
 <div class="container">
        <h2 class="title">Career Development Programs</h2>
        <div class="grid">
            <div class="card">
                <h3 class="card-title">In School Career Guidance</h3>
                <p class="card-description">State-of-the-art assessment & end-to-end career guidance to help students discover their perfect career.</p>
                <a href="#" class="card-link">View Program Details &gt;</a>
            </div>
            <div class="card">
                <h3 class="card-title">MUN Training Program</h3>
                <p class="card-description">Expert-led training and comprehensive guidance sessions to help students excel at MUN conferences.</p>
                <a href="#" class="card-link">View Program Details &gt;</a>
            </div>
            <div class="card">
                <h3 class="card-title">Mindler Talks</h3>
                <p class="card-description">Career resources and inspirational talks for students with professionals who have achieved success in their fields.</p>
                <a href="#" class="card-link">View Program Details &gt;</a>
            </div>
        </div>
    </div>
        
        </div>
      )}
    </header>
  );
}

export default Header;





