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