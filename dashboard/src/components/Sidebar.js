import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo1.png";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      {
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="/"
        >
          <div className="sidebar-brand-icon">
            <img className="w-25" src={logo} alt="OFT" />
          </div>
        </a>
      }

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item ">
        <NavLink className="nav-link" to="/" exact activeClassName="active">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - OFT</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">¿Qué estás buscando?</div>

      {/* <!-- Nav Item - Usuarios --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/users" activeClassName="active">
          <i className="fas fa-fw fa-folder"></i>
          <span>Productos por categoría</span>
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
          <span>Último producto</span>
        </NavLink>
      </li>

      {/* <!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/products" activeClassName="active">
          <i className="fas fa-fw fa-table"></i>
          <span>Todos los productos</span>
        </NavLink>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
