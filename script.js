
// ----------------- DATA -----------------

// Some RuPaul's Drag Race queens with rough, fun stats.
const ALL_QUEENS = [
  { id: "bianca", name: "Bianca Del Rio", season: "S6", stats: { performance: 10, runway: 8, comedy: 10, lipsync: 8 } },
  { id: "jinkx", name: "Jinkx Monsoon", season: "S5", stats: { performance: 10, runway: 7, comedy: 10, lipsync: 8 } },
  { id: "sasha", name: "Sasha Velour", season: "S9", stats: { performance: 9, runway: 9, comedy: 8, lipsync: 10 } },
  { id: "trixie", name: "Trixie Mattel", season: "S7 / AS3", stats: { performance: 8, runway: 8, comedy: 9, lipsync: 7 } },
  { id: "katya", name: "Katya", season: "S7 / AS2", stats: { performance: 8, runway: 7, comedy: 9, lipsync: 8 } },
  { id: "alaska", name: "Alaska", season: "S5 / AS2", stats: { performance: 9, runway: 9, comedy: 9, lipsync: 8 } },
  { id: "trinity", name: "Trinity the Tuck", season: "S9 / AS4", stats: { performance: 9, runway: 10, comedy: 8, lipsync: 9 } },
  { id: "monet", name: "Monét X Change", season: "S10 / AS4", stats: { performance: 8, runway: 7, comedy: 9, lipsync: 9 } },
  { id: "bob", name: "Bob the Drag Queen", season: "S8", stats: { performance: 10, runway: 7, comedy: 10, lipsync: 9 } },
  { id: "violet", name: "Violet Chachki", season: "S7", stats: { performance: 8, runway: 10, comedy: 7, lipsync: 7 } },
  { id: "peppermint", name: "Peppermint", season: "S9", stats: { performance: 8, runway: 7, comedy: 7, lipsync: 10 } },
  { id: "shangela", name: "Shangela", season: "S2 / S3 / AS3", stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 } },
  { id: "latrice", name: "Latrice Royale", season: "S4 / AS1 / AS4", stats: { performance: 8, runway: 7, comedy: 9, lipsync: 8 } },
  { id: "alyssa", name: "Alyssa Edwards", season: "S5 / AS2", stats: { performance: 9, runway: 7, comedy: 8, lipsync: 10 } },
  { id: "raja", name: "Raja", season: "S3 / AS7", stats: { performance: 9, runway: 10, comedy: 7, lipsync: 7 } },
  { id: "yvie", name: "Yvie Oddly", season: "S11 / AS7", stats: { performance: 9, runway: 8, comedy: 8, lipsync: 9 } }
];

const CHALLENGES = [
  { id: "performance", name: "Rusical Extravaganza", weights: { performance: 0.6, runway: 0.2, comedy: 0.2 } },
  { id: "snatch", name: "Snatch Game", weights: { performance: 0.3, runway: 0.1, comedy: 0.6 } },
  { id: "design", name: "Ball Design Challenge", weights: { performance: 0.4, runway: 0.4, comedy: 0.2 } },
  { id: "acting", name: "Acting Challenge", weights: { performance: 0.4, runway: 0.1, comedy: 0.5 } },
  { id: "branding", name: "Branding & Commercial", weights: { performance: 0.5, runway: 0.2, comedy: 0.3 } },
  { id: "girlgroup", name: "Girl Group Challenge", weights: { performance: 0.5, runway: 0.2, comedy: 0.3 } }
];

const DRAMA_EVENTS = [
  "{A} rolls her eyes at {B} in the workroom and suddenly it's the Cold War.",
  "{A} and {B} get into it over mirror space. RuPaul is living.",
  "{A} calls out {B} for coasting. Untucked will be wild tonight.",
  "{A} starts crying, and {B} surprisingly steps in to comfort her.",
  "{A} thinks the judges are sleeping on her. Confessional rant unlocked.",
  "{A} accuses {B} of stealing her look. Twitter will hear about this.",
  "The mini-challenge leaves {A} absolutely humiliated. {B} cannot stop laughing.",
  "{A} threatens to walk out but {B} drags her back for the drama."
];

// ----------------- STATE & HELPERS -----------------

let selectedQueenIds = new Set();

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

// ----------------- UI: RENDER QUEEN LIST -----------------

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

// ----------------- PRESETS -----------------

function applyPreset(preset) {
  selectedQueenIds.clear();

  if (preset === "classic") {
    ["bianca", "jinkx", "bob", "shangela", "katya", "violet", "alyssa", "peppermint"].forEach(id => selectedQueenIds.add(id));
  } else if (preset === "allstars") {
    ["alaska", "trinity", "monet", "trixie", "raja", "yvie", "shangela", "latrice"].forEach(id => selectedQueenIds.add(id));
  } else if (preset === "random12") {
    const shuffled = shuffle(ALL_QUEENS);
    shuffled.slice(0, 12).forEach(q => selectedQueenIds.add(q.id));
  }

  renderQueenList();
}

// ----------------- SIMULATION LOGIC -----------------

function simulateSeason() {
  const logEl = $("log");
  logEl.innerHTML = "";

  const chaosLevel = Number($("chaos").value); // 0–3
  const rawEpisodeCount = Number($("episode-count").value) || 8;
  const seasonNameInput = $("season-name").value.trim();
  const seasonName = seasonNameInput || "Untitled Fantasy Season";

  const cast = ALL_QUEENS.filter(q => selectedQueenIds.has(q.id));
  if (cast.length < 4) {
    const warn = document.createElement("div");
    warn.className = "log-block";
    warn.innerHTML = "<p>You need at least 4 queens selected to run a season.</p>";
    logEl.appendChild(warn);
    return;
  }

  const maxEpisodes = Math.max(4, Math.min(rawEpisodeCount, 14));
  const queens = cast.map(q => ({
    ...q,
    eliminated: false,
    track: []
  }));

  function aliveQueens() {
    return queens.filter(q => !q.eliminated);
  }

  // Season header
  const header = document.createElement("div");
  header.className = "log-block season-header";
  header.innerHTML = `
    <h3>${seasonName}</h3>
    <p><strong>Cast:</strong> ${queens.map(q => q.name).join(", ")}</p>
    <p><strong>Chaos level:</strong> ${chaosLevel}</p>
  `;
  logEl.appendChild(header);

  let episodeNumber = 1;

  while (aliveQueens().length > 3 && episodeNumber <= maxEpisodes) {
    const epiBlock = document.createElement("div");
    epiBlock.className = "log-block";

    const challenge = sample(CHALLENGES);
    const living = aliveQueens();

    // Score queens
    const scored = living.map(q => ({
      queen: q,
      score: challengeScore(q, challenge.weights, chaosLevel)
    }));

    scored.sort((a, b) => b.score - a.score);

    const winner = scored[0].queen;
    const high = scored.slice(1, Math.min(3, scored.length - 2)).map(s => s.queen);

    let low = [];
    let bottom2 = [];
    if (living.length >= 7) {
      bottom2 = scored.slice(-2).map(s => s.queen);
      low = scored.slice(-4, -2).map(s => s.queen);
    } else if (living.length === 6 || living.length === 5 || living.length === 4) {
      bottom2 = scored.slice(-2).map(s => s.queen);
      low = scored.slice(-3, -2).map(s => s.queen);
    }

    const safe = living.filter(
      q => q !== winner && !high.includes(q) && !low.includes(q) && !bottom2.includes(q)
    );

    // Track records
    winner.track.push("WIN");
    high.forEach(q => q.track.push("HIGH"));
    safe.forEach(q => q.track.push("SAFE"));
    low.forEach(q => q.track.push("LOW"));
    bottom2.forEach(q => q.track.push("BTM"));

    // Lip sync
    const { eliminated, lipsyncStory } = lipsyncForYourLife(bottom2, chaosLevel);

    if (eliminated) {
      eliminated.eliminated = true;
      eliminated.track.push("ELIM");
    }

    // Drama
    const dramaStory = maybeDramaEvent(aliveQueens(), chaosLevel);

    epiBlock.innerHTML = `
      <h3>Episode ${episodeNumber}: ${challenge.name}</h3>
      <p><strong>Winner:</strong> ${winner.name}</p>
      <p><strong>High:</strong> ${high.length ? high.map(q => q.name).join(", ") : "—"}</p>
      <p><strong>Safe:</strong> ${safe.length ? safe.map(q => q.name).join(", ") : "—"}</p>
      <p><strong>Low:</strong> ${low.length ? low.map(q => q.name).join(", ") : "—"}</p>
      <p><strong>Bottom 2:</strong> ${bottom2.length ? bottom2.map(q => q.name).join(", ") : "—"}</p>
      <div class="log-row">
        <span class="badge win">Lip Sync</span>
        <span class="badge">${lipsyncStory}</span>
      </div>
      ${dramaStory ? `<div class="log-row" style="margin-top:6px;">
        <span class="badge drama">Drama</span>
        <span class="badge">${dramaStory}</span>
      </div>` : ""}
      <p style="margin-top:6px; font-size:0.8rem; color:var(--text-muted);">
        Queens remaining: ${aliveQueens().map(q => q.name).join(", ")}
      </p>
    `;

    logEl.appendChild(epiBlock);
    episodeNumber++;
  }

  // Finale
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
          .map(
            r =>
              `<span class="badge">${r.queen.name}: ${r.score.toFixed(2)}</span>`
          )
          .join("")}
      </div>
    `;

    logEl.appendChild(finaleBlock);
  }

  // Track records summary
  const summary = document.createElement("div");
  summary.className = "log-block";
  const rows = queens
    .map(
      q =>
        `<p><strong>${q.name}:</strong> ${q.track.join(" · ")}</p>`
    )
    .join("");
  summary.innerHTML = `
    <h3>Track Records</h3>
    ${rows}
  `;
  logEl.appendChild(summary);

  logEl.scrollTop = logEl.scrollHeight;
}

function challengeScore(queen, weights, chaosLevel) {
  const s = queen.stats;
  const base =
    s.performance * (weights.performance ?? 0.33) +
    s.runway * (weights.runway ?? 0.33) +
    s.comedy * (weights.comedy ?? 0.33);

  // Chaos modifies randomness amplitude
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

  // Chance of double shantay
  if (diff < 0.75 && Math.random() < 0.25 + chaosLevel * 0.05) {
    return {
      eliminated: null,
      lipsyncStory: `Double shantay! ${a.name} and ${b.name} both stay.`
    };
  }

  let eliminated, lipsyncStory;
  if (scoreA < scoreB) {
    eliminated = a;
  } else {
    eliminated = b;
  }

  lipsyncStory = `${a.name} (${scoreA.toFixed(2)}) vs ${b.name} (${scoreB.toFixed(
    2
  )}) — ${eliminated.name} sashes away.`;

  return { eliminated, lipsyncStory };
}

function maybeDramaEvent(alive, chaosLevel) {
  if (alive.length < 2) return "";
  const baseChance = 0.25 + chaosLevel * 0.15; // more chaos = more drama
  if (Math.random() > baseChance) return "";

  const a = sample(alive);
  let b = sample(alive);
  let guard = 0;
  while (b === a && guard < 10) {
    b = sample(alive);
    guard++;
  }

  const template = sample(DRAMA_EVENTS);
  return template.replace("{A}", a.name).replace("{B}", b.name);
}

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

// ----------------- INIT -----------------

function init() {
  // Default preset
  applyPreset("classic");

  $("cast-preset").addEventListener("change", (e) => {
    applyPreset(e.target.value);
  });

  $("simulate-btn").addEventListener("click", simulateSeason);
}

document.addEventListener("DOMContentLoaded", init);
