'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';
import { ArrowLeft, Zap, Shield, Swords } from 'lucide-react';
import Link from 'next/link';
import FormationModal from '../components/FormationModal';
import PlayerModal from '../components/PlayerModal';
import FloatingButton from '../components/FloatingButton';
import { FORMATIONS } from '../data/formations';

export default function TerrainPage() {
  const [currentFormation, setCurrentFormation] = useState(FORMATIONS["4-3-3"]);
  const [isFormationModalOpen, setIsFormationModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  // Les 11 joueurs - COULEURS BLEUES UNIQUEMENT
  const teamPlayers = [
    // Gardien - Bleu très foncé
    { id: 1, name: "Thibaut Courtois", number: 1, position: "GK", role: "Gardien", goals: 0, assists: 0, rating: 4.9, nationality: "🇧🇪", age: 31, background: "bg-gradient-to-br from-blue-800 to-blue-950" },
    // Défenseurs - Bleu foncé
    { id: 2, name: "Dani Carvajal", number: 2, position: "RB", role: "Défenseur", goals: 1, assists: 3, rating: 4.7, nationality: "🇪🇸", age: 32, background: "bg-gradient-to-br from-blue-700 to-blue-900" },
    { id: 3, name: "Antonio Rüdiger", number: 22, position: "CB", role: "Défenseur", goals: 2, assists: 1, rating: 4.8, nationality: "🇩🇪", age: 30, background: "bg-gradient-to-br from-blue-700 to-blue-900" },
    { id: 4, name: "David Alaba", number: 4, position: "CB", role: "Défenseur", goals: 2, assists: 3, rating: 4.8, nationality: "🇦🇹", age: 31, background: "bg-gradient-to-br from-blue-700 to-blue-900" },
    { id: 5, name: "Ferland Mendy", number: 23, position: "LB", role: "Défenseur", goals: 0, assists: 2, rating: 4.6, nationality: "🇫🇷", age: 28, background: "bg-gradient-to-br from-blue-700 to-blue-900" },
    // Milieux - Bleu moyen
    { id: 6, name: "Eduardo Camavinga", number: 12, position: "CDM", role: "Milieu", goals: 2, assists: 3, rating: 4.7, nationality: "🇫🇷", age: 21, background: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { id: 7, name: "Federico Valverde", number: 15, position: "CM", role: "Milieu", goals: 6, assists: 5, rating: 4.8, nationality: "🇺🇾", age: 25, background: "bg-gradient-to-br from-blue-600 to-blue-800" },
    { id: 8, name: "Jude Bellingham", number: 5, position: "CAM", role: "Milieu", goals: 20, assists: 9, rating: 4.9, nationality: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", age: 20, background: "bg-gradient-to-br from-blue-600 to-blue-800" },
    // Attaquants - Bleu clair
    { id: 9, name: "Vinícius Jr", number: 7, position: "LW", role: "Attaquant", goals: 18, assists: 8, rating: 4.8, nationality: "🇧🇷", age: 23, background: "bg-gradient-to-br from-blue-500 to-blue-700" },
    { id: 10, name: "Rodrygo", number: 11, position: "RW", role: "Attaquant", goals: 13, assists: 7, rating: 4.7, nationality: "🇧🇷", age: 23, background: "bg-gradient-to-br from-blue-500 to-blue-700" },
    { id: 11, name: "Joselu", number: 14, position: "ST", role: "Attaquant", goals: 12, assists: 3, rating: 4.6, nationality: "🇪🇸", age: 33, background: "bg-gradient-to-br from-blue-500 to-blue-700" }
  ];

  const getPositionsByFormation = (formationId) => {
    const positions = {
      "4-3-3": {
        goalkeeper: [{ x: 50, y: 88 }],
        defenders: [
          { x: 15, y: 76 }, { x: 35, y: 78 }, { x: 65, y: 78 }, { x: 85, y: 76 }
        ],
        midfielders: [
          { x: 35, y: 62 }, { x: 50, y: 58 }, { x: 65, y: 54 }
        ],
        forwards: [
          { x: 20, y: 40 }, { x: 50, y: 38 }, { x: 80, y: 40 }
        ]
      },
      "4-4-2": {
        goalkeeper: [{ x: 50, y: 88 }],
        defenders: [
          { x: 15, y: 76 }, { x: 35, y: 78 }, { x: 65, y: 78 }, { x: 85, y: 76 }
        ],
        midfielders: [
          { x: 15, y: 60 }, { x: 38, y: 62 }, { x: 62, y: 62 }, { x: 85, y: 60 }
        ],
        forwards: [
          { x: 35, y: 42 }, { x: 65, y: 42 }
        ]
      },
      "3-5-2": {
        goalkeeper: [{ x: 50, y: 88 }],
        defenders: [
          { x: 30, y: 78 }, { x: 50, y: 78 }, { x: 70, y: 78 }
        ],
        midfielders: [
          { x: 15, y: 65 }, { x: 35, y: 62 }, { x: 50, y: 58 }, { x: 65, y: 62 }, { x: 85, y: 65 }
        ],
        forwards: [
          { x: 35, y: 42 }, { x: 65, y: 42 }
        ]
      },
      "5-4-1": {
        goalkeeper: [{ x: 50, y: 88 }],
        defenders: [
          { x: 12, y: 80 }, { x: 28, y: 78 }, { x: 50, y: 76 }, { x: 72, y: 78 }, { x: 88, y: 80 }
        ],
        midfielders: [
          { x: 25, y: 62 }, { x: 45, y: 60 }, { x: 65, y: 60 }, { x: 80, y: 62 }
        ],
        forwards: [
          { x: 50, y: 42 }
        ]
      },
      "4-2-3-1": {
        goalkeeper: [{ x: 50, y: 88 }],
        defenders: [
          { x: 15, y: 76 }, { x: 35, y: 78 }, { x: 65, y: 78 }, { x: 85, y: 76 }
        ],
        midfielders: [
          { x: 35, y: 65 }, { x: 65, y: 65 }, { x: 22, y: 52 }, { x: 50, y: 50 }, { x: 78, y: 52 }
        ],
        forwards: [
          { x: 50, y: 38 }
        ]
      }
    };
    return positions[formationId] || positions["4-3-3"];
  };

  const getPositionedPlayers = () => {
    const formationPositions = getPositionsByFormation(currentFormation.id);
    const positioned = [];

    const goalkeeper = teamPlayers.find(p => p.position === "GK");
    if (goalkeeper && formationPositions.goalkeeper[0]) {
      positioned.push({ player: goalkeeper, pos: formationPositions.goalkeeper[0] });
    }

    const defendersList = teamPlayers.filter(p => ["LB", "CB", "RB"].includes(p.position));
    formationPositions.defenders.forEach((pos, idx) => {
      if (defendersList[idx]) positioned.push({ player: defendersList[idx], pos });
    });

    const midfieldersList = teamPlayers.filter(p => ["CDM", "CM", "CAM"].includes(p.position));
    formationPositions.midfielders.forEach((pos, idx) => {
      if (midfieldersList[idx]) positioned.push({ player: midfieldersList[idx], pos });
    });

    const forwardsList = teamPlayers.filter(p => ["LW", "ST", "RW"].includes(p.position));
    formationPositions.forwards.forEach((pos, idx) => {
      if (forwardsList[idx]) positioned.push({ player: forwardsList[idx], pos });
    });

    return positioned;
  };

  const [positionedPlayers, setPositionedPlayers] = useState(getPositionedPlayers());

  useEffect(() => {
    const newPositions = getPositionedPlayers();
    setPositionedPlayers(newPositions);
    console.log(`✅ Formation ${currentFormation.name} : ${newPositions.length} joueurs`);
  }, [currentFormation]);

  const handleFormationChange = (formation) => {
    setIsChanging(true);
    setCurrentFormation(formation);
    toast.success(`${formation.icon} ${formation.name} - ${formation.description}`, {
      duration: 2500,
      position: 'top-right',
      style: { 
        background: '#0f172a', 
        color: '#fff', 
        border: '1px solid #3b82f6',
      }
    });
    setTimeout(() => setIsChanging(false), 400);
  };
  
  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
  };
  
  const closePlayerModal = () => {
    setSelectedPlayer(null);
  };
  
  const getFormationIcon = () => {
    switch(currentFormation.id) {
      case "4-3-3": return <Swords className="w-4 h-4 text-blue-400" />;
      case "4-4-2": return <Shield className="w-4 h-4 text-blue-400" />;
      case "3-5-2": return <Zap className="w-4 h-4 text-blue-400" />;
      default: return <Shield className="w-4 h-4 text-blue-400" />;
    }
  };
  
  return (
    <div className="relative min-h-screen pt-20 pb-8 px-4 overflow-x-hidden">
      <Toaster position="top-right" />
      
      {/* Background - UNIQUEMENT BLEU/NOIR */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950" />
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
            >
              <ArrowLeft className="w-5 h-5" />
              Retour
            </motion.button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Real Madrid - Santiago Bernabéu
            </h1>
            <p className="text-blue-400/60 text-xs mt-1">⚽ 11 titulaires sur le terrain</p>
          </motion.div>
          
          <div className="w-24" />
        </div>
        
        {/* Badge de formation - BLEU */}
        <motion.div
          key={currentFormation.id}
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 backdrop-blur-sm">
            {getFormationIcon()}
            <span className="text-blue-400 font-semibold text-sm">FORMATION</span>
            <span className="text-white font-bold text-lg">{currentFormation.name}</span>
            <span className="text-gray-400 text-xs">({currentFormation.style})</span>
            <div className="w-px h-4 bg-white/20 mx-1" />
            <span className="text-blue-400 text-xs font-mono">11 JOUEURS</span>
          </div>
        </motion.div>
        
        {/* Terrain */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
          style={{ aspectRatio: "3/4" }}
        >
          {/* Fond du terrain - VERT+Bleu */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-800 to-blue-900/80">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(59,130,246,0.05)_10px,rgba(59,130,246,0.05)_20px)]" />
          </div>
          
          {/* Lignes du terrain - BLANCHES */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <rect x="2" y="2" width="96" height="96" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8"/>
            <line x1="2" y1="50" x2="98" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="4,4"/>
            <circle cx="50" cy="50" r="5" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.6"/>
            <rect x="2" y="70" width="28" height="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6"/>
            <rect x="70" y="70" width="28" height="28" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="0.6"/>
          </svg>
          
          {/* Overlay d'animation */}
          {isChanging && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6, repeat: Infinity }}
                className="w-12 h-12 border-3 border-blue-500 border-t-transparent rounded-full"
              />
            </motion.div>
          )}
          
          {/* Effet de lumière */}
          <motion.div
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"
          />
          
          {/* Placement des 11 joueurs */}
          <AnimatePresence mode="wait">
            {!isChanging && positionedPlayers.map((item, idx) => (
              item.player && (
                <motion.div
                  key={`${currentFormation.id}-${item.player.id}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 25,
                    delay: idx * 0.03
                  }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${item.pos.x}%`, top: `${item.pos.y}%` }}
                >
                  <PlayerIcon 
                    player={item.player} 
                    onClick={() => handlePlayerClick(item.player)}
                  />
                </motion.div>
              )
            ))}
          </AnimatePresence>
          
          {/* Badge 11 joueurs - BLEU */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-blue-500/30">
            <span className="text-blue-400 text-xs font-bold flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              {positionedPlayers.length}/11 TITULAIRES
            </span>
          </div>
          
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
            <div className="text-white/20 text-[10px] tracking-[0.2em] font-bold uppercase">Real Madrid CF</div>
          </div>
        </motion.div>
        
        {/* Légende - UNIQUEMENT BLEU/BLANC */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-blue-500/20"
        >
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-800" />
              <span className="text-gray-300">Gardien</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <span className="text-gray-300">Défenseurs</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span className="text-gray-300">Milieux</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
              <span className="text-gray-300">Attaquants</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-1">
              <span className="text-blue-400 text-[10px] font-bold">✓</span>
              <span className="text-gray-500 text-[10px]">{currentFormation.name} : 11 joueurs</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <FloatingButton onClick={() => setIsFormationModalOpen(true)} />
      
      <FormationModal
        isOpen={isFormationModalOpen}
        onClose={() => setIsFormationModalOpen(false)}
        onSelect={handleFormationChange}
        currentFormation={currentFormation}
      />
      
      <PlayerModal
        isOpen={!!selectedPlayer}
        player={selectedPlayer}
        onClose={closePlayerModal}
      />
    </div>
  );
}

// Composant PlayerIcon - COULEURS BLEUES
function PlayerIcon({ player, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  
  if (!player) return null;
  
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative cursor-pointer z-20"
    >
      <motion.div
        animate={{ scale: isHovered ? 1.3 : 1, opacity: isHovered ? 0.4 : 0 }}
        className="absolute inset-0 bg-blue-400 rounded-full blur-xl"
      />
      
      <div className={`relative w-11 h-11 md:w-13 md:h-13 rounded-full ${player.background} flex items-center justify-center shadow-lg transition-all duration-300 border-2 border-white/30`}
        style={{ boxShadow: isHovered ? '0 0 15px rgba(59, 130, 246, 0.6)' : '0 4px 10px rgba(0,0,0,0.3)' }}
      >
        <span className="text-white font-bold text-sm md:text-base">
          {player.number}
        </span>
      </div>
      
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 whitespace-nowrap">
        <div className={`px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-white text-[10px] md:text-xs font-medium transition-all duration-300 ${isHovered ? 'border border-blue-500/50' : ''}`}>
          {player.name.split(' ')[0]}
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-50 pointer-events-none"
      >
        <div className="bg-black/90 backdrop-blur-md rounded-lg px-3 py-1.5 border border-blue-500/40 shadow-xl whitespace-nowrap">
          <div className="text-white font-semibold text-xs">{player.name}</div>
          <div className="text-blue-400 text-[10px]">⚽ {player.goals} buts | 🎯 {player.assists} passes</div>
        </div>
      </motion.div>
    </motion.div>
  );
}