import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Services = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
        <div className="h-screen bg-gray-200 dark:bg-gray-800"></div>
      </div>
    );
  }

  return (
    <motion.div
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <motion.h4
        className={`text-center mb-2 text-lg font-Ovo ${
          resolvedTheme === "dark" ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        What I Offer
      </motion.h4>

      <motion.h2
        className={`text-center text-5xl font-Ovo ${
          resolvedTheme === "dark" ? "text-white" : "text-black"
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>

      <motion.p
        className={`text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo ${
          resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        As a freelance web developer, I specialize in creating custom websites
        tailored to your needs. Whether you need a brand new site or want to
        enhance an existing one, I can help. My services include:
      </motion.p>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            className={`border rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 ${
              resolvedTheme === "dark"
                ? "border-white/30 hover:bg-dark-hover/50 hover:shadow-white"
                : "border-gray-400 hover:bg-light-hover hover:shadow-black"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={icon}
              alt={title}
              className="w-10"
              width={40}
              height={40}
            />
            <h3
              className={`text-lg my-4 ${
                resolvedTheme === "dark" ? "text-white" : "text-black"
              }`}
            >
              {title}
            </h3>
            <p
              className={`text-sm leading-5 ${
                resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {description}
            </p>
            <a
              href={link}
              className={`flex items-center gap-2 text-sm mt-5 ${
                resolvedTheme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Read more
              <Image
                src={
                  resolvedTheme === "dark"
                    ? assets.right_arrow_white
                    : assets.right_arrow
                }
                className="w-4"
                alt=""
                width={16}
                height={16}
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
