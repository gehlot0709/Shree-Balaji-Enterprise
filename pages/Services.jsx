import { motion } from "framer-motion";

export default function Services() {
  const services = [
    "All Window Work",
    "Office Partition Work",
    "Glass Door Work",
    "Kitchen Profile",
    "Aluminium Section Work",
    "Interior Solutions"
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Complete solutions for all your aluminium and glass needs
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500 card-hover"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <span className="text-amber-600 font-bold">{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold">{service}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}