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
  const hideBtn = document.getElementById("hide-btn");

  const step = 3;
  let visibleCount = 3;
  let firstClick = true;

  function updateVisibility() {
    items.forEach((item, index) => {
      item.style.display = index < visibleCount ? "block" : "none";
    });

    // Управление кнопками
    showMoreBtn.style.display = visibleCount >= items.length ? "none" : "inline-block";
    hideBtn.style.display = visibleCount > 3 ? "inline-block" : "none";
  }

  // Инициализация
  updateVisibility();

  // "To‘liq menyuni ko‘rish" → "Keyingi"
  showMoreBtn.addEventListener("click", () => {
    visibleCount += step;

    if (firstClick) {
      showMoreBtn.textContent = "Keyingi";
      firstClick = false;
    }

    // Ограничим максимумом
    if (visibleCount > items.length) {
      visibleCount = items.length;
    }

    updateVisibility();
  });

  // "Yopish"
  hideBtn.addEventListener("click", () => {
    // Если все карточки показаны — скрываем всё, кроме первых 3
    if (visibleCount >= items.length) {
      visibleCount = 3;
      firstClick = true;
      showMoreBtn.textContent = "To‘liq menyuni ko‘rish";
    } else {
      // Иначе просто закрываем по 3
      visibleCount -= step;
      if (visibleCount < 3) {
        visibleCount = 3;
      }
    }

    updateVisibility();
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

document.addEventListener("DOMContentLoaded", () => {
  const navLinksContainer = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll("#navLinks a");
  const burger = document.querySelector(".burger-button");

  // Toggle menyu ochish/yopish
  window.toggleMenu = function () {
    navLinksContainer.classList.toggle("active");
  };

  // Linkni bosganda menyuni yopish
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
    });
  });

  // Bo'sh joyga bosganda menyuni yopish
  document.addEventListener("click", (e) => {
    if (
      !navLinksContainer.contains(e.target) &&
      !burger.contains(e.target)
    ) {
      navLinksContainer.classList.remove("active");
    }
  });
});

// video uchun
const video = document.getElementById("myVideo");
const playBtn = document.getElementById("playBtn");

// Videoni bosganda ham pauza/play bo'lishi uchun
video.addEventListener("click", toggleVideo);

// Tugmani bosganda ham
playBtn.addEventListener("click", toggleVideo);

function toggleVideo() {
  if (video.paused) {
    video.play();
    playBtn.style.display = "none";
  } else {
    video.pause();
    playBtn.style.display = "flex";
  }
}

// Video tugamaydi (loop), lekin agar istasangiz to'xtaganda tugma chiqishini qo'shishingiz mumkin
video.addEventListener("ended", () => {
  playBtn.style.display = "flex";
});

