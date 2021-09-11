function Header() {
  return (
    <div className="Header">
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
              <a href="/" title="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/posts" title="Posts">
                Posts
              </a>
            </li>
            <li>
              <a href="/todos" title="todos">
                Todos
              </a>
            </li>
            <li>
              <a href="/albums" title="Album">
                Album
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
