import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Architecture", href: "#architecture" },
      { name: "Documentation", href: "/docs" }
    ],
    resources: [
      { name: "GitHub", href: "https://github.com/daddycoder007/Observo" },
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
      { name: "Support", href: "#" }
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Contact", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/daddycoder007/Observo", label: "GitHub" },
    { icon: Twitter, href: "https://x.com/daddycoder007", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/daddycoder/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:contact.daddycoder@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo.png" alt="Observo Logo" className="w-32 h-30" />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Self-hosted log monitoring and analytics platform. Deploy anywhere, own your data, 
              monitor everything in real-time.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates, features, and announcements delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 hover:scale-105 active:scale-95">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Observo. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by developers, for developers.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Open Source</span>
              <span>•</span>
              <span>MIT License</span>
              <span>•</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};