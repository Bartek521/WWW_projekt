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