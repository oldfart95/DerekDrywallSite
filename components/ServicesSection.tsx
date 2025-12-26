'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    image: '/IMG_5148.jpeg',
    title: 'Commercial Framing & Acoustical',
    description: 'High-volume hanging, metal stud framing, and fire-rated assemblies for retail, office, and industrial spaces.',
    imagePosition: 'object-cover',
    imageStyle: { objectPosition: 'center top', transform: 'scale(1.15)' },
  },
  {
    image: '/IMG_4581.jpeg',
    title: 'High-End Finishing & Custom Detail',
    description: 'Museum-quality smooth wall finishes for high-end custom homes and luxury commercial interiors.',
    imagePosition: 'object-cover object-center',
    imageStyle: {},
  },
  {
    image: '/IMG_0047.jpeg',
    title: 'Large Scale Production',
    description: 'We handle high-volume and high-height work. From 10,000 sq ft office build-outs to custom residential developments.',
    imagePosition: 'object-cover object-center',
    imageStyle: {},
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={service.imagePosition}
                  style={service.imageStyle}
                  quality={85}
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-center">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

