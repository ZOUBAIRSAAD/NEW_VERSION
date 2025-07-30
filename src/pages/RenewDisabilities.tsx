import { ArrowRight, CheckCircle, Clock, CreditCard, RefreshCw, Shield } from 'lucide-react';
import React, { useState } from 'react';

const RenewDisabilities = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    firstName: '',
    lastName: '',
    emiratesId: '',
    phoneNumber: '',
    email: '',
    renewalReason: '',
    hasChanges: false,
    changesDescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const renewalReasons = [
    'Card expiring soon',
    'Lost or damaged card',
    'Change in disability status',
    'Update personal information',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({
        ...formData,
        [name]: checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://jolly-shadow-d2bf.elfadili-zoubair.workers.dev/api/renewal/disabilities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          cardNumber: '',
          firstName: '',
          lastName: '',
          emiratesId: '',
          phoneNumber: '',
          email: '',
          renewalReason: '',
          hasChanges: false,
          changesDescription: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'An error occurred while submitting your renewal application.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-uae-green py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RefreshCw className="w-16 h-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Renew Disabilities Card
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Keep your benefits active by renewing your Disabilities Card. 
            Simple process to continue accessing all your support services.
          </p>
        </div>
      </section>

      {/* Renewal Benefits */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-uae-green" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Process</h3>
              <p className="text-gray-600">Streamlined renewal in just a few steps</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-uae-green" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Benefits</h3>
              <p className="text-gray-600">No interruption to your services</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CreditCard className="w-8 h-8 text-uae-green" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Updated Card</h3>
              <p className="text-gray-600">Receive your new card with latest security features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Renewal Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Renewal Application</h2>
              <p className="text-gray-600">Please provide your current card details and any updates</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Current Card Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Card Information</h3>
                <p className="text-sm text-blue-600 mb-4 bg-blue-50 p-3 rounded-lg">
                  <strong>Note:</strong> Verification is based on your Emirates ID only. Card number is optional for reference.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number (Optional)</label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your current card number (optional)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Emirates ID *</label>
                    <input
                      type="text"
                      name="emiratesId"
                      required
                      value={formData.emiratesId}
                      onChange={handleInputChange}
                      placeholder="784-XXXX-XXXXXXX-X"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                    />
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="+971 XX XXX XXXX"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                    />
                  </div>
                </div>
              </div>

              {/* Renewal Reason */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Renewal *</label>
                <select
                  name="renewalReason"
                  required
                  value={formData.renewalReason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                >
                  <option value="">Select reason</option>
                  {renewalReasons.map((reason) => (
                    <option key={reason} value={reason}>{reason}</option>
                  ))}
                </select>
              </div>

              {/* Changes Section */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="hasChanges"
                    id="hasChanges"
                    checked={formData.hasChanges}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-uae-green bg-gray-100 border-gray-300 rounded focus:ring-uae-green focus:ring-2"
                  />
                  <label htmlFor="hasChanges" className="ml-2 text-sm font-medium text-gray-700">
                    I have changes to my disability status or personal information
                  </label>
                </div>
                
                {formData.hasChanges && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Please describe the changes:
                    </label>
                    <textarea
                      name="changesDescription"
                      value={formData.changesDescription}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Describe any changes to your disability status or personal information..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green"
                    />
                  </div>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <p className="text-green-700">Renewal application submitted successfully! We will contact you within 48 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-700">{errorMessage}</p>
                </div>
              )}
              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-uae-green text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Renewal Application'}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Renewal Process Info */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Renewal Process</h2>
            <p className="text-gray-600">What happens after you submit your renewal application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-uae-green">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Verification</h3>
                <p className="text-gray-600">We'll verify your current card status</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-uae-green">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
                <p className="text-gray-600">Medical re-assessment if changes reported</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-uae-green">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Production</h3>
                <p className="text-gray-600">New card production and quality check</p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-uae-green">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-600">Secure delivery to your address</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RenewDisabilities;