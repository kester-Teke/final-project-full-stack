export const FORMATIONS = {
  "4-4-2": {
    id: "4-4-2",
    name: "4-4-2 Classique",
    description: "Équilibré, parfait pour toutes les situations",
    icon: "⚖️",
    difficulty: "Débutant",
    style: "Balanced",
    attackPower: 75,
    defensePower: 80,
    positions: {
      goalkeeper: { x: 50, y: 85 },
      defenders: [
        { id: "LB", x: 12, y: 68, label: "Latéral Gauche", position: "LB" },
        { id: "CB1", x: 35, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "CB2", x: 65, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "RB", x: 88, y: 68, label: "Latéral Droit", position: "RB" }
      ],
      midfielders: [
        { id: "LM", x: 15, y: 48, label: "Milieu Gauche", position: "LM" },
        { id: "CM1", x: 38, y: 48, label: "Milieu Central", position: "CM" },
        { id: "CM2", x: 62, y: 48, label: "Milieu Central", position: "CM" },
        { id: "RM", x: 85, y: 48, label: "Milieu Droit", position: "RM" }
      ],
      forwards: [
        { id: "ST1", x: 38, y: 25, label: "Attaquant", position: "ST" },
        { id: "ST2", x: 62, y: 25, label: "Attaquant", position: "ST" }
      ]
    }
  },
  
  "4-3-3": {
    id: "4-3-3",
    name: "4-3-3 Attaquant",
    description: "Jeu offensif, pressing haut intense",
    icon: "⚡",
    difficulty: "Intermédiaire",
    style: "Attacking",
    attackPower: 92,
    defensePower: 65,
    positions: {
      goalkeeper: { x: 50, y: 85 },
      defenders: [
        { id: "LB", x: 12, y: 68, label: "Latéral Gauche", position: "LB" },
        { id: "CB1", x: 35, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "CB2", x: 65, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "RB", x: 88, y: 68, label: "Latéral Droit", position: "RB" }
      ],
      midfielders: [
        { id: "CDM", x: 50, y: 60, label: "Milieu Défensif", position: "CDM" },
        { id: "CM1", x: 30, y: 48, label: "Milieu Central", position: "CM" },
        { id: "CM2", x: 70, y: 48, label: "Milieu Central", position: "CM" }
      ],
      forwards: [
        { id: "LW", x: 15, y: 25, label: "Ailier Gauche", position: "LW" },
        { id: "ST", x: 50, y: 22, label: "Avant-centre", position: "ST" },
        { id: "RW", x: 85, y: 25, label: "Ailier Droit", position: "RW" }
      ]
    }
  },
  
  "3-5-2": {
    id: "3-5-2",
    name: "3-5-2 Milieu",
    description: "Maîtrise totale du milieu de terrain",
    icon: "🎯",
    difficulty: "Expert",
    style: "Possession",
    attackPower: 78,
    defensePower: 82,
    positions: {
      goalkeeper: { x: 50, y: 85 },
      defenders: [
        { id: "CB1", x: 25, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "CB2", x: 50, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "CB3", x: 75, y: 68, label: "Défenseur Central", position: "CB" }
      ],
      midfielders: [
        { id: "LM", x: 10, y: 52, label: "Milieu Gauche", position: "LM" },
        { id: "CDM1", x: 32, y: 58, label: "Milieu Défensif", position: "CDM" },
        { id: "CDM2", x: 68, y: 58, label: "Milieu Défensif", position: "CDM" },
        { id: "RM", x: 90, y: 52, label: "Milieu Droit", position: "RM" },
        { id: "CAM", x: 50, y: 40, label: "Milieu Offensif", position: "CAM" }
      ],
      forwards: [
        { id: "ST1", x: 38, y: 22, label: "Attaquant", position: "ST" },
        { id: "ST2", x: 62, y: 22, label: "Attaquant", position: "ST" }
      ]
    }
  },
  
  "5-4-1": {
    id: "5-4-1",
    name: "5-4-1 Défensif",
    description: "Bloc bas, très difficile à battre",
    icon: "🛡️",
    difficulty: "Intermédiaire",
    style: "Defensive",
    attackPower: 55,
    defensePower: 95,
    positions: {
      goalkeeper: { x: 50, y: 85 },
      defenders: [
        { id: "LB", x: 10, y: 72, label: "Latéral Gauche", position: "LB" },
        { id: "CB1", x: 28, y: 72, label: "Défenseur Central", position: "CB" },
        { id: "CB2", x: 50, y: 72, label: "Libéro", position: "CB" },
        { id: "CB3", x: 72, y: 72, label: "Défenseur Central", position: "CB" },
        { id: "RB", x: 90, y: 72, label: "Latéral Droit", position: "RB" }
      ],
      midfielders: [
        { id: "LM", x: 20, y: 55, label: "Milieu Gauche", position: "LM" },
        { id: "CM1", x: 42, y: 55, label: "Milieu Central", position: "CM" },
        { id: "CM2", x: 58, y: 55, label: "Milieu Central", position: "CM" },
        { id: "RM", x: 80, y: 55, label: "Milieu Droit", position: "RM" }
      ],
      forwards: [
        { id: "ST", x: 50, y: 25, label: "Attaquant Solitaire", position: "ST" }
      ]
    }
  },
  
  "4-2-3-1": {
    id: "4-2-3-1",
    name: "4-2-3-1 Moderne",
    description: "Le système préféré des grandes équipes",
    icon: "⭐",
    difficulty: "Expert",
    style: "Modern",
    attackPower: 85,
    defensePower: 78,
    positions: {
      goalkeeper: { x: 50, y: 85 },
      defenders: [
        { id: "LB", x: 12, y: 68, label: "Latéral Gauche", position: "LB" },
        { id: "CB1", x: 35, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "CB2", x: 65, y: 68, label: "Défenseur Central", position: "CB" },
        { id: "RB", x: 88, y: 68, label: "Latéral Droit", position: "RB" }
      ],
      midfielders: [
        { id: "CDM1", x: 35, y: 60, label: "Milieu Défensif", position: "CDM" },
        { id: "CDM2", x: 65, y: 60, label: "Milieu Défensif", position: "CDM" },
        { id: "CAM", x: 50, y: 45, label: "Milieu Offensif", position: "CAM" }
      ],
      forwards: [
        { id: "LW", x: 18, y: 30, label: "Ailier Gauche", position: "LW" },
        { id: "ST", x: 50, y: 25, label: "Avant-centre", position: "ST" },
        { id: "RW", x: 82, y: 30, label: "Ailier Droit", position: "RW" }
      ]
    }
  }
};