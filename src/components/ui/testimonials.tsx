"use client";

import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CISO',
    company: 'TechCorp Inc.',
    content: 'CyberSafety has revolutionized our threat detection capabilities. The AI-powered anomaly detection caught threats that traditional systems completely missed.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Marcus Johnson',
    role: 'Security Analyst',
    company: 'DataFlow Systems',
    content: 'The real-time network visualization is incredible. We can now see attack patterns developing before they cause damage.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Elena Rodriguez',
    role: 'IT Director',
    company: 'Global Finance Ltd.',
    content: 'The instant response system saved us from a major data breach. Automated quarantine actions contained the threat within minutes.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Security Experts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what cybersecurity professionals are saying about CyberSafety
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 border-2 border-white/20"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-300 text-sm">{testimonial.role}</p>
                  <p className="text-purple-300 text-sm">{testimonial.company}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex text-yellow-400 mb-4">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-200 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
