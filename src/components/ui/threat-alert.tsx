import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ThreatData {
  id: string;
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  description: string;
  indicators: string[];
  confidence: number;
}

interface ThreatAlertProps {
  threat: ThreatData;
}

const ThreatAlert: React.FC<ThreatAlertProps> = ({ threat }) => {
  const severityColors = {
    low: 'from-blue-500 to-cyan-500',
    medium: 'from-yellow-500 to-orange-500',
    high: 'from-orange-500 to-red-500',
    critical: 'from-red-500 to-pink-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 mb-3"
    >
      <div className="flex items-start gap-3">
        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${severityColors[threat.severity]} mt-2`} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-semibold">{threat.type}</h4>
            <span className="text-xs text-gray-400">
              {threat.timestamp.toLocaleTimeString()}
            </span>
          </div>
          <p className="text-sm text-gray-400 mb-2">{threat.description}</p>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-gray-500">Confidence:</span>
            <div className="flex-1 bg-white/10 rounded-full h-2 max-w-[100px]">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${severityColors[threat.severity]}`}
                style={{ width: `${threat.confidence}%` }}
              />
            </div>
            <span className="text-white">{threat.confidence}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ThreatAlert;
