"use client";

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
import { ParticleTextEffect } from '@/components/ui/particle-text-effect'; // Directly import ParticleTextEffect
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'; // Re-adding Alert imports
import { Terminal } from 'lucide-react'; // Re-adding Terminal icon import
import { motion } from 'framer-motion'; // Re-adding motion import
import CyberSecurityDashboard from '@/components/ui/cyber-security-dashboard';
// import { Demo as GradientButtonDemo } from '@/components/ui/demo'; // Commented out to revert

export default function Home() {
  return (
    <CyberSecurityDashboard />
  );
}
