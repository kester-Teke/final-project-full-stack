'use client';

import { motion } from 'framer-motion';
import { Settings, Zap } from 'lucide-react';

const FloatingButton = ({ onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className="fixed bottom-8 right-8 z-50 group"
    >
      {/* Anneau extérieur pulsant - BLEU */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 bg-blue-500 rounded-full"
      />
      
      {/* Deuxième anneau - BLEU CLAIR */}
      <motion.div
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        className="absolute inset-0 bg-blue-400 rounded-full"
      />
      
      {/* Bouton principal - BLANC/BLEU */}
      <div className="relative w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 flex items-center justify-center shadow-2xl shadow-blue-500/30">
        <Settings className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-500" />
      </div>
      
      {/* Tooltip - BLANC avec texte bleu */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg border border-blue-200"
      >
        <span className="text-blue-600 text-xs font-medium flex items-center gap-1">
          <Zap className="w-3 h-3 text-blue-500" />
          <span className="text-blue-700">Changer la tactique</span>
        </span>
      </motion.div>
    </motion.button>
  );
};

export default FloatingButton;