import React, { useState } from 'react';
import { X, Search, CheckCircle, AlertCircle } from 'lucide-react';

interface TrackCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CardData {
  cardNumber: string;
  holderName: string;
  issuedDate: string;
  expiryDate: string;
  status: string;
  cardType: string;
}

const TrackCardModal: React.FC<TrackCardModalProps> = ({ isOpen, onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [cardData, setCardData] = useState<CardData | null>(null);
  const [error, setError] = useState('');

  // Static card data for demonstration
  const staticCardData: CardData = {
    cardNumber: 'AA-123456789',
    holderName: 'Sarah Mohammed Al-Zahra',
    issuedDate: '15/03/2024',
    expiryDate: '15/03/2026',
    status: 'Active',
    cardType: 'National Disability Card'
  };

  const handleSearch = async () => {
    setIsSearching(true);
    setError('');
    setCardData(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    if (cardNumber.trim().toUpperCase() === 'AA-123456789') {
      setCardData(staticCardData);
    } else {
      setError('Card number not found. Please check your card number and try again.');
    }

    setIsSearching(false);
  };

  const handleClose = () => {
    setCardNumber('');
    setCardData(null);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-2xl">
          <h2 className="text-2xl font-bold text-gray-900">Track My Card</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          {!cardData ? (
            /* Search Form */
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-uae-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-uae-green" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Your Card Number</h3>
                <p className="text-gray-600">Please enter your card number to track your card status and view details</p>
              </div>

              <div className="max-w-md mx-auto">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Card Number *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    placeholder="Enter card number (e.g., AA-123456789)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-uae-green focus:border-uae-green text-center text-lg font-mono"
                    disabled={isSearching}
                  />
                </div>
                
                {error && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    <span className="text-red-700 text-sm">{error}</span>
                  </div>
                )}

                <button
                  onClick={handleSearch}
                  disabled={!cardNumber.trim() || isSearching}
                  className={`w-full mt-4 py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    !cardNumber.trim() || isSearching
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-uae-green text-white hover:bg-green-700 transform hover:scale-105'
                  }`}
                >
                  {isSearching ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Searching...
                    </div>
                  ) : (
                    'Track Card'
                  )}
                </button>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-900 mb-2">Demo Information</h4>
                  <p className="text-blue-800 text-sm">
                    For demonstration purposes, use card number: <strong>AA-123456789</strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* Card Details Display */
            <div className="space-y-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Card Found!</h3>
                <p className="text-gray-600">Here are your card details</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Card Image */}
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src="/National-Disability-Carde.jpg"
                      alt="National Disability Card"
                      className="w-full max-w-md rounded-2xl shadow-2xl"
                    />
                    {/* Overlay with card information */}
                    <div className="absolute inset-0 bg-black/20 rounded-2xl flex flex-col justify-between p-6 text-white">
                      <div className="text-right">
                        <p className="text-sm font-semibold">{cardData.cardNumber}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-lg font-bold">{cardData.holderName}</p>
                        <div className="flex justify-between text-sm">
                          <span>Issued: {cardData.issuedDate}</span>
                          <span>Expires: {cardData.expiryDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Information */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Card Information</h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Card Number:</span>
                        <span className="font-semibold text-gray-900">{cardData.cardNumber}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Cardholder Name:</span>
                        <span className="font-semibold text-gray-900">{cardData.holderName}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Card Type:</span>
                        <span className="font-semibold text-gray-900">{cardData.cardType}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Issued Date:</span>
                        <span className="font-semibold text-gray-900">{cardData.issuedDate}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Expiry Date:</span>
                        <span className="font-semibold text-gray-900">{cardData.expiryDate}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-600">Status:</span>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          cardData.status === 'Active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {cardData.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-blue-900 mb-4">Important Information</h4>
                    <ul className="space-y-2 text-blue-800 text-sm">
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Your card is valid and active
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        All benefits and services are accessible
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Card expires on {cardData.expiryDate}
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Renewal reminder will be sent 60 days before expiry
                      </li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => {
                        setCardData(null);
                        setCardNumber('');
                      }}
                      className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Search Another Card
                    </button>
                    <button
                      onClick={handleClose}
                      className="flex-1 px-4 py-2 bg-uae-green text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackCardModal;