// ----------------- DATA -----------------

// franchise: "US", "UK", "CA"
const ALL_QUEENS = [
  // US
  {
    id: "bianca",
    name: "Bianca Del Rio",
    season: "US S6",
    franchise: "US",
    stats: { performance: 10, runway: 8, comedy: 10, lipsync: 8 }
  },
  {
    id: "jinkx",
    name: "Jinkx Monsoon",
    season: "US S5",
    franchise: "US",
    stats: { performance: 10, runway: 7, comedy: 10, lipsync: 8 }
  },
  {
    id: "sasha",
    name: "Sasha Velour",
    season: "US S9",
    franchise: "US",
    stats: { performance: 9, runway: 9, comedy: 8, lipsync: 10 }
  },
  {
    id: "trixie",
    name: "Trixie Mattel",
    season: "US S7 / AS3",
    franchise: "US",
    stats: { performance: 8, runway: 8, comedy: 9, lipsync: 7 }
  },
  {
    id: "katya",
    name: "Katya",
    season: "US S7 / AS2",
    franchise: "US",
    stats: { performance: 8, runway: 7, comedy: 9, lipsync: 8 }
  },
  {
    id: "alaska",
    name: "Alaska",
    season: "US S5 / AS2",
    franchise: "US",
    stats: { performance: 9, runway: 9, comedy: 9, lipsync: 8 }
  },
  {
    id: "trinity",
    name: "Trinity the Tuck",
    season: "US S9 / AS4",
    franchise: "US",
    stats: { performance: 9, runway: 10, comedy: 8, lipsync: 9 }
  },
  {
    id: "monet",
    name: "Monét X Change",
    season: "US S10 / AS4",
    franchise: "US",
    stats: { performance: 8, runway: 7, comedy: 9, lipsync: 9 }
  },
  {
    id: "bob",
    name: "Bob the Drag Queen",
    season: "US S8",
    franchise: "US",
    stats: { performance: 10, runway: 7, comedy: 10, lipsync: 9 }
  },
  {
    id: "violet",
    name: "Violet Chachki",
    season: "US S7",
    franchise: "US",
    stats: { performance: 8, runway: 10, comedy: 7, lipsync: 7 }
  },
  {
    id: "peppermint",
    name: "Peppermint",
    season: "US S9",
    franchise: "US",
    stats: { performance: 8, runway: 7, comedy: 7, lipsync: 10 }
  },
  {
    id: "shangela",
    name: "Shangela",
    season: "US S2 / S3 / AS3",
    franchise: "US",
    stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 }
  },
  {
    id: "latrice",
    name: "Latrice Royale",
    season: "US S4 / AS1 / AS4",
    franchise: "US",
    stats: { performance: 8, runway: 7, comedy: 9, lipsync: 8 }
  },
  {
    id: "alyssa",
    name: "Alyssa Edwards",
    season: "US S5 / AS2",
    franchise: "US",
    stats: { performance: 9, runway: 7, comedy: 8, lipsync: 10 }
  },
  {
    id: "raja",
    name: "Raja",
    season: "US S3 / AS7",
    franchise: "US",
    stats: { performance: 9, runway: 10, comedy: 7, lipsync: 7 }
  },
  {
    id: "yvie",
    name: "Yvie Oddly",
    season: "US S11 / AS7",
    franchise: "US",
    stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 }
  },

  // UK
  {
    id: "vivienne",
    name: "The Vivienne",
    season: "UK S1",
    franchise: "UK",
    stats: { performance: 9, runway: 8, comedy: 9, lipsync: 8 }
  },
  {
    id: "bimini",
    name: "Bimini Bon Boulash",
    season: "UK S2",
    franchise: "UK",
    stats: { performance: 9, runway: 9, comedy: 9, lipsync: 8 }
  },
  {
    id: "lawrence",
    name: "Lawrence Chaney",
    season: "UK S2",
    franchise: "UK",
    stats: { performance: 9, runway: 7, comedy: 10, lipsync: 7 }
  },
  {
    id: "tayce",
    name: "Tayce",
    season: "UK S2",
    franchise: "UK",
    stats: { performance: 8, runway: 8, comedy: 7, lipsync: 10 }
  },
  {
    id: "divina",
    name: "Divina De Campo",
    season: "UK S1",
    franchise: "UK",
    stats: { performance: 9, runway: 8, comedy: 9, lipsync: 8 }
  },
  {
    id: "cheryl",
    name: "Cheryl Hole",
    season: "UK S1",
    franchise: "UK",
    stats: { performance: 8, runway: 7, comedy: 8, lipsync: 8 }
  },

  // Canada
  {
    id: "priyanka",
    name: "Priyanka",
    season: "Canada S1",
    franchise: "CA",
    stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 }
  },
  {
    id: "icesis",
    name: "Icesis Couture",
    season: "Canada S2",
    franchise: "CA",
    stats: { performance: 9, runway: 9, comedy: 8, lipsync: 9 }
  },
  {
    id: "rita",
    name: "Rita Baga",
    season: "Canada S1 / CDRVS",
    franchise: "CA",
    stats: { performance: 8, runway: 8, comedy: 9, lipsync: 7 }
  },
  {
    id: "kendall",
    name: "Kendall Gender",
    season: "Canada S2",
    franchise: "CA",
    stats: { performance: 8, runway: 7, comedy: 8, lipsync: 8 }
  },
  {
    id: "jimbo",
    name: "Jimbo",
    season: "Canada S1 / AS8",
    franchise: "CA",
    stats: { performance: 9, runway: 9, comedy: 10, lipsync: 6 }
  }
];

const CHALLENGES = [
  { id: "performance", name: "Rusical Extravaganza", weights: { performance: 0.6, runway: 0.2, comedy: 0.2 } },
  { id: "snatch", name: "Snatch Game", weights: { performance: 0.3, runway: 0.1, comedy: 0.6 } },
  { id: "design", name: "Ball Design Challenge", weights: { performance: 0.4, runway: 0.4, comedy: 0.2 } },
  { id: "acting", name: "Acting Challenge", weights: { performance: 0.4, runway: 0.1, comedy: 0.5 } },
  { id: "branding", name: "Branding & Commercial", weights: { performance: 0.5, runway: 0.2, comedy: 0.3 } },
  { id: "girlgroup", name: "Girl Group Challenge", weights: { performance: 0.5, runway: 0.2, comedy: 0.3 } }
];

const DRAMA_EVENTS_GENERIC = [
  "{A} rolls her eyes at {B} in the workroom and suddenly it's the Cold War.",
  "{A} and {B} get into it over mirror space. RuPaul is living.",
  "{A} calls out {B} for coasting. Untucked will be wild tonight.",
  "{A} starts crying, and {B} surprisingly steps in to comfort her.",
  "{A} thinks the judges are sleeping on her. Confessional rant unlocked.",
  "{A} accuses {B} of stealing her look. Twitter will hear about this.",
  "The mini-challenge leaves {A} absolutely humiliated. {B} cannot stop laughing.",
  "{A} threatens to walk out but {B} drags her back for the drama."
];

const DRAMA_EVENTS_RIVALRY = [
  "{A} and {B} reignite their rivalry in the workroom. No one is safe.",
  "{A} snatches {B}'s wig on the runway — metaphorically. The judges gag.",
  "{A} says she's not threatened by {B}. {B} is not amused.",
  "Producers stir the pot and force {A} and {B} to team up. Disaster pending.",
  "In Untucked, {A} and {B} finally scream it out. Everyone else just sips drinks."
];

// ----------------- STATE & HELPERS -----------------

let selectedQueenIds = new Set();
let seasonScreens = [];
let currentScreenIndex = 0;

function $(id) {
  return document.getElementById(id);
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ----------------- UI: RENDER LIST -----------------

function renderQueenList() {
  const listEl = $("queen-list");
  listEl.innerHTML = "";

  ALL_QUEENS.forEach(q => {
    const pill = document.createElement("label");
    pill.className = "queen-pill";
    pill.dataset.id = q.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = selectedQueenIds.has(q.id);
    checkbox.addEventListener("change", () => toggleQueenSelection(q.id));

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${q.name} (${q.season})`;

    pill.appendChild(checkbox);
    pill.appendChild(nameSpan);

    if (selectedQueenIds.has(q.id)) {
      pill.classList.add("active");
    }

    pill.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") {
        checkbox.checked = !checkbox.checked;
        toggleQueenSelection(q.id);
      }
    });

    listEl.appendChild(pill);
  });
}

function toggleQueenSelection(id) {
  if (selectedQueenIds.has(id)) {
    selectedQueenIds.delete(id);
  } else {
    selectedQueenIds.add(id);
  }
  renderQueenList();
}

// ----------------- PRESETS / FRANCHISE -----------------

function applyPreset(preset) {
  selectedQueenIds.clear();

  if (preset === "us_legends") {
    ALL_QUEENS.filter(q => q.franchise === "US")
      .forEach(q => selectedQueenIds.add(q.id));
  } else if (preset === "uk_icons") {
    ALL_QUEENS.filter(q => q.franchise === "UK")
      .forEach(q => selectedQueenIds.add(q.id));
  } else if (preset === "canada_icons") {
    ALL_QUEENS.filter(q => q.franchise === "CA")
      .forEach(q => selectedQueenIds.add(q.id));
  } else if (preset === "global_mix") {
    const mixed = shuffle(ALL_QUEENS).slice(0, 12);
    mixed.forEach(q => selectedQueenIds.add(q.id));
  } else if (preset === "random12") {
    const shuffled = shuffle(ALL_QUEENS);
    shuffled.slice(0, 12).forEach(q => selectedQueenIds.add(q.id));
  }

  renderQueenList();
}

// ----------------- EPISODIC RENDER -----------------

function renderCurrentScreen() {
  const logEl = $("log");
  const counterEl = $("episode-counter");
  const prevBtn = $("prev-episode");
  const nextBtn = $("next-episode");

  logEl.innerHTML =

