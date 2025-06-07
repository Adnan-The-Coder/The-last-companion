/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaRupeeSign } from 'react-icons/fa';
import { BiDonateHeart } from 'react-icons/bi';
import Script from 'next/script';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (_paymentData: any) => void | Promise<void>;
  donationAmount?: number;
  email?: string;
  phone?: string;
  name?: string;
  isAnonymous?: boolean;
}

const DonationModal: React.FC<DonationModalProps> = ({ 
  isOpen, 
  onClose, 
  onSuccess,
  donationAmount: initialAmount = 100,
  email: initialEmail = '',
  phone: initialPhone = '',
  name: initialName = '',
  isAnonymous: initialAnonymous = false
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(initialAmount);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const donationAmounts = [100, 500, 1000, 5000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const handleDonate = async () => {
    const amount = selectedAmount || (customAmount ? parseInt(customAmount) : 0);
    if (amount <= 0) return;

    setIsProcessing(true);
    
    try {
      const res = await fetch('/api/razorpay-create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: amount * 100 }),
      });
      
      const data = await res.json();
      
      if (!data || !data.id) {
        throw new Error('Failed to create order');
      }

      const PaymentData = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: amount * 100,
        currency: "INR",
        name: "The Last Companion",
        description: "Donation for Islamic funeral services",
        order_id: data.id,
        
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch("/api/razorpay-verify-payment", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                orderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              }),
            });
            
            const verifyData = await verifyRes.json();
            
            if (verifyData.success) {
              setShowThankYou(true);
              setTimeout(() => {
                setShowThankYou(false);
                onSuccess?.(verifyData);
                onClose();
              }, 3000);
            } else {
              alert("Payment verification failed. Please contact support if amount was debited.");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            alert("There was an error verifying your payment. Please contact support.");
          }
          
          setIsProcessing(false);
        },
        
        prefill: {
          name: initialAnonymous ? "Anonymous Donor" : initialName,
          email: initialEmail,
          contact: initialPhone,
        },
        
        theme: {
          color: "#EF8354",
        },
        
        modal: {
          ondismiss: function() {
            setIsProcessing(false);
          }
        }
      };

      if (typeof window !== 'undefined' && (window as any).Razorpay) {
        const payment = new (window as any).Razorpay(PaymentData);
        payment.open();
      } else {
        throw new Error('Razorpay SDK not loaded');
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("There was an error processing your payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Script 
        type='text/javascript'
        src='https://checkout.razorpay.com/v1/checkout.js'
        strategy="lazyOnload"
      />
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div 
              className="mx-4 w-full max-w-md rounded-xl border border-gray-700 bg-gray-900 p-6 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="bg-gradient-to-r from-[#EF8354] to-[#4F5D75] bg-clip-text text-2xl font-bold text-transparent">
                  Support Our Cause
                </h2>
                <button 
                  onClick={onClose}
                  className="rounded-full bg-gray-800 p-2 text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-white"
                >
                  <FaTimes />
                </button>
              </div>
              <div className="mb-6">
                <p className="mb-4 text-gray-300">
                  Your donation helps us provide dignified Islamic funeral services to those in need.
                </p>
                <div className="mb-4 grid grid-cols-2 gap-3">
                  {donationAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`flex items-center justify-center space-x-2 rounded-lg px-4 py-3 transition-all duration-300 ${
                        selectedAmount === amount 
                          ? 'bg-[#EF8354] text-white' 
                          : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      }`}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      <FaRupeeSign />
                      <span>{amount}</span>
                    </button>
                  ))}
                </div>
                <div className="relative mb-6">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaRupeeSign className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 py-3 pl-10 pr-4 text-gray-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#EF8354]"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>
              <motion.button
                className="flex w-full items-center justify-center space-x-2 rounded-lg bg-[#EF8354] px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:bg-[#D64C1B] disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isProcessing || (!selectedAmount && !customAmount)}
                onClick={handleDonate}
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="size-5 animate-spin rounded-full border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <>
                    <BiDonateHeart className="text-xl" />
                    <span>Donate Now</span>
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Simple Thank You Animation */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <motion.h2 
                className="mb-4 text-4xl font-bold text-[#EF8354]"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                Thank You!
              </motion.h2>
              <p className="text-xl text-white">
                Your generosity will help those in need.
              </p>
              <p className="mt-2 text-gray-400">
                May Allah reward you for your kindness.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DonationModal;