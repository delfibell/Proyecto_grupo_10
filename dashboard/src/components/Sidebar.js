import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo1.png";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      {
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-75" src={logo} alt="OFT" />
          </div>
        </a>
      }

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item ">
        <NavLink className="nav-link" to="/" exact activeClassName="active">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - Enruedas</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Actions</div>

      {/* <!-- Nav Item - Usuarios --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/users" activeClassName="active">
          <i className="fas fa-fw fa-folder"></i>
          <span>Productos por categoria</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/last-product"
          activeClassName="active"
        >
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Ultimo producto</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/products" activeClassName="active">
          <i className="fas fa-fw fa-table"></i>
          <span>Productos</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
