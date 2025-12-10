import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

interface DeviceNode {
  id: string;
  name: string;
  ip: string;
  status: 'safe' | 'warning' | 'threat';
  connections: number;
}

interface NetworkNodeProps {
  device: DeviceNode;
  index: number;
}

const NetworkNode: React.FC<NetworkNodeProps> = ({ device, index }) => {
  const statusColors = {
    safe: 'from-green-500 to-emerald-500',
    warning: 'from-yellow-500 to-orange-500',
    threat: 'from-red-500 to-pink-600'
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      <motion.div
        animate={{
          boxShadow: [
            '0 0 20px rgba(59, 130, 246, 0.5)',
            '0 0 40px rgba(59, 130, 246, 0.8)',
            '0 0 20px rgba(59, 130, 246, 0.5)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className={`w-16 h-16 rounded-full bg-gradient-to-br ${statusColors[device.status]} flex items-center justify-center cursor-pointer`}
      >
        <Server className="w-8 h-8 text-white" />
      </motion.div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white whitespace-nowrap">
        {device.name}
      </div>
    </motion.div>
  );
};

export default NetworkNode;
