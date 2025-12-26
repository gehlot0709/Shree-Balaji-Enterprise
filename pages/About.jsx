import { motion } from "framer-motion";
import { FaCheckCircle, FaAward, FaUsers, FaHandshake } from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: <FaCheckCircle />,
      title: "Quality Workmanship",
      description: "Precision and excellence in every project"
    },
    {
      icon: <FaAward />,
      title: "Professional Service",
      description: "Years of industry experience"
    },
    {
      icon: <FaUsers />,
      title: "Client Focused",
      description: "Tailored solutions for your needs"
    },
    {
      icon: <FaHandshake />,
      title: "Reliable Partnership",
      description: "Trusted by clients across Ahmedabad"
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10 sm:mb-12 lg:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
          About Us
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg">
          Leading the way in aluminium, glass, and interior solutions
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Shree Balaji Enterprise
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Led by <strong className="text-primary">Suresh D. Malviya</strong>,
              we deliver reliable aluminium, glass, and interior solutions with
              unmatched quality workmanship and professional service across
              Ahmedabad.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-primary text-white px-6 py-3 
                       rounded-lg font-semibold hover:bg-primary/90 
                       transition-colors duration-300 shadow-md"
            >
              Learn More
            </motion.div>
          </div>
        </motion.div>

        {/* Right Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="text-primary text-3xl mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}