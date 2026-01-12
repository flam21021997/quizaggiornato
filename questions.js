const questions = [
  {
    id: 1,
    q: "Quale affermazione è corretta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 2,
    q: "Da quante fasi è caratterizzata la progettazione organizzativa",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 3,
    q: "Le Varibili strutturali si dividono in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 4,
    q: "Le Varibili contestuali si dividono in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 5,
    q: ""Per mantenere una vantaggio competitivo l'impresa"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 6,
    q: ""L'ambiente"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 7,
    q: "Le dimensioni della struttura organizzativa sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 8,
    q: "I livelli del modello di Mintzebrg sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 9,
    q: "La struttura multidivisionale e la struttura divisionale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 10,
    q: "La struttura funzionale è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 11,
    q: "La Pianificazione strategica è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 12,
    q: ""Il budget può essere modificato durante l'esercizio"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 13,
    q: "Il termine pianificazione e programmazione dal punto di vista temporale sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 14,
    q: ""In merito al piano strategico aziendale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 15,
    q: "Quale di queste affermazioni è vera",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 16,
    q: "La Balanced-Scorecard (BSC) è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 17,
    q: ""Il processo di Pianificazione strategica è di sostegno all'attività"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 18,
    q: ""La Pianificazione strategica serve al vertice politico dell'amministrazi one"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 19,
    q: "Il processo di Pianificazione strategica serve ai vertici amministrativi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 20,
    q: "Il provveditorato di un azienda sanitari ha come ruolo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 21,
    q: ""Con l'acronimo RUP cosa si indica"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 22,
    q: "Quali sono le nuove procedure di selezione del contraente introdotte a sistema",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 23,
    q: ""Continua l'affermazione"",
    correct: ""Gli affidamenti sotto soglia sono possibi li:",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 24,
    q: "Quali sono le soglie di rilevanza comunitaria",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 25,
    q: ""Che cos'è la So.ReSa"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 26,
    q: ""Cosa significa l'acronimo CIG"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 27,
    q: "Quali sono I principi generali che regolano le procedure di acquisizio ne",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 28,
    q: "Quale fra le seguenti affermazioni è corretta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 29,
    q: ""Un'impresa può superare il punto di pareggio"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 30,
    q: "Quale fra queste formule è corretta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 31,
    q: "Leggendo questa formula",
    correct: "RE = P*Q - (CVu*Q + CF) la determinazione della qu antità",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 32,
    q: "Ci sono tre modi per abbassare il BEP",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 33,
    q: "Quali sono i valori coinvolti nella determinazione del BEP",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 34,
    q: "Quale definizione è corretta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 35,
    q: "Quale fra le affermazioni è corretta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 36,
    q: "Contiuna il periodo in modo corretto……." la break -even analysis"…..",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 37,
    q: "Quale Definizone è coretta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 38,
    q: "Con il termine OUTCOMES si vuole indicare",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 39,
    q: "Quali sono le Fasi del controllo di gestione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 40,
    q: "Il sistema di contabilità direzionale si articola nei sottosistemi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 41,
    q: "La Previsione di bilancio si divide in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 42,
    q: ""Quale mese dell'anno è favorevole per stilare l'ipotetico bilancio successivo aziendale"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 43,
    q: "Quale affemazione è corretta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 44,
    q: "Cosa prevede la riforma costituzionale del titolo V",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 45,
    q: "Ai sensi della Legge Finanziaria anno 2005 n",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 46,
    q: "Il consenso informato",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 47,
    q: ""L'informazione"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 48,
    q: "Pergiorgio Welby",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 49,
    q: ""L'art. 1 della L. 219/2017 stabilisce che"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 50,
    q: ""L'art. 1 della L. 219/2017 stabilisce che"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 51,
    q: ""L'Art. 4 Disposizioni anticipate di trattamento stabilisce che"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 52,
    q: ""La Pianificazione condivisa delle cure prevista dall'Art. 5 della L. 21 9/2017 si realizza"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 53,
    q: "Esiste un nesso logico funzionale fra i principi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 54,
    q: "Il processo è definito come",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 55,
    q: "Dei processi si possono considerare",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 56,
    q: "Si possono distinguere due tipi di cambiamento dei processi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 57,
    q: "Si definiscono Processi professionali",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 58,
    q: "Si definisce Percorso assistenziale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 59,
    q: "Le pratiche "progressiste" o ad "alto rendimento" di HRM sono caratterizzate",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 60,
    q: "Secondo Levati",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 61,
    q: "Levati fa una distinzione tra",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 62,
    q: "Il Knowledge Management viene definito come",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 63,
    q: "Secondo la definizione di Ouchi la valutazione della performance consiste in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 64,
    q: "Per indicatore si intende",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 65,
    q: "Si deve a Donabedian la classificazione degli indicatori di qualità in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 66,
    q: "Nella scelta degli indicatori occorre tener presenti le seguenti considerazioni",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 67,
    q: ""E' possibile classificare le attività di valutazione sulla base di"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 68,
    q: "Le misure di qualità sono utilizzate principalmente per 3 scopi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 69,
    q: ""L'errore sistematico (o bias) rappresentato da"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 70,
    q: "La Valutazione e le policy prevede uno o più dei seguenti elementi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 71,
    q: "Quali sono i principali riferimenti normativi riferiti ai carichi di lavor o",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 72,
    q: "Esistono alcune specificità del processo e del prodotto sanitario",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 73,
    q: "Le aree più indagate per quel che concerne le criticità dei carichi di  lavoro in sanità sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 74,
    q: "Le attività di una unità operativa si possono classificare in 2 tipologie",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 75,
    q: "Ai fini della rilevazione delle attività sottoposte ad una unità",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 76,
    q: ""L'impegno connesso all'episodio di ricovero si può suddivider e in"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 77,
    q: "Il Knowledge Worker",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 78,
    q: "Il lavoro è diventato",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 79,
    q: "La motivazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 80,
    q: ""L'azienda"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 81,
    q: "Fattori che influenzano il processo di socializzazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 82,
    q: "La socializzazione anticipata",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 83,
    q: "La cultura",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 84,
    q: "Il disagio nelle organizzazioni",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 85,
    q: "I soggetti workaholic",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 86,
    q: "Il workaholism",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 87,
    q: "La comunicazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 88,
    q: "La relazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 89,
    q: "La metacomunicazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 90,
    q: "I requisiti di una buona relazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 91,
    q: ""L'ascolto attivo"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 92,
    q: "Il messaggio",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 93,
    q: "La relazione medico - paziente",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 94,
    q: "La Social Media Revolution",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 95,
    q: ""L'ECDC rileva che"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 96,
    q: ""L'ECDH"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 97,
    q: "Galimberti definisce il gruppo come",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 98,
    q: "Secondo la teoria di Lewin",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 99,
    q: "Il gruppo primario",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 100,
    q: "La dinamica di gruppo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 101,
    q: "La coesione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 102,
    q: "Un gruppo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 103,
    q: "I bisogni primari",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 104,
    q: "Per Bion",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 105,
    q: "Il gruppo di lavoro",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 106,
    q: "Il gruppo in assunto di base",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 107,
    q: "Quali sono i riferimenti legislativi del benessere organizzativo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 108,
    q: "Cosa si intende per "Benessere Organizzativo"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 109,
    q: "Che cosa si intende per "capitale fisico e capitale umano"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 110,
    q: ""Quando un'organizzazione si definisce in buona salute"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 111,
    q: "Cosa si intende per",
    correct: ""caratteristiche dell\'ambiente nel quale il lavoro si s volge":",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 112,
    q: "Cosa si intende per",
    correct: ""Clima relazionale franco e collaborativo":",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 113,
    q: "Da quali fattori viene definito il clima organizzativo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 114,
    q: "Quali sono le caratteristiche del benessere organizzativo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 115,
    q: "Quali competenze afferiscono alla motivazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 116,
    q: "Il mobbing",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 117,
    q: "Il mobbing è un fenomeno",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 118,
    q: "In casi di mobbing",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 119,
    q: "La malafede",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 120,
    q: "Il compromesso di identità",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 121,
    q: "Il comportamento del free-rider",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 122,
    q: "Il Broker",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 123,
    q: ""L'impostore"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 124,
    q: "Le vittime",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 125,
    q: "Il pettegolezzo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 126,
    q: "Al termine "Performance" possono essere assegnati almeno tre distinti sig nificati",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 127,
    q: "Una delle definizioni del Performance management lo identifica con",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 128,
    q: "Quanti sono i quesiti del Performance Management System (PMS) framework",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 129,
    q: ""Alcuni dei KPI maggiormente monitorati dalla BI nell'ambito sanitario sono"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 130,
    q: "Lo sviluppo del BSC nelle organizzazioni sanitarie richiede mediamente",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 131,
    q: "Gli attributi tipicamente associabili alla realtà delle organizzazioni sanitarie son o",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 132,
    q: "Gli indicatori solitamente associati alle aree - chiave di risultato f anno riferimento a",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 133,
    q: "Secondo la definizione di Ouchi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 134,
    q: ""Nella definizione dell'output è necessario chiarire"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 135,
    q: "La cura deve essere",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 136,
    q: ""Cosa indica l'acronimo PICO"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 137,
    q: "Cosa si intende per "EBP"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 138,
    q: "Che cosa si intende per "Banche dati bibliografiche"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 139,
    q: "Che cosa si intende per operatori booleani",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 140,
    q: "Quali sono le banche dati primarie",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 141,
    q: "Quali sono le sezioni di un articolo scientifico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 142,
    q: "Come può essere il campionamento non probabilistico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 143,
    q: "Cosa significa "studio in singolo cieco"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 144,
    q: ""Quali sono le fasi dell'EBN"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 145,
    q: "Come si classifica lualità degli studi primari",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 146,
    q: "Cosa si intende per "Governo Clinico"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 147,
    q: "Il governo clinico si fonda su",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 148,
    q: "Quali sono le dimensioni del governo clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 149,
    q: "Che cosa si intende per formazione continua in Sanità",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 150,
    q: "Cosa si intende per gestione del rischio clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 151,
    q: "Che cosa si intende per audit clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 152,
    q: ""Quali sono i passaggi dell'audit clinico"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 153,
    q: "Quali sono le misure di sistema importanti per la riduzione degli err ori in sanità",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 154,
    q: "Cosa si intende per comunicazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 155,
    q: "Cosa si intende per "Risk Management"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 156,
    q: ""Come si definisce l'errore in Sanità"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 157,
    q: "Come si classificano gli errori",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 158,
    q: "Come si definisce il rischio clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 159,
    q: "Quali sono gli ambiti di rischio nelle organizzazioni sanitarie",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 160,
    q: "Quali sono i metodi di analisi del rischio",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 161,
    q: "Cosa si intende per errore " Knowledge-based behaviour"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 162,
    q: "Secondo Reason",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 163,
    q: "Gli approcci reattivi maggiormente utilizzati comprendono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 164,
    q: "Quali sono le fasi di valutazione del rischio",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 165,
    q: "Cosa si intende per "gestione del rischio clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 166,
    q: "Quali sono gli errori dei processi cognitivi di controllo sui compo rtamenti umani",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 167,
    q: "Quali sono le fasi dei processi di gestione del rischio clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 168,
    q: "Cosa si intende per "Failure Modeand Effects Analysis"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 169,
    q: "Quali sono gli errori non intenzionali",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 170,
    q: "In cosa consiste la catena di una generazione di un evento avverso",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 171,
    q: "In quante fasi si sviluppa la gestione del rischio clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 172,
    q: ""Nell'ottica di ridurre gli errori è necessario"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 173,
    q: ""Quali caratteristiche dovrebbe avere l'UGR"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 174,
    q: "Cosa si intende per FMEA",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 175,
    q: "Le norme di riferimento per i DPI sono sia il D.Lgs. 81/08 che il D.L gs. 475/92",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 176,
    q: "In quante categorie possono essere suddivisi i DPI",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 177,
    q: "I DPI vanno utilizzati solo quando i rischi sono stati ridotti al minim o",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 178,
    q: "I DPI vengono scelti dal Datore di lavoro a sua completa discrezione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 179,
    q: "I dispositivi di protezione individuale devono essere marcati CE",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 180,
    q: "Esempio di costo diretto",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 181,
    q: "Rapporto tra costi indiretti e costi diretti",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 182,
    q: "La metodologia SHIELD si fonda sul concetto di",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 183,
    q: "Esempio di costo sociale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 184,
    q: "La riclassificazione dei costi per natura considera",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 185,
    q: "Le imprese che adottano la politica di prevenzione a rischio zero sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 186,
    q: "I costi sociali considerati nella metodologia SHIELD misurano il danno i nferto",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 187,
    q: "SHIELD consente a consuntivo di calcolare",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 188,
    q: "Il market failure determina i",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 189,
    q: "La capacità di stimare il livello di SSL dovrebbe essere competenza di",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 190,
    q: "La valutazione economica oltre ad evidenziare i benefici finanziari considera an che",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 191,
    q: "I metodi moderni per misurare il rendimento aziendale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 192,
    q: "Le analisi di costi-benefici",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 193,
    q: "Nella fase del reperimento dati c.d. fase 3 se possibile è importante",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 194,
    q: "Nella fase di valutazione e calcoli c.d. fase 4 la valutazione economica porta a",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 195,
    q: "L’indice ritorno degli investimenti",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 196,
    q: "Gli incentivi in ambito di SSL sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 197,
    q: "La strategia di Lisbona consiste",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 198,
    q: "Piccole e medie imprese",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 199,
    q: ""In base all'art. 25 del D.Lgs 81/2008",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 200,
    q: ""Secondo l'art.35 del D.Lgs 81/2008 devono essere presenti alla riun ione periodica"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 201,
    q: "La sorveglianza sanitaria (ex art.41 D.Lgs 81/08)",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 202,
    q: "Sono vietate",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 203,
    q: ""L'art.41 D.Lgs 81/08",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 204,
    q: "Il giudizio di idoneità alla mansione specifica",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 205,
    q: "Il D.Lgs 81/08 contempla i seguenti tipi di giudizi di idoneità",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 206,
    q: "In caso di inidoneità alla mansione specifica del lavoratore",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 207,
    q: "Il primo Codice di Etica per Operatori della Medicina del Lavoro è stato approvato nel",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 208,
    q: "La struttura del Codice etico per OML è composta da",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 209,
    q: ""Secondo il punto 1 dei 'Doveri e compiti degli operatori di medicina del  lavoro'"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 210,
    q: "In base al Codice etico per OML",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 211,
    q: "Quali sono le fasi in cui può essere suddiviso il processo di control lo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 212,
    q: "Il Budget consente di",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 213,
    q: ""Quali tipologie di budget sono contenuto all'interno del modello di  Budget di esercizio"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 214,
    q: "Quali sono le caratteristiche di un efficiente sistema di reporting",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 215,
    q: "Il controllo dei costi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 216,
    q: "Lo scostamento di prezzo viene isolato sulla base della seguente relazione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 217,
    q: "La variazione di volume si basa sul principio che al crescere del volum e",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 218,
    q: "Le fonti del diritto del lavoro possono essere suddivise in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 219,
    q: ""Gli atti emanati dall'Unione Europea che dispiegano efficacia negli Stati memb ri sono"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 220,
    q: "Alla legislazione concorrente e residuale delle Regioni compete",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 221,
    q: "La tendenza più recente del legislatore riconosce al contratto collettivo",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 222,
    q: "Le ferie sono un periodo di riposo necessario per il recupero d elle forze intellettuali e fisiche",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 223,
    q: "Gli incarichi di posizione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 224,
    q: "Il dipendente che sia colpito da misura restrittiva della libertà personale è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 225,
    q: "Quanti tipi di responsabilità esistono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 226,
    q: ""L'imperizia è"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 227,
    q: "Tra le possibile accuse in ambito penale per i sanitari non rientra",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 228,
    q: "La lesione personale è lieve quando",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 229,
    q: ""L'articolo 6 della Legge Gelli riguarda"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 230,
    q: "Una buona pratica clinico-assistenziale è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 231,
    q: "Nella responsabilià contrattuale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 232,
    q: "In ambito civile",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 233,
    q: ""L'organo che giudica la responsabilità amministrativa è"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 234,
    q: "La colpa grave è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 235,
    q: "Quando si effettua la progettazione di un evento formativo si definiscono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 236,
    q: "Nella rilevazione dei bisogni si devono avere presenti",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 237,
    q: "Le competenze vengono individuate da indicatori di valutazione e strumenti quali",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 238,
    q: "Un obiettivo formativo di qualità viene descritto come",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 239,
    q: "Gli obiettivi si suddividono in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 240,
    q: "I metodi per realizzare un intervento formativosono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 241,
    q: "I modelli di sequenze di tipo deduttivo sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 242,
    q: ""L'ECM è il processo attraverso il quale"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 243,
    q: "I soggetti coinvolti nel progetto E.C.M. sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 244,
    q: "Il programma nazionale di E.C.M. riguarda tutto il personale sanitario",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 245,
    q: ""L'accreditamento di un Provider è"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 246,
    q: ""La valutazione dell'apprendimento"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 247,
    q: "La disciplina nota come andragogia",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 248,
    q: ""La Formazione è l'insieme di"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 249,
    q: "La formazione deve essere",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 250,
    q: "Le Tipologie Formative",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 251,
    q: "Nella formazione a distanza (FAD) asincrona",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 252,
    q: "Il Piano Formativo Annuale (PAF) avrà obiettivi",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 253,
    q: "Sul portale Co.Ge.A.P .S.",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 254,
    q: "Relativamente alla Formazione obbligatoria",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 255,
    q: ""Nell'analisi delle professionalità è possibile identificare le competenze ri chieste in"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 256,
    q: "Nella fase di macro-progettazione di un evento formativo vengono definiti",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 257,
    q: "Definizione di persona",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 258,
    q: "Come si definisce la responsabilità nei confronti della persona ass istita",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 259,
    q: "Definizione di salute",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 260,
    q: "La partecipazione relazione dei familiari della persona assistita",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 261,
    q: "La corretta informazione alla persona nella relazione di cura",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 262,
    q: "Cosa i intende per consenso informato",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 263,
    q: "Svolgimento delle attività multiprofessionali",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 264,
    q: ""Come si definiscono le competenze nell'esercizio della professione"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 265,
    q: "Equità in salute",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 266,
    q: "Nelle organizzazioni sanitarie è fondamentale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 267,
    q: "La clinical governance nasce",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 268,
    q: "Il fondamento giuridico della clinical governance è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 269,
    q: "Definizione di governo clinico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 270,
    q: "Il Risk Management è lo strumento per",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 271,
    q: "Le linee guida cliniche e i percorsi assistenziali sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 272,
    q: ""L'applicazione del governo clinico richiede"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 273,
    q: ""L'Audit Clinico favorisce"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 274,
    q: "Legge 24/02/2005 art.43 definisce",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 275,
    q: "Il progetto regione Lazio è orientato a",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 276,
    q: "EBM è il metodo ideale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 277,
    q: "La definizione di EBM di David Sackett",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 278,
    q: "Applicazione EBM necessita di",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 279,
    q: "I quesiti clinici vengono generati",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 280,
    q: "Le fonti secondarie possono essere desunte da",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 281,
    q: "Le linee guida sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 282,
    q: "Le revisioni sistematiche sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 283,
    q: "Significato del rischio relativo RR",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 284,
    q: "Gli strumenti metodologici della EBM sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 285,
    q: "Formulazioni ipotesi diagnostiche e quadri clinici",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 286,
    q: "Il pdta consiste in",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 287,
    q: "Definizione dei pdta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 288,
    q: "Scopo dei pdta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 289,
    q: "Caratteristiche pdta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 290,
    q: "Vantaggi pdta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 291,
    q: "Svantaggi pdta",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 292,
    q: "Le fasi di un percorso possono essere",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 293,
    q: "Nelle fasi di sviluppo di un pdta è fondamentale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 294,
    q: "La costruzione del percorso ideale definisce",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 295,
    q: "La scelta del problema di salute deriva da",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 296,
    q: "La Legge n. 3 del 2018 (cd. "Legge Lorenzin")",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 297,
    q: "Il Centro di coordinamento nazionale dei comitati etici territoriali",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 298,
    q: "Gli Ordini professionali",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 299,
    q: "La "medicina di genere"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 300,
    q: ""L'istituzione di nuove professioni sanitarie"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 301,
    q: ""L'osteopata e il chiropratico"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 302,
    q: ""L'esercente la professione sanitaria"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 303,
    q: "La riforma Lorenzin ha istituito",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 304,
    q: "Gli accordi istitutivi di nuove professioni sanitarie dovranno in dividuare",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 305,
    q: ""Allo stato dell'arte",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 306,
    q: ""L'attuale interpretazione dell'art. 32",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 307,
    q: "La liceità del trattamento sanitario trova il proprio fondamento giurid ico nel",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 308,
    q: "Il consenso espresso dal paziente per considerarsi informato deve essere in centrato su",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 309,
    q: ""In caso di incapacità del paziente",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 310,
    q: "Secondo la dottrina maggioritaria",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 311,
    q: "In relazione al principio del consenso",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 312,
    q: ""Dopo il secondo conflitto mondiale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 313,
    q: "La Legge istitutiva del SSN",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 314,
    q: "Gli strumenti della Legge di Riforma del SSN risiedono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 315,
    q: "Le modifiche introdotte dal Titolo V della Costituzione hanno ridi segnato",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 316,
    q: "Il concetto di "salute" come bene primario è frutto di una lunga evoluzione storica e sociale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 317,
    q: ""Il Servizio sanitario nazionale",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 318,
    q: "Con la modifica della Parte II del Titolo V della Costituzione",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 319,
    q: "Il Piano Sanitario Nazionale è",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 320,
    q: ""Gli obiettivi del PSN",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 321,
    q: "Il diritto alla tutela della salute è il presupposto per",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 322,
    q: "Il primo riferimento alla salute in ambito europeo si ha",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 323,
    q: "La Pandemia da Covid-19 ha evidenziato",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 324,
    q: "I diritti umani appartengono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 325,
    q: "La Dichiarazione Universale di Diritti Umani nasce come",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 326,
    q: "I diritti umani sono classificati come",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 327,
    q: "Etica e Morale sono concetti simili perché",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 328,
    q: "I valori etici rappresentano",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 329,
    q: "I valori umani costituiscono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 330,
    q: "La conoscenza dei diritti umani è indispensabile per il riconoscimento del la loro tutela",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 331,
    q: "La Corte Europea per i diritti umani decide con",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 332,
    q: "Definizione di documento informatico",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 333,
    q: "I documenti sanitari non sono",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 334,
    q: "Definizione di documento",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 335,
    q: "Il processo di formazione del documento direttamente su supporto inf ormatico non prevede",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 336,
    q: "Le schede cliniche delle R.S.A. devono essere conservate per un periodo d i",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 337,
    q: "Il manuale di conservazione prevede al suo interno",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 338,
    q: "Il manuale di conservazione non prevede al suo interno",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
  {
    id: 339,
    q: ""L'analisi del rischio deve valutare"",
    correct: "",
    wrong: ['Distrattore A', 'Distrattore B', 'Distrattore C'],
    weight: 3
  },
];