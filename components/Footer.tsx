'use client';

import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/SuperiorDrywall21/', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  // Check if there are any valid social links (not just #)
  const hasValidSocialLinks = socialLinks.some(link => link.href !== '#');

  return (
    <footer id="contact" className="bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Subtle texture overlay - industrial slate effect */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,rgb(255,255,255)_1px,transparent_0)] bg-[length:20px_20px] pointer-events-none"></div>
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className={`grid grid-cols-1 ${hasValidSocialLinks ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8 md:gap-12`}>
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Superior Drywall Finishing</h3>
            <p className="text-gray-300 text-base mb-4 leading-relaxed">
              Serving Salem, Columbiana, Canfield, Boardman, and the Greater Mahoning Valley with professional drywall
              installation, finishing, and acoustic ceiling services. Licensed,
              insured, and committed to excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-construction-gold" />
                <a
                  href="tel:7404162384"
                  className="text-gray-300 hover:text-construction-gold transition-colors text-base"
                >
                  740-416-2384
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-construction-gold" />
                <a
                  href="mailto:Superiordrywall21@yahoo.com"
                  className="text-gray-300 hover:text-construction-gold transition-colors text-base"
                >
                  Superiordrywall21@yahoo.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-construction-gold mt-1" />
                <span className="text-gray-300 text-base">
                  Serving Salem, Columbiana, Canfield, Boardman, and the Greater Mahoning Valley
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Facebook className="w-5 h-5 text-construction-gold" />
                <a
                  href="https://www.facebook.com/SuperiorDrywall21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-construction-gold transition-colors text-base flex items-center space-x-1"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links - Only show if there are valid links */}
          {hasValidSocialLinks && (
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks
                  .filter((social) => social.href !== '#')
                  .map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-slate-800 hover:bg-construction-gold rounded-full flex items-center justify-center transition-colors"
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Superior Drywall Finishing. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

