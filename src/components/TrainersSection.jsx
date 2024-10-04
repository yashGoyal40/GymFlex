// src/components/TrainersSection.jsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const trainersData = [
  {
    name: "Rohan Sinha",
    specialty: "Strength Training",
    image: "./assets/t1.jpeg",
  },
  {
    name: "Neha Desai",
    specialty: "Yoga & Pilates",
    image: "./assets/t2.jpeg",
  },
  {
    name: "Karan Nair",
    specialty: "CrossFit",
    image: "/assets/t3.jpeg",
  },
];

const TrainersSection = () => {
  return (
    <section id="trainers" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Meet Our Trainers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainersData.map((trainer, index) => (
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
                  <div className="relative">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-32 h-32 mx-auto rounded-full shadow-md mb-4 object-cover transform transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {trainer.specialty}
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

export default TrainersSection;
