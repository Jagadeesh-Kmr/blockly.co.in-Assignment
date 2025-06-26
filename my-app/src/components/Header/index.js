import { IoMdMenu } from 'react-icons/io';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useState } from 'react';

const Header = ({ isDark, toggleDarkMode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  const onClickNavMenu = () => setShowMobileMenu((prev) => !prev);

  const navMbMenu = showMobileMenu ? '' : 'hidden';
  const navLinks = ['Home', 'About', 'Resume', 'Skills', 'Projects', 'Contact'];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-[100px] bg-white/90 dark:bg-gray-900/90 shadow-md z-[1000] transition-colors">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between px-4 h-full">

          {/* Mobile Nav */}
          <div className="flex items-center justify-between w-full md:hidden">
            <a href="#Home">
              <p className="text-[15px] font-bold w-[220px] flex items-center justify-around gap-2 p-2 text-black dark:text-white">
                <span>
                  <img
                    src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1750864993/Logo_arxxoa.jpg"
                    alt="profile logo"
                    className="w-6 h-6 rounded-full"
                  />
                </span>
                ANISH KUMAR SINHA
              </p>
            </a>
            <button onClick={onClickNavMenu}>
              <IoMdMenu className="text-3xl text-gray-700 dark:text-white" />
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center justify-between w-full">
            <a href="#Home">
              <p className="flex items-center justify-around gap-2 p-2 font-bold w-[320px] text-black dark:text-white text-2xl">
                <span className="text-[#5f93c1]">
                  <img
                    src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1750864993/Logo_arxxoa.jpg"
                    alt="profile logo"
                    className="w-8 h-8 rounded-full"
                  />
                </span>
                ANISH KUMAR SINHA
              </p>
            </a>

            <div className="flex items-center gap-4">
              <ul className="flex ml-auto gap-10 font-semibold text-lg">
                {navLinks.map((section) => (
                  <li key={section}>
                    <a
                      href={`#${section}`}
                      onClick={() => setActiveSection(section)}
                      className={`transition duration-200 text-blue-950 dark:text-white ${
                        activeSection === section
                          ? 'font-bold border-b-2 border-blue-950 dark:border-white'
                          : ''
                      }`}
                    >
                      {section}
                    </a>
                  </li>
                ))}
              </ul>

              <button
                onClick={toggleDarkMode}
                className="text-2xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition"
                title="Toggle Dark Mode"
              >
                {isDark ? (
                  <BsSunFill className="text-yellow-400" />
                ) : (
                  <BsMoonFill className="text-gray-800 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav List */}
        <ul
          className={`flex flex-col w-full absolute top-[100px] left-0 md:hidden font-semibold text-lg p-4 bg-white dark:bg-gray-900 ${navMbMenu}`}
        >
          {navLinks.map((section) => (
            <li key={section} className="mb-2">
              <a
                href={`#${section}`}
                onClick={() => {
                  setActiveSection(section);
                  onClickNavMenu();
                }}
                className={`block text-blue-950 dark:text-white ${
                  activeSection === section
                    ? 'font-bold border-b-2 border-blue-950 dark:border-white'
                    : ''
                }`}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Header;
