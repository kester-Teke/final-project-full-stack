'use client';

import { motion } from 'framer-motion';
import PlayerIcon from './PlayerIcon';

const TacticalField = ({ players, formation, onPlayerClick }) => {
  const { positions } = formation;
  
  const fieldPlayers = [
    { role: 'goalkeeper', data: positions.goalkeeper, player: players.goalkeeper?.[0] },
    ...positions.defenders.map((pos, idx) => ({ role: 'defender', data: pos, player: players.defenders?.[idx] })),
    ...positions.midfielders.map((pos, idx) => ({ role: 'midfielder', data: pos, player: players.midfielders?.[idx] })),
    ...positions.forwards.map((pos, idx) => ({ role: 'forward', data: pos, player: players.forwards?.[idx] }))
  ].filter(item => item.player);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Terrain avec gradient amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-green-700 to-emerald-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent" />
      </div>
      
      {/* Lignes du terrain améliorées */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <rect x="2" y="2" width="96" height="96" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"/>
        <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeDasharray="3,3"/>
        <circle cx="50" cy="50" r="8" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"/>
        <rect x="2" y="35" width="15" height="30" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"/>
        <rect x="83" y="35" width="15" height="30" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="0.8"/>
        <circle cx="12" cy="50" r="0.5" fill="rgba(255,255,255,0.6)"/>
        <circle cx="88" cy="50" r="0.5" fill="rgba(255,255,255,0.6)"/>
      </svg>
      
      {/* Effet de lumière dynamique */}
      <motion.div
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 w-1/2 pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
      
      {/* Placement des joueurs */}
      {fieldPlayers.map((item, idx) => (
        <div
          key={idx}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${item.data.x}%`, top: `${item.data.y}%` }}
        >
          <PlayerIcon
            player={item.player}
            position={item.data}
            onClick={() => onPlayerClick(item.player)}
            delay={idx * 0.05}
          />
        </div>
      ))}
      
      {/* Effet de lueur sur le terrain */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute top-1/4 left-1/4 w-40 h-40 bg-green-400/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none"
      />
    </motion.div>
  );
};

export default TacticalField;