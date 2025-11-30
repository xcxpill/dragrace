
import random
from dataclasses import dataclass, field
from typing import List


# ---------- DATA MODELS ----------

@dataclass
class Queen:
    name: str
    performance: int   # 1–10
    runway: int        # 1–10
    comedy: int        # 1–10
    lipsync: int       # 1–10
    drama: int         # 1–10 (for fun / future use)
    eliminated: bool = False
    track_record: List[str] = field(default_factory=list)

    def __str__(self):
        return self.name


@dataclass
class EpisodeResult:
    episode_number: int
    challenge_type: str
    winner: Queen
    high: List[Queen]
    safe: List[Queen]
    low: List[Queen]
    bottom2: List[Queen]
    eliminated: Queen | None


# ---------- SETUP CAST ----------

def create_default_cast() -> List[Queen]:
    # You can swap these out for your own queens & stats
    return [
        Queen("Onyx Opall",   performance=8, runway=9, comedy=7, lipsync=8, drama=9),
        Queen("Blondie Dahl", performance=7, runway=8, comedy=7, lipsync=7, drama=8),
        Queen("Emmy Stage",   performance=9, runway=8, comedy=8, lipsync=7, drama=6),
        Queen("Dee Pression", performance=8, runway=6, comedy=9, lipsync=7, drama=9),
        Queen("Falsetto",     performance=9, runway=7, comedy=6, lipsync=9, drama=7),
        Queen("Icology",      performance=7, runway=10, comedy=6, lipsync=7, drama=6),
        Queen("Co'Co' Melo'n",performance=7, runway=8, comedy=8, lipsync=7, drama=8),
        Queen("Holly Wood",   performance=8, runway=9, comedy=6, lipsync=7, drama=9),
    ]


# ---------- SCORING & EPISODE LOGIC ----------

CHALLENGE_TYPES = [
    "Performance",
    "Runway",
    "Comedy",
    "Design",
    "Acting",
]


def get_challenge_weights(challenge_type: str):
    """
    Define how important each stat is per challenge type.
    """
    if challenge_type == "Performance":
        return {"performance": 0.6, "runway": 0.2, "comedy": 0.2}
    if challenge_type == "Runway":
        return {"performance": 0.2, "runway": 0.6, "comedy": 0.2}
    if challenge_type == "Comedy":
        return {"performance": 0.2, "runway": 0.1, "comedy": 0.7}
    if challenge_type == "Design":
        return {"performance": 0.4, "runway": 0.4, "comedy": 0.2}
    if challenge_type == "Acting":
        return {"performance": 0.4, "runway": 0.1, "comedy": 0.5}
    # default
    return {"performance": 0.4, "runway": 0.3, "comedy": 0.3}


def score_queen_in_challenge(queen: Queen, challenge_type: str) -> float:
    weights = get_challenge_weights(challenge_type)
    # Base score from stats
    base = (
        queen.performance * weights["performance"]
        + queen.runway * weights["runway"]
        + queen.comedy * weights["comedy"]
    )
    # Random noise so things aren't too predictable
    randomness = random.uniform(-1.5, 1.5)
    return base + randomness


def simulate_episode(episode_number: int, queens: List[Queen]) -> EpisodeResult:
    challenge_type = random.choice(CHALLENGE_TYPES)
    print(f"\n=== EPISODE {episode_number}: {challenge_type} Challenge ===")

    # Only active queens
    active_queens = [q for q in queens if not q.eliminated]

    # Score everyone
    scores = {queen: score_queen_in_challenge(queen, challenge_type) for queen in active_queens}
    ranked = sorted(active_queens, key=lambda q: scores[q], reverse=True)

    # Basic structure: 1 winner, 2 high, middle safe, 2 low, 2 bottom
    winner = ranked[0]
    high = ranked[1:3] if len(ranked) > 4 else ranked[1:2]

    # For small casts, adjust counts
    if len(ranked) >= 7:
        bottom2 = ranked[-2:]
        low = ranked[-4:-2]
    elif len(ranked) == 6:
        bottom2 = ranked[-2:]
        low = ranked[-3:-2]
    elif len(ranked) == 5:
        bottom2 = ranked[-2:]
        low = ranked[-3:-2]
    else:
        # Top 4 or finale, bottom2 still possible
        bottom2 = ranked[-2:]
        low = []

    safe = [q for q in ranked if q not in ([winner] + high + low + bottom2)]

    # Track record updates
    winner.track_record.append("WIN")
    for q in high:
        q.track_record.append("HIGH")
    for q in safe:
        q.track_record.append("SAFE")
    for q in low:
        q.track_record.append("LOW")
    for q in bottom2:
        q.track_record.append("BTM")

    # Print episode summary
    print(f"\nWinner: {winner}")
    if high:
        print("High: " + ", ".join(q.name for q in high))
    if safe:
        print("Safe: " + ", ".join(q.name for q in safe))
    if low:
        print("Low: " + ", ".join(q.name for q in low))
    print("Bottom 2: " + ", ".join(q.name for q in bottom2))

    eliminated = simulate_lipsync_elimination(bottom2)

    if eliminated:
        eliminated.eliminated = True
        print(f"\n{eliminated.name} has been ELIMINATED 💄")
    else:
        print("\nNo one is eliminated this episode (double shantay or finale).")

    return EpisodeResult(
        episode_number=episode_number,
        challenge_type=challenge_type,
        winner=winner,
        high=high,
        safe=safe,
        low=low,
        bottom2=bottom2,
        eliminated=eliminated,
    )


# ---------- LIP SYNC LOGIC ----------

def simulate_lipsync_elimination(bottom2: List[Queen]) -> Queen | None:
    if len(bottom2) < 2:
        # Not enough people to lipsync, no elim
        return None

    q1, q2 = bottom2
    print(f"\n💿 LIP SYNC FOR YOUR LIFE: {q1.name} vs {q2.name}")

    # Higher lipsync stat + randomness
    score1 = q1.lipsync + random.uniform(-2.0, 2.0)
    score2 = q2.lipsync + random.uniform(-2.0, 2.0)

    print(f"{q1.name} lip sync score: {score1:.2f}")
    print(f"{q2.name} lip sync score: {score2:.2f}")

    if abs(score1 - score2) < 0.75:
        # Very close: random chance of double shantay/no elim
        if random.random() < 0.25:
            print("RuPaul: 'Shantay you BOTH stay!' ✨ (No elimination)")
            return None

    if score1 < score2:
        # q1 goes home
        return q1
    else:
        return q2


# ---------- FINALE ----------

def simulate_finale(queens: List[Queen]):
    finalists = [q for q in queens if not q.eliminated]
    print("\n=== GRAND FINALE ===")
    print("Finalists: " + ", ".join(q.name for q in finalists))

    # Simple finale: all do a final performance, best overall wins
    # Using average of performance + runway + lipsync + a bit of randomness
    final_scores = {}
    for q in finalists:
        base = (q.performance + q.runway + q.lipsync) / 3
        final_scores[q] = base + random.uniform(-1.0, 1.0)

    ranked = sorted(finalists, key=lambda q: final_scores[q], reverse=True)
    winner = ranked[0]

    print("\nFinal scores:")
    for q in ranked:
        print(f"{q.name}: {final_scores[q]:.2f}")

    print(f"\n🏁 The winner of Drag Race Simulator is... {winner.name}!!! 👑")
    winner.track_record.append("WINNER")
    for q in ranked[1:]:
        q.track_record.append("RUNNER-UP")

    return winner


# ---------- MAIN GAME LOOP ----------

def run_season():
    queens = create_default_cast()
    print("Welcome to the Drag Race Simulator!")
    print("Cast: " + ", ".join(q.name for q in queens))

    episode_number = 1
    results: List[EpisodeResult] = []

    # Keep going until 3 queens remain, then finale decides winner
    while len([q for q in queens if not q.eliminated]) > 3:
        res = simulate_episode(episode_number, queens)
        results.append(res)
        episode_number += 1

    winner = simulate_finale(queens)

    print("\n=== FINAL TRACK RECORDS ===")
    for q in queens:
        status = " (ELIMINATED)" if q.eliminated and "WINNER" not in q.track_record else ""
        print(f"{q.name}{status}: {' '.join(q.track_record)}")

    print(f"\nSeason winner: {winner.name} 👑")


if __name__ == "__main__":
    random.seed()  # or set a number for repeatable seasons, like random.seed(42)
    run_season()
