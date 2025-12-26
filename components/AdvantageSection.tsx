'use client';

import { ShieldCheck, HardHat, Hammer } from 'lucide-react';
import { motion } from 'framer-motion';

const advantages = [
  {
    icon: ShieldCheck,
    title: 'Licensed & Fully Insured',
    description: 'Fully insured and licensed to protect your project and investment.',
  },
  {
    icon: HardHat,
    title: 'OSHA Compliant Crews',
    description: 'Safety-compliant crews trained to meet the highest industry standards.',
  },
  {
    icon: Hammer,
    title: 'Metal Stud Framing Experts',
    description: 'Specialized expertise in metal stud framing for commercial and residential projects.',
  },
];

export default function AdvantageSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We Aren&apos;t a &quot;Guy in a Truck.&quot; We Are a Workforce.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Construction delays cost money. Superior Drywall Finishing deploys fully insured, safety-compliant crews to handle large-scale builds. From 10,000 sq ft office build-outs to custom residential developments, we have the manpower to keep your timeline intact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-construction-gold/10 rounded-full">
                  <advantage.icon
                    className="w-12 h-12 text-yellow-500"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {advantage.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

