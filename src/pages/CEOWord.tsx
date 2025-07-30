import React from 'react';
import { Quote, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const CEOWord = () => {
  return (
    <main>
      {/* Hero Section: gradient background and accent bar */}
      <section className="relative">
        <div className="bg-gradient-to-r from-uae-red via-uae-black to-uae-green">
          <div className="flex flex-col items-center justify-center h-80 text-center px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              A Word from Our CEO
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl">
              Leading the mission to create an inclusive society for all
            </p>
          </div>
          {/* UAE flag accent bar at bottom of hero */}
          <div className="flex w-full h-1">
            <div className="flex-1 bg-uae-red"></div>
            <div className="flex-1 bg-white"></div>
            <div className="flex-1 bg-uae-black"></div>
            <div className="flex-1 bg-uae-green"></div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* CEO Placeholder Avatar */}
            <div className="w-32 h-32 mb-4 rounded-full overflow-hidden bg-white flex items-center justify-center shadow">
              {/* Replace with an actual photo if available */}
              <User className="h-16 w-16 text-uae-green" />
            </div>
            <h3 className="text-2xl font-semibold">Alex Abassi</h3>
            <p className="text-sm text-gray-600">
              Chief Executive Officer
              <br />
              National Disability Aid UAE
            </p>
            <div className="mt-6 bg-white rounded-lg shadow p-6 max-w-3xl text-left">
              <p className="text-gray-700 italic mb-4">
                “Many people live with invisible disabilities—conditions like
                chronic pain, mental health challenges, and neurological
                disorders that aren’t immediately noticeable but significantly
                affect everyday life. Despite being hidden, these disabilities
                are just as impactful and deserving of support as any visible
                condition. Those who face these challenges often deal with
                ongoing physical, emotional, and mental strain while receiving
                little recognition or understanding in public settings,
                workplaces, or when accessing services.”
              </p>
              <p className="text-gray-700 italic mb-4">
                “There is a growing need for an official card that acknowledges
                and validates these invisible disabilities. This type of
                identification can help ensure that individuals are treated with
                the same level of care, accommodation, and respect as those with
                visible impairments. It can also promote greater awareness and
                bridge the gap in support systems, encouraging a more inclusive
                and empathetic society.”
              </p>
              <p className="text-gray-700 italic">
                “This is the driving force behind my commitment to launching the
                National Disability Aid Card and Carer Card initiative.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-uae-black mb-6 text-center">
            Our Mission &amp; Purpose
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-center">
            Our mission is to provide individuals with disabilities, as well as
            the carers who selflessly support them, with the recognition and
            services they deserve. These cards offer a simple but powerful way
            to identify their needs and ensure access, respect, and
            understanding in public spaces and services.
          </p>
          <p className="text-gray-700 max-w-2xl mx-auto text-center">
            This initiative aims to ensure that those with special needs receive
            the respect, assistance, and opportunities they need to thrive, and
            that carers are acknowledged for their vital role in this journey.
          </p>
        </div>
      </section>

      {/* Leadership Commitment Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-uae-black mb-6 text-center">
            Honoring Frontline Support Workers
          </h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
            <p className="text-gray-700 italic mb-4">
              “In addition, we are proud to introduce the Customer Support Card,
              recognizing the often-overlooked efforts of those working on the
              front lines of customer service.”
            </p>
            <p className="text-gray-700 italic mb-4">
              “These individuals serve as the bridge between organisations and
              the public, managing complex situations with patience, empathy,
              and professionalism.”
            </p>
            <p className="text-gray-700 italic">
              “They too deserve acknowledgment, respect, and the resources to
              thrive in their roles. This service is rooted in dignity,
              inclusion, and gratitude for the disabled, the carers, and the
              support workers who make everyday life more humane for us all.”
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-uae-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Us in Building an Inclusive Future
          </h2>
          <p className="max-w-xl mx-auto mb-6">
            Together, we can create a society where everyone has the
            opportunity to thrive and contribute
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/services"
              className="px-6 py-3 bg-white text-uae-green font-semibold rounded shadow hover:bg-gray-100 transition-colors"
            >
              Learn About Our Services
            </Link>
            <Link
              to="/apply"
              className="px-6 py-3 bg-white text-uae-red font-semibold rounded shadow hover:bg-gray-100 transition-colors"
            >
              Apply for a Card
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CEOWord;
