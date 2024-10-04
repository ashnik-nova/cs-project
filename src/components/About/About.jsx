import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Container } from '@mui/material';
import { Security, Build, DevicesOther } from '@mui/icons-material';
import { FaLaptopCode, FaShieldAlt, FaDatabase, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


// Example team members data with images and social links
const teamMembers = [
  {
    name: 'Samarth Otari',
    icon: <FaLaptopCode className="text-blue-500 text-4xl" />,
    image: '/samarth.jpg',
    instagram: '#',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Parth Mahajan',
    icon: <FaShieldAlt className="text-green-500 text-4xl" />,
    image: '/parth.png',
    instagram: '#',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Pratik Meshram',
    icon: <FaDatabase className="text-purple-500 text-4xl" />,
    image: './pratik.png',
    instagram: '#',
    linkedin: '#',
    github: '#',
  },
  {
    name: 'Ashish Nikam',
    icon: <FaDatabase className="text-purple-500 text-4xl" />,
    image: '/ashish.jpg',
    instagram: '#',
    linkedin: '#',
    github: '#',
  },
];

const stepsList = [
  {
    title: "Set up IoT Device",
    description: "Configure the IoT device to collect data and send it via HTTP/HTTPS.",
    icon: <DevicesOther className="text-4xl text-blue-500" />,
  },
  {
    title: "Create Backend API",
    description: "Develop a Node.js backend API to receive data from the IoT device.",
    icon: <FaLaptopCode className="text-4xl text-green-500" />,
  },
  {
    title: "Secure Communication",
    description: "Implement SSL/TLS encryption to ensure secure data transmission.",
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
  },
  {
    title: "Connect to MongoDB",
    description: "Use a MongoDB client or ORM to connect the backend to a MongoDB database.",
    icon: <FaDatabase className="text-4xl text-purple-500" />,
  },
  {
    title: "Store Data",
    description: "Parse and store the received data in the MongoDB database.",
    icon: <FaDatabase className="text-4xl text-orange-500" />,
  },
  {
    title: "Verify Data",
    description: "Query the MongoDB database to verify the stored data.",
    icon: <Security className="text-4xl text-teal-500" />,
  },
];

const About = () => {
  const guideRef = useRef(null);
  const isInView = useInView(guideRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Overview Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-500 text-white py-10"
      >
        <Container maxWidth="lg">
          <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Secure-IoT</h1>
          <p className="text-lg text-center">
            A robust platform designed to ensure the secure transmission of data from IoT devices to backend systems.
          </p>
        </Container>
      </motion.section>

      {/* Key Features */}
      <section className="py-10">
        <Container maxWidth="lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Security className="text-6xl text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold">End-to-End Encryption</h3>
              <p>Data is encrypted during transmission and at rest, ensuring its safety.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <Build className="text-6xl text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Backend Security Library</h3>
              <p>Powerful security measures are built into the backend for data integrity.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="text-center">
              <DevicesOther className="text-6xl text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Real-time Data Handling</h3>
              <p>Accurate and up-to-date insights from multiple IoT devices.</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Team Members */}
      <section className="py-10 bg-gray-200">
        <Container maxWidth="lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }} 
                className="relative bg-white p-6 rounded-lg shadow-md transition-all duration-300 group overflow-hidden"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-center text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-500">{member.description}</p>
                
                {/* Blur effect and social icons on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white bg-opacity-80 backdrop-blur-sm">
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaInstagram className="text-gray-800 text-3xl hover:text-pink-500 transition-colors" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaLinkedin className="text-gray-800 text-3xl hover:text-blue-500 transition-colors" />
                  </a>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="mx-2">
                    <FaGithub className="text-gray-800 text-3xl hover:text-gray-900 transition-colors" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Step-by-Step Guide */}
      <section ref={guideRef} className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-10 text-center text-gray-800"
            >
              Connecting IoT Devices to MySQL: A Step-by-Step Guide
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stepsList.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="mb-4"
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default About;