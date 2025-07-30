import React from 'react';
import {
  ClipboardCheck,
  Users,
  Wrench,
  Car,
  Home,
  Briefcase,
  CheckCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'Disability Assessment',
      description:
        'Comprehensive evaluations conducted by certified healthcare professionals to determine eligibility for disability services and develop personalized support plans.',
      features: [
        'Medical and functional assessments',
        'Cognitive and psychological evaluations',
        'Mobility and accessibility assessments',
        'Support needs analysis',
        'Eligibility determination',
        'Personalized care planning',
      ],
      process: [
        'Initial consultation and referral',
        'Comprehensive assessment appointment',
        'Report preparation and review',
        'Support plan development',
        'Service coordination',
      ],
    },
    {
      icon: Users,
      title: 'Personal Support Services',
      description:
        'Dedicated support workers who assist individuals with daily activities, community participation, and achieving personal goals while maintaining dignity and independence.',
      features: [
        'Personal care assistance',
        'Community access support',
        'Social and recreational activities',
        'Skill development programs',
        'Behavioral support',
        '24/7 emergency support',
      ],
      process: [
        'Support needs assessment',
        'Support worker matching',
        'Service plan development',
        'Regular monitoring and reviews',
        'Ongoing support coordination',
      ],
    },
    {
      icon: Wrench,
      title: 'Equipment & Assistive Technology',
      description:
        'Provision of high‑quality assistive devices and technology solutions designed to enhance independence, communication, and quality of life.',
      features: [
        'Mobility aids and wheelchairs',
        'Communication devices',
        'Daily living aids',
        'Computer access technology',
        'Environmental control systems',
        'Maintenance and repair services',
      ],
      process: [
        'Equipment assessment',
        'Product selection and fitting',
        'Training and orientation',
        'Delivery and installation',
        'Ongoing maintenance support',
      ],
    },
    {
      icon: Car,
      title: 'Transport Services',
      description:
        'Accessible transportation solutions ensuring safe and comfortable travel for medical appointments, community activities, and daily needs.',
      features: [
        'Wheelchair accessible vehicles',
        'Medical appointment transport',
        'Community access trips',
        'Shopping and errands',
        'Social and recreational outings',
        'Emergency transport services',
      ],
      process: [
        'Transport needs assessment',
        'Service booking and scheduling',
        'Vehicle assignment',
        'Safe transport provision',
        'Service feedback and improvement',
      ],
    },
    {
      icon: Home,
      title: 'Home Modifications',
      description:
        'Professional home adaptation services to create safe, accessible, and comfortable living environments that promote independence and safety.',
      features: [
        'Ramp and stair lift installation',
        'Bathroom modifications',
        'Kitchen adaptations',
        'Door and window modifications',
        'Lighting and electrical upgrades',
        'Safety equipment installation',
      ],
      process: [
        'Home assessment visit',
        'Modification recommendations',
        'Quote and approval process',
        'Professional installation',
        'Quality assurance check',
      ],
    },
    {
      icon: Briefcase,
      title: 'Employment Support',
      description:
        'Comprehensive employment services helping individuals with disabilities find, maintain, and excel in meaningful employment opportunities.',
      features: [
        'Career counselling and planning',
        'Job search assistance',
        'Skills training and development',
        'Workplace accommodations',
        'Employer liaison services',
        'Ongoing employment support',
      ],
      process: [
        'Career assessment',
        'Skills development planning',
        'Job matching and placement',
        'Workplace support setup',
        'Long‑term follow‑up',
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section with skyline and accent bar */}
      <section className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dubai_Skyline_mit_Burj_Khalifa_(cropped).jpg/960px-Dubai_Skyline_mit_Burj_Khalifa_(cropped).jpg"
          alt="Dubai skyline"
          className="absolute inset-0 w-full h-80 object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-80 bg-black/50 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Our Comprehensive Services
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
            We provide a full spectrum of disability services designed to
            promote independence, dignity, and quality of life for individuals
            and families across the UAE.
          </p>
        </div>
        {/* UAE flag accent bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 flex">
          <div className="flex-1 bg-uae-red"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-uae-black"></div>
          <div className="flex-1 bg-uae-green"></div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center mb-16 md:mb-20"
              >
                {/* Text Card */}
                <div
                  className={`md:w-1/2 ${
                    isEven ? '' : 'md:order-last'
                  } p-6`}
                >
                  <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
                    <IconComponent className="h-8 w-8 text-uae-green mb-3" />
                    <h2 className="text-2xl font-semibold text-uae-black mb-2">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <h3 className="text-lg font-semibold text-uae-black mb-1">
                      What We Offer:
                    </h3>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start"
                        >
                          <CheckCircle className="h-4 w-4 text-uae-green mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <h3 className="text-lg font-semibold text-uae-black mb-1">
                      Our Process:
                    </h3>
                    <ol className="space-y-1 mb-6 list-decimal list-inside">
                      {service.process.map((step, stepIndex) => (
                        <li key={stepIndex} className="text-gray-700">
                          {step}
                        </li>
                      ))}
                    </ol>
                    <Link
                      to="/apply"
                      className="inline-block px-4 py-2 bg-uae-green text-white rounded shadow hover:bg-uae-red transition-colors"
                    >
                      Apply for This Service
                    </Link>
                  </div>
                </div>
                {/* Icon or Illustration placeholder */}
                <div className="md:w-1/2 p-6 flex justify-center">
                  <div className="h-64 w-full md:w-3/4 flex items-center justify-center rounded-lg bg-white shadow-lg">
                    <IconComponent className="h-24 w-24 text-uae-green" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-uae-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Access Our Services?
          </h2>
          <p className="max-w-xl mx-auto mb-6">
            Our team is here to help you determine which services are right for
            you. Contact us today for a free consultation and assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/apply"
              className="px-6 py-3 bg-white text-uae-green font-semibold rounded shadow hover:bg-gray-100 transition-colors"
            >
              Apply Now
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-uae-red font-semibold rounded shadow hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
