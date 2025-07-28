import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";

const Contact = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
        {/* Placeholder for SSR */}
        <div className="h-screen bg-gray-200 dark:bg-gray-800"></div>
      </div>
    );
  }

  const handleDemoSubmit = (event) => {
    event.preventDefault();
    setResult("This is a demo - form submission is disabled");
    // Clear the message after 3 seconds
    setTimeout(() => setResult(""), 3000);
    event.target.reset();
  };

  return (
    <motion.div
      id="contact"
      className={`w-full px-[12%] py-10 scroll-mt-20 ${
        resolvedTheme === "dark"
          ? "bg-none"
          : "bg-[url('/footer-bg-color.png')]"
      }  bg-no-repeat bg-center bg-[length:90%_auto]`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Connect With Me
      </motion.h4>

      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        I'm always open to new opportunities and collaborations. Whether you
        have a project in mind or just want to say hello, feel free to reach
        out. You can contact me via email or connect with me on social media.
        Let's work together to create something amazing!
      </motion.p>

      <motion.form
        onSubmit={handleDemoSubmit}
        className="max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            type="text"
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px]  rounded-md  ${
              resolvedTheme === "dark" ? "bg-dark-hover/30" : "bg-white"
            } ${
              resolvedTheme === "dark" ? "border-white/90" : "border-gray-400"
            }`}
            name="name"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px]  rounded-md  ${
              resolvedTheme === "dark" ? "bg-dark-hover/30" : "bg-white"
            } ${
              resolvedTheme === "dark" ? "border-white/90" : "border-gray-400"
            }`}
            name="email"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          />
        </div>
        <motion.textarea
          rows="6"
          placeholder="Enter your message"
          required
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md mb-6 ${
            resolvedTheme === "dark" ? "bg-dark-hover/30" : "bg-white"
          } ${
            resolvedTheme === "dark" ? "border-white/90" : "border-gray-400"
          }`}
          name="message"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        ></motion.textarea>

        <motion.button
          type="submit"
          className={`py-3 px-8 w-max flex items-center justify-between gap-2  text-white rounded-full mx-auto  duration-500 ${
            resolvedTheme === "dark"
              ? "bg-transparent border-[0.5px] hover:bg-dark-hover"
              : "bg-black/80 hover:bg-black"
          } cursor-pointer`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Submit Now
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow"
            className="w-4"
          />
        </motion.button>

        <p className="mt-4">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
