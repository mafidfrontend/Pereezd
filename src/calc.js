class ModalManager {
  constructor() {
    this.modal = document.getElementById("calculatorModal");
    this.backdrop = document.getElementById("modalBackdrop");
    this.openBtn = document.getElementById("openModalBtn1");
    this.closeBtn = document.getElementById("closeModalBtn1");

    this.bindEvents();
  }

  bindEvents() {
    this.openBtn.addEventListener("click", () => this.openModal());

    this.closeBtn.addEventListener("click", () => this.closeModal());
    this.backdrop.addEventListener("click", () => this.closeModal());

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !this.modal.classList.contains("hidden")) {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.modal.classList.remove("hidden");
    this.backdrop.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      this.backdrop.classList.remove("opacity-0");
      this.backdrop.classList.add("opacity-100");

      const modalContent = this.modal.querySelector("div");
      modalContent.classList.remove("scale-95");
      modalContent.classList.add("scale-100");
    });
  }

  closeModal() {
    this.backdrop.classList.remove("opacity-100");
    this.backdrop.classList.add("opacity-0");

    const modalContent = this.modal.querySelector("div");
    modalContent.classList.remove("scale-100");
    modalContent.classList.add("scale-95");

    setTimeout(() => {
      this.modal.classList.add("hidden");
      this.backdrop.classList.add("hidden");
      document.body.style.overflow = "auto";
    }, 300);
  }
}

class MovingCalculator {
  constructor() {
    this.moversCount = 0;
    this.basePrice = 300000; 
    this.carPrices = {
      labo: 500000,
      porter: 700000,
      truck: 1000000,
    };

    this.initializeElements();
    this.bindEvents();
    this.updateFormState();
  }

  initializeElements() {
    this.elements = {
      pickupAddress: document.getElementById("pickupAddress"),
      deliveryAddress: document.getElementById("deliveryAddress"),
      carSelect: document.getElementById("carSelect"),
      dateSelect: document.getElementById("dateSelect"),
      phoneNumber: document.getElementById("phoneNumber"),
      comment: document.getElementById("comment"),
      moversCount: document.getElementById("moversCount"),
      decreaseMovers: document.getElementById("decreaseMovers"),
      increaseMovers: document.getElementById("increaseMovers"),
      submitButton: document.getElementById("submitButton"),
      warningText: document.getElementById("warningText"),
    };
  }

  bindEvents() {
    this.elements.decreaseMovers.addEventListener("click", () => {
      if (this.moversCount > 0) {
        this.moversCount--;
        this.updateMoversDisplay();
        this.updateFormState();
      }
    });

    this.elements.increaseMovers.addEventListener("click", () => {
      if (this.moversCount < 10) {
        this.moversCount++;
        this.updateMoversDisplay();
        this.updateFormState();
      }
    });

    const formInputs = [
      this.elements.pickupAddress,
      this.elements.phoneNumber,
      this.elements.carSelect,
    ];

    formInputs.forEach((input) => {
      input.addEventListener("input", () => this.updateFormState());
      input.addEventListener("change", () => this.updateFormState());
    });

    this.elements.phoneNumber.addEventListener("input", (e) => {
      const value = e.target.value;
      if (!value.startsWith("+998")) {
        e.target.value = "+998";
      }
      this.updateFormState();
    });

    this.elements.submitButton.addEventListener("click", () => {
      if (this.isFormValid()) {
        this.submitOrder();
      }
    });

    const today = new Date().toISOString().split("T")[0];
    this.elements.dateSelect.value = today;
  }

  updateMoversDisplay() {
    this.elements.moversCount.textContent = this.moversCount;
  }

  calculatePrice() {
    let totalPrice = 0;

    totalPrice += this.moversCount * this.basePrice;

    const selectedCar = this.elements.carSelect.value;
    if (selectedCar && this.carPrices[selectedCar]) {
      totalPrice += this.carPrices[selectedCar];
    }

    return totalPrice;
  }

  formatPrice(price) {
    return new Intl.NumberFormat("ru-RU").format(price);
  }

  isFormValid() {
    const pickupAddress = this.elements.pickupAddress.value.trim();
    const phoneNumber = this.elements.phoneNumber.value.trim();
    const selectedCar = this.elements.carSelect.value;

    return (
      pickupAddress.length > 0 &&
      phoneNumber.length > 4 &&
      phoneNumber.startsWith("+998") &&
      selectedCar.length > 0
    );
  }

  updateFormState() {
    const isValid = this.isFormValid();
    const hasMovers = this.moversCount > 0;

    if (isValid && hasMovers) {
      const totalPrice = this.calculatePrice();
      this.elements.submitButton.textContent = `Оформить за ${this.formatPrice(
        totalPrice
      )} сум`;
      this.elements.submitButton.className =
        "w-full py-4 rounded-lg font-medium text-white transition-all duration-300 bg-green-custom hover:bg-green-600 cursor-pointer";
      this.elements.submitButton.disabled = false;
      this.elements.warningText.classList.add("hidden");
    } else {
      this.elements.submitButton.textContent = "Оформить";
      this.elements.submitButton.className =
        "w-full py-4 rounded-lg font-medium text-white transition-all duration-300 bg-gray-400 cursor-not-allowed";
      this.elements.submitButton.disabled = true;

      if (!isValid) {
        this.elements.warningText.classList.remove("hidden");
      } else {
        this.elements.warningText.classList.add("hidden");
      }
    }
  }

  submitOrder() {
    const orderData = {
      pickupAddress: this.elements.pickupAddress.value,
      deliveryAddress: this.elements.deliveryAddress.value,
      car: this.elements.carSelect.value,
      date: this.elements.dateSelect.value,
      movers: this.moversCount,
      phone: this.elements.phoneNumber.value,
      comment: this.elements.comment.value,
      totalPrice: this.calculatePrice(),
    };

    console.log("Order submitted:", orderData);
    alert(
      `Заказ оформлен!\nСумма: ${this.formatPrice(
        orderData.totalPrice
      )} сум\nТелефон: ${orderData.phone}`
    );
  }
}

function focusPhone() {
  document.getElementById("phoneNumber").focus();
}

function focusPickup() {
  document.getElementById("pickupAddress").focus();
}

document.addEventListener("DOMContentLoaded", () => {
  new ModalManager();
  new MovingCalculator();
});
