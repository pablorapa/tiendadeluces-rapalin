import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import CartWidget from "../cart/CartWidget/CartWidget";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { getCategories } from "../../services/products";
import "./Navbar.css"
import { CartContext } from "../../context/CartContext";
import { ErrorContext } from "../../context/ErrorContext";

const NavBar = () => {

  const { categories, setCategories } = useContext(CartContext);
  const { handleError } = useContext(ErrorContext);

  const [links, setLinks] = useState([]);

  const mobileNavigation = [
    {
      name: "Inicio",
      ref: "/",
    },
    {
      name: "Carrito",
      ref: "/cart"
    },
    ...links,
    {
      name: "Contactenos",
      ref: "/contact",
    },
  ];


  useEffect(() => {
    getCategories()
      .then((result) => {
        setCategories(result);
      })
      .catch((e) => {
        handleError({message: e.message})
      })// eslint-disable-next-line
  }, []);

  useEffect(() => {
    setLinks(categories.map(category => (
      {
        name: category.name,
        ref: `category/${category.id}`
      }
    )))
  }, [categories]);


  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <nav className="nav App-header">
            <div className="nav-container">
              <Link to="/" className="flex">
                <img src={logo} width="100" height="55" alt="alba tienda de luces" />
              </Link>
              <div className="mobile-menu">
                <Disclosure.Button className="mobile-menu-btn">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="menu-container">
                <ul className="menu-list">
                  <li>
                    <Link
                      to="/"
                      className="menu-option"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Dropdown
                      buttonName="Productos"
                      to="/products"
                      links={links}
                      buttonClass="menu-option"
                    />
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="menu-option"
                    >
                      Contactenos
                    </Link>
                  </li>
                  <li>
                    <CartWidget />
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <Disclosure.Panel className="mobile-menu-panel App-header">
            <div className="mobile-menu-list">
              {mobileNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className="mobile-menu-option"
                >
                  <Link to={item.ref}> {item.name} </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
