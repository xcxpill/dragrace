// ----------------- DATA -----------------

// franchise: "US", "UK", "CA"
// image URLs are placeholders. Swap them for real promos whenever you like.
const ALL_QUEENS = [
  // US
  {
    id: "bianca",
    name: "Bianca Del Rio",
    season: "US S6",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Bianca",
    stats: { performance: 10, runway: 8, comedy: 10, lipsync: 8 }
  },
  {
    id: "jinkx",
    name: "Jinkx Monsoon",
    season: "US S5",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Jinkx",
    stats: { performance: 10, runway: 7, comedy: 10, lipsync: 8 }
  },
  {
    id: "sasha",
    name: "Sasha Velour",
    season: "US S9",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Sasha",
    stats: { performance: 9, runway: 9, comedy: 8, lipsync: 10 }
  },
  {
    id: "trixie",
    name: "Trixie Mattel",
    season: "US S7 / AS3",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Trixie",
    stats: { performance: 8, runway: 8, comedy: 9, lipsync: 7 }
  },
  {
    id: "katya",
    name: "Katya",
    season: "US S7 / AS2",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Katya",
    stats: { performance: 8, runway: 7, comedy: 9, lipsync: 8 }
  },
  {
    id: "alaska",
    name: "Alaska",
    season: "US S5 / AS2",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Alaska",
    stats: { performance: 9, runway: 9, comedy: 9, lipsync: 8 }
  },
  {
    id: "trinity",
    name: "Trinity the Tuck",
    season: "US S9 / AS4",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Trinity",
    stats: { performance: 9, runway: 10, comedy: 8, lipsync: 9 }
  },
  {
    id: "monet",
    name: "Monét X Change",
    season: "US S10 / AS4",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Monet",
    stats: { performance: 8, runway: 7, comedy: 9, lipsync: 9 }
  },
  {
    id: "bob",
    name: "Bob the Drag Queen",
    season: "US S8",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Bob",
    stats: { performance: 10, runway: 7, comedy: 10, lipsync: 9 }
  },
  {
    id: "violet",
    name: "Violet Chachki",
    season: "US S7",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Violet",
    stats: { performance: 8, runway: 10, comedy: 7, lipsync: 7 }
  },
  {
    id: "peppermint",
    name: "Peppermint",
    season: "US S9",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Peppermint",
    stats: { performance: 8, runway: 7, comedy: 7, lipsync: 10 }
  },
  {
    id: "shangela",
    name: "Shangela",
    season: "US S2 / S3 / AS3",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Shangela",
    stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 }
  },
  {
    id: "latrice",
    name: "Latrice Royale",
    season: "US S4 / AS1 / AS4",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Latrice",
    stats: { performance: 8, runway: 7, comedy: 9, lipsync: 8 }
  },
  {
    id: "alyssa",
    name: "Alyssa Edwards",
    season: "US S5 / AS2",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Alyssa",
    stats: { performance: 9, runway: 7, comedy: 8, lipsync: 10 }
  },
  {
    id: "raja",
    name: "Raja",
    season: "US S3 / AS7",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Raja",
    stats: { performance: 9, runway: 10, comedy: 7, lipsync: 7 }
  },
  {
    id: "yvie",
    name: "Yvie Oddly",
    season: "US S11 / AS7",
    franchise: "US",
    image: "https://via.placeholder.com/200x260?text=Yvie",
    stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 }
  },

  // UK
  {
    id: "vivienne",
    name: "The Vivienne",
    season: "UK S1",
    franchise: "UK",
    image: "https://via.placeholder.com/200x260?text=Vivienne",
    stats: { performance: 9, runway: 8, comedy: 9, lipsync: 8 }
  },
  {
    id: "bimini",
    name: "Bimini Bon Boulash",
    season: "UK S2",
    franchise: "UK",
    image: "https://via.placeholder.com/200x260?text=Bimini",
    stats: { performance: 9, runway: 9, comedy: 9, lipsync: 8 }
  },
  {
    id: "lawrence",
    name: "Lawrence Chaney",
    season: "UK S2",
    franchise: "UK",
    image: "https://via.placeholder.com/200x260?text=Lawrence",
    stats: { performance: 9, runway: 7, comedy: 10, lipsync: 7 }
  },
  {
    id: "tayce",
    name: "Tayce",
    season: "UK S2",
    franchise: "UK",
    image: "https://via.placeholder.com/200x260?text=Tayce",
    stats: { performance: 8, runway: 8, comedy: 7, lipsync: 10 }
  },
  {
    id: "divina",
    name: "Divina De Campo",
    season: "UK S1",
    franchise: "UK",
    image: "https://via.placeholder.com/200x260?text=Divina",
    stats: { performance: 9, runway: 8, comedy: 9, lipsync: 8 }
  },
  {
    id: "cheryl",
    name: "Cheryl Hole",
    season: "UK S1",
    franchise: "UK",
    image: "https://via.placeholder.com/200x260?text=Cheryl",
    stats: { performance: 8, runway: 7, comedy: 8, lipsync: 8 }
  },

  // Canada
  {
    id: "priyanka",
    name: "Priyanka",
    season: "Canada S1",
    franchise: "CA",
    image: "https://via.placeholder.com/200x260?text=Priyanka",
    stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 }
  },
  {
    id: "icesis",
    name: "Icesis Couture",
    season: "Canada S2",
    franchise: "CA",
    image: "https://via.placeholder.com/200x260?text=Icesis",
    stats: { performance: 9, runway: 9, comedy: 8, lipsync: 9 }
  },
  {
    id: "rita",
    name: "Rita Baga",
    season: "Canada S1 / CDRVS",
    franchise: "CA",
    image: "https://via.placeholder.com/200x260?text=Rita",
    stats: { performance: 8, runway: 8, comedy: 9, lipsync: 7 }
  },
  {
    id: "kendall",
    name: "Kendall Gender",
    season: "Canada S2",
    franchise: "CA",
    image: "https://via.placeholder.com/200x260?text=Kendall",
    stats: { performance: 8, runway: 7, comedy: 8, lipsync: 8 }
  },
  {
    id: "jimbo",
    name: "Jimbo",
    season: "Canada S1 / AS8",
    franchise: "CA",
    image: "https://via.placeholder.com/200x260?text=Jimbo",
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

// ----------------- UI: RENDER LIST & GALLERY -----------------

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

  renderCastGallery();
}

function renderCastGallery() {
  const gallery = $("cast-gallery");
  gallery.innerHTML = "";
  const cast = ALL_QUEENS.filter(q => selectedQueenIds.has(q.id));
  cast.forEach(q => {
    const card = document.createElement("div");
    card.className = "queen-card";

    if (q.image) {
      const img = document.createElement("img");
      img.src = q.image;
      img.alt = q.name;
      card.appendChild(img);
    }

    const name = document.createElement("strong");
    name.textContent = q.name;
    card.appendChild(name);

    const season = document.createElement("span");
    season.textContent = q.season;
    card.appendChild(season);

    gallery.appendChild(card);
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

  logEl.innerHTML = "";

  if (!seasonScreens.length) {
    logEl.innerHTML = "<p>Click “Simulate Season” to generate a new season.</p>";
    if (counterEl) counterEl.textContent = "0 / 0";
    if (prevBtn) prevBtn.disabled = true;
    if (nextBtn) nextBtn.disabled = true;
    return;
  }

  const html = seasonScreens[currentScreenIndex];
  logEl.innerHTML = html;

  if (counterEl) {
    counterEl.textContent = `${currentScreenIndex + 1} / ${seasonScreens.length}`;
  }
  if (prevBtn) prevBtn.disabled = currentScreenIndex === 0;
  if (nextBtn) nextBtn.disabled = currentScreenIndex === seasonScreens.length - 1;
}

// ----------------- MAIN SIMULATION -----------------

function simulateSeason() {
  const chaosLevel = Number($("chaos").value);
  const rawEpisodeCount = Number($("episode-count").value) || 8;
  const seasonNameInput = $("season-name").value.trim();
  const seasonName = seasonNameInput || "Untitled Fantasy Season";
  const format = $("format").value;
  const franchiseFocus = $("franchise").value;

  const cast = ALL_QUEENS.filter(q => selectedQueenIds.has(q.id));
  seasonScreens = [];
  currentScreenIndex = 0;

  if (cast.length < 4) {
    seasonScreens.push(`<div class="log-block"><p>You need at least 4 queens selected to run a season.</p></div>`);
    renderCurrentScreen();
    return;
  }

  const maxEpisodes = Math.max(4, Math.min(rawEpisodeCount, 14));
  const queens = cast.map(q => ({
    ...q,
    eliminated: false,
    track: [],
    rivals: []
  }));

  function aliveQueens() {
    return queens.filter(q => !q.eliminated);
  }

  // Rivalries
  const rivalries = createRivalries(queens);

  const formatLabel = format === "regular"
    ? "Regular Season"
    : format === "allstars"
      ? "All Stars (Top 2 Legacy)"
      : "Golden Beaver (Canada-style All Stars)";

  const franchiseLabel = franchiseFocus === "us"
    ? "US"
    : franchiseFocus === "uk"
      ? "UK"
      : franchiseFocus === "ca"
        ? "Canada"
        : "Mixed";

  const rivalsText = rivalries.length
    ? rivalries.map(r => `${r.a.name} vs ${r.b.name}`).join(" · ")
    : "None yet… but just wait.";

  // Season header screen
  const headerBlock = document.createElement("div");
  headerBlock.className = "log-block season-header";
  headerBlock.innerHTML = `
    <h3>${seasonName}</h3>
    <p><strong>Franchise Focus:</strong> ${franchiseLabel}</p>
    <p><strong>Format:</strong> ${formatLabel}</p>
    <p><strong>Cast:</strong> ${queens.map(q => q.name).join(", ")}</p>
    <p><strong>Rivalries:</strong> ${rivalsText}</p>
    <p><strong>Chaos level:</strong> ${chaosLevel}</p>
  `;
  seasonScreens.push(headerBlock.outerHTML);

  let episodeNumber = 1;

  while (aliveQueens().length > 3 && episodeNumber <= maxEpisodes) {
    const epiBlock = document.createElement("div");
    epiBlock.className = "log-block";

    const challenge = sample(CHALLENGES);
    const living = aliveQueens();

    const scored = living.map(q => ({
      queen: q,
      score: challengeScore(q, challenge.weights, chaosLevel)
    }));
    scored.sort((a, b) => b.score - a.score);

    const topQueen = scored[0].queen;
    const top2 = scored.slice(0, Math.min(2, scored.length)).map(s => s.queen);
    const bottomGroup = scored.slice(-Math.min(3, scored.length)).map(s => s.queen);

    let winner = topQueen;
    let high = [];
    let low = [];
    let bottom2 = [];
    let safe = [];
    let lipsyncStory = "";
    let eliminated = null;
    let twistStory = "";

    if (format === "regular") {
      winner = topQueen;
      high = scored.slice(1, Math.min(3, scored.length - 2)).map(s => s.queen);

      if (living.length >= 7) {
        bottom2 = scored.slice(-2).map(s => s.queen);
        low = scored.slice(-4, -2).map(s => s.queen);
      } else {
        bottom2 = scored.slice(-2).map(s => s.queen);
        low = scored.slice(-3, -2).map(s => s.queen);
      }

      safe = living.filter(
        q => q !== winner &&
          !high.includes(q) &&
          !low.includes(q) &&
          !bottom2.includes(q)
      );

      winner.track.push("WIN");
      high.forEach(q => q.track.push("HIGH"));
      safe.forEach(q => q.track.push("SAFE"));
      low.forEach(q => q.track.push("LOW"));
      bottom2.forEach(q => q.track.push("BTM"));

      const lip = lipsyncForYourLife(bottom2, chaosLevel);
      eliminated = lip.eliminated;
      lipsyncStory = lip.lipsyncStory;

      if (eliminated) {
        eliminated.eliminated = true;
        eliminated.track.push("ELIM");
      }
    } else {
      // All Stars / Golden Beaver (legacy format)
      const bottomCandidates = bottomGroup;

      top2.forEach(q => q.track.push("TOP2"));
      const notTop = living.filter(q => !top2.includes(q) && !bottomCandidates.includes(q));
      notTop.forEach(q => q.track.push("SAFE"));
      bottomCandidates.forEach(q => q.track.push("BTM"));

      let savedByBeaver = null;
      let beaverHolderThisWeek = null;

      if (format === "goldenbeaver") {
        beaverHolderThisWeek = topQueen;
        const bottomNonRivals = bottomCandidates.filter(b =>
          !topQueen.rivals.includes(b.id)
        );
        const possibleSaves = bottomNonRivals.length ? bottomNonRivals : bottomCandidates;

        if (possibleSaves.length > 1 && Math.random() < (0.5 + chaosLevel * 0.1)) {
          savedByBeaver = sample(possibleSaves);
        }
      }

      let eliminationPool = bottomCandidates.slice();
      if (savedByBeaver) {
        eliminationPool = eliminationPool.filter(q => q !== savedByBeaver);
        twistStory = `${beaverHolderThisWeek.name} uses the Golden Beaver to save ${savedByBeaver.name} from elimination.`;
      }

      const legacy = lipsyncForLegacy(top2, chaosLevel);
      const lsWinner = legacy.winner;
      lipsyncStory = legacy.story;

      if (!eliminationPool.length || Math.random() < (0.1 + chaosLevel * 0.05)) {
        eliminated = null;
        twistStory = twistStory
          ? twistStory + " Double shantay! No one leaves."
          : "Double shantay! The lipstick stays in the pocket.";
      } else {
        eliminated = chooseElimination(lsWinner, eliminationPool, scored, chaosLevel, rivalries);
        eliminated.eliminated = true;
        eliminated.track.push("ELIM");
      }

      winner = lsWinner;
      bottom2 = eliminationPool.slice(0, 2);
      low = bottomCandidates.filter(q => !bottom2.includes(q) && q !== savedByBeaver);
      safe = living.filter(
        q => !top2.includes(q) &&
          !bottomCandidates.includes(q)
      );
    }

    const dramaStory = maybeDramaEvent(aliveQueens(), chaosLevel, rivalries);

    epiBlock.innerHTML = `
      <h3>Episode ${episodeNumber}: ${challenge.name}</h3>
      <p><strong>Winner:</strong> ${winner.name}</p>
      <p><strong>High/Top:</strong> ${
        format === "regular"
          ? (high.length ? high.map(q => q.name).join(", ") : "—")
          : top2.map(q => q.name).join(", ")
      }</p>
      <p><strong>Safe:</strong> ${safe.length ? safe.map(q => q.name).join(", ") : "—"}</p>
      <p><strong>Low:</strong> ${low.length ? low.map(q => q.name).join(", ") : "—"}</p>
      <p><strong>Bottom group:</strong> ${
        bottomGroup.length ? bottomGroup.map(q => q.name).join(", ") : "—"
      }</p>
      <div class="log-row">
        <span class="badge win">Lip Sync</span>
        <span class="badge">${lipsyncStory}</span>
      </div>
      ${
        twistStory
          ? `<div class="log-row" style="margin-top:6px;">
               <span class="badge twist">Twist</span>
               <span class="badge">${twistStory}</span>
             </div>`
          : ""
      }
      ${
        dramaStory
          ? `<div class="log-row" style="margin-top:6px;">
               <span class="badge drama">Drama</span>
               <span class="badge">${dramaStory}</span>
             </div>`
          : ""
      }
      <p style="margin-top:6px; font-size:0.8rem; color:var(--text-muted);">
        Queens remaining: ${aliveQueens().map(q => q.name).join(", ")}
      </p>
    `;

    seasonScreens.push(epiBlock.outerHTML);
    episodeNumber++;
  }

  // Finale screen
  if (aliveQueens().length <= 3) {
    const finaleBlock = document.createElement("div");
    finaleBlock.className = "log-block";

    const finalists = aliveQueens();
    const finaleResults = simulateFinale(finalists, chaosLevel);
    const winner = finaleResults[0].queen;

    finalists.forEach(q => {
      if (q === winner) {
        q.track.push("WINNER");
      } else {
        q.track.push("RUNNER-UP");
      }
    });

    finaleBlock.innerHTML = `
      <h3>Grand Finale</h3>
      <p><strong>Finalists:</strong> ${finalists.map(q => q.name).join(", ")}</p>
      <p><strong>Winner:</strong> ${winner.name} 👑</p>
      <div class="log-row" style="margin-top:4px;">
        ${finaleResults
          .map(r => `<span class="badge">${r.queen.name}: ${r.score.toFixed(2)}</span>`)
          .join("")}
      </div>
    `;
    seasonScreens.push(finaleBlock.outerHTML);
  }

  // Track summary screen
  const summary = document.createElement("div");
  summary.className = "log-block";
  const rows = queens
    .map(q => `<p><strong>${q.name}:</strong> ${q.track.join(" · ")}</p>`)
    .join("");
  summary.innerHTML = `
    <h3>Track Records (Summary)</h3>
    ${rows}
  `;
  seasonScreens.push(summary.outerHTML);

  // Track table screen
  const tableBlock = document.createElement("div");
  tableBlock.className = "log-block";
  tableBlock.innerHTML = `<h3>Track Record Table</h3>`;
  const table = buildTrackRecordTable(queens);
  tableBlock.appendChild(table);
  seasonScreens.push(tableBlock.outerHTML);

  renderCurrentScreen();
}

// ----------- EPISODE UTILS -----------

function challengeScore(queen, weights, chaosLevel) {
  const s = queen.stats;
  const base =
    s.performance * (weights.performance ?? 0.33) +
    s.runway * (weights.runway ?? 0.33) +
    s.comedy * (weights.comedy ?? 0.33);

  const chaosAmp = [0.8, 1.6, 2.6, 3.6][chaosLevel] || 1.6;
  const noise = (Math.random() * 2 - 1) * chaosAmp;
  return base + noise;
}

function lipsyncForYourLife(bottom2, chaosLevel) {
  if (!bottom2 || bottom2.length < 2) {
    return { eliminated: null, lipsyncStory: "No lip sync this week." };
  }
  const [a, b] = bottom2;
  const chaosAmp = [1.0, 1.8, 2.8, 3.8][chaosLevel] || 1.8;

  const scoreA = a.stats.lipsync + (Math.random() * 2 - 1) * chaosAmp;
  const scoreB = b.stats.lipsync + (Math.random() * 2 - 1) * chaosAmp;

  const diff = Math.abs(scoreA - scoreB);

  if (diff < 0.75 && Math.random() < 0.25 + chaosLevel * 0.05) {
    return {
      eliminated: null,
      lipsyncStory: `Double shantay! ${a.name} and ${b.name} both stay.`
    };
  }

  const eliminated = scoreA < scoreB ? a : b;
  const story = `${a.name} (${scoreA.toFixed(2)}) vs ${b.name} (${scoreB.toFixed(
    2
  )}) — ${eliminated.name} sashays away.`;

  return { eliminated, lipsyncStory: story };
}

function lipsyncForLegacy(top2, chaosLevel) {
  if (!top2 || top2.length < 2) {
    return {
      winner: top2[0],
      story: `${top2[0].name} wins by default.`
    };
  }
  const [a, b] = top2;
  const chaosAmp = [1.0, 1.8, 2.8, 3.8][chaosLevel] || 1.8;

  const scoreA = a.stats.lipsync + (Math.random() * 2 - 1) * chaosAmp;
  const scoreB = b.stats.lipsync + (Math.random() * 2 - 1) * chaosAmp;
  const winner = scoreA >= scoreB ? a : b;

  const story = `${a.name} (${scoreA.toFixed(2)}) vs ${b.name} (${scoreB.toFixed(
    2
  )}) — ${winner.name} wins the legacy lip sync.`;
  return { winner, story };
}

function chooseElimination(lsWinner, eliminationPool, scored, chaosLevel, rivalries) {
  if (eliminationPool.length === 1) {
    return eliminationPool[0];
  }

  const isRival = q => rivalries.some(r =>
    (r.a.id === lsWinner.id && r.b.id === q.id) ||
    (r.b.id === lsWinner.id && r.a.id === q.id)
  );

  const poolScores = new Map();
  scored.forEach(s => {
    if (eliminationPool.includes(s.queen)) {
      poolScores.set(s.queen.id, s.score);
    }
  });

  let candidates = eliminationPool.slice();

  if (candidates.some(isRival) && Math.random() < (0.4 + chaosLevel * 0.1)) {
    candidates = candidates.filter(isRival);
  } else {
    candidates.sort((a, b) => (poolScores.get(a.id) || 0) - (poolScores.get(b.id) || 0));
  }

  if (Math.random() < chaosLevel * 0.15) {
    return sample(eliminationPool);
  }

  return candidates[0];
}

// ----------- RIVALRIES & DRAMA -----------

function createRivalries(queens) {
  const pairs = [];
  const shuffled = shuffle(queens);
  const numPairs = Math.min(3, Math.floor(shuffled.length / 3));

  for (let i = 0; i < numPairs * 2 && shuffled.length >= 2; i += 2) {
    const a = shuffled[i];
    const b = shuffled[i + 1];
    if (!a || !b) break;
    if (a.id === b.id) continue;
    pairs.push({ a, b });
    a.rivals.push(b.id);
    b.rivals.push(a.id);
  }

  return pairs;
}

function maybeDramaEvent(alive, chaosLevel, rivalries) {
  if (alive.length < 2) return "";
  const baseChance = 0.25 + chaosLevel * 0.15;
  if (Math.random() > baseChance) return "";

  const useRivalry = rivalries.length && Math.random() < 0.55;
  if (useRivalry) {
    const r = sample(rivalries);
    const template = sample(DRAMA_EVENTS_RIVALRY);
    return template.replace("{A}", r.a.name).replace("{B}", r.b.name);
  }

  const a = sample(alive);
  let b = sample(alive);
  let guard = 0;
  while (b === a && guard < 10) {
    b = sample(alive);
    guard++;
  }

  const template = sample(DRAMA_EVENTS_GENERIC);
  return template.replace("{A}", a.name).replace("{B}", b.name);
}

// ----------- FINALE & TRACK TABLE -----------

function simulateFinale(finalists, chaosLevel) {
  const chaosAmp = [0.8, 1.4, 2.2, 3.0][chaosLevel] || 1.4;
  const results = finalists.map(q => {
    const base =
      (q.stats.performance + q.stats.runway + q.stats.lipsync + q.stats.comedy) / 4;
    const noise = (Math.random() * 2 - 1) * chaosAmp;
    return { queen: q, score: base + noise };
  });
  results.sort((a, b) => b.score - a.score);
  return results;
}

function buildTrackRecordTable(queens) {
  const table = document.createElement("table");
  table.className = "track-table";

  const maxLen = Math.max(...queens.map(q => q.track.length));
  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");

  const thName = document.createElement("th");
  thName.textContent = "Queen";
  headRow.appendChild(thName);

  for (let i = 0; i < maxLen; i++) {
    const th = document.createElement("th");
    if (i < maxLen - 1) {
      th.textContent = `Ep ${i + 1}`;
    } else {
      th.textContent = "Finale / Result";
    }
    headRow.appendChild(th);
  }
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  queens.forEach(q => {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.className = "name";
    tdName.textContent = q.name;
    tr.appendChild(tdName);

    for (let i = 0; i < maxLen; i++) {
      const td = document.createElement("td");
      td.textContent = q.track[i] || "";
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
}

// ----------------- INIT -----------------

function init() {
  applyPreset("us_legends");
  renderCurrentScreen();

  $("cast-preset").addEventListener("change", (e) => {
    applyPreset(e.target.value);
  });

  $("franchise").addEventListener("change", (e) => {
    const val = e.target.value;
    if (val === "us") applyPreset("us_legends");
    else if (val === "uk") applyPreset("uk_icons");
    else if (val === "ca") applyPreset("canada_icons");
    else applyPreset("global_mix");
  });

  $("simulate-btn").addEventListener("click", simulateSeason);

  $("prev-episode").addEventListener("click", () => {
    if (currentScreenIndex > 0) {
      currentScreenIndex--;
      renderCurrentScreen();
    }
  });

  $("next-episode").addEventListener("click", () => {
    if (currentScreenIndex < seasonScreens.length - 1) {
      currentScreenIndex++;
      renderCurrentScreen();
    }
  });
}

document.addEventListener("DOMContentLoaded", init);
