// ============ TOGGLE MENU ============
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}
// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// menu
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".menu-item");
  const showMoreBtn = document.getElementById("show-more-btn");
  let expanded = false; // состояние меню

  // Сначала показываем только первые 3
  items.forEach((item, index) => {
    if (index > 2) {
      item.classList.add("hidden");
    }
  });

  // Обработчик нажатия кнопки
  showMoreBtn.addEventListener("click", () => {
    expanded = !expanded;

    items.forEach((item, index) => {
      if (index > 2) {
        item.classList.toggle("hidden", !expanded);
      }
    });

    // Меняем текст кнопки
    showMoreBtn.textContent = expanded ? "Yopish" : "To‘liq menyuni ko‘rish";
  });
});

// ============ PRELOADER ============
const preloader = document.getElementById("preloader");
const h1 = document.querySelector(".home-h1");
const p = document.querySelector(".home-p");
const img = document.querySelector(".home-img");
const start = Date.now();

window.addEventListener("load", () => {
  const elapsed = Date.now() - start;
  const delay = Math.max(2200 - elapsed, 0);
  setTimeout(() => {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.remove();
      h1.classList.add("animate");
      p.classList.add("animate");
      img.classList.add("animate");
    }, 500);
  }, delay);
});
