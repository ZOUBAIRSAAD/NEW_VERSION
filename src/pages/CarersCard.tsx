import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  CheckCircle,
  ArrowRight,
  ClipboardCheck,
  Users,
  Handshake,
} from 'lucide-react';

const CarersCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-uae-red to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="w-8 h-8" />
                <span className="text-lg font-medium">Caregiver Support</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                National Carer Card
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Personalized cards for those who provide care and support to
                individuals with disabilities. These cards recognise the vital role
                of carers and enable them to access priority services, discounts,
                and support across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply-carers"
                  className="inline-flex items-center px-8 py-4 bg-white text-uae-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-red transition-all duration-300"
                >
                  Get Information
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-60 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                  <img
                    src="/Nationality-Carers-Card.jpg"
                    alt="Carers Card"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These cards provide recognition, support, and access to essential
              services for those who care for others.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-uae-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-red group-hover:text-white transition-all duration-300">
                <ClipboardCheck className="w-8 h-8 text-uae-red group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Easy Access to Services
              </h3>
              <p className="text-gray-600">
                Carers can access a wide range of services and discounts to ease
                their caregiving responsibilities, including healthcare and respite
                care.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-uae-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-red group-hover:text-white transition-all duration-300">
                <Users className="w-8 h-8 text-uae-red group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Priority Access & Discounts
              </h3>
              <p className="text-gray-600">
                Carers are entitled to priority access and discounts at select
                public and private sector services, including transportation,
                healthcare, and leisure activities.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-uae-red/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-red group-hover:text-white transition-all duration-300">
                <Handshake className="w-8 h-8 text-uae-red group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Support for Carers
              </h3>
              <p className="text-gray-600">
                The National Carer Card ensures that the caregiving community is
                recognised and supported in line with the UAE’s commitment to
                improving the lives of those who care for individuals with
                disabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Benefits Include
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These cards provide a range of benefits designed specifically for
              caregivers:
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <ul className="space-y-3 text-gray-700">
              {[
                'Access to carer-specific services and support.',
                'Discounts on services that help in caregiving (e.g., respite care, healthcare services).',
                'Priority seating or assistance at public venues.',
                "Recognition of the important role that carers play in the lives of individuals with disabilities.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility & Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Eligibility Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To qualify for the National Carer Card, you must meet the
                following criteria:
              </p>
              <ul className="space-y-4">
                {[
                  'Primary caregiver for person with disability',
                  'UAE resident with valid Emirates ID',
                  'Proof of caregiving relationship',
                  'Completed caregiver assessment',
                  'Recent passport-sized photographs',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-uae-red w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <span className="text-white text-sm font-bold">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How It Works
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Submit Application',
                    description:
                      'Complete the caregiver application with required documentation.',
                  },
                  {
                    title: 'Caregiver Assessment',
                    description:
                      'Participate in caregiver assessment and verification process.',
                  },
                  {
                    title: 'Card Issuance',
                    description:
                      'Receive your Carer Card and access to all benefits.',
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-uae-red text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-uae-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Apply for Your Carer Card?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Get the recognition and support you deserve as a dedicated caregiver.
            Join our community of supported carers across the UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply-carers"
              className="inline-flex items-center px-8 py-4 bg-white text-uae-red font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-red transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarersCard;
