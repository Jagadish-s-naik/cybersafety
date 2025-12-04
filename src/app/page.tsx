import React from 'react';
import { DemoBackgroundPaths } from '@/components/ui/demo-background-paths';
import { GlowingEffectDemo } from '@/components/ui/demo-glowing-effect';
import DemoParticleTextEffect from '@/components/ui/demo-particle-text-effect';
import GlassCalendarDemo from '@/components/ui/demo-glass-calendar';
import DemoOrbitingSkills from '@/components/ui/demo-orbiting-skills';
import DemoGlassmorphismSidebar from '@/components/ui/demo-glassmorphism-sidebar';
import Demo from '@/components/ui/demo-scroll-expansion-hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          React Components Showcase
        </h1>

        <div className="space-y-16">
          {/* Background Paths Component */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Background Paths</h2>
            <DemoBackgroundPaths />
          </section>

          {/* Glowing Effect Component */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Glowing Effect</h2>
            <GlowingEffectDemo />
          </section>

          {/* Particle Text Effect Component */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Particle Text Effect</h2>
            <DemoParticleTextEffect />
          </section>

          {/* Glass Calendar Component */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Glass Calendar</h2>
            <GlassCalendarDemo />
          </section>

          {/* Orbiting Skills Component */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Orbiting Skills</h2>
            <DemoOrbitingSkills />
          </section>

          {/* Glassmorphism Sidebar Component */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Glassmorphism Sidebar</h2>
            <DemoGlassmorphismSidebar />
          </section>

          {/* Scroll Expansion Hero Component */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Scroll Expansion Hero</h2>
            <Demo />
          </section>
        </div>
      </div>
    </div>
  );
}
