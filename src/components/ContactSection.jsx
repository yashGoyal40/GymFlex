// src/components/ContactSection.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <form className="max-w-2xl mx-auto space-y-6">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none rounded-md shadow-md transition-colors duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none rounded-md shadow-md transition-colors duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none rounded-md shadow-md transition-colors duration-300"
            whileFocus={{ scale: 1.02 }}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full text-lg px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-gray-100 shadow-lg transition-colors duration-300"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
