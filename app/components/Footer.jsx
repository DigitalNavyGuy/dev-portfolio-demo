import Image from "next/image";
import { assets } from "@/assets/assets";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Footer = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/DigitalNavyGuy",
      icon: assets.github_icon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/john-fuller-et2swret/",
      icon: assets.linkedin_icon,
    },
  ];

  if (!mounted) {
    return (
      <div id="footer" className="w-full px-[12%] py-10 scroll-mt-20">
        <div className="h-screen bg-gray-200 dark:bg-gray-800"></div>
      </div>
    );
  }

  const logo = resolvedTheme === "dark" ? assets.logo_dark : assets.logo;
  const textColor = resolvedTheme === "dark" ? "text-white" : "text-black";
  const borderColor =
    resolvedTheme === "dark" ? "border-gray-600" : "border-gray-400";
  const linkHover =
    resolvedTheme === "dark" ? "hover:text-gray-400" : "hover:text-gray-600";

  return (
    <footer className={`mt-20 ${textColor}`}>
      <div className="text-center">
        <a href="/">
          <Image
            src={logo}
            alt="DigitalNavyGuy Logo"
            className="w-48 mx-auto mb-2"
            width={144}
            height={40}
            priority
          />
        </a>

        <div className={`w-max flex items-center gap-2 mx-auto ${textColor}`}>
          <Image
            src={assets.mail_icon}
            alt="Email icon"
            className="w-6"
            width={24}
            height={24}
          />
          webdesign@digitalnavyguy.com
        </div>
      </div>

      <div
        className={`text-center sm:flex items-center justify-between border-t ${borderColor} mx-[10%] mt-12 py-6`}
      >
        <p className={textColor}>
          &copy; 2025 DigitalNavyGuy. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={social.url}
                className={`${textColor} ${linkHover} flex items-center gap-2 transition-colors`}
              >
                {social.icon && (
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={20}
                    height={20}
                    className="w-5"
                  />
                )}
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center pb-8">
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          Built with Next.js and Tailwind CSS
        </a>
      </div>
    </footer>
  );
};

export default Footer;
