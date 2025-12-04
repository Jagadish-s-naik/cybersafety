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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <FeatureGrid />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Call to Action */}
      <CTASection />

      {/* Components Showcase Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Security Components
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of cutting-edge UI components designed for cybersecurity applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Component Previews */}
            <div className="space-y-12">
              {/* Background Paths */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Animated Background Paths</h3>
                <p className="text-gray-300 mb-6">Dynamic SVG animations creating mesmerizing visual effects</p>
                <div className="h-64 rounded-lg overflow-hidden">
                  <DemoBackgroundPaths />
                </div>
              </div>

              {/* Glowing Effects */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Interactive Glow Effects</h3>
                <p className="text-gray-300 mb-6">Mouse-following glow effects for enhanced user interaction</p>
                <div className="h-64 rounded-lg overflow-hidden bg-slate-800/50">
                  <GlowingEffectDemo />
                </div>
              </div>

              {/* Particle Text */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Particle Text Animation</h3>
                <p className="text-gray-300 mb-6">Canvas-based particle system creating dynamic text effects</p>
                <div className="h-64 rounded-lg overflow-hidden bg-black">
                  <DemoParticleTextEffect />
                </div>
              </div>
            </div>

            {/* Right Column - More Components */}
            <div className="space-y-12">
              {/* Glass Calendar */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Glassmorphism Calendar</h3>
                <p className="text-gray-300 mb-6">Beautiful date picker with glassmorphism design</p>
                <div className="flex justify-center">
                  <GlassCalendarDemo />
                </div>
              </div>

              {/* Orbiting Skills */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">Orbiting Skills Animation</h3>
                <p className="text-gray-300 mb-6">Rotating skill icons with smooth orbital motion</p>
                <div className="flex justify-center">
                  <DemoOrbitingSkills />
                </div>
              </div>
            </div>
          </div>

          {/* Full Width Components */}
          <div className="mt-20 space-y-20">
            {/* Scroll Expansion Hero */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Interactive Scroll Hero</h3>
              <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Dynamic media expansion triggered by scroll interactions
              </p>
              <Demo />
            </div>

            {/* Glassmorphism Sidebar */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Dashboard Layout</h3>
              <p className="text-gray-300 mb-8 text-center max-w-2xl mx-auto">
                Complete glassmorphism dashboard with sidebar navigation
              </p>
              <DemoGlassmorphismSidebar />
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
