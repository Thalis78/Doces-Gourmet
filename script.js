const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const infoBtn = document.getElementById("info-btn");
const infoBtnMobile = document.getElementById("info-btn-mobile");
const infoModal = document.getElementById("info-modal");
const closeModalBtnInfo = document.getElementById("close-modal-btn-info"); // Botão de fechar do modal de informações
const closeModalBtnProduct = document.getElementById("close-modal-btn-product"); // Botão de fechar do modal de produto
const productModal = document.getElementById("product-modal");

// Toggle mobile menu visibility
hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Open info modal
infoBtn.addEventListener("click", () => {
  infoModal.classList.remove("hidden");
});

// Open info modal (mobile version)
infoBtnMobile.addEventListener("click", () => {
  infoModal.classList.remove("hidden");
});

// Close info modal
closeModalBtnInfo.addEventListener("click", () => {
  infoModal.classList.add("hidden");
});

// Close product modal
closeModalBtnProduct.addEventListener("click", () => {
  productModal.classList.add("hidden");
});

// Close mobile menu if clicked outside
document.addEventListener("click", (event) => {
  if (
    !hamburgerBtn.contains(event.target) &&
    !mobileMenu.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
  }
});

// Function to open product modal with details
function openProductModal(name, description, price, imageUrl) {
  document.getElementById("product-name").textContent = name;
  document.getElementById("product-description").textContent = description;
  document.getElementById("product-price").textContent = `R$ ${price},00`;
  document.getElementById("product-image").src = imageUrl;

  productModal.classList.remove("hidden");
}
