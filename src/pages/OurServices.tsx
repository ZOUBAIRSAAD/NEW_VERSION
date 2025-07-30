import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Handshake,
} from 'lucide-react';
// Import images for hero backgrounds. These reside one level above src in the
// shared folder and will be processed by the bundler.
import DisabilityHeroBg from '/scroll_img2.jpg';

/**
 * OurServices page
 *
 * This page showcases the three core card services provided by National Disability Aid
 * using the exact wording from the organisation’s official text. Each card section
 * explains what the service is, the benefits it offers, and its key features. A
 * “Why Choose Us?” section highlights the organisation’s strengths, and an
 * eligibility section outlines who can apply. The design uses coloured cards,
 * icons and accent colours inspired by the UAE flag to create a professional
 * and engaging experience without altering the original text.
 */
const OurServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background image: use the disability card for a subtle backdrop */}
        <img
          src={DisabilityHeroBg}
          alt="National Disability Card"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-uae-green via-black/40 to-uae-black opacity-80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            National Disability Aid offers a suite of personalised cards and support services
            designed to improve everyday experiences for individuals with disabilities,
            their carers and customer support professionals across the UAE.
          </p>
        </div>
      </section>

      {/* Three Essential Card Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-uae-black mb-4">
              Three Essential Card Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each card is designed to meet specific needs and provide targeted support
              for different communities.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Disability Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-uae-green to-uae-green/80 p-8 text-white">
                <Heart className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Disability ID Cards</h3>
                <p className="text-white/90">
                  Personalized National Disability ID Cards are official forms of identification
                  designed to grant individuals with disabilities access to the benefits and
                  services they are entitled to under the UAE’s Federal Law.
                </p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-semibold text-uae-black mb-4">
                  Benefits of National Disability Aid Card
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Government-Recognized Cards:</strong> All of our cards comply
                      with UAE regulations, ensuring you receive all the rights, benefits,
                      and services guaranteed by the government under the UAE Disability Law.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Wide Range of Benefits:</strong> Our personalized cards grant
                      access to healthcare, transport, retail, entertainment, and more,
                      ensuring that you can enjoy a wide range of benefits and services
                      across the UAE.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Streamlined Application Process:</strong> We’ve made the
                      application process quick and simple. Just fill out our online form,
                      upload the necessary documents, and receive your personalized card.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Access to Respite Care and Other Services:</strong> Our cards
                      also provide access to respite care and other support services,
                      making life easier for both individuals with disabilities and their
                      carers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Comprehensive Support Network:</strong> As a trusted provider,
                      we offer a support network that includes access to advocacy,
                      customer care, and legal support to ensure that your rights are
                      upheld.
                    </span>
                  </li>
                </ul>
                {/* CTA Buttons */}
                <div className="mt-6">
                  <Link
                    to="/apply-disabilities"
                    className="block w-full bg-uae-green text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Carers Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-uae-red to-red-700 p-8 text-white">
                <Users className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">National Carer Card</h3>
                <p className="text-white/90">
                  Personalized cards for those who provide care and support to individuals
                  with disabilities. These cards recognise the vital role of carers and
                  enable them to access priority services, discounts, and support across
                  the UAE.
                </p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-semibold text-uae-black mb-4">
                  Benefits Include
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Access to carer-specific services and support.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Discounts on services that help in caregiving (e.g., respite care,
                      healthcare services).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Priority seating or assistance at public venues.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Recognition of the important role that carers play in the lives of
                      individuals with disabilities.
                    </span>
                  </li>
                </ul>
                {/* Key Features for Carers */}
                <h4 className="text-lg font-semibold text-uae-black mt-6 mb-4">
                  Key Features of the National Carer Card
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Easy Access to Services: Carers can access a wide range of services
                      and discounts to ease their caregiving responsibilities, including
                      healthcare and respite care.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Priority Access and Discounts: Carers are entitled to priority
                      access and discounts at select public and private sector services,
                      including transportation, healthcare, and leisure activities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-red mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Support for Carers: The National Carer Card ensures that the
                      caregiving community is recognised and supported in line with the
                      UAE’s commitment to improving the lives of those who care for
                      individuals with disabilities.
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/apply-carers"
                    className="block w-full bg-uae-red text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </Link>
                </div>
              </div>
            </div>
            {/* Customer Support Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-uae-black to-gray-900 p-8 text-white">
                <Shield className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Customer Support Cards</h3>
                <p className="text-white/90">
                  Specially designed for individuals working in customer support roles.
                  These cards provide access to exclusive discounts and services at a wide
                  range of participating venues across the UAE, including events,
                  hotels, restaurants, shopping malls, and more.
                </p>
              </div>
              <div className="p-8">
                <h4 className="text-lg font-semibold text-uae-black mb-4">
                  Benefits Include
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-black mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Access to exclusive discounts at partner businesses.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-black mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Priority customer service and support at various venues.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-black mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Free or discounted access to recreational and cultural activities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-uae-black mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Assistance with navigating public spaces and services.
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/apply-customer-support"
                    className="block w-full bg-uae-black text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-uae-black mb-8 text-center">
            Why Choose Us?
          </h2>
          <ul className="space-y-4 text-gray-700 max-w-4xl mx-auto">
            <li className="flex items-start mb-4">
              <Star className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Aligned with UAE Disability Regulations:</strong> Our cards comply
                with the UAE’s disability laws and regulations, ensuring that you
                have access to all the rights and services guaranteed to you by
                the government.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <Star className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Wide Recognition and Acceptance Across the UAE:</strong> Our
                personalised cards are recognised and accepted by various government
                institutions, healthcare providers, private entities, businesses,
                and public organisations throughout the UAE, ensuring that you
                receive the support you need when you need it.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <Star className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Trusted by Families:</strong> We are a trusted service provider
                for individuals with disabilities and carers, committed to making
                life easier and more accessible.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <Star className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Dedicated to Empowering Individuals with Disabilities and
                  Carers:</strong> We are committed to improving the quality of life
                for individuals with disabilities and their carers by providing
                easy access to essential services, benefits, and support.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <Star className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Quick and Simple Process:</strong> Applying for your card is
                straightforward and quick, with minimal documentation required.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <Star className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Simple and Accessible:</strong> We believe in a straightforward
                application process and seamless customer experience.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <Star className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Commitment to Inclusion:</strong> Our goal is to promote an
                inclusive society where people with disabilities and their carers
                are respected and supported.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-uae-black mb-8 text-center">
            Eligibility
          </h2>
          <ul className="max-w-4xl mx-auto space-y-4 text-gray-700">
            <li className="flex items-start">
              <Handshake className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                Individuals with disabilities, regardless of age or type of disability,
                who meet the criteria set out by UAE disability regulations.
              </span>
            </li>
            <li className="flex items-start">
              <Handshake className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                Carers of individuals with disabilities, including family members,
                healthcare workers or professional caregivers.
              </span>
            </li>
            <li className="flex items-start">
              <Handshake className="w-6 h-6 text-uae-green mr-3 mt-0.5 flex-shrink-0" />
              <span>
                Professional customer support individuals who assist the disabled
                community and need recognition for their role.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-uae-green to-uae-green/80 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Choose the card that best fits your needs and begin your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="bg-white text-uae-green px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Compare Cards
            </Link>
            <Link
              to="/apply"
              className="bg-uae-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
