import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
    console.log("Theme toggled:", isDarkMode ? "Light Mode" : "Dark Mode"); // Debugging log
  };

  return (
    <nav className="flex justify-between items-center ">
      <div>
        <h1 className="text-2xl font-bold">MealDB</h1>
      </div>
      <div>
        <ul className="flex items-center gap-3 text-gray-500">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/meals">Meals</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </div>
      <div>
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleThemeChange}
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className={`stroke-base-100 fill-base-100 col-start-1 row-start-1 ${isDarkMode ? 'hidden' : 'block'}`}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className={`stroke-base-100 fill-base-100 col-start-2 row-start-1 ${isDarkMode ? 'block' : 'hidden'}`}
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Header;
