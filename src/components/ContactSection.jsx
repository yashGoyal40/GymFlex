import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SendMail from "./SendMail";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {
      name: formData.name === "",
      email: formData.email === "",
      message: formData.message === "",
    };
    setFormErrors(errors);
    return !errors.name && !errors.email && !errors.message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      SendMail({ formData }); // Call the email sending function
    } else {
      console.log("Please fill in all the fields.");
    }
  };

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
        <form className="max-w-2xl mx-auto space-y-6" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            className={`w-full p-4 text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none rounded-md shadow-md transition-colors duration-300 ${
              formErrors.name ? "border border-red-500" : ""
            }`}
            value={formData.name}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />
          {formErrors.name && <p className="text-red-500">Name is required</p>}
          
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            className={`w-full p-4 text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none rounded-md shadow-md transition-colors duration-300 ${
              formErrors.email ? "border border-red-500" : ""
            }`}
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />
          {formErrors.email && <p className="text-red-500">Email is required</p>}
          
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className={`w-full p-4 text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none rounded-md shadow-md transition-colors duration-300 ${
              formErrors.message ? "border border-red-500" : ""
            }`}
            value={formData.message}
            onChange={handleChange}
            whileFocus={{ scale: 1.02 }}
          />
          {formErrors.message && <p className="text-red-500">Message is required</p>}

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
