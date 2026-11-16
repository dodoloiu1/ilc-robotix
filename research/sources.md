# Source list — FIRST Tech Challenge Team 25145 "ILC RobotIX"

All URLs verified at time of research (2026-11-17). Data is reported as found; no match scores,
rankings, OPR values or awards were invented. Items explicitly absent from a source are marked
`null` / `not found` (see notes below).

## Primary / official
1. **FTC Events — FIRST** (canonical competitive results)
   - Team page: https://ftc-events.firstinspires.org/team/25145
   - 2025 season (Decode): https://ftc-events.firstinspires.org/2025/team/25145
   - 2024 season (Into The Deep): https://ftc-events.firstinspires.org/2024/team/25145
   - 2023 season (Centerstage): https://ftc-events.firstinspires.org/2023/team/25145
   - Snowy Circuits event: https://ftc-events.firstinspires.org/2025/ROSM2
   - Romania South League standings (2025): https://ftc-events.firstinspires.org/2025/region/RO/league/S
   - Romania Championship event page: https://ftc-events.firstinspires.org/2024/ROCMP
2. **The Orange Alliance** (team identity / web link)
   - https://theorangealliance.org/teams/25145
3. **FTCScout** (season history, BioBuzz status)
   - https://ftcscout.org/teams/25145
4. **FTCStats** (per-event OPR / NP-OPR / rankings, Romania 2024-25)
   - http://www.ftcstats.org/2025/romania.html
5. **ControlScout** (per-event ranking/OPR corroboration)
   - Future At High Speed 2025 (ROSM8): https://controlscout.org/events/2025/ROSM8
   - Meet Quantum Robotics 2024 (ROSM1): https://controlscout.org/events/2024/ROSM1
6. **Natie Prin Educație - FIRST Tech Challenge Romania** (Romanian programme registration)
   - https://teams.natieprineducatie.ro/RegistrationStatus/Regionale

## What each source provided
- FTC Events team page + season pages: full profile (name, location, rookie year, league),
  season/event listing, event dates, match tables (qualifications), awards, season aggregate
  record (3-13-0 for 2025, 9-13-0 for 2024), SLRT figure.
- FTC Events league standings: 2025 Romania South League final standing (rank 26/26, W-L-T 2-8-0,
  plays 12, RS 1.20, MP 58.80, BP 13.00, AP 11.60) and the league location/date table
  (incl. Snowy Circuits = Tulbure Gheorghe Șincai National College, Bucharest, 17 Jan 2026).
- FTC Events Romania Championship page: dates, venue (Bucharest), 5-team advancement to FIRST
  Championship, team roster.
- FTCScout team page: season history (2023 Centerstage → 2026 BioBuzz), BioBuzz not yet played.
- FTCStats: per-event OPR/NP-OPR/NP-OPR c/Auto OPRc/Tele OPRc/End Game OPRc, Quals rank,
  Avg RP, Avg Opp, Event W-L-T for 5 events (Championship, Bionic Royals, Black Sea Showdown,
  Quantum Robotics, SRLT).
- ControlScout: Future At High Speed OPR 12.4 (#20), Meet Quantum Robotics OPR 25.3 (#15).
- Natie Prin Educație: registration table row (Team ID RO_107, 25145, ILC ROBOTIX,
  Colegiul National Ion Luca Caragiale Bucuresti, BUCURESTI). NOTE: the page source (CakePHP)
  did not render in the fetcher; the row is cited from the search-renderer output of that URL.

## Explicit "not found" / `null` items
- Dedicated team website URL, social media profiles — not found (Orange Alliance only lists
  "BIOBUZZ" as the On-The-Web link).
- Opponent team names for most matches — not found on the team pages (team numbers only).
- Event final rankings for 2023 season (Ignite #17624, Qube #14277, NATIE) — not published on
  the source pages.
- Event final placement for 2025 events Snowy Circuits, New Year New Robots,
  Future At High Speed — not published (rank 0 of 0 on the season page).
- OPR for the 2026 (BioBuzz) season — no matches played yet.
- Match videos / playoff matches — pages state no playoff matches were played.

## Data-quality notes
- FTC Events aggregate season records ("3-13-0" for 2025, "9-13-0" for 2024) do not reconcile
  with the match tables shown on the same pages (e.g. 2025 visible qualification matches total
  10W-8L across 18 games). Values above are as published; the match-level records are in
  matches.json and are the verifiable source of truth.
- FTCStats SRLT row shows NP-OPR 0.5 / OPR 6.8 (vs ~25 for other events) — reported as
  published; appears anomalous (likely partial/placeholder data for a newer team).
