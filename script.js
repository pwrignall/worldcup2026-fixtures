const countryFlags = {
  "Mexico": "🇲🇽",
  "South Korea": "🇰🇷",
  "Czech Republic": "🇨🇿",
  "South Africa": "🇿🇦",
  "Canada": "🇨🇦",
  "Bosnia and Herzegovina": "🇧🇦",
  "Switzerland": "🇨🇭",
  "Qatar": "🇶🇦",
  "Brazil": "🇧🇷",
  "Morocco": "🇲🇦",
  "Scotland": "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
  "Haiti": "🇭🇹",
  "USA": "🇺🇸",
  "Paraguay": "🇵🇾",
  "Türkiye": "🇹🇷",
  "Australia": "🇦🇺",
  "Germany": "🇩🇪",
  "Ivory Coast": "🇨🇮",
  "Ecuador": "🇪🇨",
  "Curaçao": "🇨🇼",
  "Netherlands": "🇳🇱",
  "Sweden": "🇸🇪",
  "Japan": "🇯🇵",
  "Tunisia": "🇹🇳",
  "Belgium": "🇧🇪",
  "Iran": "🇮🇷",
  "New Zealand": "🇳🇿",
  "Egypt": "🇪🇬",
  "Spain": "🇪🇸",
  "Saudi Arabia": "🇸🇦",
  "Uruguay": "🇺🇾",
  "Cape Verde": "🇨🇻",
  "France": "🇫🇷",
  "Iraq": "🇮🇶",
  "Norway": "🇳🇴",
  "Senegal": "🇸🇳",
  "Argentina": "🇦🇷",
  "Jordan": "🇯🇴",
  "Austria": "🇦🇹",
  "Algeria": "🇩🇿",
  "Portugal": "🇵🇹",
  "Uzbekistan": "🇺🇿",
  "DR Congo": "🇨🇩",
  "Colombia": "🇨🇴",
  "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  "Croatia": "🇭🇷",
  "Panama": "🇵🇦",
  "Ghana": "🇬🇭",
};

const checkbox = document.getElementById("swap-checkbox");
const timeOrScoreSpans = document.getElementsByClassName("time-score");
const matchElements = document.getElementsByClassName("match");

// Pre-compute a locale date label for each fixture so the render loop
// can insert date headers whenever the local date changes.
const fixturesWithLocalDate = fixtures.map((match) => {
  const dt = new Date(match.datetime);
  return {
    ...match,
    localDateLabel: dt.toLocaleDateString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
    }),
  };
});

function displayScoresAndExtraInfo() {
  for (let i = 0; i < fixtures.length; i++) {
    if (checkbox.checked) {
      if (fixtures[i].score !== "") {
        timeOrScoreSpans[i].textContent = fixtures[i].score;
      }
      if (fixtures[i].extraInfo) {
        matchElements[i].lastElementChild.textContent = fixtures[i].extraInfo;
      }
    } else {
      if (fixtures[i].score === "") {
        timeOrScoreSpans[i].textContent = new Date(fixtures[i].datetime)
          .toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
      } else {
        timeOrScoreSpans[i].textContent = "f.t.";
      }
      if (fixtures[i].extraInfo) {
        matchElements[i].lastElementChild.textContent = "";
      }
    }
  }
}

const fixturesList = document.getElementById("fixtures-list");

let currentDateLabel = null;
fixturesWithLocalDate.forEach((match) => {
  if (match.localDateLabel !== currentDateLabel) {
    currentDateLabel = match.localDateLabel;
    const datePara = document.createElement("p");
    datePara.className = "date";
    datePara.textContent = match.localDateLabel;
    fixturesList.appendChild(datePara);
  }

  const matchDiv = document.createElement("div");
  matchDiv.className = "match";

  // Row 1: Team1 [flag]   time/score   [flag] Team2
  const teamsPara = document.createElement("p");
  teamsPara.className = "match-teams";

  const team1Span = document.createElement("span");
  team1Span.className = "team team1";
  const flag1 = countryFlags[match.team1];
  team1Span.textContent = flag1 ? `${match.team1} ${flag1}` : match.team1;

  const timeOrScoreSpan = document.createElement("span");
  timeOrScoreSpan.className = "time-score";

  const team2Span = document.createElement("span");
  team2Span.className = "team team2";
  const flag2 = countryFlags[match.team2];
  team2Span.textContent = flag2 ? `${flag2} ${match.team2}` : match.team2;

  teamsPara.append(team1Span, timeOrScoreSpan, team2Span);
  matchDiv.appendChild(teamsPara);

  // Row 2: Stage · Venue
  const metaPara = document.createElement("p");
  metaPara.className = "match-meta";
  metaPara.textContent = `${match.stage} · ${match.venue}`;
  matchDiv.appendChild(metaPara);

  if (match.extraInfo) {
    const extraInfoPara = document.createElement("p");
    extraInfoPara.className = "extra-info";
    matchDiv.appendChild(extraInfoPara);
  }

  fixturesList.appendChild(matchDiv);
});

displayScoresAndExtraInfo();
