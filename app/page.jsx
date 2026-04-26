'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Trophy, Users, Target, Activity, Zap, Shield, Star, ChevronRight } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [counters, setCounters] = useState({ players: 0, goals: 0, trophies: 0 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  useEffect(() => {
    const targets = { players: 1250, goals: 3420, trophies: 156 };
    const duration = 2500;
    const startTime = performance.now();
    
    const updateCounters = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
      
      setCounters({
        players: Math.floor(easeProgress * targets.players),
        goals: Math.floor(easeProgress * targets.goals),
        trophies: Math.floor(easeProgress * targets.trophies)
      });
      
      if (progress < 1) requestAnimationFrame(updateCounters);
    };
    
    requestAnimationFrame(updateCounters);
  }, []);

  const features = [
    { icon: Trophy, title: "Gestion Tactique", desc: "Créez et personnalisez vos formations", color: "from-blue-400 to-blue-600", stat: "6 formations pro" },
    { icon: Users, title: "Joueurs Elite", desc: "Base de données de joueurs professionnels", color: "from-blue-500 to-blue-700", stat: "50+ joueurs" },
    { icon: Target, title: "Statistiques", desc: "Analyses détaillées en temps réel", color: "from-blue-600 to-blue-800", stat: "Analyses pro" },
    { icon: Activity, title: "Animations 3D", desc: "Expérience immersive et fluide", color: "from-blue-400 to-indigo-600", stat: "Performance max" }
  ];

  const stats = [
    { value: counters.players, label: "Joueurs Pro", suffix: "+", icon: Users },
    { value: counters.goals, label: "Buts Marqués", suffix: "k+", icon: Target },
    { value: counters.trophies, label: "Trophées", suffix: "", icon: Trophy }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      
      {/* Background avec effet de particules animées */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-blue-950 via-slate-900 to-blue-950" />
      
      {/* Effet de grille lumineuse */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      
      {/* Bulles d'arrière-plan animées */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{ 
              y: [null, -100, -200],
              x: [null, Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0, 0.3, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm"
          />
        ))}
      </div>
      
      {/* Hero Section avec effet parallaxe */}
      <motion.section 
        style={{ opacity, scale, y }}
        className="relative min-h-screen flex items-center justify-center pt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Badge animé */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-blue-500/40">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
                <span className="text-sm text-white font-medium">Système Professionnel v3.0</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              </div>
            </div>
          </motion.div>
          
          {/* Titre principal avec effet de texte animé */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Football Team
              </span>
              <br />
              <span className="text-white relative inline-block">
                Manager Pro
                <motion.div
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"
                />
              </span>
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Gérez votre équipe comme un véritable professionnel. Créez des tactiques,
            analysez les performances et dominez la compétition.
          </motion.p>
          
          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mb-20"
          >
            <Link href="/terrain">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg overflow-hidden shadow-xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Commencer l'aventure <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Regarder la démo
            </motion.button>
          </motion.div>
          
          {/* Statistiques animées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
      
      {/* Section Fonctionnalités */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Fonctionnalités
              </span>
              <span className="text-white"> Premium</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Découvrez tous les outils pour manager votre équipe comme un professionnel
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 shadow-lg shadow-blue-500/20`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 mb-3">{feature.desc}</p>
                    <div className="text-sm text-blue-400 font-semibold flex items-center gap-1">
                      {feature.stat} <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Section CTA avec effet 3D */}
      <section className="relative py-24">
        <div className="max-w-5xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/50 to-slate-900/50 backdrop-blur-xl border border-blue-500/30 p-12 shadow-2xl"
          >
            {/* Effet de brillance */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl" />
            
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="inline-block"
            >
              <Zap className="w-20 h-20 text-blue-400 mx-auto mb-6" />
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Prêt à dominer le terrain ?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
              Rejoignez les meilleurs managers et créez votre équipe de légende
            </p>
            
            <Link href="/terrain">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(59,130,246,0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold text-lg shadow-xl"
              >
                Commencer maintenant
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Style supplémentaire pour l'animation du gradient */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}