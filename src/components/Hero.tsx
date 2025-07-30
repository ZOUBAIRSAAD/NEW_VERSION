import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Shield, Award, Users } from 'lucide-react';

import DisabilityImage from '/scroll_image1.png';
import CarersImage from '/National_carer_card_scroll.png';
import SupportImage from '/Customer_support_card_scroll.png';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'National Disability Aid UAE',
      subtitle:
        'Your gateway to exclusive benefits and support services across the UAE',
      image: DisabilityImage,
      cta: 'Apply for Disability Aid',
      link: '/apply',
    },
    {
      title: 'Carers Support Services',
      subtitle:
        'Recognition and benefits for dedicated caregivers supporting individuals with disabilities',
      image: CarersImage,
      cta: 'Apply for Carers Support',
      link: '/apply',
    },
    {
      title: 'Customer Support Services',
      subtitle:
        'Enhanced assistance and priority support for individuals requiring additional help',
      image: SupportImage,
      cta: 'Apply for Support Services',
      link: '/apply',
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `@keyframes hero-shine { 0% { filter: brightness(1); } 50% { filter: brightness(1.1); } 100% { filter: brightness(1); } }`;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ height: '600px' }}>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={slide.title}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ animation: 'hero-shine 8s linear infinite' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/15 to-transparent"></div>

      <div className="absolute bottom-0 left-0 w-full h-1 flex z-20">
        <div className="flex-1 bg-uae-red"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-uae-black"></div>
        <div className="flex-1 bg-uae-green"></div>
      </div>

      <div className="relative z-10 flex flex-col items-start justify-end h-full text-left px-6 py-12 space-y-6">
        <span className="inline-flex items-center space-x-2 px-4 py-1 rounded-full text-sm font-semibold text-white bg-uae-green/80 drop-shadow-md">
          <span role="img" aria-hidden="true">
            🇦🇪
          </span>
          <span>UAE Official Service</span>
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-xl">
          {slides[currentSlide].title}
        </h2>
        <p className="max-w-lg text-base md:text-lg text-gray-100 drop-shadow">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            to={slides[currentSlide].link}
            className="px-6 py-3 bg-uae-green text-white font-semibold rounded shadow hover:bg-uae-red transition-colors flex items-center justify-center"
          >
            {slides[currentSlide].cta}
          </Link>
          <Link
            to="/services"
            className="px-6 py-3 bg-white text-uae-green font-semibold rounded shadow hover:bg-gray-100 transition-colors flex items-center justify-center"
          >
            Learn More
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
          <div className="flex flex-col items-start text-white space-y-1 drop-shadow-md">
            <CreditCard className="w-8 h-8 text-uae-green" />
            <span className="font-semibold text-sm">Official Services</span>
          </div>
          <div className="flex flex-col items-start text-white space-y-1 drop-shadow-md">
            <Shield className="w-8 h-8 text-uae-green" />
            <span className="font-semibold text-sm">Verified Benefits</span>
          </div>
          <div className="flex flex-col items-start text-white space-y-1 drop-shadow-md">
            <Award className="w-8 h-8 text-uae-green" />
            <span className="font-semibold text-sm">UAE Approved</span>
          </div>
          <div className="flex flex-col items-start text-white space-y-1 drop-shadow-md">
            <Users className="w-8 h-8 text-uae-green" />
            <span className="font-semibold text-sm">Community Support</span>
          </div>
        </div>
        <div className="mt-6 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-uae-green scale-125' : 'bg-white/60'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
