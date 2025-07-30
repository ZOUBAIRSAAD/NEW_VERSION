import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  CreditCard,
  Heart,
  PlusCircle,
  Shield,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const DisabilitiesCard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-uae-green to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center space-x-3 mb-6">
                <CreditCard className="w-8 h-8" />
                <span className="text-lg font-medium">Official UAE Service</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                National Disability ID Card
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Personalized National Disability ID Cards are official forms of
                identification designed to grant individuals with disabilities
                access to the benefits and services they are entitled to under the
                UAE’s Federal Law.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply-disabilities"
                  className="inline-flex items-center px-8 py-4 bg-white text-uae-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-green transition-all duration-300"
                >
                  Get Information
                </Link>
              </div>
            </div>
            {/* Card Preview */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-60 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden">
                  <img
                    src="/National-Disability-Carde.jpg"
                    alt="National Disability Card"
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
              The National Disability ID Card offers advanced features designed
              to ensure security and unlock comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-green transition-all duration-300">
                <ClipboardCheck className="w-8 h-8 text-uae-green group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Personalised Design
              </h3>
              <p className="text-gray-600">
                Each card features the individual’s photo and personal details
                alongside symbols for their disabilities, ensuring quick and easy
                verification in various settings.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-green transition-all duration-300">
                <Shield className="w-8 h-8 text-uae-green group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Legal Recognition
              </h3>
              <p className="text-gray-600">
                Government recognition ensures that cardholders enjoy all the
                benefits and services guaranteed by the UAE’s disability laws.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-green transition-all duration-300">
                <Heart className="w-8 h-8 text-uae-green group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Discounts & Benefits
              </h3>
              <p className="text-gray-600">
                Cardholders enjoy exclusive benefits across healthcare,
                transportation, retail, entertainment, and more.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-uae-green transition-all duration-300">
                <PlusCircle className="w-8 h-8 text-uae-green group-hover:text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Priority & Healthcare Access
              </h3>
              <p className="text-gray-600">
                Get priority appointments, reduced medication costs, and access to
                specialised disability services.
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
              Benefits of the National Disability Aid Card
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The National Disability Aid Card provides far-reaching advantages,
              covering every aspect of daily life for individuals with
              disabilities.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <div className="w-3 h-3 bg-uae-green rounded-full mr-3"></div>
              Benefits Include:
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                Government-Recognized Cards: All of our cards comply with UAE
                regulations, ensuring you receive all the rights, benefits, and
                services guaranteed by the government under the UAE Disability
                Law.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                Wide Range of Benefits: Our personalised cards grant access to
                healthcare, transport, retail, entertainment, and more, ensuring
                that you can enjoy a wide range of benefits and services across
                the UAE.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                Streamlined Application Process: We’ve made the application
                process quick and simple. Just fill out our online form, upload
                the necessary documents, and receive your personalised card.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                Access to Respite Care and Other Services: Our cards also
                provide access to respite care and other support services,
                making life easier for both individuals with disabilities and
                their carers.
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                Comprehensive Support Network: As a trusted provider, we offer a
                support network that includes access to advocacy, customer care,
                and legal support to ensure that your rights are upheld.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Eligibility & Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Eligibility Requirements
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                To qualify for the National Disability ID Card, you must meet the
                following criteria:
              </p>
              <ul className="space-y-4">
                {[
                  'UAE resident with valid Emirates ID',
                  'Medical documentation of disability',
                  'Completed application form',
                  'Recent passport-sized photographs',
                  'Proof of residence in UAE',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-uae-green w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
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
                <div className="flex items-start">
                  <div className="bg-uae-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Apply Online
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Fill out the application form and upload the required
                      medical documents and photographs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-uae-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Medical Verification
                    </h4>
                    <p className="text-gray-600 text-sm">
                      If needed, our team will work with medical specialists to
                      verify your disability and issue the appropriate card.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-uae-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Receive Your Card
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Your National Disability ID Card will be produced and
                      delivered to you within days of approval.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-uae-green text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Start Enjoying Benefits
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Use your card at partner organisations across the UAE and
                      enjoy your full range of benefits and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-uae-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Apply for Your Disability ID Card?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Start your application today and enjoy comprehensive support. Our
            team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/apply-disabilities"
              className="inline-flex items-center px-8 py-4 bg-white text-uae-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-green transition-all duration-300"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisabilitiesCard;
