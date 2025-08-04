'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Globe, 
  Search, 
  BarChart3, 
  Share2, 
  FileEdit, 
  Mail, 
  LineChart, 
  Palette, 
  MapPin,
  ChevronDown 
} from 'lucide-react';

export default function Hero() {
  const { theme } = useTheme();

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: "AI Development",
      description: "Custom AI solutions and integrations built with cutting-edge technologies. From chatbots to machine learning models tailored to your business needs.",
      icon: Globe
    },
    {
      title: "Machine Learning",
      description: "Custom machine learning models for prediction and pattern recognition. Transform your data into actionable insights and competitive advantages.",
      icon: Search
    },
    {
      title: "Predictive Analytics",
      description: "AI-driven data analysis and forecasting for business intelligence. Make data-driven decisions with advanced predictive modeling.",
      icon: BarChart3
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis and understanding. From sentiment analysis to automated communication systems.",
      icon: Share2
    },
    {
      title: "AI Content Generation",
      description: "Advanced content creation using state-of-the-art AI models. Generate engaging content at scale while maintaining quality and brand voice.",
      icon: FileEdit
    },
    {
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation. From workflow optimization to smart task management.",
      icon: Mail
    },
    {
      title: "Computer Vision",
      description: "Advanced image and video processing solutions. From object detection to visual search and automated quality control.",
      icon: LineChart
    },
    {
      title: "AI Strategy",
      description: "Expert guidance on AI implementation and digital transformation. Develop a roadmap for integrating AI into your business operations.",
      icon: Palette
    },
    {
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with AI. Real-time analysis, pattern recognition, and automated reporting.",
      icon: MapPin
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-white dark:bg-black overflow-hidden flex flex-col">
        {/* Background Image Container */}
        <div className="absolute inset-0">
          {/* Dark theme background */}
          <div className="dark:block hidden h-full w-full relative">
            <Image
              src="/dark_hero_background.jpg"
              alt="Hero Background Dark"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          {/* Light theme background */}
          <div className="dark:hidden block h-full w-full relative">
            <Image
              src="/white_hero_background.jpg"
              alt="Hero Background Light"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-white/50" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 flex-1 flex flex-col justify-center mt-52 md:mt-64 lg:mt-72 mb-32 md:mb-40 lg:mb-52">
          {/* Title Section */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-6 
              drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] 
              [text-shadow:2px_2px_8px_rgba(0,0,0,0.3)]
              dark:[text-shadow:0_0_10px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2),0_0_30px_rgba(255,255,255,0.1)]">
              Advanced Artificial Intelligence<br />
              Solutions
            </h1>
            <div className="text-xl md:text-2xl font-medium text-black dark:text-white max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions. Our advanced technologies and expertise help you innovate and stay ahead of the competition.
            </div>
          </div>
        </div>

        {/* Scroll Down Arrow - Adjusted height */}
        <button 
          onClick={scrollToServices}
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-300 cursor-pointer group"
          aria-label="Scroll to services section"
        >
          <span className="text-lg font-medium mb-1">See Services</span>
          <ChevronDown className="w-8 h-8 animate-bounce group-hover:text-primary transition-colors duration-300" />
        </button>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-primary" />

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-[#F2F2F2] dark:bg-[#0D0D0D] rounded-lg p-8 text-black dark:text-white transition-colors duration-300">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-black" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}