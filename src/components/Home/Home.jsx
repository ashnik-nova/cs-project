import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useAnimationControls } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import InnerHome from "../InnerHome/InnerHome";

function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  const { openAuthForm } = useOutletContext();

  const scrollProgress = useSpring(0, { stiffness: 400, damping: 90 });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = latest / scrollableHeight;
      scrollProgress.set(progress);
    });
  }, [scrollY, scrollProgress]);

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      if (latest > 0.4) {
        controls.start({ opacity: 1, y: 0 });
      } else if (latest < 0.4) {
        controls.start({ opacity: 0, y: 20 });
      }
    });

    return () => unsubscribe();
  }, [controls, scrollProgress]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="h-screen bg-cover bg-center bg-[url('/iot.jpg')]">
        <div className="flex justify-between bg-black bg-opacity-50 h-full p-10">
          <motion.div
            className="flex flex-col items-start justify-center w-1/2 pl-10"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black bg-opacity-25 p-10 rounded-lg shadow-inner transition-all hover:shadow-lg duration-700">
              <h1 className="text-white text-5xl font-bold text-center">
                Welcome to Secure-IoT
              </h1>
              <p className="text-white text-lg mb-8">
                Monitor and manage your IoT devices effortlessly.
              </p>
              <a
                href="/about"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Explore Features
              </a>
            </div>
          </motion.div>

          <div className="relative w-1/2 flex items-center justify-center">
            <div
              className={`absolute inset-0 bg-cover bg-center bg-[url('/blob.svg')] transition-transform duration-500 ${
                isHovering ? 'scale-105' : 'scale-100'
              }`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            ></div>
            <motion.div
              className="relative z-10 text-center max-w-[75%] mx-auto"
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="text-white text-4xl font-bold mb-4">Get Started</h2>
              <p className="text-white text-lg mb-8">
                In an era where billions of devices are interconnected, security, scalability, and seamless data transfer are paramount for any IoT (Internet of Things) solution.
              </p>
              <button
                onClick={openAuthForm}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Start Now
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <hr />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.7 }}
      >
        <InnerHome />
      </motion.div>
    </>
  );
}

export default Home;