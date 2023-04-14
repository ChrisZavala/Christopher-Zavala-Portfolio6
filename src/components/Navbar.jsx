import { logo } from '../assets';
import { navLinksdata } from '../constants';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="navbar-lg sticky top-0 left-0 right-0 flex justify-between items-center w-full h-24 mx-auto font-titleFont border-b-[1px] bg-dark bg-black border-b-gray-600">

      <div>
      <Link to="/">
        <img className="w-28 h-28" src={logo} alt="logo" />
        </Link>
      </div>

      <div>
        <ul className="inline-flex items-center gap-6 lg:gap-10 pl-4">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-[#58C0A9] duration-300"
              key={_id}
            >
              <Link
                activeclass="active"
                to={link}
                spy="true"
                smooth="true"
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-[#58C0A9] cursor-pointer mobile-menu-icon"
        >
          <FiMenu />
        </span>

        {showMenu && (
          <div className="w-full h-screen overflow-scroll absolute top-0 left-0 bg-black p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-white mt-2">
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-white tracking-wide cursor-pointer hover:text-[#58C0A9] duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeclass="active"
                      to={item.link}
                      spy="true"
                      smooth="true"
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-[#58C0A9] duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
