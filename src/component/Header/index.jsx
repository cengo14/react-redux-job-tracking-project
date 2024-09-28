import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src="/public/job.png" alt="" />
        <h2>Job Tracking</h2>
      </Link>
      <nav>
        <NavLink to="/">İş Listesi</NavLink>
        <NavLink to="/create">İş Ekle</NavLink>
      </nav>
    </header>
  );
};

export default Header;
