'use client';

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        // Different offsets for different sections - Services and About need more space
        let headerHeight = 120;
        if (href === '#services' || href === '#about') {
          headerHeight = 160; // Higher offset for Services and About sections
        }
        
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const phoneNumber = '740-416-2384';

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-sm sm:text-lg md:text-2xl font-bold text-slate-900">
              Superior Drywall Finishing
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-900 hover:text-construction-gold transition-colors text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:7404162384"
              className="hidden xl:block text-slate-900 hover:text-construction-gold transition-colors text-base font-medium whitespace-nowrap"
            >
              {phoneNumber}
            </a>
          </div>

          {/* Call Now Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Request a Bid Button - Always Visible */}
            <a
              href="tel:7404162384"
              className="bg-construction-gold hover:bg-construction-yellow text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-colors flex items-center space-x-2 h-12 min-h-[48px] whitespace-nowrap"
            >
              <Phone size={20} />
              <span className="hidden sm:inline whitespace-nowrap">Request a Bid</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-slate-900 p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block text-slate-900 hover:text-construction-gold transition-colors text-base font-medium py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

