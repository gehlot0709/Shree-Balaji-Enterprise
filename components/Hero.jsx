import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const services = [
    "All Window Work",
    "Office Partition Work",
    "Glass Door Work",
    "Kitchen Profile",
  ];

  const images = [
    {
      src: "/images/hero-1.jpg",
      alt: "Aluminium Work",
      delay: 0.2
    },
    {
      src: "/images/hero-2.jpg",
      alt: "Glass Work",
      delay: 0.4
    },
    {
      src: "/images/hero-3.jpg",
      alt: "Interior Work",
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="w-full bg-gradient-to-br from-amber-50 to-amber-100/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={itemVariants}>
              <p className="text-sm sm:text-base uppercase tracking-widest text-amber-800 font-semibold mb-3">
                Suresh D. Malviya
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                <span className="block mb-2">Aluminium Section</span>
                <span className="block mb-2">Glass Work</span>
                <span className="block">Interior Solution</span>
              </h1>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-xl"
            >
              Shree Balaji Makerspace, Survey No. 16, Behind Orchid Valley 07 Club,
              Shela Telav Road, Ahmedabad.
            </motion.p>

            {/* Services List */}
            <motion.ul 
              variants={containerVariants}
              className="space-y-3 sm:space-y-4"
            >
              {services.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <div className="bg-gradient-to-r from-amber-800 to-amber-700 text-white 
                                px-5 sm:px-6 py-3 sm:py-4 rounded-r-full w-fit 
                                shadow-lg hover:shadow-xl transition-all duration-300
                                flex items-center gap-3"
                  >
                    <FaArrowRight className="opacity-0 group-hover:opacity-100 
                                            transition-opacity duration-300" />
                    <span className="text-sm sm:text-base font-medium">{item}</span>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* Contact CTA */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-4 sm:gap-6 items-center pt-4"
            >
              <motion.div variants={itemVariants}>
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-gray-900 to-gray-800 text-white 
                             px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold 
                             hover:from-gray-800 hover:to-gray-700 transition-all 
                             duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <span>Contact Us</span>
                    <FaArrowRight />
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 sm:gap-6"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="tel:+919427378493"
                  className="flex items-center gap-2 sm:gap-3 text-gray-800 
                           hover:text-amber-800 transition-colors duration-300"
                >
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <FaPhoneAlt className="text-amber-700" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    +91 9427378493
                  </span>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="mailto:s.d.malviya3820@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-gray-800 
                           hover:text-amber-800 transition-colors duration-300"
                >
                  <div className="p-2 bg-white rounded-full shadow-sm">
                    <FaEnvelope className="text-amber-700" />
                  </div>
                  <span className="font-medium text-sm sm:text-base">
                    s.d.malviya3820@gmail.com
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={img.delay}
                  className={`relative overflow-hidden rounded-2xl shadow-xl 
                            ${index === 2 ? 'col-span-2' : ''}`}
                >
                  <div className="aspect-square w-full overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform 
                               duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 
                                to-transparent opacity-0 hover:opacity-100 
                                transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.05,
                rotate: -2,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="absolute -bottom-4 right-1/2 transform translate-x-1/2 
                       bg-gradient-to-r from-gray-900 to-gray-800 text-white 
                       px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold shadow-2xl 
                       backdrop-blur-sm bg-opacity-95"
            >
              <span className="text-sm sm:text-base">Shree Balaji Enterprise</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;