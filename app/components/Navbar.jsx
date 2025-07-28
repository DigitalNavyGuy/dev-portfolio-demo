import Image from "next/image";
import { assets } from "@/assets/assets";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuToggle = useRef();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const openMenu = () => {
    sideMenuToggle.current.style.transform = "translateX(-16rem)";
  };

  const closeMenu = () => {
    sideMenuToggle.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) {
    return (
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <div className="w-28 h-10 bg-gray-200 dark:bg-gray-700 mr-14"></div>
      </nav>
    );
  }

  // Theme-dependent assets
  const logo = resolvedTheme === "dark" ? assets.logo_dark : assets.logo;
  const arrowIcon =
    resolvedTheme === "dark" ? assets.arrow_icon_dark : assets.arrow_icon;
  const menuIcon =
    resolvedTheme === "dark" ? assets.menu_white : assets.menu_black;
  const closeIcon =
    resolvedTheme === "dark" ? assets.close_white : assets.close_black;
  const mobileMenuBg =
    resolvedTheme === "dark" ? "bg-dark-hover" : "bg-rose-50";

  // Navigation items with consistent IDs
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About me", id: "about" },
    { name: "Services", id: "services" },
    { name: "My Work", id: "work" },
    { name: "Contact me", id: "contact" },
  ];

  return (
    <>
      {resolvedTheme === "light" && (
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
          <Image
            src={assets.header_bg_color}
            className="w-full"
            alt="Header Background"
            priority
          />
        </div>
      )}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white backdrop-blur-lg shadow-sm dark:bg-dark-theme/0 dark:shadow-white/20"
            : "dark:bg-transparent"
        }`}
      >
        <a href="/">
          <Image
            src={logo}
            className="w-60 cursor-pointer mr-14"
            alt="Logo"
            priority
          />
        </a>

        {/* Desktop Menu */}
        <ul
          className={`hidden lg:flex items-center gap-6 xl:gap-8 rounded-full px-8 xl:px-12 py-3 ${
            isScroll
              ? ""
              : "bg-transparent shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className="font-Ovo hover:text-primary transition-colors"
                href={`#${item.id}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeSwitch />

          <a
            href="#contact"
            className="font-Ovo hidden lg:flex items-center gap-3 px-8 xl:px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50 hover:bg-light-hover dark:hover:bg-dark-hover/50 transition-colors"
          >
            Contact
            <Image src={arrowIcon} className="w-3" alt="" />
          </a>

          {/* Mobile menu button */}
          <button className="block lg:hidden ml-3" onClick={openMenu}>
            <Image src={menuIcon} className="w-6" alt="Menu Icon" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuToggle}
          className={`flex lg:hidden flex-col gap-6 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen transform duration-500 ${mobileMenuBg}`}
        >
          <div className="absolute top-6 right-6" onClick={closeMenu}>
            <Image src={closeIcon} className="w-5 cursor-pointer" alt="Close" />
          </div>

          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className="font-Ovo text-lg hover:text-primary transition-colors"
                href={`#${item.id}`}
                onClick={closeMenu}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
