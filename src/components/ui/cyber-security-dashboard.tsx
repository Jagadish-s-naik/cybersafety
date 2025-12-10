import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Activity,
  Wifi,
  Eye,
  Lock,
  AlertTriangle,
  TrendingUp,
  Users,
  Globe,
  Server,
  Zap,
  CheckCircle,
  XCircle,
  Menu,
  X,
  ChevronRight,
  Play,
  DollarSign,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin
} from 'lucide-react';

import FeatureCard from './feature-card';
import ThreatAlert from './threat-alert';
import NetworkNode from './network-node';

// Types
interface ThreatData {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  description: string;
  indicators: string[];
  confidence: number;
}

interface DeviceNode {
  id: string;
  name: string;
  ip: string;
  status: 'safe' | 'warning' | 'threat';
  connections: number;
}

// Main Dashboard Component
const CyberSecurityDashboard: React.FC = () => {
  const [riskScore, setRiskScore] = useState(0);
  const [threats, setThreats] = useState<ThreatData[]>([]);
  const [devices, setDevices] = useState<DeviceNode[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () => {
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    // Simulate real-time threat detection
    const interval = setInterval(() => {
      const newScore = Math.floor(Math.random() * 100);
      setRiskScore(newScore);

      if (Math.random() > 0.7) {
        const newThreat: ThreatData = {
          id: Date.now().toString(),
          type: ['Suspicious Network Activity', 'Malware Detected', 'Unauthorized Access Attempt'][Math.floor(Math.random() * 3)],
          severity: ['low', 'medium', 'high', 'critical'][Math.floor(Math.random() * 4)] as any,
          timestamp: new Date(),
          description: 'Anomalous behavior detected in network traffic patterns',
          indicators: ['Unusual port scanning', 'High packet rate', 'Unknown destination'],
          confidence: Math.floor(Math.random() * 30) + 70
        };
        setThreats(prev => [newThreat, ...prev].slice(0, 5));
      }
    }, 5000);

    // Initialize mock devices
    setDevices([
      { id: '1', name: 'Device 1', ip: '192.168.1.10', status: 'safe', connections: 5 },
      { id: '2', name: 'Device 2', ip: '192.168.1.11', status: 'warning', connections: 3 },
      { id: '3', name: 'Device 3', ip: '192.168.1.12', status: 'safe', connections: 7 },
      { id: '4', name: 'Device 4', ip: '192.168.1.13', status: 'threat', connections: 2 },
      { id: '5', name: 'Device 5', ip: '192.168.1.14', status: 'safe', connections: 4 }
    ]);

    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (score: number) => {
    if (score < 30) return 'from-green-500 to-emerald-500';
    if (score < 60) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
              initial={{
                x: Math.random() * (windowDimensions.width || 0),
                y: Math.random() * (windowDimensions.height || 0)
              }}
              animate={{
                x: Math.random() * (windowDimensions.width || 0),
                y: Math.random() * (windowDimensions.height || 0)
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse'
              }}
            />
          ))}
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50 p-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">CyberGuard</span>
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#dashboard" className="hover:text-blue-400 transition-colors">Dashboard</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm">AI-Powered Threat Detection</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Live Cyber Attack
              <br />
              Alert System
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Real-time threat detection, AI-powered predictions, and instant response capabilities to protect your digital infrastructure
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Advanced Security Features</h2>
            <p className="text-gray-400 text-lg">Comprehensive protection powered by cutting-edge AI technology</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Activity className="w-6 h-6 text-white" />}
              title="AI Threat Prediction"
              description="Machine learning models analyze telemetry data to predict and prevent attacks before they happen"
              delay={0}
            />
            <FeatureCard
              icon={<Server className="w-6 h-6 text-white" />}
              title="Digital Twin Simulation"
              description="Test attack vectors in a safe, containerized environment to identify vulnerabilities"
              delay={0.1}
            />
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-white" />}
              title="Live Network Visualizer"
              description="Interactive real-time visualization of network traffic and threat detection"
              delay={0.2}
            />
            <FeatureCard
              icon={<Eye className="w-6 h-6 text-white" />}
              title="Zero-Click Detection"
              description="Identify silent attacks and suspicious behavior without user interaction"
              delay={0.3}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-white" />}
              title="Stalkerware Scanner"
              description="Monitor and detect unauthorized access to device sensors and data"
              delay={0.4}
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6 text-white" />}
              title="Adaptive Firewall"
              description="Dynamic policy engine that adapts to emerging threats in real-time"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-Time Monitoring</h2>
            <p className="text-gray-400 text-lg">Live threat detection and network visualization</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Risk Score Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6">Current Risk Score</h3>
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="none"
                    className="text-white/10"
                  />
                  <motion.circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: '0 552' }}
                    animate={{ strokeDasharray: `${(riskScore / 100) * 552} 552` }}
                    transition={{ duration: 1 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className={`${getRiskColor(riskScore).split(' ')[0].replace('from-', 'text-')}`} />
                      <stop offset="100%" className={`${getRiskColor(riskScore).split(' ')[1].replace('to-', 'text-')}`} />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl font-bold">{riskScore}</span>
                  <span className="text-gray-400">Risk Level</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-500">12</div>
                  <div className="text-xs text-gray-400">Blocked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-500">5</div>
                  <div className="text-xs text-gray-400">Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-500">2</div>
                  <div className="text-xs text-gray-400">Critical</div>
                </div>
              </div>
            </motion.div>

            {/* Threat Alerts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6">Recent Threats</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                <AnimatePresence>
                  {threats.map(threat => (
                    <ThreatAlert key={threat.id} threat={threat} />
                  ))}
                </AnimatePresence>
                {threats.length === 0 && (
                  <div className="text-center text-gray-400 py-8">
                    <CheckCircle className="w-12 h-12 mx-auto mb-2 text-green-500" />
                    <p>No threats detected</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Network Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Network Topology</h3>
            <div className="flex items-center justify-around py-12">
              {devices.map((device, index) => (
                <NetworkNode key={device.id} device={device} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <p className="text-gray-400 text-lg">Choose the plan that fits your security needs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Starter', price: '49', features: ['Up to 10 devices', 'Basic threat detection', 'Email support', '24/7 monitoring'] },
              { name: 'Professional', price: '149', features: ['Up to 100 devices', 'Advanced AI detection', 'Priority support', 'Digital twin testing', 'Custom playbooks'], popular: true },
              { name: 'Enterprise', price: '499', features: ['Unlimited devices', 'Full feature access', 'Dedicated support', 'Custom integration', 'SLA guarantee', 'On-premise option'] }
            ].map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-sm border rounded-xl p-8 ${
                  plan.popular ? 'border-blue-500 scale-105' : 'border-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90'
                    : 'bg-white/10 hover:bg-white/20'
                }`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Security Teams</h2>
            <p className="text-gray-400 text-lg">See what our customers have to say</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Johnson', role: 'CISO, TechCorp', text: 'CyberGuard has transformed our security posture. The AI predictions are incredibly accurate.' },
              { name: 'Michael Chen', role: 'Security Lead, DataFlow', text: 'The real-time visualization helps us respond to threats faster than ever before.' },
              { name: 'Emily Rodriguez', role: 'IT Director, SecureNet', text: 'Best investment we\'ve made in cybersecurity. The ROI is undeniable.' }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'How does AI threat prediction work?', a: 'Our AI models analyze device telemetry and network metadata to identify patterns and anomalies that indicate potential threats.' },
              { q: 'Is my data secure?', a: 'Yes, we use end-to-end encryption and process most data on-device. We follow privacy-by-design principles.' },
              { q: 'Can I try before buying?', a: 'Absolutely! We offer a 14-day free trial with full access to all features.' },
              { q: 'What platforms do you support?', a: 'We support iOS, Android, Windows, macOS, and Linux with both mobile and web interfaces.' }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-500" />
                  {faq.q}
                </h3>
                <p className="text-gray-400 ml-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-lg">Have questions? We're here to help</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">support@cyberguard.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold">Phone</div>
                  <div className="text-gray-400">+1 (555) 123-4567</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold">Address</div>
                  <div className="text-gray-400">123 Security St, Tech City, TC 12345</div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
              <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-8 h-8 text-blue-500" />
                <span className="text-xl font-bold">CyberGuard</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advanced AI-powered cybersecurity for the modern digital landscape
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CyberGuard. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberSecurityDashboard;

