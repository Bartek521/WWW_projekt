document.addEventListener("DOMContentLoaded", () => {
  const jasny_ciemny = document.getElementById("jasny_ciemny");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    jasny_ciemny.textContent = "☀️";
  }

  jasny_ciemny.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    jasny_ciemny.textContent = isDark ? "☀️" : "🌛";
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });

  updateResults(); 
});

const STORAGE_KEY = "localVotes";

function getVotes() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {
    "Audi": 0,
    "BMW": 0,
    "Mercedes": 0,
    "Ferrari": 0,
    "Lamborghini": 0,
    "Porsche" : 0
  };
}

function saveVotes(votes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

function updateResults() {
  const votes = getVotes();
  const list = document.getElementById("resultsList");
  list.innerHTML = "";

  const sortedEntries = Object.entries(votes).sort((a, b) => b[1] - a[1]);

  for (const [brand, count] of sortedEntries) {
    const li = document.createElement("li");
    li.textContent = `${brand}: ${count}`;
    list.appendChild(li);
  }
}

document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const selectedOption = document.querySelector('input[name="option"]:checked');

  if (!selectedOption) {
    alert("Wybierz markę, zanim zagłosujesz.");
    return;
  }

  const value = selectedOption.value;
  const allowed = ["Audi", "BMW", "Mercedes", "Ferrari", "Lamborghini","Porsche"];

  if (!allowed.includes(value)) {
    alert("Nieprawidłowa opcja.");
    return;
  }

  const votes = getVotes();
  votes[value] += 1;
  saveVotes(votes);

  alert(`Dziękujemy za głos, ${email}!`);
  this.reset();
  updateResults();
});
