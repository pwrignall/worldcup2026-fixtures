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

const matches = fixtures.flatMap((dateItem) =>
  dateItem.fixtures.map((match) => ({ ...match, date: dateItem.date }))
);

function displayScoresAndExtraInfo() {
  for (let i = 0; i < matches.length; i++) {
    if (checkbox.checked) {
      if (matches[i].score !== "") {
        timeOrScoreSpans[i].textContent = matches[i].score;
      }
      if (matches[i].extraInfo) {
        matchElements[i].lastElementChild.textContent = matches[i].extraInfo;
      }
    } else {
      if (matches[i].score === "") {
        const dateTime = new Date(`${matches[i].date}T${matches[i].time}Z`);
        timeOrScoreSpans[i].textContent = dateTime
          .toLocaleTimeString("en-GB")
          .slice(0, -3)
          .replace(",", "");
      } else {
        timeOrScoreSpans[i].textContent = "f.t.";
      }
      if (matches[i].extraInfo) {
        matchElements[i].lastElementChild.textContent = "";
      }
    }
  }
}

const fixturesList = document.getElementById("fixtures-list");

fixtures.forEach((dateItem) => {
  const datePara = document.createElement("p");
  datePara.className = "date";
  datePara.textContent = new Date(`${dateItem.date}T14:00Z`)
    .toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .slice(0, -5)
    .replace(",", "");
  fixturesList.appendChild(datePara);

  dateItem.fixtures.forEach((match) => {
    const matchDiv = document.createElement("div");
    matchDiv.className = "match";

    const matchInfoDiv = document.createElement("div");
    matchInfoDiv.className = "match-info";

    const matchText = document.createElement("p");

    const stageSpan = document.createElement("span");
    stageSpan.className = "stage";
    stageSpan.textContent = match.stage;

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

    const venueSpan = document.createElement("span");
    venueSpan.className = "venue";
    venueSpan.textContent = match.venue;

    matchText.append(stageSpan, team1Span, timeOrScoreSpan, team2Span, venueSpan);
    matchInfoDiv.appendChild(matchText);
    matchDiv.appendChild(matchInfoDiv);

    if (match.extraInfo) {
      const extraInfoPara = document.createElement("p");
      extraInfoPara.className = "extra-info";
      matchDiv.appendChild(extraInfoPara);
    }

    fixturesList.appendChild(matchDiv);
  });
});

displayScoresAndExtraInfo();
