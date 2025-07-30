import React from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Clock, Truck, ArrowRight } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      number: "1",
      icon: CreditCard,
      title: "Apply Online",
      description: "Complete the simple application form on our website.",
      color: "text-blue-600"
    },
    {
      number: "2", 
      icon: Clock,
      title: "Submit Documentation",
      description: "Provide the necessary documentation to confirm your eligibility (e.g., proof of disability, carer status and Employment Verification Letter for customer support card).",
      color: "text-blue-600"
    },
    {
      number: "3",
      icon: Truck,
      title: "Receive Your Card",
      description: "Once your application is processed, we will mail your personalized Disability ID or Carer Card or Customer Support Card to your address.",
      color: "text-blue-600"
    },
    {
      number: "4",
      icon: ArrowRight,
      title: "Start Enjoying Your Benefits",
      description: "Use your card to unlock discounts, priority services, and more, at hundreds of participating partners across the UAE.",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Button */}
          <div>
            <div className="mb-6">
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
                • HOW TO APPLY
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Easy Application Process
            </h2>
            <Link
              to="/apply-disabilities"
              className="inline-flex items-center px-8 py-4 bg-uae-green text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              Start my application
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <IconComponent className={`w-6 h-6 ${step.color}`} />
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;