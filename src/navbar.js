function createNavbar() {
  const nav = document.createElement("nav");
  nav.className =
    "container mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-[140px] bg-white";

  nav.innerHTML = `
    <div>
      <img
        src="./images/icons/Logo.svg"
        alt="Удобный переезд лого"
        class="h-8 sm:h-10 w-auto"
      />
    </div>

    <div class="hidden lg:flex gap-[74px] items-center">
      <ul class="flex gap-[60px] items-center">
        <!-- Services Dropdown -->
        <li class="relative group z-21">
          <a
            class="font-medium cursor-pointer flex items-center gap-1 services-dropdown-trigger py-[30px]"
            href="#"
          >
            Услуги
            <svg
              class="w-4 h-4 transition-transform group-hover:rotate-180 dropdown-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
          <div
            class="absolute top-[84px] left-[-10px] w-[302px] bg-white border border-gray-200 shadow-lg opacity-0 invisible services-dropdown-menu transition-all duration-200 z-50"
          >
            <div class="py-3 px-3">
              <a
                href="./kvartirniy.html"
                class="block px-4 py-2 text-gray-800 text-[16px] font-medium hover:text-green-600"
              >
                Квартирный переезд
              </a>
              <a
                href="./offisniy.html"
                class="block px-4 py-2 text-gray-800 text-[16px] font-medium hover:text-green-600"
              >
                Офисный переезд
              </a>
              <a
                href="./gruzchik.html"
                class="block px-4 py-2 hover:text-green-600 text-[16px] font-medium"
              >
                Услуги грузчиков
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 text-[16px] font-medium hover:text-green-600"
              >
                Грузоперевозки
              </a>
              <a
                href="./razborka.html"
                class="block px-4 py-2 text-gray-800 text-[16px] font-medium hover:text-green-600"
              >
                Разборка-сборка мебели
              </a>
              <a
                href="./montaj.html"
                class="block px-4 py-2 text-gray-800 text-[16px] font-medium hover:text-green-600"
              >
                Монтаж кондиционера
              </a>
              <a
                href="#"
                class="block px-4 py-2 text-gray-800 text-[16px] font-medium hover:text-green-600"
              >
                Уборка
              </a>
            </div>
          </div>
        </li>
        <li>
          <a
            class="font-medium hover:border-b-4 hover:border-[#52AE32] py-[31px]"
            href="#"
          >
            Партнеры
          </a>
        </li>
        <li>
          <a
            class="font-medium hover:border-b-4 hover:border-[#52AE32] py-[31px]"
            href="#"
          >
            Галерея
          </a>
        </li>
        <li>
          <a
            class="font-medium hover:border-b-4 hover:border-[#52AE32] py-[31px]"
            href="#"
          >
            О нас
          </a>
        </li>
        <li>
          <a
            class="font-medium hover:border-b-4 hover:border-[#52AE32] py-[31px]"
            href="#"
          >
            Контакты
          </a>
        </li>
      </ul>
      
      <div class="flex gap-[30px] items-center">
        <div class="flex flex-col">
          <a href="tel:+998942803738" class="font-semibold text-[15px]">
            +998 94 280 37 38
          </a>
          <a href="tel:+998933999051" class="font-semibold text-[15px]">
            +998 93 399 90 51
          </a>
          <span class="font-normal text-[#7D7D7D] text-[12px]">
            c 8:00 до 21:00, ежедневно
          </span>
        </div>
        <button
          class="py-[15px] px-[39px] hover:border border transition-all duration-200 question-btn"
        >
          Задать вопрос
        </button>
      </div>
    </div>
  `;

  return nav;
}

function initNavbarFunctionality() {
  const servicesDropdownTrigger = document.querySelector(
    ".services-dropdown-trigger"
  );
  const servicesDropdownMenu = document.querySelector(
    ".services-dropdown-menu"
  );
  const dropdownArrow = document.querySelector(".dropdown-arrow");

  let isOpen = false;

  function openDropdown() {
    if (!isOpen) {
      isOpen = true;
      servicesDropdownMenu.classList.remove("opacity-0", "invisible");
      servicesDropdownMenu.classList.add("opacity-100", "visible");
      dropdownArrow.style.transform = "rotate(180deg)";
    }
  }

  function closeDropdown() {
    if (isOpen) {
      isOpen = false;
      servicesDropdownMenu.classList.remove("opacity-100", "visible");
      servicesDropdownMenu.classList.add("opacity-0", "invisible");
      dropdownArrow.style.transform = "rotate(0deg)";
    }
  }

  servicesDropdownTrigger.addEventListener("click", openDropdown);

  servicesDropdownTrigger.addEventListener("mouseleave", function (event) {
    setTimeout(() => {
      if (
        !servicesDropdownMenu.matches(":hover") &&
        !servicesDropdownTrigger.matches(":hover")
      ) {
        closeDropdown();
      }
    }, 50);
  });

  servicesDropdownMenu.addEventListener("mouseleave", function (event) {
    setTimeout(() => {
      if (
        !servicesDropdownMenu.matches(":hover") &&
        !servicesDropdownTrigger.matches(":hover")
      ) {
        closeDropdown();
      }
    }, 50);
  });
  document.addEventListener("click", function (event) {
    if (
      !servicesDropdownTrigger.contains(event.target) &&
      !servicesDropdownMenu.contains(event.target)
    ) {
      if (isOpen) {
        toggleDropdown();
      }
    }
  });
}

function appendNavbar(targetElementId = "body") {
  const navbar = createNavbar();
  const targetElement =
    targetElementId === "body"
      ? document.body
      : document.getElementById(targetElementId);

  if (targetElement) {
    if (targetElementId === "body") {
      targetElement.insertBefore(navbar, targetElement.firstChild);
    } else {
      targetElement.appendChild(navbar);
    }

    setTimeout(initNavbarFunctionality, 100);
  } else {
    console.error(`Element with ID "${targetElementId}" not found`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  appendNavbar();
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = { createNavbar, appendNavbar, initNavbarFunctionality };
}
