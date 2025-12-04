"use client";

import React from 'react';

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-md border border-white/20 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Secure Your Digital World?
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of organizations that trust CyberSafety to protect their digital assets.
              Get started today with our comprehensive security platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 rounded-full text-white font-semibold text-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>

            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>24/7 expert support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
