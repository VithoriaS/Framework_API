import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeComponent extends Component {
  render() {
    return (
      <header>
        <h1 className="titulo">
          <p>Welcome</p>
        </h1>

        <input type="checkbox" id="control-nav" />
        <label htmlFor="control-nav" className="control-nav"></label>
        <label htmlFor="control-nav" className="control-nav-close"></label>

        <nav className="float-r">
          <ul className="lista">
            <li>
              <Link to="/" title="Home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/posts" title="Posts">
                Posts
              </Link>
            </li>
            <li>
              <Link to="/todos" title="Todos">
                Todos
              </Link>
            </li>
            <li>
              <Link to="/albums" title="Album">
                Album
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}