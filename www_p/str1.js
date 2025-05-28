document.addEventListener("DOMContentLoaded", () => {
    const jasny_ciemny = document.getElementById("jasny_ciemny");
    let cars = [];
  jasny_ciemny.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (jasny_ciemny.textContent === "🌑") {
            jasny_ciemny.textContent = "☀️";
        } else {
            jasny_ciemny.textContent = "🌑";
        }
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
  const historie = [
    `Historia marki Audi sięga początków XX wieku i wiąże się z postacią Augusta Horcha – niemieckiego inżyniera i pioniera motoryzacji. W 1899 roku Horch założył firmę Horch & Cie. w Kolonii, zajmującą się produkcją luksusowych samochodów. Jednak po kilku latach, wskutek nieporozumień z zarządem, opuścił własne przedsiębiorstwo.

W 1909 roku założył nową firmę w Zwickau, której nie mógł nazwać swoim nazwiskiem ze względu na prawa autorskie poprzedniej spółki. Wtedy z pomocą przyszedł syn jego wspólnika, który zaproponował nazwę „Audi” – łacińskie tłumaczenie słowa „horch” (czyli „słuchaj”). Tak powstała marka Audi Automobilwerke.

W 1932 roku, w czasie wielkiego kryzysu gospodarczego, Audi połączyło się z trzema innymi niemieckimi producentami: Horch, DKW i Wanderer. Tak powstała spółka Auto Union AG, a jej logo – cztery przeplatające się pierścienie – symbolizuje jedność tych czterech marek.

Po II wojnie światowej Auto Union przeniosło swoją siedzibę do Ingolstadt. W latach 60. spółka została przejęta przez koncern Volkswagen, który przywrócił nazwę Audi i rozpoczął nowy etap w historii marki. Od tamtej pory Audi zyskało renomę producenta samochodów premium, słynącego z innowacyjnych rozwiązań technologicznych i napędu quattro.

Dziś Audi jest jedną z najbardziej rozpoznawalnych marek motoryzacyjnych na świecie, łączącą niemiecką precyzję, nowoczesną technologię i elegancki design.`,
    `Historia marki BMW (Bayerische Motoren Werke) rozpoczęła się w 1916 roku w Monachium. Firma powstała jako kontynuacja działalności przedsiębiorstwa Rapp Motorenwerke, które zajmowało się produkcją silników lotniczych. W początkowych latach działalności BMW specjalizowało się właśnie w produkcji silników do samolotów – co do dziś symbolizuje logo marki, często interpretowane jako śmigło na tle nieba.

Po zakończeniu I wojny światowej, na mocy traktatu wersalskiego, Niemcom zakazano produkcji silników lotniczych. W odpowiedzi na te ograniczenia BMW zaczęło wytwarzać silniki do motocykli, a następnie same motocykle. Pierwszy motocykl marki – BMW R32 – pojawił się na rynku w 1923 roku i od razu zdobył uznanie dzięki innowacyjnemu chłodzeniu silnika i wysokiej jakości wykonania.

W 1928 roku BMW weszło na rynek motoryzacyjny, przejmując fabrykę Dixi w Eisenach i rozpoczynając produkcję swojego pierwszego samochodu – BMW 3/15, który był oparty na licencji brytyjskiego Austina. Z biegiem lat firma rozwijała się, tworząc coraz bardziej zaawansowane technologicznie i eleganckie samochody.

Po II wojnie światowej BMW musiało odbudować swoją pozycję, gdyż zakłady zostały zniszczone, a produkcja zatrzymana. Dopiero w latach 50. i 60. firma zaczęła odnosić większe sukcesy – szczególnie dzięki modelom sportowym i luksusowym, które przyczyniły się do umocnienia pozycji BMW jako producenta samochodów klasy premium.

Dziś BMW to jedna z najbardziej prestiżowych marek motoryzacyjnych na świecie. Firma słynie z dynamicznych i eleganckich samochodów, innowacyjnych rozwiązań technologicznych oraz doskonałej jakości wykonania. Hasło marki – „Freude am Fahren” („Radość z jazdy”) – doskonale oddaje filozofię BMW.`,
    `Historia marki Mercedes-Benz sięga samych początków motoryzacji i wiąże się z dwoma pionierami: Karlem Benzem oraz Gottliebem Daimlerem. W 1886 roku Karl Benz zbudował pierwszy na świecie samochód z silnikiem spalinowym – trójkołowy pojazd nazwany Benz Patent-Motorwagen. W tym samym czasie, niezależnie od niego, Gottlieb Daimler wraz ze swoim współpracownikiem Wilhelmem Maybachem rozwijał własne konstrukcje samochodowe.

Początkowo obie firmy – Benz & Cie. oraz Daimler-Motoren-Gesellschaft (DMG) – działały osobno. Nazwa „Mercedes” po raz pierwszy pojawiła się w 1901 roku jako marka samochodów produkowanych przez DMG, nazwana tak na cześć Mercedes Jellinek, córki austriackiego biznesmena Emila Jellinka, który promował i sprzedawał auta Daimlera.

W 1926 roku, w wyniku kryzysu gospodarczego po I wojnie światowej, obie firmy połączyły się, tworząc markę Mercedes-Benz. Nowa firma połączyła doświadczenie techniczne i innowacyjność obu pionierów, co szybko przełożyło się na wysoką jakość i prestiż ich pojazdów.

Logo Mercedes-Benz – trójramienna gwiazda – symbolizuje ambicję firmy do dominacji w trzech środowiskach: na lądzie, w wodzie i w powietrzu. Od momentu powstania marka zdobyła renomę producenta luksusowych i innowacyjnych samochodów, zarówno osobowych, jak i ciężarowych.

Dziś Mercedes-Benz to jedna z najbardziej znanych i cenionych marek na świecie. Firma nieustannie inwestuje w nowoczesne technologie, elektromobilność oraz bezpieczeństwo jazdy, łącząc tradycję z innowacją. Mercedes to nie tylko synonim luksusu, ale również precyzji inżynierskiej i nowoczesnej motoryzacji.`,
    `Historia Ferrari rozpoczyna się od postaci Enza Ferrariego, włoskiego kierowcy wyścigowego i pasjonata motoryzacji. W 1929 roku założył on zespół wyścigowy Scuderia Ferrari, który początkowo działał jako zaplecze wyścigowe dla marki Alfa Romeo. Enzo Ferrari przez lata rozwijał swoją działalność w świecie sportów motorowych, a jego ambicją było stworzenie samochodów, które nie tylko wygrywały wyścigi, ale także zachwycały wyglądem i osiągami.

W 1947 roku w Maranello powstał pierwszy samochód sygnowany własną marką – Ferrari 125 S – wyposażony w silnik V12 skonstruowany przez Gioacchino Colombo. Był to początek nowej ery w historii motoryzacji. Samochody Ferrari szybko zyskały sławę dzięki doskonałym osiągom oraz eleganckiemu, sportowemu designowi.

Ferrari od samego początku istnienia było nierozerwalnie związane ze sportami motorowymi, szczególnie z Formułą 1, gdzie Scuderia Ferrari stała się najbardziej utytułowanym zespołem w historii tego sportu. Marka słynie z pasji do rywalizacji, perfekcji technicznej oraz nieustannego dążenia do innowacji.

Charakterystycznym znakiem Ferrari jest logo przedstawiające czarnego rumaka (Cavallino Rampante) na żółtym tle – symbol odwagi, szybkości i włoskiej dumy. Kolor czerwony, znany jako Rosso Corsa, stał się niemal synonimem marki.

Dziś Ferrari to nie tylko producent luksusowych supersamochodów, ale również symbol stylu, wyrafinowania i osiągów. Każdy model Ferrari to dzieło sztuki inżynieryjnej, które łączy dziedzictwo wyścigowe z nowoczesną technologią i niepowtarzalnym charakterem.`,
    `Historia Lamborghini zaczyna się od postaci Ferruccia Lamborghini, włoskiego przemysłowca, który dorobił się fortuny, produkując ciągniki rolnicze po II wojnie światowej. Jako miłośnik luksusowych samochodów, Ferruccio posiadał między innymi modele Ferrari, ale był niezadowolony z ich jakości i komfortu. Gdy jego skargi zostały zignorowane przez Enza Ferrariego, Ferruccio postanowił stworzyć własną markę samochodów sportowych – taką, która połączy potęgę silnika z komfortem jazdy.

W 1963 roku w Sant’Agata Bolognese powstała firma Automobili Lamborghini, a pierwszym modelem był Lamborghini 350 GT. Samochód szybko zdobył uznanie, ale prawdziwą legendę firma stworzyła w 1966 roku, prezentując model Miura – uważany za pierwszy supersamochód w historii. Miura wyróżniała się nie tylko potężnym silnikiem V12 umieszczonym centralnie, ale również rewolucyjnym wyglądem i osiągami.

W kolejnych dekadach Lamborghini produkowało coraz bardziej ekstremalne i charakterystyczne modele, takie jak Countach, Diablo, Murciélago czy Aventador. Auta tej marki słyną z agresywnej stylistyki, potężnych silników oraz bezkompromisowego podejścia do mocy i designu.

Logo marki – złoty byk na czarnym tle – symbolizuje siłę, determinację i znak zodiaku samego Ferruccia (byk). Ta symbolika znalazła odzwierciedlenie także w nazwach wielu modeli, które pochodzą od słynnych byków z corridy.

Dziś Lamborghini należy do koncernu Volkswagen Group (przez Audi), ale zachowało swój niezależny, odważny charakter. Marka wciąż budzi ogromne emocje i uznawana jest za ikonę włoskiej motoryzacji – dziką, spektakularną i bezkompromisową.`,
    `Marka Porsche została założona w 1931 roku w Stuttgarcie przez wybitnego niemieckiego inżyniera Ferdinanda Porsche. Początkowo firma nie produkowała samochodów pod własną marką, lecz zajmowała się projektowaniem i doradztwem technicznym. Jednym z jej pierwszych wielkich projektów było zaprojektowanie Volkswagena Garbusa – samochodu dla ludu, zleconego przez niemieckie władze w latach 30.

Własna produkcja samochodów sportowych rozpoczęła się po II wojnie światowej. W 1948 roku zadebiutował pierwszy samochód marki – Porsche 356 – lekki, zwinny i oparty na elementach Garbusa. Szybko zdobył uznanie wśród entuzjastów sportowej jazdy i zapoczątkował tradycję tworzenia pojazdów łączących precyzję, osiągi i elegancję.

W 1964 roku światło dzienne ujrzał najbardziej ikoniczny model marki – Porsche 911. Ten samochód z silnikiem typu bokser umieszczonym z tyłu stał się symbolem firmy i jednym z najbardziej rozpoznawalnych sportowych aut na świecie. Jego linia stylistyczna i konstrukcja przetrwały dekady w niemal niezmienionej formie, stale udoskonalane pod względem technologii i osiągów.

Porsche przez lata zyskało reputację producenta samochodów sportowych klasy premium, zarówno na drogi, jak i do wyścigów. Firma odnosiła ogromne sukcesy w motorsporcie – szczególnie w wyścigach długodystansowych, takich jak Le Mans czy Targa Florio.

Współcześnie Porsche rozszerzyło swoją ofertę o luksusowe SUV-y (Cayenne, Macan), limuzyny (Panamera) oraz pojazdy elektryczne, jak Porsche Taycan – potwierdzając swoją gotowość do przyszłości motoryzacji. Mimo tych zmian firma pozostała wierna swojej sportowej duszy i inżynieryjnej precyzji.

Dziś Porsche to synonim luksusu, sportowego dziedzictwa i niemieckiej perfekcji technicznej – marka, która z powodzeniem łączy tradycję z innowacją.`,
  ];
  function pokaz_historie(nr) {
    const pole = document.getElementById("historia");
    pole.innerText =historie[nr];
  }
  const ciekawostki = [
    "Audi Quattro (1980) – Rewolucyjny model z napędem na wszystkie koła, który zmienił świat rajdów i stał się ikoną technologii quattro.",
    "BMW M1 (1978-1981) – Pierwszy supersamochód BMW, zaprojektowany przez Giorgetto Giugiaro. Był jedynym modelem BMW z centralnie umieszczonym silnikiem i stał się ikoną motorsportu.",
    "Mercedes-Benz 300 SL Gullwing (1954) – Jeden z najbardziej ikonicznych samochodów w historii, znany ze swoich charakterystycznych drzwi unoszonych do góry. Był pierwszym seryjnie produkowanym autem z wtryskiem paliwa, co zapewniało mu imponujące osiągi.",
    "Ferrari 250 GTO (1962-1964) – Jeden z najbardziej pożądanych samochodów kolekcjonerskich na świecie. Wyprodukowano tylko 36 egzemplarzy, a jego 12-cylindrowy silnik o mocy ponad 300 KM uczynił go legendą wyścigów.",
    "Lamborghini Miura (1966) – Pierwszy prawdziwy supersamochód, który zapoczątkował erę aut z centralnie umieszczonym silnikiem. Jego agresywny design i potężny silnik V12 uczyniły go ikoną motoryzacji.",
    "Porsche 356 (1948) – Pierwszy samochód marki Porsche, który zapoczątkował jej legendę. Był lekki, aerodynamiczny i stał się fundamentem dla przyszłych modeli sportowych.",
    "Audi TT (1998) – Samochód o futurystycznym designie, który szybko stał się symbolem nowoczesnego stylu życia i innowacyjnego podejścia do motoryzacji.",
    "BMW E30 M3 (1986-1991) – Jeden z najbardziej kultowych samochodów sportowych, który zdominował wyścigi i stał się legendą wśród entuzjastów motoryzacji.",
    "Mercedes-Benz G-Class (1979) – Kultowy SUV o wyjątkowych zdolnościach terenowych, który początkowo był projektowany dla wojska. Dziś jest symbolem prestiżu i niezawodności.",
    "Ferrari F40 (1987) – Stworzony na 40-lecie marki, był najszybszym i najbardziej zaawansowanym Ferrari swoich czasów. Jego lekka konstrukcja i silnik V8 o mocy ponad 470 KM sprawiły, że stał się ikoną motoryzacji.",
    "Lamborghini Countach (1974) – Model, który zdefiniował wygląd nowoczesnych supersamochodów. Jego kanciaste nadwozie i charakterystyczne drzwi nożycowe stały się symbolem Lamborghini.",
    "Porsche 911 (1964 - obecnie) – Najbardziej kultowy model Porsche, który przez dekady ewoluował, zachowując swój charakterystyczny design i doskonałe osiągi.",
    "Audi R8 (2006) – Supersamochód inspirowany sukcesami Audi w wyścigach Le Mans, łączący niesamowite osiągi z luksusem.",
    "BMW 507 (1956-1959) – Elegancki roadster, który miał konkurować z Mercedesem 300SL. Choć produkcja była ograniczona, jego design i historia uczyniły go jednym z najbardziej pożądanych klasyków.",
    "Mercedes-Benz 600 Pullman (1963) – Luksusowa limuzyna używana przez gwiazdy, polityków i papieży. Była wyposażona w zaawansowane technologie, jak hydrauliczne sterowanie drzwiami i zawieszeniem.",
    "Ferrari 458 Italia (2009) – Nowoczesny supersamochód, który łączył aerodynamikę, moc i precyzję prowadzenia. Jego silnik V8 o pojemności 4.5 litra",
    "Lamborghini LM002 (1986) – Pierwszy luksusowy SUV marki, który początkowo był projektowany jako pojazd wojskowy. Jego potężny silnik V12 i wyjątkowe możliwości terenowe sprawiły, że stał się pionierem w segmencie super-SUV-ów.",
    "Porsche 959 (1986) – Jeden z najbardziej zaawansowanych technologicznie samochodów swoich czasów. Był pionierem w dziedzinie aerodynamiki, napędu na cztery koła i elektroniki."
  ];
  const zdjecia = [
    "img/audi_quattro.jpg",
    "img/bmw_m1.jpeg",
    "img/mercedes_300_ls.jpg",
    "img/ferrari_250.jpeg",
    "img/lamborghini_miura.jpg",
    "img/porsche_356.jpg",
    "img/audi_tt.jpg",
    "img/bmw_m3.jpg",
    "img/G-wagon.jpg",
    "img/ferrari_f40.jpg",
    "img/lamborghini_2.jpg",
    "img/porsche_911.jpg",
    "img/audi-r8.jpg",
    "img/BMW_507.jpg",
    "img/mercedes_600.jpg",
    "img/ferrari_458.jpeg",
    "img/Lambo_LM.jpg",
    "img/porsche_959.jpg"




  ];
  function pokaz_ciekawostke(nr){
    const imgElement = document.getElementById(`zdjecie_autko`);
    const textElement = document.getElementById(`ciekawostka_autko`);
    imgElement.src = zdjecia[nr];
    textElement.textContent = ciekawostki[nr];
  }
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