import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const classesData = [
  {
    title: "Yoga",
    description:
      "Improve your flexibility and find inner peace with our yoga classes.",
    image: "./assets/yoga.jpeg",
  },
  {
    title: "Pilates",
    description: "Strengthen your core with our focused Pilates workouts.",
    image: "./assets/pilates.jpeg",
  },
  {
    title: "CrossFit",
    description:
      "Join our high-intensity CrossFit classes to push your limits.",
    image: "/assets/crossFit.jpeg",
  },
];

const ClassesSection = () => {
  // Store API instance to control carousel manually
  const [carouselApi, setCarouselApi] = useState(null);

  return (
    <section id="classes" className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Classes
        </motion.h2>

        {/* Carousel with button control */}
        <Carousel className="space-y-6 sm:space-y-8" setApi={setCarouselApi} opts={{ draggable: false }}>
          <CarouselContent className="flex space-x-4 sm:space-x-6">
            {classesData.map((classItem, index) => (
              <CarouselItem
                key={index}
                className="relative w-48 h-72 sm:w-64 sm:h-80 md:w-64 md:h-96"
              >
                <img
                  src={classItem.image}
                  alt={classItem.title}
                  className="w-full h-full object-cover rounded-md shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-800/60 to-gray-900/90 p-8 sm:p-8  rounded-md flex flex-col justify-end">
                  <h3 className="text-base sm:text-lg font-bold text-indigo-500">
                    {classItem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    {classItem.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Carousel navigation buttons */}
          <div className="flex justify-between items-center mt-4">
            <CarouselPrevious>
              <ChevronRight className="rotate-180 w-8 h-8 text-gray-100 hover:text-indigo-500 transition-colors duration-300 cursor-pointer" />
            </CarouselPrevious>
            <CarouselNext>
              <ChevronRight className="w-8 h-8 text-gray-100 hover:text-indigo-500 transition-colors duration-300 cursor-pointer" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ClassesSection;
