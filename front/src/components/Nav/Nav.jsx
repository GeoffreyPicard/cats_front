import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// CSS
import "./nav.css"

class Nav extends Component {
  render() {
    return (
      <div>
      	<div className="nav">
          <Link to='/' className="nav_link">
            Home
          </Link>
          <Link to='/' className="nav_link">
            Vote
          </Link>
          <Link to='/' className="nav_link">
            List
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;