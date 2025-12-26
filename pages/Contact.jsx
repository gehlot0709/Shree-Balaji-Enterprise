import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarker } from "react-icons/fa";

export default function Contact() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600">
            Get in touch for a free quote
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: <FaPhone />, title: "Phone", text: "+91 9427378493" },
              { icon: <FaEnvelope />, title: "Email", text: "s.d.malviya3820@gmail.com" },
              { 
                icon: <FaMapMarker />, 
                title: "Address", 
                text: "Survey No. 16, Behind Orchid Valley 07 Club, Shela Telav Road, Ahmedabad" 
              },
            ].map((contact, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg card-hover">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <div className="text-amber-600 text-xl">{contact.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold">{contact.title}</h3>
                </div>
                <p className="text-gray-700">{contact.text}</p>
              </div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-xl font-bold mb-6">Send Message</h3>
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <textarea 
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}