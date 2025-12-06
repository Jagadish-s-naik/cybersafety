'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Advanced Security Features
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions powered by cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group bg-white/50 backdrop-blur-md border border-white/70 hover:bg-white/60 hover:border-white/80 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 text-3xl mx-auto group-hover:scale-110 transition-transform duration-300 text-white`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-700 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
