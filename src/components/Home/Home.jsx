import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useAnimationControls } from "framer-motion";
import InnerHome from "../InnerHome/InnerHome";

function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const { scrollY } = useScroll();
  const controls = useAnimationControls();

  // Create a spring-based scroll progress
  const scrollProgress = useSpring(0, { stiffness: 400, damping: 90 });

  useEffect(() => {
    return scrollY.onChange((latest) => {
      // Calculate total scroll progress as a value between 0 and 1
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = latest / scrollableHeight; // Progress from top to bottom
      scrollProgress.set(progress);
    });
  }, [scrollY, scrollProgress]);

  useEffect(() => {
    const unsubscribe = scrollProgress.on("change", (latest) => {
      if (latest > 0.4) {  // Change this threshold based on when you want the animation to trigger
        controls.start({ opacity: 1, y: 0 });
      } else if (latest < 0.4) {
        controls.start({ opacity: 0, y: 20 });
      }
    });

    return () => unsubscribe();
  }, [controls, scrollProgress]);

  // Animation variants for the main content
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div className="h-screen bg-cover bg-center bg-[url('/iot.jpg')]">
        <div className="flex justify-between bg-black bg-opacity-50 h-full p-10">
          {/* Left Section */}
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
                href="/features"
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                veniam inventore debitis iusto omnis laudantium delectus vitae
                magni fugiat aut. Nam, unde placeat!
              </p>
              <a
                href="/get-started"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
              >
                Start Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
              <hr />
      {/* Inner Home section with scroll-triggered animation */}
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
