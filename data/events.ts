export interface MissionEvent {
  id: string;
  slug: string;
  missionNumber: string;
  title: string;
  category: 'internal' | 'external' | 'funzone';
  subCategory: 'department' | 'professional' | 'club' | 'gaming';
  department: string;
  date: string;
  time: string;
  venue: string;
  teamSize: string;
  entryFee: string;
  prizePool: string;
  registrationCode: string;
  registrationUrl: string;
  image: string;
  isFeatured: boolean;
  status: 'open' | 'filling-fast' | 'completed';
  description: string;
  rules: string[];
  coordinators: Array<{ name: string; phone: string }>;
}

export const missionEvents: MissionEvent[] = [
  {
    "id": "msn-kkxosm",
    "slug": "pitstop-2k25",
    "missionNumber": "MISSION 01",
    "title": "PITSTOP 2K25",
    "category": "internal",
    "subCategory": "department",
    "department": "Mechanical Engineering",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Solo Participant",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "kkxosm",
    "registrationUrl": "https://e.ajce.in/kkxosm",
    "image": "https://events.amaljyothi.ac.in/uploads/iv4g4x7bdy8.jpg",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-tr96ct",
    "slug": "two-wheeler-hands-on-workshop",
    "missionNumber": "MISSION 02",
    "title": "Two Wheeler hands on Workshop",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹150",
    "prizePool": "₹20,000",
    "registrationCode": "tr96ct",
    "registrationUrl": "https://e.ajce.in/tr96ct",
    "image": "https://events.amaljyothi.ac.in/uploads/mvkj1yn6bow.jpg",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-966yxi",
    "slug": "codechain-inspire-2k25",
    "missionNumber": "MISSION 03",
    "title": "CodeChain - Inspire 2k25",
    "category": "internal",
    "subCategory": "department",
    "department": "Computer Science & IT",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Solo Participant",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "966yxi",
    "registrationUrl": "https://e.ajce.in/966yxi",
    "image": "https://events.amaljyothi.ac.in/uploads/25duxrx916o0.png",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-pxruqq",
    "slug": "triple-tech-challenge",
    "missionNumber": "MISSION 04",
    "title": "Triple-Tech Challenge",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Digital Media & Gaming Zone",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹24,000",
    "registrationCode": "pxruqq",
    "registrationUrl": "https://e.ajce.in/pxruqq",
    "image": "/brand/Background.png",
    "isFeatured": true,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-yp9kub",
    "slug": "internal-event-auto-quiz-blitz",
    "missionNumber": "MISSION 05",
    "title": "INTERNAL EVENT: Auto Quiz Blitz",
    "category": "internal",
    "subCategory": "department",
    "department": "Electrical & Electronics (EEE)",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Digital Media & Gaming Zone",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹24,000",
    "registrationCode": "yp9kub",
    "registrationUrl": "https://e.ajce.in/yp9kub",
    "image": "/brand/Background.png",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-ngt6r3",
    "slug": "workshop-techcraft-lab",
    "missionNumber": "MISSION 06",
    "title": "WORKSHOP: TechCraft Lab",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "ngt6r3",
    "registrationUrl": "https://e.ajce.in/ngt6r3",
    "image": "/brand/Background.png",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-mcbdlz",
    "slug": "fun-games-challenge-zone",
    "missionNumber": "MISSION 07",
    "title": "FUN & GAMES: Challenge Zone",
    "category": "internal",
    "subCategory": "department",
    "department": "Gaming & Esports",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "mcbdlz",
    "registrationUrl": "https://e.ajce.in/mcbdlz",
    "image": "/brand/Background.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-qa28wu",
    "slug": "cutpost",
    "missionNumber": "MISSION 08",
    "title": "CUTPOST",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Mechanical Systems Foundry",
    "teamSize": "Solo Participant",
    "entryFee": "₹200",
    "prizePool": "₹12,000",
    "registrationCode": "qa28wu",
    "registrationUrl": "https://e.ajce.in/qa28wu",
    "image": "https://events.amaljyothi.ac.in/uploads/3b351j0sb8o0.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-1uq2n8",
    "slug": "rc-rush",
    "missionNumber": "MISSION 09",
    "title": "RC RUSH",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "1uq2n8",
    "registrationUrl": "https://e.ajce.in/1uq2n8",
    "image": "https://events.amaljyothi.ac.in/uploads/1eshs2mbcgbk.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-4ikqe0",
    "slug": "lucky-wheel",
    "missionNumber": "MISSION 10",
    "title": "LUCKY WHEEL",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Student Activity Centre",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹200",
    "prizePool": "₹22,000",
    "registrationCode": "4ikqe0",
    "registrationUrl": "https://e.ajce.in/4ikqe0",
    "image": "https://events.amaljyothi.ac.in/uploads/erixpyez480.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-u5krtj",
    "slug": "chemxtreme-chemical-engineering",
    "missionNumber": "MISSION 11",
    "title": "ChemXtreme-Chemical Engineering",
    "category": "internal",
    "subCategory": "department",
    "department": "Mechanical Engineering",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Digital Media & Gaming Zone",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹24,000",
    "registrationCode": "u5krtj",
    "registrationUrl": "https://e.ajce.in/u5krtj",
    "image": "https://events.amaljyothi.ac.in/uploads/mcv19u81wfk.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-yqv9il",
    "slug": "workshop-on-research-tools-for-ugpg-students-chemical-enineering",
    "missionNumber": "MISSION 12",
    "title": "Workshop on research tools for UG&PG students-Chemical Enineering",
    "category": "internal",
    "subCategory": "department",
    "department": "Chemical & Biotech",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Student Activity Centre",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹200",
    "prizePool": "₹22,000",
    "registrationCode": "yqv9il",
    "registrationUrl": "https://e.ajce.in/yqv9il",
    "image": "https://events.amaljyothi.ac.in/uploads/1r5ndyc6rtxc.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-7vtbc0",
    "slug": "kaun-banega-techpati",
    "missionNumber": "MISSION 13",
    "title": "Kaun Banega Techpati",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "7vtbc0",
    "registrationUrl": "https://e.ajce.in/7vtbc0",
    "image": "https://events.amaljyothi.ac.in/uploads/2tnj3j8qckq0.png",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-3tno88",
    "slug": "cybersculptures",
    "missionNumber": "MISSION 14",
    "title": "CyberSculptures",
    "category": "internal",
    "subCategory": "department",
    "department": "Computer Science & IT",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "3tno88",
    "registrationUrl": "https://e.ajce.in/3tno88",
    "image": "https://events.amaljyothi.ac.in/uploads/1tklczzdgdc0.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-2ehagd",
    "slug": "beyond-barriers-building-future",
    "missionNumber": "MISSION 15",
    "title": "Beyond Barriers, Building Future",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "2ehagd",
    "registrationUrl": "https://e.ajce.in/2ehagd",
    "image": "https://events.amaljyothi.ac.in/uploads/17asu2d8lj34.jpg",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-9toqn6",
    "slug": "khazana-street",
    "missionNumber": "MISSION 16",
    "title": "KHAZANA STREET",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "9toqn6",
    "registrationUrl": "https://e.ajce.in/9toqn6",
    "image": "https://events.amaljyothi.ac.in/uploads/7vw07p19yv8.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-vqltun",
    "slug": "survey-frenzy",
    "missionNumber": "MISSION 17",
    "title": "Survey Frenzy",
    "category": "internal",
    "subCategory": "department",
    "department": "Civil Engineering",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "Solo Participant",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "vqltun",
    "registrationUrl": "https://e.ajce.in/vqltun",
    "image": "https://events.amaljyothi.ac.in/uploads/31qose6nmok0.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-5k91ut",
    "slug": "introduction-to-rayon",
    "missionNumber": "MISSION 18",
    "title": "Introduction to RAYON",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "Solo Participant",
    "entryFee": "₹150",
    "prizePool": "₹20,000",
    "registrationCode": "5k91ut",
    "registrationUrl": "https://e.ajce.in/5k91ut",
    "image": "https://events.amaljyothi.ac.in/uploads/2335dxppfv8g.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-n0svad",
    "slug": "chess-tournament-ch",
    "missionNumber": "MISSION 19",
    "title": "Chess Tournament-CH",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Student Activity Centre",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹200",
    "prizePool": "₹22,000",
    "registrationCode": "n0svad",
    "registrationUrl": "https://e.ajce.in/n0svad",
    "image": "https://events.amaljyothi.ac.in/uploads/6puf0yr1wo8.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-6u0bu8",
    "slug": "robocraft-competition",
    "missionNumber": "MISSION 20",
    "title": "RoboCraft - Competition",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Central Arena & Main Stage",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹8,000",
    "registrationCode": "6u0bu8",
    "registrationUrl": "https://e.ajce.in/6u0bu8",
    "image": "/brand/Background.png",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-d2c6v9",
    "slug": "funzone-ch",
    "missionNumber": "MISSION 21",
    "title": "Funzone-CH",
    "category": "internal",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "d2c6v9",
    "registrationUrl": "https://e.ajce.in/d2c6v9",
    "image": "/brand/Background.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-ff0a6b",
    "slug": "ev-olution",
    "missionNumber": "MISSION 22",
    "title": "EV-olution",
    "category": "internal",
    "subCategory": "professional",
    "department": "Electrical & Electronics (EEE)",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Digital Media & Gaming Zone",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹250",
    "prizePool": "₹24,000",
    "registrationCode": "ff0a6b",
    "registrationUrl": "https://e.ajce.in/ff0a6b",
    "image": "https://events.amaljyothi.ac.in/uploads/22kmzd4w88w0.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-0zitvw",
    "slug": "scbmi-technical-workshop-from-signals-to-publications-writing-in-biomedical-engineering",
    "missionNumber": "MISSION 23",
    "title": "SCBMI - Technical Workshop: From Signals to Publications:  Writing in Biomedical Engineering",
    "category": "internal",
    "subCategory": "professional",
    "department": "Mechanical Engineering",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹300",
    "prizePool": "₹26,000",
    "registrationCode": "0zitvw",
    "registrationUrl": "https://e.ajce.in/0zitvw",
    "image": "https://events.amaljyothi.ac.in/uploads/2mrawd3q2ee0.png",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-p0pgax",
    "slug": "scbmi-e-poster-presentation-smart-healthcare-for-well-being",
    "missionNumber": "MISSION 24",
    "title": "SCBMI-E poster presentation: Smart Healthcare for Well Being",
    "category": "internal",
    "subCategory": "professional",
    "department": "Chemical & Biotech",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "p0pgax",
    "registrationUrl": "https://e.ajce.in/p0pgax",
    "image": "https://events.amaljyothi.ac.in/uploads/35e8igyi3t40.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-obtxia",
    "slug": "scbmi-technical-workshop-waste-to-wealth",
    "missionNumber": "MISSION 25",
    "title": "SCBMI-Technical workshop: Waste to Wealth",
    "category": "internal",
    "subCategory": "professional",
    "department": "Chemical & Biotech",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "obtxia",
    "registrationUrl": "https://e.ajce.in/obtxia",
    "image": "https://events.amaljyothi.ac.in/uploads/2g6hvvmllllw.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-7qdcck",
    "slug": "fold-and-fly",
    "missionNumber": "MISSION 26",
    "title": "Fold and Fly",
    "category": "internal",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹300",
    "prizePool": "₹26,000",
    "registrationCode": "7qdcck",
    "registrationUrl": "https://e.ajce.in/7qdcck",
    "image": "https://events.amaljyothi.ac.in/uploads/3f1f51dtzls0.jpeg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-p1ce32",
    "slug": "the-ink-battle",
    "missionNumber": "MISSION 27",
    "title": "The Ink battle",
    "category": "internal",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "Solo Participant",
    "entryFee": "₹300",
    "prizePool": "₹26,000",
    "registrationCode": "p1ce32",
    "registrationUrl": "https://e.ajce.in/p1ce32",
    "image": "https://events.amaljyothi.ac.in/uploads/1os6l1b8dadc.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-bncz5g",
    "slug": "fabric-fantasia",
    "missionNumber": "MISSION 28",
    "title": "Fabric fantasia",
    "category": "internal",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "bncz5g",
    "registrationUrl": "https://e.ajce.in/bncz5g",
    "image": "https://events.amaljyothi.ac.in/uploads/2akubxx1iwbo.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-wwqong",
    "slug": "strands-of-style",
    "missionNumber": "MISSION 29",
    "title": "Strands of Style",
    "category": "internal",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Advanced Computing Lab (Cyber District)",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹150",
    "prizePool": "₹10,000",
    "registrationCode": "wwqong",
    "registrationUrl": "https://e.ajce.in/wwqong",
    "image": "https://events.amaljyothi.ac.in/uploads/1psikvzg44hs.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-sw4p06",
    "slug": "cad-design-competition",
    "missionNumber": "MISSION 30",
    "title": "CAD DESIGN COMPETITION",
    "category": "internal",
    "subCategory": "club",
    "department": "Mechanical Engineering",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "Solo Participant",
    "entryFee": "₹300",
    "prizePool": "₹26,000",
    "registrationCode": "sw4p06",
    "registrationUrl": "https://e.ajce.in/sw4p06",
    "image": "https://events.amaljyothi.ac.in/uploads/1d7s132lro0w.jpg",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-w694lm",
    "slug": "prototype-challenge",
    "missionNumber": "MISSION 31",
    "title": "Prototype challenge",
    "category": "internal",
    "subCategory": "club",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "w694lm",
    "registrationUrl": "https://e.ajce.in/w694lm",
    "image": "https://events.amaljyothi.ac.in/uploads/1v2uhqyfuh7k.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-tm5068",
    "slug": "circuit-connections",
    "missionNumber": "MISSION 32",
    "title": "Circuit Connections",
    "category": "internal",
    "subCategory": "club",
    "department": "Electronics & Comm (ECE)",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Central Arena & Main Stage",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹100",
    "prizePool": "₹8,000",
    "registrationCode": "tm5068",
    "registrationUrl": "https://e.ajce.in/tm5068",
    "image": "https://events.amaljyothi.ac.in/uploads/1ifcowc5oz28.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-a88yo5",
    "slug": "gear-the-current",
    "missionNumber": "MISSION 33",
    "title": "GEAR  THE CURRENT",
    "category": "internal",
    "subCategory": "club",
    "department": "Mechanical Engineering",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "a88yo5",
    "registrationUrl": "https://e.ajce.in/a88yo5",
    "image": "https://events.amaljyothi.ac.in/uploads/3d7jqdrr4rg0.png",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-x09hwy",
    "slug": "asterisk-game-development-workshop",
    "missionNumber": "MISSION 34",
    "title": "ASTERISK - Game Development Workshop",
    "category": "internal",
    "subCategory": "club",
    "department": "Electrical & Electronics (EEE)",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Advanced Computing Lab (Cyber District)",
    "teamSize": "Solo Participant",
    "entryFee": "₹150",
    "prizePool": "₹10,000",
    "registrationCode": "x09hwy",
    "registrationUrl": "https://e.ajce.in/x09hwy",
    "image": "https://events.amaljyothi.ac.in/uploads/138duyqc3r1c.jpeg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-p2m9wg",
    "slug": "civiquiz-iiqs",
    "missionNumber": "MISSION 35",
    "title": "CiviQuiz - IIQS",
    "category": "internal",
    "subCategory": "club",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹300",
    "prizePool": "₹26,000",
    "registrationCode": "p2m9wg",
    "registrationUrl": "https://e.ajce.in/p2m9wg",
    "image": "https://events.amaljyothi.ac.in/uploads/1728g1roskao.jpg",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-vu93ps",
    "slug": "technical-talk-society-of-failure-analysis",
    "missionNumber": "MISSION 36",
    "title": "Technical Talk - Society of Failure Analysis",
    "category": "internal",
    "subCategory": "club",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Student Activity Centre",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹200",
    "prizePool": "₹22,000",
    "registrationCode": "vu93ps",
    "registrationUrl": "https://e.ajce.in/vu93ps",
    "image": "/brand/Background.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-p156ls",
    "slug": "engine-dismantling",
    "missionNumber": "MISSION 37",
    "title": "ENGINE DISMANTLING",
    "category": "external",
    "subCategory": "department",
    "department": "Mechanical Engineering",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹150",
    "prizePool": "₹20,000",
    "registrationCode": "p156ls",
    "registrationUrl": "https://e.ajce.in/p156ls",
    "image": "https://events.amaljyothi.ac.in/uploads/2lercyeqksa0.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-f8wc1q",
    "slug": "catachem-hackathon-chemical-engineering",
    "missionNumber": "MISSION 38",
    "title": "CataChem-Hackathon-Chemical Engineering",
    "category": "external",
    "subCategory": "department",
    "department": "Computer Science & IT",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "f8wc1q",
    "registrationUrl": "https://e.ajce.in/f8wc1q",
    "image": "https://events.amaljyothi.ac.in/uploads/3h048jnl9u60.jpg",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-ugx8zv",
    "slug": "popsicle-bridge-making",
    "missionNumber": "MISSION 39",
    "title": "Popsicle Bridge Making",
    "category": "external",
    "subCategory": "department",
    "department": "Civil Engineering",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Solo Participant",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "ugx8zv",
    "registrationUrl": "https://e.ajce.in/ugx8zv",
    "image": "https://events.amaljyothi.ac.in/uploads/2yu4b9j3c100.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-oljkmf",
    "slug": "ai-quiz-exclusively-for-school-students",
    "missionNumber": "MISSION 40",
    "title": "AI Quiz (*Exclusively for School Students)",
    "category": "external",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Digital Media & Gaming Zone",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹250",
    "prizePool": "₹24,000",
    "registrationCode": "oljkmf",
    "registrationUrl": "https://e.ajce.in/oljkmf",
    "image": "https://events.amaljyothi.ac.in/uploads/u8c8lfj2q40.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-sco0xx",
    "slug": "uno-dos-tres-codero",
    "missionNumber": "MISSION 41",
    "title": "Uno Dos Tres Codero",
    "category": "external",
    "subCategory": "department",
    "department": "Computer Science & IT",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "Solo Participant",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "sco0xx",
    "registrationUrl": "https://e.ajce.in/sco0xx",
    "image": "https://events.amaljyothi.ac.in/uploads/1fkunkco6om8.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-vssv3t",
    "slug": "idea-pitching",
    "missionNumber": "MISSION 42",
    "title": "Idea Pitching",
    "category": "external",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "vssv3t",
    "registrationUrl": "https://e.ajce.in/vssv3t",
    "image": "https://events.amaljyothi.ac.in/uploads/18qlckuzkw80.jpg",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-wkqpmt",
    "slug": "workshop-hands-on-with-food-tech-gadgets",
    "missionNumber": "MISSION 43",
    "title": "Workshop-Hands - On With Food Tech Gadgets",
    "category": "external",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Advanced Computing Lab (Cyber District)",
    "teamSize": "Solo Participant",
    "entryFee": "₹150",
    "prizePool": "₹10,000",
    "registrationCode": "wkqpmt",
    "registrationUrl": "https://e.ajce.in/wkqpmt",
    "image": "https://events.amaljyothi.ac.in/uploads/33bspsxvsco0.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-brdmpv",
    "slug": "pottery-making",
    "missionNumber": "MISSION 44",
    "title": "Pottery Making",
    "category": "external",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Central Arena & Main Stage",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹8,000",
    "registrationCode": "brdmpv",
    "registrationUrl": "https://e.ajce.in/brdmpv",
    "image": "https://events.amaljyothi.ac.in/uploads/13tult9erow0.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-v7a4rc",
    "slug": "mystery-box-challenge-inspire-2k25",
    "missionNumber": "MISSION 45",
    "title": "Mystery Box Challenge - Inspire 2k25",
    "category": "external",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹150",
    "prizePool": "₹20,000",
    "registrationCode": "v7a4rc",
    "registrationUrl": "https://e.ajce.in/v7a4rc",
    "image": "https://events.amaljyothi.ac.in/uploads/3dkqq18vebc0.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-ct6m4y",
    "slug": "clash-royale",
    "missionNumber": "MISSION 46",
    "title": "Clash Royale",
    "category": "external",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "ct6m4y",
    "registrationUrl": "https://e.ajce.in/ct6m4y",
    "image": "https://events.amaljyothi.ac.in/uploads/oflgs6zm5f4.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-fav5z4",
    "slug": "hackathon-to-start-up",
    "missionNumber": "MISSION 47",
    "title": "Hackathon To Start Up",
    "category": "external",
    "subCategory": "department",
    "department": "Computer Science & IT",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Student Activity Centre",
    "teamSize": "Solo Participant",
    "entryFee": "₹200",
    "prizePool": "₹22,000",
    "registrationCode": "fav5z4",
    "registrationUrl": "https://e.ajce.in/fav5z4",
    "image": "/brand/Background.png",
    "isFeatured": true,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-51llzq",
    "slug": "projects-a-way-to-build-life-long-learning-skills",
    "missionNumber": "MISSION 48",
    "title": "Projects - - A way to Build Life - Long Learning Skills",
    "category": "external",
    "subCategory": "department",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Central Arena & Main Stage",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹100",
    "prizePool": "₹8,000",
    "registrationCode": "51llzq",
    "registrationUrl": "https://e.ajce.in/51llzq",
    "image": "https://events.amaljyothi.ac.in/uploads/pgwx0c060vk.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-pclf9z",
    "slug": "uxperience-blankspace-community",
    "missionNumber": "MISSION 49",
    "title": "UXperience - Blankspace Community",
    "category": "external",
    "subCategory": "professional",
    "department": "Computer Science & IT",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "pclf9z",
    "registrationUrl": "https://e.ajce.in/pclf9z",
    "image": "https://events.amaljyothi.ac.in/uploads/yt9m93i98mo.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-iui151",
    "slug": "bgmi-tdm-tournament",
    "missionNumber": "MISSION 50",
    "title": "BGMI TDM Tournament",
    "category": "external",
    "subCategory": "professional",
    "department": "Gaming & Esports",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹300",
    "prizePool": "₹26,000",
    "registrationCode": "iui151",
    "registrationUrl": "https://e.ajce.in/iui151",
    "image": "https://events.amaljyothi.ac.in/uploads/m78zjiwop5s.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-5s2ly2",
    "slug": "prompt-canvas-blankspace-community",
    "missionNumber": "MISSION 51",
    "title": "Prompt Canvas - Blankspace Community",
    "category": "external",
    "subCategory": "professional",
    "department": "Computer Science & IT",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹150",
    "prizePool": "₹20,000",
    "registrationCode": "5s2ly2",
    "registrationUrl": "https://e.ajce.in/5s2ly2",
    "image": "https://events.amaljyothi.ac.in/uploads/2bb4rmit2fi8.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-hbvblw",
    "slug": "type-rush-blankspace-community",
    "missionNumber": "MISSION 52",
    "title": "Type Rush - Blankspace Community",
    "category": "external",
    "subCategory": "professional",
    "department": "Computer Science & IT",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "Solo Participant",
    "entryFee": "₹150",
    "prizePool": "₹20,000",
    "registrationCode": "hbvblw",
    "registrationUrl": "https://e.ajce.in/hbvblw",
    "image": "https://events.amaljyothi.ac.in/uploads/x0kqwotfksg.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-p0ezuf",
    "slug": "ai-workshop-gdg",
    "missionNumber": "MISSION 53",
    "title": "AI Workshop - GDG",
    "category": "external",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Central Arena & Main Stage",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹100",
    "prizePool": "₹8,000",
    "registrationCode": "p0ezuf",
    "registrationUrl": "https://e.ajce.in/p0ezuf",
    "image": "https://events.amaljyothi.ac.in/uploads/1jfvrz0qmhy8.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-vtloif",
    "slug": "prototype-challenge-1",
    "missionNumber": "MISSION 54",
    "title": "Prototype challenge",
    "category": "external",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "vtloif",
    "registrationUrl": "https://e.ajce.in/vtloif",
    "image": "https://events.amaljyothi.ac.in/uploads/ob2eqpvtipc.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-ts3ri0",
    "slug": "workshop-on-analytical-instruments-ch",
    "missionNumber": "MISSION 55",
    "title": "Workshop on analytical instruments-CH",
    "category": "external",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Digital Media & Gaming Zone",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹250",
    "prizePool": "₹24,000",
    "registrationCode": "ts3ri0",
    "registrationUrl": "https://e.ajce.in/ts3ri0",
    "image": "https://events.amaljyothi.ac.in/uploads/2cnyxv5qoexw.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-9cwuif",
    "slug": "welding-workshop",
    "missionNumber": "MISSION 56",
    "title": "Welding Workshop",
    "category": "external",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Student Activity Centre",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹200",
    "prizePool": "₹22,000",
    "registrationCode": "9cwuif",
    "registrationUrl": "https://e.ajce.in/9cwuif",
    "image": "https://events.amaljyothi.ac.in/uploads/2zzv9lz05vm0.jpeg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-eqzfhg",
    "slug": "the-reckoning-valorant-gaming-competition",
    "missionNumber": "MISSION 57",
    "title": "THE RECKONING - VALORANT (Gaming Competition)",
    "category": "external",
    "subCategory": "professional",
    "department": "Gaming & Esports",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "Solo Participant",
    "entryFee": "₹150",
    "prizePool": "₹20,000",
    "registrationCode": "eqzfhg",
    "registrationUrl": "https://e.ajce.in/eqzfhg",
    "image": "https://events.amaljyothi.ac.in/uploads/112ljksenrts.png",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-ddin74",
    "slug": "introduction-to-quantity-surveying-workshop",
    "missionNumber": "MISSION 58",
    "title": "Introduction to Quantity Surveying - Workshop",
    "category": "external",
    "subCategory": "professional",
    "department": "Civil Engineering",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Central Arena & Main Stage",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹100",
    "prizePool": "₹8,000",
    "registrationCode": "ddin74",
    "registrationUrl": "https://e.ajce.in/ddin74",
    "image": "https://events.amaljyothi.ac.in/uploads/23oil5f7ttds.jpg",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-vkcgqc",
    "slug": "tech-fest-25-iot-workshop",
    "missionNumber": "MISSION 59",
    "title": "TECH FEST 25 - IoT Workshop",
    "category": "external",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "vkcgqc",
    "registrationUrl": "https://e.ajce.in/vkcgqc",
    "image": "https://events.amaljyothi.ac.in/uploads/3hsh41kmpt60.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-a1k1ky",
    "slug": "tech-fest-25-patent-workshop",
    "missionNumber": "MISSION 60",
    "title": "TECH FEST 25 - Patent  Workshop",
    "category": "external",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "Solo Participant",
    "entryFee": "₹300",
    "prizePool": "₹26,000",
    "registrationCode": "a1k1ky",
    "registrationUrl": "https://e.ajce.in/a1k1ky",
    "image": "https://events.amaljyothi.ac.in/uploads/20q2rg1qp8qo.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-as3cbi",
    "slug": "fabrication-workshop-hands-on-workshop",
    "missionNumber": "MISSION 61",
    "title": "FABRICATION WORKSHOP | Hands-on  Workshop",
    "category": "external",
    "subCategory": "professional",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹300",
    "prizePool": "₹16,000",
    "registrationCode": "as3cbi",
    "registrationUrl": "https://e.ajce.in/as3cbi",
    "image": "https://events.amaljyothi.ac.in/uploads/3j35avifo3c0.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-zly0mk",
    "slug": "tech-fest-25-workshop-on-scanning-electron-microscope",
    "missionNumber": "MISSION 62",
    "title": "TECH FEST 25 - Workshop on Scanning Electron Microscope",
    "category": "external",
    "subCategory": "professional",
    "department": "Electronics & Comm (ECE)",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "zly0mk",
    "registrationUrl": "https://e.ajce.in/zly0mk",
    "image": "https://events.amaljyothi.ac.in/uploads/39utxbmclj20.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-ufw4l2",
    "slug": "state-level-webinar",
    "missionNumber": "MISSION 63",
    "title": "State level Webinar",
    "category": "external",
    "subCategory": "professional",
    "department": "Computer Science & IT",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Structural Engineering Hall",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹18,000",
    "registrationCode": "ufw4l2",
    "registrationUrl": "https://e.ajce.in/ufw4l2",
    "image": "/brand/Background.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-8eue9f",
    "slug": "scbmi-e-poster-presentation-smart-healthcare-for-well-being-1",
    "missionNumber": "MISSION 64",
    "title": "SCBMI-E poster presentation: Smart Healthcare for Well Being",
    "category": "external",
    "subCategory": "club",
    "department": "Chemical & Biotech",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹14,000",
    "registrationCode": "8eue9f",
    "registrationUrl": "https://e.ajce.in/8eue9f",
    "image": "https://events.amaljyothi.ac.in/uploads/qwpf8d2eh40.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-kllbd1",
    "slug": "scbmi-technical-workshop-from-signals-to-publications-writing-in-biomedical-engineering-1",
    "missionNumber": "MISSION 65",
    "title": "SCBMI - Technical Workshop: From Signals to Publications: Writing in Biomedical Engineering",
    "category": "external",
    "subCategory": "club",
    "department": "Mechanical Engineering",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Student Activity Centre",
    "teamSize": "Solo Participant",
    "entryFee": "₹200",
    "prizePool": "₹22,000",
    "registrationCode": "kllbd1",
    "registrationUrl": "https://e.ajce.in/kllbd1",
    "image": "https://events.amaljyothi.ac.in/uploads/2j6t25v74kk0.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-lb0wl1",
    "slug": "uav-design-and-analysis-challenge",
    "missionNumber": "MISSION 66",
    "title": "UAV Design and Analysis Challenge",
    "category": "external",
    "subCategory": "club",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Digital Media & Gaming Zone",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹250",
    "prizePool": "₹24,000",
    "registrationCode": "lb0wl1",
    "registrationUrl": "https://e.ajce.in/lb0wl1",
    "image": "https://events.amaljyothi.ac.in/uploads/8ocfb5yeegc.jpeg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-onax2n",
    "slug": "pes-solo",
    "missionNumber": "MISSION 67",
    "title": "Pes Solo",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "Gaming & Esports",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Advanced Computing Lab (Cyber District)",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹50",
    "prizePool": "₹4,000",
    "registrationCode": "onax2n",
    "registrationUrl": "https://e.ajce.in/onax2n",
    "image": "https://events.amaljyothi.ac.in/uploads/31ryvav2cuw0.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-y9kp45",
    "slug": "mini-militia-squad",
    "missionNumber": "MISSION 68",
    "title": "Mini Militia Squad",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹7,000",
    "registrationCode": "y9kp45",
    "registrationUrl": "https://e.ajce.in/y9kp45",
    "image": "https://events.amaljyothi.ac.in/uploads/2roxjmoxrkk0.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-xjmfd0",
    "slug": "game-zone-call-of-duty-warzone-exhibition-funzone",
    "missionNumber": "MISSION 69",
    "title": "Game Zone - Call of Duty Warzone, Exhibition & Funzone",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "Gaming & Esports",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹50",
    "prizePool": "₹4,000",
    "registrationCode": "xjmfd0",
    "registrationUrl": "https://e.ajce.in/xjmfd0",
    "image": "https://events.amaljyothi.ac.in/uploads/2ccue09l2hq8.png",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-li9kvr",
    "slug": "treasure-huntguess-the-orderstep-on-the-brick-fun-zone",
    "missionNumber": "MISSION 70",
    "title": "Treasure Hunt,Guess the order,Step on the Brick-Fun Zone",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "Civil Engineering",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Open Campus Amphitheatre",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹7,000",
    "registrationCode": "li9kvr",
    "registrationUrl": "https://e.ajce.in/li9kvr",
    "image": "/brand/Background.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-mc6qeh",
    "slug": "strikezone-carrom-game",
    "missionNumber": "MISSION 71",
    "title": "StrikeZone - Carrom game",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "Gaming & Esports",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Advanced Computing Lab (Cyber District)",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹150",
    "prizePool": "₹4,000",
    "registrationCode": "mc6qeh",
    "registrationUrl": "https://e.ajce.in/mc6qeh",
    "image": "https://events.amaljyothi.ac.in/uploads/1h4z4woi6480.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-m7mn2i",
    "slug": "immersix",
    "missionNumber": "MISSION 72",
    "title": "ImmersiX",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Electrical High-Voltage Grid",
    "teamSize": "Solo Participant",
    "entryFee": "₹100",
    "prizePool": "₹7,000",
    "registrationCode": "m7mn2i",
    "registrationUrl": "https://e.ajce.in/m7mn2i",
    "image": "https://events.amaljyothi.ac.in/uploads/2e2vjwt4cpgk.jpg",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-wr1ml9",
    "slug": "fun-zone-treasure-hunt",
    "missionNumber": "MISSION 73",
    "title": "Fun Zone-Treasure Hunt",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "General & Inter-Departmental",
    "date": "30 OCT 2026",
    "time": "10:00 AM — 01:30 PM",
    "venue": "Innovation & Incubation Hub",
    "teamSize": "1 — 2 Members",
    "entryFee": "₹50",
    "prizePool": "₹4,000",
    "registrationCode": "wr1ml9",
    "registrationUrl": "https://e.ajce.in/wr1ml9",
    "image": "https://events.amaljyothi.ac.in/uploads/2lzfqxj7uui0.png",
    "isFeatured": false,
    "status": "open",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  },
  {
    "id": "msn-6cmi6h",
    "slug": "arm-wrestling-ch",
    "missionNumber": "MISSION 74",
    "title": "Arm Wrestling-CH",
    "category": "funzone",
    "subCategory": "gaming",
    "department": "General & Inter-Departmental",
    "date": "31 OCT 2026",
    "time": "02:00 PM — 05:00 PM",
    "venue": "Robotics & Embedded Systems Lab",
    "teamSize": "Squad (Up to 4)",
    "entryFee": "₹150",
    "prizePool": "₹6,000",
    "registrationCode": "6cmi6h",
    "registrationUrl": "https://e.ajce.in/6cmi6h",
    "image": "https://events.amaljyothi.ac.in/uploads/20zficfb235s.jpg",
    "isFeatured": false,
    "status": "filling-fast",
    "description": "Classified tactical engagement for AITHRA 2026. Put your engineering, strategy, and rapid-response problem solving skills to the test against elite players across the state.",
    "rules": [
      "All participants must carry valid institutional identity cards or festival admission passes.",
      "Tactical deployment must begin promptly at the scheduled mission briefing time.",
      "Judges and tactical coordinators reserve final authority on rules of engagement and score validation.",
      "Any use of unauthorized equipment, telemetry tampering, or protocol breaches results in instant disqualification."
    ],
    "coordinators": [
      {
        "name": "Tactical Command",
        "phone": "+91 83019 90394"
      },
      {
        "name": "Mission Control",
        "phone": "+91 80753 13747"
      }
    ]
  }
];

export const categoriesList = [
  { id: 'all', label: 'ALL MISSIONS', count: 74 },
  { id: 'internal', label: 'INTERNAL MISSIONS', count: 36 },
  { id: 'external', label: 'EXTERNAL MISSIONS', count: 30 },
  { id: 'funzone', label: 'FUN ZONE', count: 8 },
];

export const departmentsList = [
  'All Departments',
  'Computer Science & IT',
  'Mechanical Engineering',
  'Electronics & Comm (ECE)',
  'Electrical & Electronics (EEE)',
  'Civil Engineering',
  'Chemical & Biotech',
  'Gaming & Esports',
  'General & Inter-Departmental'
];
