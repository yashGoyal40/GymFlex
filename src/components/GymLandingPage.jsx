import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ClassesSection from "@/components/ClassesSection";
import TrainersSection from "@/components/TrainersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import BackToTopButton from "@/components/BackToTopButton";
import useScroll from "@/hooks/useScroll";

export default function GymLandingPage({ activeSection, setActiveSection }) {
  const { showBackToTop } = useScroll();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Create refs for each section
  const sectionsRef = {
    home: useRef(null),
    services: useRef(null),
    classes: useRef(null),
    trainers: useRef(null),
    testimonials: useRef(null),
    contact: useRef(null),
  };

  // Handle Dark Mode Persistence
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle Dark Mode with Persistence
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Classes", href: "#classes" },
    { name: "Trainers", href: "#trainers" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Set up the intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id; // Assuming each section has an id
          setActiveSection(id); // Update active section
        }
      });
    }, { threshold: 0.5 }); // Adjust threshold as necessary

    // Observe each section
    Object.values(sectionsRef).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [setActiveSection]);

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Navbar
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <div ref={sectionsRef.home} id="home">
          <HeroSection />
        </div>
        <div ref={sectionsRef.services} id="services">
          <ServicesSection />
        </div>
        <div ref={sectionsRef.classes} id="classes">
          <ClassesSection />
        </div>
        <div ref={sectionsRef.trainers} id="trainers">
          <TrainersSection />
        </div>
        <div ref={sectionsRef.testimonials} id="testimonials">
          <TestimonialsSection />
        </div>
        <div ref={sectionsRef.contact} id="contact">
          <ContactSection />
        </div>
        <BackToTopButton />
      </div>
    </div>
  );
}
