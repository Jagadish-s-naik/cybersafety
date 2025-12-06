import React from 'react';
import { DemoBackgroundPaths } from '@/components/ui/demo-background-paths';
import { GlowingEffectDemo } from '@/components/ui/demo-glowing-effect';
import DemoParticleTextEffect from '@/components/ui/demo-particle-text-effect';
import GlassCalendarDemo from '@/components/ui/demo-glass-calendar';
import DemoOrbitingSkills from '@/components/ui/demo-orbiting-skills';
import DemoGlassmorphismSidebar from '@/components/ui/demo-glassmorphism-sidebar';
import Demo from '@/components/ui/demo-scroll-expansion-hero';
import { FeatureGrid } from '@/components/ui/feature-grid';
import { Testimonials } from '@/components/ui/testimonials';
import { CTASection } from '@/components/ui/cta-section';
import { Navigation } from '@/components/ui/navigation';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-md border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
              🚀 Advanced CyberSecurity Platform
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight">
            CyberSafety
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Live Cyber Attack Alert System with AI-powered threat detection,
            real-time network monitoring, and advanced security analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 rounded-full text-white font-semibold text-lg transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">🛡️</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">AI Threat Detection</h3>
              <p className="text-gray-300 text-sm">Advanced anomaly detection using machine learning algorithms</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Real-time Monitoring</h3>
              <p className="text-gray-300 text-sm">Live network visualization and packet flow analysis</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Instant Response</h3>
              <p className="text-gray-300 text-sm">Automated incident response and quarantine actions</p>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section */}
      <section id="features">
        <FeatureGrid />
      </section>

      {/* Testimonials Section */}
      <section id="about">
        <Testimonials />
      </section>

      {/* Call to Action */}
      <CTASection />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to secure your digital infrastructure? Contact our cybersecurity experts for a personalized consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-purple-400 text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-300">security@cybersafety.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-green-400 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Office</h4>
                      <p className="text-gray-300">123 Security Blvd, Cyber City, CC 12345</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center hover:bg-blue-500/30 transition-colors cursor-pointer">
                    <span className="text-blue-400 text-xl">📘</span>
                  </div>
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center hover:bg-sky-500/30 transition-colors cursor-pointer">
                    <span className="text-sky-400 text-xl">🐦</span>
                  </div>
                  <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center hover:bg-pink-500/30 transition-colors cursor-pointer">
                    <span className="text-pink-400 text-xl">📷</span>
                  </div>
                  <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center hover:bg-red-500/30 transition-colors cursor-pointer">
                    <span className="text-red-400 text-xl">💼</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="john.doe@company.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">CyberSafety Platform</h3>
          <p className="text-gray-400 mb-6">
            Advanced cybersecurity solutions for modern enterprises
          </p>
          <div className="flex justify-center space-x-6">
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy</span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms</span>
            <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">Support</span>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            © 2024 CyberSafety. Built with Next.js and advanced UI components.
          </p>
        </div>
      </footer>
    </div>
  );
}
