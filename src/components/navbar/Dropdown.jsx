import React from "react";
import { createPopper } from "@popperjs/core";
import { Link } from 'react-router-dom'
import { useEffect } from "react";

const Dropdown = ({buttonName, buttonClass, links}) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const buttonDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(buttonDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <div className="flex flex-wrap"
              onMouseEnter={() => openDropdownPopover()}
              onMouseLeave={() => closeDropdownPopover()}
      >
        <div className="w-full">
          <div className="relative w-full">
            <a
              className= {buttonClass}
              ref={buttonDropdownRef}
              onClick={(e) => {
                  e.stopPropagation();
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            > {buttonName}
            <svg fill="currentColor" viewBox="0 0 20 20" className="inline w-4 h-4 m-0.5 ml-1 md:m-0.5"><path  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" ></path></svg>
            </a>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 bg-white"
              }
            >
                {links.map((link, idx) => 
                    <Link
                        key={idx}
                        to={link.ref}
                        className="text-sm py-2 px-4 font-normal block whitespace-nowrap"
                        >
                        {link.name}
                    </Link>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;