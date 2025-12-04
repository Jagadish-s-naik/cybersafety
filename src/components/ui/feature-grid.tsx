"use client";

import React from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: '🛡️',
    title: 'AI Threat Detection',
    description: 'Advanced anomaly detection using machine learning algorithms to identify potential security threats in real-time.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: '📊',
    title: 'Network Visualization',
    description: 'Interactive network topology maps showing device connections, packet flows, and suspicious activities.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '⚡',
    title: 'Instant Response',
    description: 'Automated incident response system with one-tap quarantine actions and threat containment.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: '🔍',
    title: 'Zero-Click Detection',
    description: 'Behavioral analysis to detect silent attacks and suspicious background activities.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: '🎭',
    title: 'Identity Fingerprinting',
    description: 'AI-powered user behavior analysis to detect account compromises and impersonation.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: '🔒',
    title: 'Adaptive Firewall',
    description: 'Dynamic firewall rules that adapt to emerging threats and user behavior patterns.',
    color: 'from-teal-500 to-blue-500'
  }
];

export function FeatureGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Security Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions powered by cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
