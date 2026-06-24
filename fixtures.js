// FIFA World Cup 2026 Fixtures
// All times are UTC
// Sources: NBC Sports, Yahoo Sports, Sky Sports (cross-verified)
// Tournament: June 11 – July 19, 2026
// Hosts: USA, Canada, Mexico

const fixtures = [
  {
    datetime: "2026-06-11T19:00:00Z",
    team1: "Mexico",
    team2: "South Africa",
    stage: "Group A",
    venue: "Estadio Azteca, Mexico City",
    city: "Mexico City",
    country: "Mexico",
    score: "2 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-12T02:00:00Z",
    team1: "South Korea",
    team2: "Czech Republic",
    stage: "Group A",
    venue: "Estadio Akron, Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    score: "2 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-12T19:00:00Z",
    team1: "Canada",
    team2: "Bosnia-Herzegovina",
    stage: "Group B",
    venue: "BMO Field, Toronto",
    city: "Toronto",
    country: "Canada",
    score: "1 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-13T01:00:00Z",
    team1: "USA",
    team2: "Paraguay",
    stage: "Group D",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "4 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-13T19:00:00Z",
    team1: "Qatar",
    team2: "Switzerland",
    stage: "Group B",
    venue: "Levi's Stadium, Santa Clara",
    city: "San Francisco Bay Area",
    country: "USA",
    score: "1 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-13T22:00:00Z",
    team1: "Brazil",
    team2: "Morocco",
    stage: "Group C",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "1 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-14T01:00:00Z",
    team1: "Haiti",
    team2: "Scotland",
    stage: "Group C",
    venue: "Gillette Stadium, Foxborough",
    city: "Boston",
    country: "USA",
    score: "0 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-14T04:00:00Z",
    team1: "Australia",
    team2: "Türkiye",
    stage: "Group D",
    venue: "BC Place, Vancouver",
    city: "Vancouver",
    country: "Canada",
    score: "2 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-14T17:00:00Z",
    team1: "Germany",
    team2: "Curaçao",
    stage: "Group E",
    venue: "NRG Stadium, Houston",
    city: "Houston",
    country: "USA",
    score: "7 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-14T20:00:00Z",
    team1: "Netherlands",
    team2: "Japan",
    stage: "Group F",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "2 - 2",
    extraInfo: ""
  },

  {
    datetime: "2026-06-14T23:00:00Z",
    team1: "Ivory Coast",
    team2: "Ecuador",
    stage: "Group E",
    venue: "Lincoln Financial Field, Philadelphia",
    city: "Philadelphia",
    country: "USA",
    score: "1 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-15T02:00:00Z",
    team1: "Sweden",
    team2: "Tunisia",
    stage: "Group F",
    venue: "Estadio BBVA, Monterrey",
    city: "Monterrey",
    country: "Mexico",
    score: "5 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-15T16:00:00Z",
    team1: "Spain",
    team2: "Cape Verde",
    stage: "Group H",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "0 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-15T19:00:00Z",
    team1: "Belgium",
    team2: "Egypt",
    stage: "Group G",
    venue: "Lumen Field, Seattle",
    city: "Seattle",
    country: "USA",
    score: "1 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-15T22:00:00Z",
    team1: "Saudi Arabia",
    team2: "Uruguay",
    stage: "Group H",
    venue: "Hard Rock Stadium, Miami",
    city: "Miami",
    country: "USA",
    score: "1 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-16T01:00:00Z",
    team1: "Iran",
    team2: "New Zealand",
    stage: "Group G",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "2 - 2",
    extraInfo: ""
  },

  {
    datetime: "2026-06-16T19:00:00Z",
    team1: "France",
    team2: "Senegal",
    stage: "Group I",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "3 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-16T22:00:00Z",
    team1: "Iraq",
    team2: "Norway",
    stage: "Group I",
    venue: "Gillette Stadium, Foxborough",
    city: "Boston",
    country: "USA",
    score: "1 - 4",
    extraInfo: ""
  },

  {
    datetime: "2026-06-17T01:00:00Z",
    team1: "Argentina",
    team2: "Algeria",
    stage: "Group J",
    venue: "Arrowhead Stadium, Kansas City",
    city: "Kansas City",
    country: "USA",
    score: "3 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-17T04:00:00Z",
    team1: "Austria",
    team2: "Jordan",
    stage: "Group J",
    venue: "Levi's Stadium, Santa Clara",
    city: "San Francisco Bay Area",
    country: "USA",
    score: "3 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-17T17:00:00Z",
    team1: "Portugal",
    team2: "DR Congo",
    stage: "Group K",
    venue: "NRG Stadium, Houston",
    city: "Houston",
    country: "USA",
    score: "1 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-17T20:00:00Z",
    team1: "England",
    team2: "Croatia",
    stage: "Group L",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "4 - 2",
    extraInfo: ""
  },

  {
    datetime: "2026-06-17T23:00:00Z",
    team1: "Ghana",
    team2: "Panama",
    stage: "Group L",
    venue: "BMO Field, Toronto",
    city: "Toronto",
    country: "Canada",
    score: "1 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-18T02:00:00Z",
    team1: "Uzbekistan",
    team2: "Colombia",
    stage: "Group K",
    venue: "Estadio Azteca, Mexico City",
    city: "Mexico City",
    country: "Mexico",
    score: "1 - 3",
    extraInfo: ""
  },

  {
    datetime: "2026-06-18T16:00:00Z",
    team1: "Czech Republic",
    team2: "South Africa",
    stage: "Group A",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "1 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-18T19:00:00Z",
    team1: "Switzerland",
    team2: "Bosnia-Herzegovina",
    stage: "Group B",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "4 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-18T22:00:00Z",
    team1: "Canada",
    team2: "Qatar",
    stage: "Group B",
    venue: "BC Place, Vancouver",
    city: "Vancouver",
    country: "Canada",
    score: "6 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-19T01:00:00Z",
    team1: "Mexico",
    team2: "South Korea",
    stage: "Group A",
    venue: "Estadio Akron, Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    score: "1 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-19T19:00:00Z",
    team1: "USA",
    team2: "Australia",
    stage: "Group D",
    venue: "Lumen Field, Seattle",
    city: "Seattle",
    country: "USA",
    score: "2 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-19T22:00:00Z",
    team1: "Scotland",
    team2: "Morocco",
    stage: "Group C",
    venue: "Gillette Stadium, Foxborough",
    city: "Boston",
    country: "USA",
    score: "0 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-20T00:30:00Z",
    team1: "Brazil",
    team2: "Haiti",
    stage: "Group C",
    venue: "Lincoln Financial Field, Philadelphia",
    city: "Philadelphia",
    country: "USA",
    score: "3 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-20T03:00:00Z",
    team1: "Türkiye",
    team2: "Paraguay",
    stage: "Group D",
    venue: "Levi's Stadium, Santa Clara",
    city: "San Francisco Bay Area",
    country: "USA",
    score: "0 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-20T17:00:00Z",
    team1: "Netherlands",
    team2: "Sweden",
    stage: "Group F",
    venue: "NRG Stadium, Houston",
    city: "Houston",
    country: "USA",
    score: "5 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-20T20:00:00Z",
    team1: "Germany",
    team2: "Ivory Coast",
    stage: "Group E",
    venue: "BMO Field, Toronto",
    city: "Toronto",
    country: "Canada",
    score: "2 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-21T00:00:00Z",
    team1: "Ecuador",
    team2: "Curaçao",
    stage: "Group E",
    venue: "Arrowhead Stadium, Kansas City",
    city: "Kansas City",
    country: "USA",
    score: "0 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-21T04:00:00Z",
    team1: "Tunisia",
    team2: "Japan",
    stage: "Group F",
    venue: "Estadio BBVA, Monterrey",
    city: "Monterrey",
    country: "Mexico",
    score: "0 - 4",
    extraInfo: ""
  },

  {
    datetime: "2026-06-21T16:00:00Z",
    team1: "Spain",
    team2: "Saudi Arabia",
    stage: "Group H",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "4 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-21T19:00:00Z",
    team1: "Belgium",
    team2: "Iran",
    stage: "Group G",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "0 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-21T22:00:00Z",
    team1: "Uruguay",
    team2: "Cape Verde",
    stage: "Group H",
    venue: "Hard Rock Stadium, Miami",
    city: "Miami",
    country: "USA",
    score: "2 - 2",
    extraInfo: ""
  },

  {
    datetime: "2026-06-22T01:00:00Z",
    team1: "New Zealand",
    team2: "Egypt",
    stage: "Group G",
    venue: "BC Place, Vancouver",
    city: "Vancouver",
    country: "Canada",
    score: "1 - 3",
    extraInfo: ""
  },

  {
    datetime: "2026-06-22T17:00:00Z",
    team1: "Argentina",
    team2: "Austria",
    stage: "Group J",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "2 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-22T21:00:00Z",
    team1: "France",
    team2: "Iraq",
    stage: "Group I",
    venue: "Lincoln Financial Field, Philadelphia",
    city: "Philadelphia",
    country: "USA",
    score: "3 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-23T00:00:00Z",
    team1: "Norway",
    team2: "Senegal",
    stage: "Group I",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "3 - 2",
    extraInfo: ""
  },

  {
    datetime: "2026-06-23T03:00:00Z",
    team1: "Jordan",
    team2: "Algeria",
    stage: "Group J",
    venue: "Levi's Stadium, Santa Clara",
    city: "San Francisco Bay Area",
    country: "USA",
    score: "1 - 2",
    extraInfo: ""
  },

  {
    datetime: "2026-06-23T17:00:00Z",
    team1: "Portugal",
    team2: "Uzbekistan",
    stage: "Group K",
    venue: "NRG Stadium, Houston",
    city: "Houston",
    country: "USA",
    score: "5 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-23T20:00:00Z",
    team1: "England",
    team2: "Ghana",
    stage: "Group L",
    venue: "Gillette Stadium, Foxborough",
    city: "Boston",
    country: "USA",
    score: "0 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-23T23:00:00Z",
    team1: "Panama",
    team2: "Croatia",
    stage: "Group L",
    venue: "BMO Field, Toronto",
    city: "Toronto",
    country: "Canada",
    score: "0 - 1",
    extraInfo: ""
  },

  {
    datetime: "2026-06-24T02:00:00Z",
    team1: "Colombia",
    team2: "DR Congo",
    stage: "Group K",
    venue: "Estadio Akron, Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    score: "1 - 0",
    extraInfo: ""
  },

  {
    datetime: "2026-06-24T19:00:00Z",
    team1: "Switzerland",
    team2: "Canada",
    stage: "Group B",
    venue: "BC Place, Vancouver",
    city: "Vancouver",
    country: "Canada",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-24T19:00:00Z",
    team1: "Bosnia-Herzegovina",
    team2: "Qatar",
    stage: "Group B",
    venue: "Lumen Field, Seattle",
    city: "Seattle",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-24T22:00:00Z",
    team1: "Scotland",
    team2: "Brazil",
    stage: "Group C",
    venue: "Hard Rock Stadium, Miami",
    city: "Miami",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-24T22:00:00Z",
    team1: "Morocco",
    team2: "Haiti",
    stage: "Group C",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-25T01:00:00Z",
    team1: "Czech Republic",
    team2: "Mexico",
    stage: "Group A",
    venue: "Estadio Azteca, Mexico City",
    city: "Mexico City",
    country: "Mexico",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-25T01:00:00Z",
    team1: "South Africa",
    team2: "South Korea",
    stage: "Group A",
    venue: "Estadio BBVA, Monterrey",
    city: "Monterrey",
    country: "Mexico",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-25T20:00:00Z",
    team1: "Curaçao",
    team2: "Ivory Coast",
    stage: "Group E",
    venue: "Lincoln Financial Field, Philadelphia",
    city: "Philadelphia",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-25T20:00:00Z",
    team1: "Ecuador",
    team2: "Germany",
    stage: "Group E",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-25T23:00:00Z",
    team1: "Japan",
    team2: "Sweden",
    stage: "Group F",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-25T23:00:00Z",
    team1: "Tunisia",
    team2: "Netherlands",
    stage: "Group F",
    venue: "Arrowhead Stadium, Kansas City",
    city: "Kansas City",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-26T02:00:00Z",
    team1: "Türkiye",
    team2: "USA",
    stage: "Group D",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-26T02:00:00Z",
    team1: "Paraguay",
    team2: "Australia",
    stage: "Group D",
    venue: "Levi's Stadium, Santa Clara",
    city: "San Francisco Bay Area",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-26T19:00:00Z",
    team1: "Norway",
    team2: "France",
    stage: "Group I",
    venue: "Gillette Stadium, Foxborough",
    city: "Boston",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-26T19:00:00Z",
    team1: "Senegal",
    team2: "Iraq",
    stage: "Group I",
    venue: "BMO Field, Toronto",
    city: "Toronto",
    country: "Canada",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T00:00:00Z",
    team1: "Cape Verde",
    team2: "Saudi Arabia",
    stage: "Group H",
    venue: "NRG Stadium, Houston",
    city: "Houston",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T00:00:00Z",
    team1: "Uruguay",
    team2: "Spain",
    stage: "Group H",
    venue: "Estadio Akron, Guadalajara",
    city: "Guadalajara",
    country: "Mexico",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T03:00:00Z",
    team1: "Egypt",
    team2: "Iran",
    stage: "Group G",
    venue: "Lumen Field, Seattle",
    city: "Seattle",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T03:00:00Z",
    team1: "New Zealand",
    team2: "Belgium",
    stage: "Group G",
    venue: "BC Place, Vancouver",
    city: "Vancouver",
    country: "Canada",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T21:00:00Z",
    team1: "Panama",
    team2: "England",
    stage: "Group L",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T21:00:00Z",
    team1: "Croatia",
    team2: "Ghana",
    stage: "Group L",
    venue: "Lincoln Financial Field, Philadelphia",
    city: "Philadelphia",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T23:30:00Z",
    team1: "Colombia",
    team2: "Portugal",
    stage: "Group K",
    venue: "Hard Rock Stadium, Miami",
    city: "Miami",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-27T23:30:00Z",
    team1: "DR Congo",
    team2: "Uzbekistan",
    stage: "Group K",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-28T02:00:00Z",
    team1: "Jordan",
    team2: "Argentina",
    stage: "Group J",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-28T02:00:00Z",
    team1: "Algeria",
    team2: "Austria",
    stage: "Group J",
    venue: "Arrowhead Stadium, Kansas City",
    city: "Kansas City",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-28T19:00:00Z",
    team1: "Group A runners-up",
    team2: "Group B runners-up",
    stage: "Round of 32",
    matchSlot: "Match 73",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-29T17:00:00Z",
    team1: "Group C winners",
    team2: "Group F runners-up",
    stage: "Round of 32",
    matchSlot: "Match 76",
    venue: "NRG Stadium, Houston",
    city: "Houston",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-29T20:30:00Z",
    team1: "Group E winners",
    team2: "Best 3rd (A/B/C/D/F)",
    stage: "Round of 32",
    matchSlot: "Match 74",
    venue: "Gillette Stadium, Foxborough",
    city: "Boston",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-30T01:00:00Z",
    team1: "Group A winners",
    team2: "Best 3rd (C/E/F/H/I)",
    stage: "Round of 32",
    matchSlot: "Match 79",
    venue: "Estadio Azteca, Mexico City",
    city: "Mexico City",
    country: "Mexico",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-30T17:00:00Z",
    team1: "Group E runners-up",
    team2: "Group I runners-up",
    stage: "Round of 32",
    matchSlot: "Match 78",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-06-30T21:00:00Z",
    team1: "Group I winners",
    team2: "Best 3rd (C/D/F/G/H)",
    stage: "Round of 32",
    matchSlot: "Match 77",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-01T01:00:00Z",
    team1: "Group F winners",
    team2: "Group C runners-up",
    stage: "Round of 32",
    matchSlot: "Match 75",
    venue: "Estadio BBVA, Monterrey",
    city: "Monterrey",
    country: "Mexico",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-01T16:00:00Z",
    team1: "Group L winners",
    team2: "Best 3rd (E/H/I/J/K)",
    stage: "Round of 32",
    matchSlot: "Match 80",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-01T20:00:00Z",
    team1: "Group G winners",
    team2: "Best 3rd (A/E/H/I/J)",
    stage: "Round of 32",
    matchSlot: "Match 82",
    venue: "Lumen Field, Seattle",
    city: "Seattle",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-02T00:00:00Z",
    team1: "Group D winners",
    team2: "Best 3rd (B/E/F/I/J)",
    stage: "Round of 32",
    matchSlot: "Match 81",
    venue: "Levi's Stadium, Santa Clara",
    city: "San Francisco Bay Area",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-02T19:00:00Z",
    team1: "Group H winners",
    team2: "Group J runners-up",
    stage: "Round of 32",
    matchSlot: "Match 84",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-02T23:00:00Z",
    team1: "Group K runners-up",
    team2: "Group L runners-up",
    stage: "Round of 32",
    matchSlot: "Match 83",
    venue: "BMO Field, Toronto",
    city: "Toronto",
    country: "Canada",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-03T03:00:00Z",
    team1: "Group B winners",
    team2: "Best 3rd (E/F/G/I/J)",
    stage: "Round of 32",
    matchSlot: "Match 85",
    venue: "BC Place, Vancouver",
    city: "Vancouver",
    country: "Canada",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-03T18:00:00Z",
    team1: "Group D runners-up",
    team2: "Group G runners-up",
    stage: "Round of 32",
    matchSlot: "Match 88",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-03T22:00:00Z",
    team1: "Group J winners",
    team2: "Group H runners-up",
    stage: "Round of 32",
    matchSlot: "Match 86",
    venue: "Hard Rock Stadium, Miami",
    city: "Miami",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-04T01:30:00Z",
    team1: "Group K winners",
    team2: "Best 3rd (D/E/I/J/L)",
    stage: "Round of 32",
    matchSlot: "Match 87",
    venue: "Arrowhead Stadium, Kansas City",
    city: "Kansas City",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-04T17:00:00Z",
    team1: "Winner Match 73",
    team2: "Winner Match 75",
    stage: "Round of 16",
    matchSlot: "Match 90",
    venue: "NRG Stadium, Houston",
    city: "Houston",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-04T21:00:00Z",
    team1: "Winner Match 74",
    team2: "Winner Match 77",
    stage: "Round of 16",
    matchSlot: "Match 89",
    venue: "Lincoln Financial Field, Philadelphia",
    city: "Philadelphia",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-05T20:00:00Z",
    team1: "Winner Match 76",
    team2: "Winner Match 78",
    stage: "Round of 16",
    matchSlot: "Match 91",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-06T00:00:00Z",
    team1: "Winner Match 79",
    team2: "Winner Match 80",
    stage: "Round of 16",
    matchSlot: "Match 92",
    venue: "Estadio Azteca, Mexico City",
    city: "Mexico City",
    country: "Mexico",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-06T19:00:00Z",
    team1: "Winner Match 83",
    team2: "Winner Match 84",
    stage: "Round of 16",
    matchSlot: "Match 93",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-07T00:00:00Z",
    team1: "Winner Match 81",
    team2: "Winner Match 82",
    stage: "Round of 16",
    matchSlot: "Match 94",
    venue: "Lumen Field, Seattle",
    city: "Seattle",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-07T16:00:00Z",
    team1: "Winner Match 86",
    team2: "Winner Match 88",
    stage: "Round of 16",
    matchSlot: "Match 95",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-07T20:00:00Z",
    team1: "Winner Match 85",
    team2: "Winner Match 87",
    stage: "Round of 16",
    matchSlot: "Match 96",
    venue: "BC Place, Vancouver",
    city: "Vancouver",
    country: "Canada",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-09T20:00:00Z",
    team1: "Winner Match 89",
    team2: "Winner Match 90",
    stage: "Quarter-Final",
    matchSlot: "Match 97",
    venue: "Gillette Stadium, Foxborough",
    city: "Boston",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-10T19:00:00Z",
    team1: "Winner Match 93",
    team2: "Winner Match 94",
    stage: "Quarter-Final",
    matchSlot: "Match 98",
    venue: "SoFi Stadium, Los Angeles",
    city: "Los Angeles",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-11T21:00:00Z",
    team1: "Winner Match 91",
    team2: "Winner Match 92",
    stage: "Quarter-Final",
    matchSlot: "Match 99",
    venue: "Hard Rock Stadium, Miami",
    city: "Miami",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-12T01:00:00Z",
    team1: "Winner Match 95",
    team2: "Winner Match 96",
    stage: "Quarter-Final",
    matchSlot: "Match 100",
    venue: "Arrowhead Stadium, Kansas City",
    city: "Kansas City",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-14T19:00:00Z",
    team1: "Winner Match 97",
    team2: "Winner Match 98",
    stage: "Semi-Final",
    matchSlot: "Match 101",
    venue: "AT&T Stadium, Arlington",
    city: "Dallas",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-15T19:00:00Z",
    team1: "Winner Match 99",
    team2: "Winner Match 100",
    stage: "Semi-Final",
    matchSlot: "Match 102",
    venue: "Mercedes-Benz Stadium, Atlanta",
    city: "Atlanta",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-18T21:00:00Z",
    team1: "Loser Match 101",
    team2: "Loser Match 102",
    stage: "Third-Place Play-off",
    matchSlot: "Match 103",
    venue: "Hard Rock Stadium, Miami",
    city: "Miami",
    country: "USA",
    score: "",
    extraInfo: ""
  },

  {
    datetime: "2026-07-19T19:00:00Z",
    team1: "Winner Match 101",
    team2: "Winner Match 102",
    stage: "Final",
    matchSlot: "Match 104",
    venue: "MetLife Stadium, New York/New Jersey",
    city: "East Rutherford",
    country: "USA",
    score: "",
    extraInfo: ""
  }

];
