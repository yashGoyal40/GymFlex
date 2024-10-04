// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src="./assets/gym.jpeg" 
        alt="Gym background"
        className="absolute inset-0 object-cover w-full h-full opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-gray-900/70"></div>
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
          Transform Your Body,{" "}
          <span className="text-indigo-500">Transform Your Life</span>
        </h1>
        <p className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto mb-8">
          Join our state-of-the-art gym and start your fitness journey today.
          Expert trainers, cutting-edge equipment, and a motivating atmosphere await you.
        </p>
        <Button
          as={Link}
          to="#contact"
          size="lg"
          className="text-lg px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-gray-100 shadow-lg"
        >
          Get Started Today
        </Button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
