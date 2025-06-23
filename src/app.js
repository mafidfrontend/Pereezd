const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");

function openMobileMenu() {
  mobileMenu.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  document.body.style.overflow = "";
}

mobileMenuBtn.addEventListener("click", openMobileMenu);
mobileMenuClose.addEventListener("click", closeMobileMenu);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    closeMobileMenu();
  }
});



const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = form.querySelector('input[placeholder*="имя"]');
    const phoneInput = form.querySelector('input[placeholder*="телефон"]');

    let isValid = true;

    form.querySelectorAll("input").forEach((input) => {
      input.classList.remove("border-red-500", "border-green-500");
    });

    if (nameInput && nameInput.value.trim().length < 2) {
      nameInput.classList.add("border-red-500");
      isValid = false;
    } else if (nameInput) {
      nameInput.classList.add("border-green-500");
    }

    if (phoneInput && phoneInput.value.trim().length < 9) {
      phoneInput.classList.add("border-red-500");
      isValid = false;
    } else if (phoneInput) {
      phoneInput.classList.add("border-green-500");
    }

    if (isValid) {
      const button = form.querySelector(
        'button[type="submit"], button:not([type])'
      );
      const originalText = button.textContent;
      button.textContent = "Заявка отправлена!";
      button.style.backgroundColor = "#22c55e";

      setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = "";
        form.reset();
        form.querySelectorAll("input").forEach((input) => {
          input.classList.remove("border-green-500");
        });
      }, 3000);
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    if (
      this.type !== "submit" &&
      !this.classList.contains("mobile-menu-btn") &&
      !this.classList.contains("mobile-menu-close")
    ) {
      const originalText = this.textContent;
      this.textContent = "Загрузка...";
      this.disabled = true;

      setTimeout(() => {
        this.textContent = originalText;
        this.disabled = false;
      }, 2000);
    }
  });
});
class Carousel {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = 4;
    this.carousel = document.getElementById("carousel");
    this.indicators = document.querySelectorAll(".indicator");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.autoPlayInterval = null;
    this.autoPlayDelay = 5000;
    this.init();
  }

  init() {
    this.prevBtn.addEventListener("click", () => this.prevSlide());
    this.nextBtn.addEventListener("click", () => this.nextSlide());

    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.goToSlide(index));
    });

    this.addTouchSupport();
    this.startAutoPlay();

    this.carousel.parentElement.addEventListener("mouseenter", () =>
      this.stopAutoPlay()
    );
    this.carousel.parentElement.addEventListener("mouseleave", () =>
      this.startAutoPlay()
    );
  }

  updateCarousel() {
    const translateX = -this.currentSlide * 100;
    this.carousel.style.transform = `translateX(${translateX}%)`;

    this.indicators.forEach((indicator, index) => {
      if (index === this.currentSlide) {
        indicator.classList.add("active", "bg-[#52AE32]");
        indicator.classList.remove("opacity-40");
      } else {
        indicator.classList.remove("active", "bg-white");
        indicator.classList.add("opacity-40");
      }
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.updateCarousel();
  }

  goToSlide(slideIndex) {
    this.currentSlide = slideIndex;
    this.updateCarousel();
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  addTouchSupport() {
    let startX = 0;
    let endX = 0;
    const minSwipeDistance = 50;

    this.carousel.parentElement.addEventListener(
      "touchstart",
      (e) => {
        startX = e.touches[0].clientX;
      },
      { passive: true }
    );

    this.carousel.parentElement.addEventListener(
      "touchend",
      (e) => {
        endX = e.changedTouches[0].clientX;
        const swipeDistance = Math.abs(endX - startX);

        if (swipeDistance > minSwipeDistance) {
          if (endX < startX) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }
        }
      },
      { passive: true }
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    document.getElementById("prevBtn").click();
  } else if (e.key === "ArrowRight") {
    document.getElementById("nextBtn").click();
  }
});

const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalOverlay = document.getElementById("modalOverlay");
const formModal = document.getElementById("formModal");
const successModal = document.getElementById("successModal");
const applicationForm = document.getElementById("applicationForm");
const okBtn = document.getElementById("okBtn");

function openFormModal() {
  modalOverlay.classList.add("open");
  formModal.classList.add("open");
  successModal.classList.remove("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  formModal.classList.remove("open");
  successModal.classList.remove("open");
  document.body.style.overflow = "auto";
}

function showSuccessModal() {
  formModal.classList.remove("open");
  successModal.classList.add("open");
}

openModalBtn.addEventListener("click", openFormModal);
closeModalBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", function (e) {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

applicationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (!name.trim() || !phone.trim()) {
    formModal.style.animation = "shake 0.5s ease-in-out";
    setTimeout(() => {
      formModal.style.animation = "";
    }, 500);

    if (!name.trim()) {
      document
        .getElementById("name")
        .classList.add("border-red-500", "bg-red-50");
    }
    if (!phone.trim()) {
      document
        .getElementById("phone")
        .classList.add("border-red-500", "bg-red-50");
    }
    return;
  }

  document
    .getElementById("name")
    .classList.remove("border-red-500", "bg-red-50");
  document
    .getElementById("phone")
    .classList.remove("border-red-500", "bg-red-50");

  showSuccessModal();

  applicationForm.reset();
});

document.getElementById("name").addEventListener("input", function () {
  this.classList.remove("border-red-500", "bg-red-50");
});

document.getElementById("phone").addEventListener("input", function () {
  this.classList.remove("border-red-500", "bg-red-50");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

const style = document.createElement("style");
style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0) scale(1); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px) scale(1); }
                20%, 40%, 60%, 80% { transform: translateX(5px) scale(1); }
            }
        `;
document.head.appendChild(style);
