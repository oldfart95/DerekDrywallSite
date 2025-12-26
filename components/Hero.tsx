'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center overflow-hidden scroll-mt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-leveled.JPG"
          alt="Commercial drywall installation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center md:object-left"
          quality={90}
        />
        {/* Vertical Gradient Scrim - Preserves image quality while fixing contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-10 md:pt-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto md:mx-0 md:ml-auto md:max-w-2xl text-center md:text-right"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-2 md:mb-6 leading-tight text-white drop-shadow-md">
            Premier Commercial & Residential Drywall Systems in Columbiana & Mahoning County.
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-5 md:mb-8 text-gray-200 drop-shadow-md">
            The 15-man crew General Contractors trust. Delivering Level 5 finishes, metal stud framing, and acoustic ceilings on schedule.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-end items-center md:items-end">
            <motion.a
              href="tel:7404162384"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8 py-3 sm:py-4 rounded-lg shadow-lg shadow-yellow-500/40 active:scale-95 transition-all w-full sm:w-auto min-h-[48px] flex items-center justify-center text-lg"
            >
              Get a Commercial Bid
            </motion.a>
            <motion.a
              href="tel:7404162384"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-3 sm:py-4 rounded-lg transition-colors w-full sm:w-auto min-h-[48px] flex items-center justify-center text-lg"
            >
              Residential Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

