"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    quote:
      "Working with Storriz has been a game-changer for my social media presence. Their innovative strategies have significantly boosted my online engagement and brand visibility.",
  },
  {
    name: "Emily Smith",
    quote:
      "I highly recommend Storriz for anyone looking to enhance their social media reach. The team’s dedication and expertise have helped me achieve remarkable growth in a short period of time.",
  },
  {
    name: "Amit Patel",
    quote:
      "Storriz has been instrumental in transforming my social media marketing efforts. Their tailored approach and attention to detail have led to a substantial increase in leads and conversions.",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="w-full bg-white py-16 sm:py-20 md:py-24 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold"
        >
          Client Testimonials
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 sm:mt-8 text-gray-600"
        >
          What Clients Say About Us
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-3 sm:mt-4 max-w-2xl text-gray-700"
        >
          Our clients are at the heart of everything we do. Here are some
          testimonials highlighting their experiences working with us.
        </motion.p>

        {/* Divider */}
        <div className="my-12 sm:my-16 h-px w-full bg-gray-300" />

        {/* Testimonials */}
        <div className="space-y-12 sm:space-y-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3"
            >
              {/* Name */}
              <h3 className="text-lg sm:text-xl font-medium md:col-span-1">
                {item.name}
              </h3>

              {/* Quote */}
              <p className="text-gray-700 md:col-span-2">{item.quote}</p>

              {/* Row Divider */}
              <div className="md:col-span-3 mt-8 sm:mt-10 h-px w-full bg-gray-200" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
