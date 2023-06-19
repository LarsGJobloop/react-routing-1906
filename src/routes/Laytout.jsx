import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <header>
        <div>
          logo
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  )
}