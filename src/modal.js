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