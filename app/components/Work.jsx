import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Work = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Theme-dependent assets
  const arrowIcon =
    mounted && resolvedTheme === "dark"
      ? assets.right_arrow_bold_dark
      : assets.right_arrow_bold;

  if (!mounted) {
    return (
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <div className="h-screen bg-gray-200 dark:bg-gray-800"></div>
      </div>
    );
  }

  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className="text-center mb-2 text-lg font-Ovo">
        My Portfolio
      </motion.h4>

      <motion.h2 className="text-center text-5xl font-Ovo">
        My Latest Work
      </motion.h2>

      <motion.p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        As a freelance web developer, I take pride in delivering high-quality
        websites that meet my clients' needs.
      </motion.p>

      {/* Work grid */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            style={{ backgroundImage: `url(${project.bgImage})` }}
            className="aspect-square bg-cover bg-no-repeat bg-center rounded-lg relative cursor-pointer group"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt="View project"
                  width={20}
                  height={20}
                  className="w-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        href="#"
        className={`w-max flex items-center justify-center gap-2 border-[0.5px] rounded-full py-3 px-10 mx-auto my-20 duration-500 ${
          resolvedTheme === "dark"
            ? "border-white text-white hover:bg-dark-hover"
            : "border-gray-700 text-gray-700 hover:bg-light-hover"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
      >
        Show more
        <Image src={arrowIcon} alt="" width={16} height={16} className="w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
