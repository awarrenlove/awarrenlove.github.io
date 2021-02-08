import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="w-full p-4 bg-primary">
      <div className="md:container flex justify-between md:justify-start">
        <div>
          <Link className="inline-block text-xl text-white font-bold" to="/">
            Andrew Warren-Love
          </Link>
        </div>
        <div className="flex-grow hidden md:flex justify-between mx-2">
          <div>
            <Link
              className="inline-block px-2 text-l text-white font-bold align-middle"
              to="/tech"
            >
              Technologies
            </Link>
            <Link
              className="inline-block px-2 text-l text-white font-bold align-middle"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          <div>
            <a
              className="px-2 text-xl text-white font-bold align-middle"
              href="https://github.com/awarrenlove/"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="px-2 text-xl text-white font-bold align-middle"
              href="https://www.linkedin.com/in/awarrenlove/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="block md:hidden px-2 text-white align-middle">
          <FontAwesomeIcon
            onClick={() => setMenuActive(!menuActive)}
            icon={faBars}
          />
        </div>
      </div>
      <div
        className={`${menuActive ? "block" : "hidden"} md:hidden flex flex-col`}
      >
        <Link
          className="inline-block mt-1 text-l text-white font-bold align-middle"
          to="/tech"
        >
          Technologies
        </Link>
        <Link
          className="inline-block mt-1 text-l text-white font-bold align-middle"
          to="/contact"
        >
          Contact
        </Link>
        <div>
          <a
            className="pr-2 md:px-2 text-l md:text-xl text-white font-bold align-middle"
            href="https://github.com/awarrenlove/"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="pr-2 md:px-2 text-l md:text-xl text-white font-bold align-middle"
            href="https://www.linkedin.com/in/awarrenlove/"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
