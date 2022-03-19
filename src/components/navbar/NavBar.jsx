import React from "react";
import logo from "../../assets/logo.png";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const NavBar = () => {
  const mobileNavigation = [
    {
      name: "Inicio",
      ref: "/",
    },
    {
      name: "Velas",
      ref: "category/velas",
    },
    {
      name: "Jabones",
      ref: "category/jabones",
    },
    {
      name: "Varios",
      ref: "category/varios",
    },
    {
      name: "Contactenos",
      ref: "/contact",
    },
  ];

  const links = [
    {
      name: "Velas",
      ref: "category/velas",
    },
    {
      name: "Jabones",
      ref: "category/jabones",
    },
    {
      name: "Varios",
      ref: "category/varios",
    },
  ];

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <nav className="px-2 sm:px-4 py-2.5 App-header">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
              <Link to="/" className="flex">
                <img src={logo} width="100" height="55" alt="alba tienda de luces" />
              </Link>
              <div className="absolute right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden w-full md:block md:w-auto">
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-transparent hover:text-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-grey-400 md:p-0"
                    >
                      Inicio
                    </Link>
                  </li>
                  <li>
                    <Dropdown
                      buttonName="Productos"
                      to="/products"
                      links={links}
                      buttonClass="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-transparent hover:text-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-grey-400 md:p-0"
                    />
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-transparent hover:text-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-grey-400 md:p-0"
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

          <Disclosure.Panel className="sm:hidden App-header h-screen">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {mobileNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  className="block px-3 py-2 rounded-md text-base text-center font-medium"
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
