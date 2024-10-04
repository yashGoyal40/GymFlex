import { useState, useEffect } from "react";
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

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <Navbar
          navItems={navItems}
          activeSection={activeSection}
          setActiveSection={setActiveSection} // Pass setActiveSection here
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
        <HeroSection />
        <ServicesSection />
        <ClassesSection />
        <TrainersSection />
        <TestimonialsSection />
        <ContactSection />
        <BackToTopButton />
      </div>
    </div>
  );
}
