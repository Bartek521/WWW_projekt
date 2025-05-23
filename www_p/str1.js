document.addEventListener("DOMContentLoaded", () => {
    const jasny_ciemny = document.getElementById("jasny_ciemny");
  
    let cars = [];
  
    // Tryb ciemny
    jasny_ciemny.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (jasny_ciemny.textContent === "🌑") {
            jasny_ciemny.textContent = "☀️";
        } else {
            jasny_ciemny.textContent = "🌑";
        }
    });
  });