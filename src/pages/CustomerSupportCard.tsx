import React from 'react';
import { Link } from 'react-router-dom';
import {
  Headphones,
  CheckCircle,
  ArrowRight,
  UserCheck,
  LifeBuoy,
  Users,
  MessageCircle,
} from 'lucide-react';

const CustomerSupportCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-uae-black to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-6">
                <Headphones className="w-8 h-8" />
                <span className="text-lg font-medium">Enhanced Support</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Customer Support Card
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Specially designed for individuals working in customer support
                roles. These cards provide access to exclusive discounts and
                services at a wide range of participating venues across the UAE,
                including events, hotels, restaurants, shopping malls, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply-customer-support"
                  className="inline-flex items-center px-8 py-4 bg-white text-uae-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-black transition-all duration-300"
                >
                  Get Information
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-60 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                  <img
                    src="/National-Support-Card.jpg"
                    alt="Customer Support Card"
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
              Our Customer Support Card ensures you receive the recognition and
              assistance you need to perform your role effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-black group-hover:text-white transition-all duration-300">
                <UserCheck className="w-8 h-8 text-uae-black group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Exclusive Discounts
              </h3>
              <p className="text-gray-600">
                Enjoy partner discounts at retail outlets, malls, restaurants,
                hotels, and events across the UAE.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-black group-hover:text-white transition-all duration-300">
                <LifeBuoy className="w-8 h-8 text-uae-black group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Priority Service
              </h3>
              <p className="text-gray-600">
                Access priority lines and expedited services wherever your card
                is recognized.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-black group-hover:text-white transition-all duration-300">
                <Users className="w-8 h-8 text-uae-black group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Free & Discounted Activities
              </h3>
              <p className="text-gray-600">
                Access free or discounted recreational activities and cultural
                experiences across the UAE.
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
              Each card provides a comprehensive suite of benefits:
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <ul className="space-y-3 text-gray-700">
              {[
                'Access to exclusive discounts at partner businesses.',
                'Priority customer service and support at various venues.',
                'Free or discounted access to recreational and cultural activities.',
                'Assistance with navigating public spaces and services.',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-uae-black mr-3 mt-0.5 flex-shrink-0" />
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
                To qualify for the Customer Support Card, you must meet the
                following criteria:
              </p>
              <ul className="space-y-4">
                {[
                  'UAE resident with valid Emirates ID',
                  'Documented need for additional support',
                  'Completed support needs assessment',
                  'Medical or professional recommendation',
                  'Recent passport-sized photographs',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-uae-black w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
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
                      'Complete the support needs application with documentation.',
                  },
                  {
                    title: 'Needs Assessment',
                    description:
                      'Participate in support needs assessment and evaluation.',
                  },
                  {
                    title: 'Service Activation',
                    description:
                      'Receive your card and begin accessing enhanced support services.',
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-uae-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-uae-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Apply for Your Customer Support Card?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the recognition and support you need to assist others in your
            role. Join our network of support professionals across the UAE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply-customer-support"
              className="inline-flex items-center px-8 py-4 bg-white text-uae-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-black transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerSupportCard;
