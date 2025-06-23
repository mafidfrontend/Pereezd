function createFooter() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <hr class="border border-[#EAEAEA] w-full max-w-[1320px] flex mx-auto mb-8 sm:mb-12 lg:mb-[74px]" />
    
    <div class="flex flex-col lg:flex-row justify-center px-4 sm:px-8">
      <!-- Logo Section -->
      <div class="mb-8 lg:mb-0">
        <img
          src="../images/icons/Logo.svg"
          alt="WebSite Logo"
          class="h-8 w-auto"
        />
      </div>
      
      <!-- Menu and Social Media Section -->
      <div class="ml-0 lg:ml-[255px] mr-0 lg:mr-[235px] flex flex-col gap-8 lg:gap-[60px] mb-8 lg:mb-0">
        <!-- Menu -->
        <div>
          <h3 class="text-[#202020] font-medium text-base lg:text-[16px] mb-[30px]">
            Меню
          </h3>
          <ul class="flex flex-col gap-5">
            <li>
              <a class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]" href="#">
                Главная
              </a>
            </li>
            <li>
              <a class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]" href="#">
                О нас
              </a>
            </li>
            <li>
              <a class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]" href="#">
                Партнеры
              </a>
            </li>
            <li>
              <a class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]" href="#">
                Галерея
              </a>
            </li>
            <li>
              <a class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]" href="#">
                Услуги
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Social Media -->
        <div>
          <h3 class="text-[#202020] font-medium text-base lg:text-[16px] mb-[30px]">
            Социальные сети
          </h3>
          <ul class="flex gap-5">
            <li>
              <a target="_blank" href="https://instagram.com/eastline.pereezd">
                <img
                  src="../images/icons/instagram.svg"
                  alt="Instagram Icon"
                  class="w-6 h-6"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://t.me/eastlinepereezd">
                <img
                  src="../images/icons/telegram.svg"
                  alt="Telegram Icon"
                  class="w-6 h-6"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://fb.com/eastline.pereezd">
                <img
                  src="../images/icons/facebook.svg"
                  alt="Facebook Icon"
                  class="w-6 h-6"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://youtube.com/@EastlinePereezdUz">
                <img
                  src="../images/icons/youtubeFooter.svg"
                  alt="YouTube Icon"
                  class="w-6 h-6"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Contact Section -->
      <div class="flex flex-col gap-8 lg:gap-[60px]">
        <div>
          <h3 class="text-[#202020] font-medium text-base lg:text-[16px] mb-[30px]">
            Контакты
          </h3>
          <div class="flex flex-col gap-5">
            <div class="flex gap-[10px]">
              <img
                src="../images/icons/carbon_location.svg"
                alt="Location Icon"
                class="w-5 h-5 flex-shrink-0"
              />
              <p class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]">
                ул.Себзар М17/18, 4дом, 3кв
              </p>
            </div>
            <div class="flex gap-[10px]">
              <img
                src="../images/icons/carbon_mail.svg"
                alt="Mail Icon"
                class="w-5 h-5 flex-shrink-0"
              />
              <p class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]">
                info@eastline.uz
              </p>
            </div>
            <div class="flex gap-[10px]">
              <img
                src="../images/icons/carbon_phone.svg"
                alt="Phone Icon"
                class="w-5 h-5 flex-shrink-0"
              />
              <a
                href="tel:+998942803738"
                class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]"
              >
                +998 94 280 37 38
              </a>
              <a
                href="tel:+998933999051"
                class="text-[#C0C0C0] text-base sm:text-lg lg:text-[18px]"
              >
                +998 93 399 90 51
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <hr class="border border-[#EAEAEA] w-full max-w-[1320px] flex mx-auto mt-8 sm:mt-12 lg:mt-[74px]" />
    
    <p class="text-[#C0C0C0] text-center text-base sm:text-lg lg:text-[18px] px-4 py-1">
      © 2024 Eastline Pereezd. Все права защищены.
    </p>
  `;

  return footer;
}

function appendFooter(targetElementId = "body") {
  const footer = createFooter();
  const targetElement =
    targetElementId === "body"
      ? document.body
      : document.getElementById(targetElementId);

  if (targetElement) {
    targetElement.appendChild(footer);
  } else {
    console.error(`Element with ID "${targetElementId}" not found`);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  appendFooter();
});

if (typeof module !== "undefined" && module.exports) {
  module.exports = { createFooter, appendFooter };
}
