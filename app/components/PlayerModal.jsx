'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, Target, Star, Calendar, MapPin, Activity, Zap, Heart, Shield, TrendingUp } from 'lucide-react';

const PlayerModal = ({ isOpen, player, onClose }) => {
  if (!isOpen || !player) return null;
  
  const efficiency = Math.round((player.goals / (player.goals + player.assists)) * 100) || 0;
  const ratingStars = Math.floor(player.rating);
  const hasHalfStar = player.rating % 1 >= 0.5;
  
  // Statistiques radar simulées
  const stats = player.stats || {
    speed: Math.floor(Math.random() * 30) + 70,
    shooting: Math.floor(Math.random() * 30) + 70,
    passing: Math.floor(Math.random() * 30) + 70,
    dribbling: Math.floor(Math.random() * 30) + 70,
    defense: Math.floor(Math.random() * 30) + 70,
    physical: Math.floor(Math.random() * 30) + 70
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay avec effet de flou */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />
          
          {/* Modal principal avec effet 3D */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 100, rotateX: -30 }}
            animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 100, rotateX: 30 }}
            transition={{ 
              type: "spring", 
              damping: 18, 
              stiffness: 280,
              duration: 0.5
            }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[95vw] max-w-lg max-h-[90vh] overflow-y-auto"
            style={{ perspective: '1000px' }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/20 shadow-2xl">
              
              {/* Header avec image de fond du joueur */}
              <motion.div 
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={`relative h-44 ${player.background} p-6 overflow-hidden`}
              >
                {/* Effet de particules */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
                <motion.div
                  animate={{ 
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"
                />
                
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-300 text-white hover:scale-110 hover:rotate-90"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {/* Numéro du joueur en grand */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-8 left-6"
                >
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-lg border-2 border-white/30 flex items-center justify-center shadow-2xl">
                    <span className="text-white font-black text-4xl drop-shadow-lg">{player.number}</span>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Contenu de la modal */}
              <div className="p-6 pt-14">
                
                {/* Nom et informations générales */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center mb-6"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    {player.name}
                  </h3>
                  <div className="flex items-center justify-center gap-3 text-gray-400 text-sm flex-wrap">
                    <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
                      <Calendar className="w-3 h-3" />
                      {player.age} ans
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
                      <MapPin className="w-3 h-3" />
                      {player.nationality}
                    </span>
                    <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full">
                      <Shield className="w-3 h-3" />
                      {player.club}
                    </span>
                  </div>
                </motion.div>
                
                {/* Étoiles de note */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex justify-center gap-1 mb-6"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < ratingStars 
                          ? 'text-yellow-400 fill-yellow-400' 
                          : i === ratingStars && hasHalfStar 
                            ? 'text-yellow-400' 
                            : 'text-gray-600'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-white font-bold">({player.rating})</span>
                </motion.div>
                
                {/* Statistiques principales - Cartes 3D */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-3 gap-3 mb-6"
                >
                  {[
                    { icon: Target, label: "Buts", value: player.goals, color: "from-green-500 to-emerald-600" },
                    { icon: Award, label: "Passes", value: player.assists, color: "from-blue-500 to-cyan-600" },
                    { icon: TrendingUp, label: "Efficacité", value: `${efficiency}%`, color: "from-purple-500 to-pink-600" }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`text-center p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}
                    >
                      <stat.icon className="w-5 h-5 text-white/80 mx-auto mb-1" />
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-[10px] text-white/70 uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Radar de compétences */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-white">Compétences clés</span>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(stats).map(([key, value], idx) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + idx * 0.05 }}
                      >
                        <div className="flex justify-between text-xs mb-0.5">
                          <span className="text-gray-400 capitalize">{key}</span>
                          <span className="text-green-400 font-bold">{value}</span>
                        </div>
                        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ delay: 0.8 + idx * 0.05, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Badge de position */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 mb-4"
                >
                  <span className="text-gray-400 text-sm">Position</span>
                  <span className="px-3 py-1 rounded-lg bg-green-500/20 text-green-400 font-semibold text-sm border border-green-500/30">
                    {player.position}
                  </span>
                </motion.div>
                
                {/* Bouton d'action */}
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-base shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                >
                  Fermer
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PlayerModal;