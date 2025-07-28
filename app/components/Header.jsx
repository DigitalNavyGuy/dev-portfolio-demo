import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <div className="rounded-full w-32 h-32 bg-gray-200 dark:bg-gray-700"></div>
      </div>
    );
  }

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt="Profile picture"
          className="rounded-full w-32"
          priority
          width={128}
          height={128}
        />
      </motion.div>

      <motion.h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Hi! I'm DigitalNavyGuy
        <Image
          src={assets.hand_icon}
          alt="Waving hand"
          className="w-6"
          width={24}
          height={24}
        />
      </motion.h3>

      <motion.h1
        className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Freelance web developer based in Columbia, SC.
      </motion.h1>

      <motion.p
        className="max-w-2xl mx-auto font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I specialize in building exceptional digital experiences, whether it's
        creating a new website from scratch or enhancing an existing one. My
        passion lies in crafting solutions that not only meet but exceed client
        expectations.
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          Contact Me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4"
            width={16}
            height={16}
          />
        </motion.a>

        <motion.a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          My Resume
          <div className={resolvedTheme === "dark" ? "filter invert" : ""}>
            <Image
              src={assets.download_icon}
              alt="Download icon"
              className="w-4"
              width={16}
              height={16}
            />
          </div>
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
