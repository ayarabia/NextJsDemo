import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function NavBar() {
  const router = useRouter();
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <Link href="#">
            <a className="navbar-brand">Navbar</a>
          </Link>
          <button
            className="navbar-toggler bg-light text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/home">
                  <a
                    className={
                      "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                    }
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a
                    className={
                      "nav-link " +
                      `${router.pathname === "/about" ? "active" : ""}`
                     
                    }
                  
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/posts">
                  <a
                    className={
                      "nav-link " +
                      `${router.pathname === "/posts" ? "active" : ""}`
                    }
                  >
                    Posts
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
