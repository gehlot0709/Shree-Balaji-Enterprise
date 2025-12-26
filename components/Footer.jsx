import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: "#", label: "Facebook" },
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" }
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt />, 
      text: "Survey No. 16, Behind Orchid Valley 07 Club, Shela Telav Road, Ahmedabad" 
    },
    { icon: <FaPhone />, text: "+91 9427378493" },
    { icon: <FaEnvelope />, text: "s.d.malviya3820@gmail.com" }
  ];

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-bold">Shree Balaji Enterprise</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Professional aluminium, glass, and interior solutions with 10+ years of excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 hover:bg-amber-600 w-10 h-10 rounded-full 
                           flex items-center justify-center transition"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-amber-400 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-amber-400 mt-1">{info.icon}</div>
                  <p className="text-gray-300">{info.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Shree Balaji Enterprise. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Designed with precision and care for Ahmedabad
          </p>
        </div>
      </div>
    </footer>
  );
}