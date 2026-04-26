'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react';
import { FORMATIONS } from '../data/formations';

const FormationModal = ({ isOpen, onClose, onSelect, currentFormation }) => {
  if (!isOpen) return null;
  
  const getStyleIcon = (style) => {
    switch(style) {
      case 'Attacking': return <Zap className="w-4 h-4 text-blue-300" />;
      case 'Defensive': return <Shield className="w-4 h-4 text-blue-400" />;
      default: return <TrendingUp className="w-4 h-4 text-blue-400" />;
    }
  };
  
  const getStyleColor = (style) => {
    switch(style) {
      case 'Attacking': return 'from-blue-500/20 to-blue-600/20 border-blue-500/40';
      case 'Defensive': return 'from-blue-600/20 to-blue-700/20 border-blue-500/40';
      default: return 'from-blue-500/20 to-blue-600/20 border-blue-500/40';
    }
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-lg z-50"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            <div className="bg-gradient-to-br from-blue-950/95 to-slate-900/95 backdrop-blur-xl rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-blue-500/20 bg-white/5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    🎯 Sélection Tactique
                  </h2>
                  <p className="text-gray-400 text-sm mt-1">Choisissez la formation adaptée à votre stratégie</p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.values(FORMATIONS).map((formation, idx) => {
                  const isActive = currentFormation?.id === formation.id;
                  return (
                    <motion.button
                      key={formation.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onSelect(formation);
                        onClose();
                      }}
                      className={`relative p-5 rounded-xl text-left transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${getStyleColor(formation.style)} border-2 border-blue-500/60`
                          : 'bg-white/5 border border-white/15 hover:border-blue-500/40 hover:bg-white/10'
                      }`}
                    >
                      {isActive && (
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-glow-blue"
                        />
                      )}
                      
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-3xl">{formation.icon}</span>
                            <span className="font-bold text-white text-lg">{formation.name}</span>
                          </div>
                          <p className="text-xs text-gray-400 max-w-[200px]">{formation.description}</p>
                        </div>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/10 text-xs">
                          {getStyleIcon(formation.style)}
                          <span className="text-gray-300">{formation.style}</span>
                        </div>
                      </div>
                      
                      <div className="relative h-20 bg-gradient-to-br from-blue-900/50 to-slate-800/50 rounded-lg mt-3 overflow-hidden border border-white/10">
                        <div className="absolute inset-0 flex items-center justify-around px-3">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 shadow-lg" />
                          <div className="flex gap-1.5">
                            {formation.positions.defenders.map((_, i) => (
                              <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-blue-500" />
                            ))}
                          </div>
                          <div className="flex gap-1.5">
                            {formation.positions.midfielders.map((_, i) => (
                              <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-300 to-blue-400" />
                            ))}
                          </div>
                          <div className="flex gap-1.5">
                            {formation.positions.forwards.map((_, i) => (
                              <div key={i} className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/15">
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-400">Attaque</span>
                            <span className="text-white font-bold">{formation.attackPower}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500" style={{ width: `${formation.attackPower}%` }} />
                          </div>
                        </div>
                        <div className="w-4" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-gray-400">Défense</span>
                            <span className="text-white font-bold">{formation.defensePower}%</span>
                          </div>
                          <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500" style={{ width: `${formation.defensePower}%` }} />
                          </div>
                        </div>
                      </div>
                      
                      {!isActive && (
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ChevronRight className="w-5 h-5 text-blue-400" />
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
              
              <div className="p-5 border-t border-blue-500/20 bg-white/5">
                <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-2">
                  <span className="text-blue-400">💡</span> Chaque formation offre un style de jeu unique
                  <span className="text-blue-400">⚡</span> Adaptez votre stratégie à votre adversaire
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FormationModal;