# 🛡️ GuardianTrail

**Real-time tourist safety powered by AI, geo-fencing, and blockchain.**

GuardianTrail is an open-source platform that gives tourists a verified digital identity, live safety zone monitoring, and a direct line to response officers — all in one lightweight web app that runs without any backend or build tooling.

&nbsp;

## Overview

Tourist safety is an unsolved infrastructure problem. Tourists arrive in unfamiliar cities, carry no verifiable identity beyond a paper document, and have no reliable way to summon help in a genuine emergency. Response teams, on the other hand, operate blind — with no live view of who is in their zone, no verified identity data, and no central incident record they can trust.

GuardianTrail addresses this gap end to end. Every tourist who registers receives a blockchain-anchored digital ID. Their location is continuously monitored against geo-fenced safety zones. If something goes wrong, a single button press sends their verified identity and live GPS to the nearest response officer. Every incident, every checkpoint scan, and every zone crossing is recorded in an immutable on-chain ledger.

&nbsp;

## Features

**Blockchain Digital ID**
Registration mints a tamper-proof identity token modelled on Ethereum. The resulting ID card contains a scannable QR code, the tourist's zone assignment, emergency contacts, and a complete audit log of every checkpoint interaction. Officers verify identity in seconds without any central database lookup.

**AI Geo-Fencing**
Safety zones are drawn directly on a live Leaflet map as three concentric ring types: safe, caution, and danger. The moment a tourist's GPS position crosses a boundary, both the tourist and the duty officer receive an automatic alert. An AI threat score recalculates every 60 seconds using location, crowd density, time of day, and historical zone incident data.

**SOS Panic Button**
Holding the SOS button for three seconds triggers a silent alarm with a circular SVG progress ring as visual feedback. A three second countdown fires before the alert broadcasts the tourist's blockchain ID, full name, and live GPS coordinates to the nearest response team. The hold mechanism prevents accidental triggers.

**Incident Reporting**
Tourists submit reports with photo evidence, GPS coordinates, a severity level, and a free-text description. As the tourist types, the system performs real-time keyword analysis and auto-suggests the most likely incident category in a highlighted AI suggestion box. Every submitted report generates an Ethereum-style transaction hash and block number.

**Incident Tracking Pipeline**
Each report moves through a four-stage visual pipeline: Reported, Dispatched, Investigating, and Resolved. Tourists can filter their incident history by status, severity, or date, and expand each card to view the full response timeline and blockchain receipt.

**Officer Command Center**
A separate staff portal gives response officers a live heatmap of all active tourists, an incoming incident feed, and the ability to update case statuses and verify blockchain IDs on the spot. Officers register by department — Tourist Police, Medical, Fire and Rescue, or Administration — and each session is scoped to their role.

**Blockchain Explorer**
A public ledger aggregates every on-chain event across the platform: ID mints, incident filings, zone check-ins, checkpoint scans, and resolutions. The explorer is fully searchable by transaction hash, tourist name, or blockchain address and renders in reverse-chronological order with live additions.

**Travel Journal**
Tourists log visited locations with notes during their trip. Every entry is geo-tagged and timestamped automatically. The journal forms a verifiable itinerary that can be exported or referenced in insurance or legal proceedings.

**Weather Safety Integration**
Live weather conditions are cross-referenced against zone safety status. Tourists receive a warning when a storm, extreme heat, or other hazardous condition is forecast for their current outdoor zone.

&nbsp;

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Fonts | Outfit and Space Mono via Google Fonts |
| Maps | Leaflet.js with OpenStreetMap and Leaflet.heat |
| QR Codes | QRCode.js |
| Storage | localStorage with a structured key-value schema |
| Blockchain | Client-side Ethereum-style transaction simulation |
| Hosting | Vercel, Netlify, GitHub Pages, or any static host |

&nbsp;

## Project Structure

```
guardiantrail/
├── index.html
├── registration.html
├── home.html
├── digital_id.html
├── sos.html
├── report.html
├── user_incidents.html
├── blockchain_explorer.html
├── staff_login.html
├── staff_register.html
├── staff_home.html
├── css/
│   ├── gt.css                  Shared design system and utility classes
│   ├── index.css
│   ├── home.css
│   ├── sos.css
│   ├── report.css
│   ├── digital_id.css
│   ├── blockchain_explorer.css
│   ├── registration.css
│   ├── staff_login.css
│   ├── staff_register.css
│   └── staff_home.css
└── js/
    ├── gt.js                   Shared utility object, GPS, clipboard helpers
    ├── index.js
    ├── home.js
    ├── sos.js
    ├── report.js
    ├── user_incidents.js
    ├── digital_id.js
    ├── blockchain_explorer.js
    ├── registration.js
    ├── staff_login.js
    ├── staff_register.js
    └── staff_home.js
```

&nbsp;

## Getting Started

```bash
git clone https://github.com/yourusername/guardiantrail.git
cd guardiantrail
```

Serve with any static file server:

```bash
npx serve .
```

or

```bash
python3 -m http.server 3000
```

Open `http://localhost:3000`. No build step, no package manager, no configuration.

&nbsp;

## Usage

**As a Tourist**

Register at `registration.html` and complete the four-step form covering personal details, travel information, emergency contacts, and medical notes. A blockchain ID is minted on completion. From the dashboard at `home.html` you can monitor your safety zone status, view your AI threat score, log journal entries, and access your Digital ID card. Use `sos.html` to send an emergency alert or `report.html` to file an incident.

**As a Response Officer**

Register at `staff_register.html` with your department and log in at `staff_login.html`. The command center at `staff_home.html` provides a live heatmap of active tourists, an incoming incident queue, and tools to update case statuses and verify tourist blockchain IDs.

&nbsp;

## Storage Schema

All data is stored in `localStorage`. Tourist records use the `tourist_` prefix.

```
tourist_name               Full name
tourist_email              Email address
tourist_phone              Phone number
tourist_nationality        Country of origin
tourist_passport           Passport or national ID number
tourist_zone               Assigned safety zone
tourist_arrivalDate        Arrival date
tourist_departureDate      Departure date
tourist_emergencyName      Emergency contact name
tourist_emergencyPhone     Emergency contact phone
tourist_medical            Medical notes or allergies
tourist_blockchainId       Minted blockchain address
tourist_safetyScore        Current AI safety score out of 100
tourist_registeredAt       ISO timestamp of registration
incidents                  JSON array of all incident objects
tourists                   JSON array of all registered tourists
travel_journal_{name}      JSON array of journal entries per tourist
staff_name                 Logged-in officer name
staff_dept                 Officer department
staff_logged               Officer session flag
```

&nbsp;

## Roadmap

- Smart contract deployment on Ethereum testnet for true on-chain ID minting
- Push notifications for geo-fence boundary crossings
- Multi-agency dispatch integration with real-time officer location sharing
- Native mobile apps for iOS and Android
- Admin analytics dashboard with zone-level incident density maps
- IPFS integration for decentralized document and evidence storage

