'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Award, Target, Star } from 'lucide-react';

const PlayerIcon = ({ player, position, onClick, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  if (!player) return null;
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -180 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 20,
        delay,
        rotate: { duration: 0.5 }
      }}
      whileHover={{ scale: 1.25, z: 20 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer group"
      style={{ filter: 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.2))' }}
    >
      {/* Effet de glow avancé */}
      <motion.div
        animate={{
          scale: isHovered ? 1.4 : 1,
          opacity: isHovered ? 0.9 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl"
      />
      
      {/* Anneaux pulsants */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.3, 1] : 1,
          opacity: isHovered ? [0.6, 0, 0.6] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full border-2 border-green-400"
      />
      
      {/* Deuxième anneau */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.5, 1] : 1,
          opacity: isHovered ? [0.4, 0, 0.4] : 0,
        }}
        transition={{
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          delay: 0.3,
          ease: "easeInOut"
        }}
        className="absolute inset-0 rounded-full border border-green-300"
      />
      
      {/* Icône du joueur avec effet 3D */}
      <motion.div 
        className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full ${player.background} flex items-center justify-center shadow-2xl transition-all duration-300`}
        animate={{
          boxShadow: isHovered ? '0 0 25px rgba(34, 197, 94, 0.6)' : '0 10px 20px rgba(0, 0, 0, 0.3)'
        }}
      >
        <div className="relative">
          <span className="text-white font-bold text-base md:text-lg z-10 relative">
            {player.number}
          </span>
          {isHovered && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
            />
          )}
        </div>
      </motion.div>
      
      {/* Nom du joueur avec animation */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap"
      >
        <motion.div 
          animate={{
            boxShadow: isHovered ? '0 0 15px rgba(34, 197, 94, 0.4)' : 'none'
          }}
          className="px-2.5 py-1 rounded-lg bg-black/90 backdrop-blur-md border border-white/15 text-white text-xs font-medium transition-all duration-300"
        >
          {player.name}
        </motion.div>
      </motion.div>
      
      {/* Tooltip amélioré */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ 
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          y: isHovered ? 0 : 10,
          pointerEvents: isHovered ? 'auto' : 'none'
        }}
        transition={{ duration: 0.25, type: "spring", stiffness: 300 }}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 min-w-[180px]"
      >
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-2xl">
          <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/15">
            <div className={`w-10 h-10 rounded-full ${player.background} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
              {player.number}
            </div>
            <div>
              <div className="text-white font-bold text-sm">{player.name}</div>
              <div className="text-xs text-gray-400 flex items-center gap-1">
                <span>{player.nationality}</span>
                <span>•</span>
                <span>{player.age} ans</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="text-center">
              <Target className="w-3.5 h-3.5 text-green-400 mx-auto mb-0.5" />
              <div className="text-white font-bold text-sm">{player.goals}</div>
              <div className="text-gray-500 text-[10px]">Buts</div>
            </div>
            <div className="text-center">
              <Award className="w-3.5 h-3.5 text-blue-400 mx-auto mb-0.5" />
              <div className="text-white font-bold text-sm">{player.assists}</div>
              <div className="text-gray-500 text-[10px]">Passes</div>
            </div>
            <div className="text-center">
              <Star className="w-3.5 h-3.5 text-yellow-400 mx-auto mb-0.5" />
              <div className="text-white font-bold text-sm">{player.rating}</div>
              <div className="text-gray-500 text-[10px]">Note</div>
            </div>
          </div>
          {player.stats && (
            <div className="pt-2 border-t border-white/15">
              <div className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Performance</div>
              <div className="flex items-center gap-1">
                <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" style={{ width: `${Math.round((player.goals / (player.goals + player.assists)) * 100)}%` }} />
                </div>
                <span className="text-white text-xs font-bold">{Math.round((player.goals / (player.goals + player.assists)) * 100)}%</span>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlayerIcon;