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
  const pojazdy = [
  {
    marka: "Ferrari",
    model: "812 Superfast",
    cena: 1600000,
    predkosc: 340,
    waga: 1525,
    dlugosc: 4657,
    szerokosc: 1971
  },
  {
    marka: "Lamborghini",
    model: "Aventador",
    cena: 1900000,
    predkosc: 350,
    waga: 1575,
    dlugosc: 4780,
    szerokosc: 2030
  },
  {
    marka: "Tesla",
    model: "Model S Plaid",
    cena: 700000,
    predkosc: 322,
    waga: 2162,
    dlugosc: 4970,
    szerokosc: 1964
  },
  {
    marka: "Porsche",
    model: "911 Turbo S",
    cena: 1050000,
    predkosc: 330,
    waga: 1640,
    dlugosc: 4535,
    szerokosc: 1900
  },
  {
  marka: "Ferrari",
  model: "812 Superfast",
  cena: 1600000,
  predkosc: 340,
  waga: 1525,
  dlugosc: 4657,
  szerokosc: 1971
},
{
  marka: "Lamborghini",
  model: "Revuelto",
  cena: 2600000,
  predkosc: 350,
  waga: 1772,
  dlugosc: 4947,
  szerokosc: 2033
},
{
  marka: "McLaren",
  model: "765LT",
  cena: 1700000,
  predkosc: 330,
  waga: 1339,
  dlugosc: 4600,
  szerokosc: 1930
},
{
  marka: "Bugatti",
  model: "Chiron Super Sport",
  cena: 15000000,
  predkosc: 440,
  waga: 1995,
  dlugosc: 4544,
  szerokosc: 2038
},
{
  marka: "Koenigsegg",
  model: "Jesko Absolut",
  cena: 14000000,
  predkosc: 480,
  waga: 1320,
  dlugosc: 4610,
  szerokosc: 2030
}
];

function renderujTabele(dane) {
  const tbody = document.querySelector("#tabela-ranking tbody");
  tbody.innerHTML = "";

  dane.forEach(auto => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${auto.marka}</td>
      <td>${auto.model}</td>
      <td>${auto.cena.toLocaleString("pl-PL")} zł</td>
      <td>${auto.predkosc} km/h</td>
      <td>${auto.waga} kg</td>
      <td>${auto.dlugosc} mm</td>
      <td>${auto.szerokosc} mm</td>
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("sortowanie");
  renderujTabele(pojazdy);

  select.addEventListener("change", () => {
    const kryterium = select.value;
    const posortowane = [...pojazdy].sort((a, b) => a[kryterium] - b[kryterium]);
    renderujTabele(posortowane);
  });
});