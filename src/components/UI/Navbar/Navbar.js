import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;
  const isCooksPageActivated = currentPath === "/cooks";
  const isWaitersPageActivated = currentPath === "/waiters";

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            Restaurant Shift
          </Link>
          <div m-5>
            <Link className={`me-2 btn btn-outline-light ${isWaitersPageActivated ? 'visually-hidden': ''}`} to="/waiters">
              Waiters
            </Link>
            <Link className={`me-2 btn btn-outline-light ${isCooksPageActivated ? 'visually-hidden': ''}`} to="/cooks">
              Cookers
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
