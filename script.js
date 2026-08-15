const SECRET_RULES = {

  blockedPlayersByCaptain: {
    "João Gui": ["Gordo", "Allan"]
  },

  // 🔒 Estes jogadores ficam escondidos até a Equipe 2.
  reservedPlayersByTeam: {
    2: [
      "JP",
      "Moises",
      "Ygor",
      "JV",
      "Victor",
      "Davi"
    ]
  },

  // 🔒 Confrontos secretos da Equipe 2.
  specialPairsByTeam: {
    2: [
      ["Ygor", "Moises"],
      ["Victor", "Davi"],
      ["JV", "JP"]
    ]
  },

  specialLastOptionsByTeam: {
    2: []
  },

  // 🔒 Equipe 6 — jogadores totalmente fixos.
  fixedTeam6Players: [
    "Allan",
    "Murillo",
    "João Gui",
    "Bellato",
    "Vinao"
  ]
};
   


