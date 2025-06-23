const formModalOverlay = document.getElementById("formModalOverlay");
const formModal = document.getElementById("formModal");
const successModalOverlay = document.getElementById("successModalOverlay");
const calculatorModalOverlay = document.getElementById(
  "calculatorModalOverlay"
);
const calculatorModal = document.getElementById("calculatorModal");

const applicationForm = document.getElementById("applicationForm");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");

let moversCount = 0;
const moversCountElement = document.getElementById("moversCount");

formModalOverlay.style.display = "none";
successModalOverlay.style.display = "none";
calculatorModalOverlay.style.display = "none";

document
  .getElementById("openFormModalBtn")
  .addEventListener("click", openFormModal);
document
  .getElementById("openFormModalBtn2")
  .addEventListener("click", openFormModal);
document
  .getElementById("openModalBtn1")
  .addEventListener("click", openCalculatorModal);

document
  .getElementById("closeFormModalBtn")
  .addEventListener("click", closeAllModals);
document
  .getElementById("closeCalculatorModalBtn")
  .addEventListener("click", closeAllModals);
document.getElementById("okBtn").addEventListener("click", closeAllModals);

document.getElementById("decreaseMovers").addEventListener("click", () => {
  if (moversCount > 0) {
    moversCount--;
    moversCountElement.textContent = moversCount;
  }
});

document.getElementById("increaseMovers").addEventListener("click", () => {
  moversCount++;
  moversCountElement.textContent = moversCount;
});

document.getElementById("submitCalculatorBtn").addEventListener("click", () => {
  closeAllModals();
  showSuccessModal();
});

function openFormModal() {
  closeAllModals();
  formModalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function openCalculatorModal() {
  closeAllModals();
  calculatorModalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
}

function showSuccessModal() {
  closeAllModals();
  successModalOverlay.style.display = "flex";
  document.body.style.overflow = "hidden";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
  document.getElementById("input3").value = "";
  document.getElementById("input4").value = "";
  document.getElementById("input5").value = "";
  document.getElementById("input6").value = "";
}

function closeAllModals() {
  formModalOverlay.style.display = "none";
  successModalOverlay.style.display = "none";
  calculatorModalOverlay.style.display = "none";
  document.body.style.overflow = "auto";
}

[formModalOverlay, successModalOverlay, calculatorModalOverlay].forEach(
  (overlay) => {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) {
        closeAllModals();
      }
    });
  }
);

applicationForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();

  nameInput.classList.remove("border-red-500", "bg-red-50");
  phoneInput.classList.remove("border-red-500", "bg-red-50");

  if (!name || !phone) {
    formModal.classList.add("shake");
    setTimeout(() => {
      formModal.classList.remove("shake");
    }, 500);

    if (!name) {
      nameInput.classList.add("border-red-500", "bg-red-50");
    }
    if (!phone) {
      phoneInput.classList.add("border-red-500", "bg-red-50");
    }
    return;
  }

  showSuccessModal();
  applicationForm.reset();
});

nameInput.addEventListener("input", function () {
  this.classList.remove("border-red-500", "bg-red-50");
});

phoneInput.addEventListener("input", function () {
  this.classList.remove("border-red-500", "bg-red-50");
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeAllModals();
  }
});
