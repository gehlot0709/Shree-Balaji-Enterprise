import { motion } from "framer-motion";
import { FaTools, FaBuilding, FaHome, FaCheck, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-amber-900 to-amber-700 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="text-center"
          >
            <motion.p variants={fadeUp} className="text-amber-200 mb-4">
              Shree Balaji Enterprise
            </motion.p>
            <motion.h1 
              variants={fadeUp}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Aluminium & Glass
              <br />
              <span className="text-amber-300">Experts</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-amber-100 mb-8">
              Premium solutions for windows, doors & interiors
            </motion.p>
            <motion.div variants={fadeUp} className="flex gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition">
                  Get Quote
                </button>
              </Link>
              <a href="tel:+919427378493" className="flex items-center gap-2 border-2 border-white/30 px-6 py-3 rounded-lg hover:bg-white/10 transition">
                <FaPhone /> Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600">
              Quality workmanship for every project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <FaBuilding />, title: "Window Work", color: "bg-blue-100 text-blue-600" },
              { icon: <FaHome />, title: "Glass Doors", color: "bg-green-100 text-green-600" },
              { icon: <FaTools />, title: "Kitchen Profile", color: "bg-amber-100 text-amber-600" },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <div className="text-2xl">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">
                  Professional installation with premium materials
                </p>
                <Link to="/services" className="text-amber-600 font-semibold hover:text-amber-700">
                  Learn more →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                {[
                  "10+ Years Experience",
                  "Quality Materials",
                  "On-Time Delivery",
                  "Expert Team"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheck className="text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              <p className="text-gray-600 mb-6">
                Contact us for a free consultation and quote
              </p>
              <Link to="/contact">
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
                  Contact Now
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}