import React from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Users,
  Award,
  CheckCircle,
  UserPlus,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import DisabilityHeroBg from '/franchise.jpg';
/**
 * BecomeFranchise page
 *
 * This page invites potential partners to join the National Disability Aid (NDAid)
 * network as franchisees. It uses the exact wording from the organisation’s
 * documentation to describe why someone should become a franchisee, what makes
 * NDAid unique, what qualities are sought in a partner, and how to apply.
 */
const BecomeFranchise: React.FC = () => {
  // Why Franchise section content
  const whyFranchise = [
    {
      title: 'Why become a National Disability Aid franchise?',
      body: (
        <>
          <p className="mb-4 text-gray-700">
            The <strong>National Disability Aid</strong> have experienced rapid
            growth, with a wide range of organisations recognising their value
            and adopting them to support both customers and employees. Our
            partners span across retail, travel and tourism, education (schools,
            colleges, universities), healthcare, government agencies, sports
            clubs, theatres, financial institutions and more.
          </p>
          <p className="text-gray-700">
            As a <strong>NDAid Franchisee</strong>, you’ll be part of a globally
            growing initiative that is making a real difference. You’ll benefit
            from:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
            <li>A proven, socially impactful brand with international recognition</li>
            <li>Access to training, resources, and marketing materials</li>
            <li>
              Opportunities to connect with businesses and organisations across multiple
              sectors
            </li>
            <li>The chance to create inclusive communities in your region</li>
            <li>Ongoing support from our experienced team</li>
          </ul>
          <p className="mt-4 text-gray-700">
            Join us in shaping a more inclusive, understanding world one card at a time.
          </p>
        </>
      ),
    },
  ];

  // Features that set NDAid apart
  const uniqueFeatures = [
    {
      icon: Globe,
      title: 'Globally Recognised and Protected Brand',
      description: (
        <>
          As a trusted and internationally recognised symbol for non-visible and
          visible disabilities, the <strong>National Disability Aid (NDAid)</strong> enjoy
          strong brand awareness and credibility. Our name is protected by
          international trademarks, giving franchisees market exclusivity and the
          confidence of operating under a respected identity.
        </>
      ),
    },
    {
      icon: Users,
      title: 'Extensive Cross‑Sector Expertise',
      description: (
        <>
          Our work touches every sector because disability exists in every part of life.
          The <strong>NDAid</strong> has been successfully implemented across a wide
          range of industries, including transport, travel and tourism, government
          bodies, retail, financial services, manufacturing, education, leisure and
          sports. This deep, hands‑on experience equips our franchise partners with
          the tools and insights needed to succeed across multiple sectors.
        </>
      ),
    },
    {
      icon: Handshake,
      title: 'A Long‑Term Partnership for Success',
      description: (
        <>
          When you join the <strong>National Disability Aid (NDAid)</strong> network,
          you’re not alone. Our dedicated team is here to support you at every stage
          of your journey. You’ll be partnered with a personal NDAid business mentor
          and receive assistance in launching and managing your regional NDAid
          website. We also help tailor products and services to reflect the unique
          needs of individuals with visible and non‑visible disabilities in your
          local area.
        </>
      ),
    },
    {
      icon: Award,
      title: 'A Proven Business Model',
      description: (
        <>
          With the backing of a well‑established, internationally recognised brand,
          you’ll benefit from a tested and scalable model. Supported by our Head
          Office team, you’ll be equipped to grow your business by delivering NDAid
          services and encouraging local organisations to become NDAid members.
        </>
      ),
    },
    {
      icon: UserPlus,
      title: 'Comprehensive Ongoing Support',
      description: (
        <>
          From day one, you’ll have access to everything you need to thrive including
          a complete training programme for onboarding partner organisations,
          marketing support, and ready‑to‑use promotional materials. We work
          alongside you to raise awareness of NDAid in your region, building both
          national recognition and strong local engagement.
        </>
      ),
    },
  ];

  // Franchisee requirements
  const idealFranchisee = [
    'A genuine commitment to inclusion',
    'Passion for improving the lives of people with visible and non‑visible disabilities, their carers, and those in customer‑facing roles. Experience in the charity or care sector is a strong advantage.',
    'Strong marketing skills – Confidence in promoting the brand across digital and traditional media platforms.',
    'Proven networking and sales ability. Experience working across both B2B and B2C channels, with the ability to build lasting relationships.',
    'Presence in an unrepresented region. You should be based in a country or region where NDAid is not yet established.',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
{/*       {/* Hero Section }
      <section className="bg-gradient-to-br from-uae-green to-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Become a National Disability Aid Franchise
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
              We’re looking for partners to help expand the <strong>NDAid</strong>
              across the globe! Join our mission and create inclusive communities
              while building a successful business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-uae-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Apply for Franchise
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="mailto:support@ndaid.help"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-green transition-all duration-300"
              >
                Email Our Team
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* Hero Section with new background image */}
      <div className="relative text-white py-20">
        {/* Abu Dhabi skyline with UAE flag */}
        <img
          src={DisabilityHeroBg}
          alt="National Disability Card"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay for readability and brand colours */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-black/40 to-green-700 opacity-80"></div>
        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Handshake className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Become a National Disability Aid Franchise
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
          We’re looking for partners to help expand the <strong>NDAid</strong>
              across the globe! Join our mission and create inclusive communities
              while building a successful business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-uae-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Apply for Franchise
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="mailto:support@ndaid.help"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-green transition-all duration-300"
              >
                Email Our Team
              </a>
            </div>
        </div>
      </div>
      {/* Why Franchise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {whyFranchise.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                {section.title}
              </h2>
              <div className="max-w-4xl mx-auto text-left text-lg leading-relaxed">
                {section.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {uniqueFeatures.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <IconComponent className="w-8 h-8 text-uae-green mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Are We Looking For?
          </h2>
          <div className="max-w-4xl mx-auto">
            <ul className="space-y-4 text-gray-700 text-base leading-relaxed">
              {idealFranchisee.map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-uae-green mr-3 mt-1 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Ready to Apply Section */}
      <section className="py-20 bg-uae-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply?
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            We’d love to hear from you! To apply, simply send us an email, and a
            member of our Engagement Team will be in touch to guide you through
            the next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:support@ndaid.help"
              className="inline-flex items-center px-8 py-4 bg-white text-uae-green font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Email Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-uae-green transition-all duration-300"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BecomeFranchise;
