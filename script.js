function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach(function(screen) {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");
}

function selectMood(mood) {
  document.getElementById("moodText").innerText =
    "Today's mood selected: " + mood;
}

function saveJournal() {
  document.getElementById("journalMsg").innerText =
    "Your journal has been saved privately.";
}

function startBreathing() {
  document.getElementById("breathMsg").innerText =
    "Relax. Follow the circle and breathe slowly.";
}

function newQuote() {
  const quotes = [
    "You are stronger than you think.",
    "Small steps every day create big changes.",
    "Your feelings are valid.",
    "Take a deep breath. You are doing your best.",
    "Progress is progress, even if it is slow."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteText").innerText = quotes[randomIndex];
}