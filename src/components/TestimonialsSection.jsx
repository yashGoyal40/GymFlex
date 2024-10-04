// src/components/TestimonialsSection.jsx
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonialsData = [
  {
    name: "Ankita Joshi",
    review:
      "This gym has completely transformed my life. The trainers are amazing!",
    rating: 5,
    image: "./assets/rev2.jpeg",
  },
  {
    name: "Vikram Chauhan",
    review:
      "I love the variety of classes. There's something for everyone.",
    rating: 4,
    image: "./assets/rev1.jpeg",
  },
  {
    name: "Rajiv Sharma",
    review:
      "The group classes are so fun and motivating!",
    rating: 5,
    image: "./assets/rev3.jpeg",
  },
];

const TestimonialsSection = () => {
  // Store API instance to control carousel manually
  const [carouselApi, setCarouselApi] = useState(null);

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Our Members Say
        </motion.h2>

        {/* Carousel with only button control */}
        <Carousel className="space-y-8" setApi={setCarouselApi} opts={{ draggable: false }}>
          <CarouselContent className="flex space-x-4">
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="relative w-64 h-96">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover rounded-md shadow-lg"
                />
                <div className="absolute pl-12 inset-0 bg-gradient-to-b from-gray-800/60 to-gray-900/90 p-4 rounded-md flex flex-col justify-end">
                  <h3 className="text-lg font-bold text-indigo-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-300 mb-2">"{testimonial.review}"</p>
                  <div className="flex items-center">
                    {Array.from({ length: testimonial.rating }).map(
                      (_, starIndex) => (
                        <Star key={starIndex} className="w-5 h-5 text-yellow-400" />
                      )
                    )}
                  </div>
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

export default TestimonialsSection;
