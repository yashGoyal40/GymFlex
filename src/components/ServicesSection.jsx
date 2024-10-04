// src/components/ServicesSection.jsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dumbbell, Users, PersonStanding } from "lucide-react";

const servicesData = [
  {
    icon: <Dumbbell className="w-12 h-12 mb-4 text-indigo-500" />,
    title: "Strength Training",
    description:
      "Build muscle and increase your strength with our expert-guided programs.",
  },
  {
    icon: <Users className="w-12 h-12 mb-4 text-indigo-500" />,
    title: "Group Classes",
    description:
      "Join our energetic group classes for a fun and motivating workout experience.",
  },
  {
    icon: <PersonStanding className="w-12 h-12 mb-4 text-indigo-500" />,
    title: "Personal Training",
    description:
      "Get personalized attention and achieve your fitness goals faster.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card
                className="bg-white dark:bg-gray-700 border-none shadow-md hover:shadow-xl transition-transform duration-300 rounded-lg p-6 transform hover:scale-105"
              >
                <CardContent className="text-center">
                  {service.icon}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
