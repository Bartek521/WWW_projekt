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
  };
}

function saveVotes(votes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}

function updateResults() {
  const votes = getVotes();
  const list = document.getElementById("resultsList");
  list.innerHTML = "";
  for (const [brand, count] of Object.entries(votes)) {
    const li = document.createElement("li");
    li.textContent = `${brand}: ${count}`;
    list.appendChild(li);
  }
}

document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const selectedOption = document.querySelector('input[name="option"]:checked').value;

  const allowed = ["Audi", "BMW", "Mercedes", "Ferrari", "Lamborghini"];
  if (!allowed.includes(selectedOption)) {
    alert("Nieprawidłowa opcja.");
    return;
  }

  const votes = getVotes();
  votes[selectedOption] += 1;
  saveVotes(votes);
  alert(`Dziękujemy za głos, ${email}!`);
  this.reset();
  updateResults();
});

updateResults();