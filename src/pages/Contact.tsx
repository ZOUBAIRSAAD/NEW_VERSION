import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { contactAPI, ContactSubmissionRequest } from '../api/contactApi';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    cardTypeOfInterest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
    }
  };

  const validateForm = (): string[] => {
    const newErrors: string[] = [];
    
    if (!formData.fullName.trim()) {
      newErrors.push('Full name is required');
    }
    
    if (!formData.email.trim()) {
      newErrors.push('Email address is required');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push('Please enter a valid email address');
    }
    
    if (!formData.subject.trim()) {
      newErrors.push('Subject is required');
    }
    
    if (!formData.message.trim()) {
      newErrors.push('Message is required');
    }
    
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors([]);

    try {
      const submissionData: ContactSubmissionRequest = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber || undefined,
        cardTypeOfInterest: formData.cardTypeOfInterest || undefined,
        subject: formData.subject,
        message: formData.message,
      };

      await contactAPI.submitContactForm(submissionData);
      
      // Reset form and show success message
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
        cardTypeOfInterest: ''
      });
      setShowSuccess(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setErrors(['Failed to send message. Please try again later.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Support",
      details: ["+971 4 XXX XXXX", "+971 50 XXX XXXX"],
      description: "24/7 customer support hotline"
    },
    {
      icon: Mail,
      title: "Email Support",
      details: ["info@nationaldisabilitycard.ae", "support@nationaldisabilitycard.ae"],
      description: "Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Dubai, United Arab Emirates", "Sheikh Zayed Road"],
      description: "Visit us Monday to Friday, 8 AM - 6 PM"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
      description: "Closed on Sundays and public holidays"
    }
  ];

  const officeLocations = [
    {
      city: "Dubai",
      address: "Sheikh Zayed Road, Dubai",
      phone: "+971 4 XXX XXXX",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM"
    },
    {
      city: "Abu Dhabi",
      address: "Corniche Road, Abu Dhabi",
      phone: "+971 2 XXX XXXX",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM"
    },
    {
      city: "Sharjah",
      address: "King Faisal Street, Sharjah",
      phone: "+971 6 XXX XXXX",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-2PM"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We're here to help you with any questions about our disability card services
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our support team</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                  <div className="space-y-2 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              {/* Success Message */}
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Your message has been sent successfully! We'll get back to you soon.
                </div>
              )}

              {/* Error Messages */}
              {errors.length > 0 && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  <ul className="list-disc list-inside">
                    {errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="+971 XX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="cardTypeOfInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Card Type of Interest
                    </label>
                    <select
                      id="cardTypeOfInterest"
                      name="cardTypeOfInterest"
                      value={formData.cardTypeOfInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select a card type</option>
                      <option value="Disabilities Card">Disabilities Card</option>
                      <option value="Carers Card">Carers Card</option>
                      <option value="Customer Support Card">Customer Support Card</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
                  } text-white py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Office Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h3>
              
              {officeLocations.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{office.city} Office</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{office.phone}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <h4 className="text-lg font-bold text-red-800 mb-2">Emergency Support</h4>
                <p className="text-red-700 mb-3">
                  For urgent matters requiring immediate assistance:
                </p>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-500 mr-3" />
                  <span className="text-red-800 font-semibold">+971 800 HELP (4357)</span>
                </div>
                <p className="text-red-600 text-sm mt-2">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Link */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Quick Answers?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check our frequently asked questions for immediate help
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            View FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;