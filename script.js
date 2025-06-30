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