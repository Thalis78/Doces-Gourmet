const hamburgerBtn = document.getElementById("hamburger-btn");
const mobileMenu = document.getElementById("mobile-menu");
const infoBtn = document.getElementById("info-btn");
const infoBtnMobile = document.getElementById("info-btn-mobile");
const infoModal = document.getElementById("info-modal");
const closeModalBtnInfo = document.getElementById("close-modal-btn-info"); // Botão de fechar do modal de informações
const closeModalBtnProduct = document.getElementById("close-modal-btn-product"); // Botão de fechar do modal de produto
const productModal = document.getElementById("product-modal");

hamburgerBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

infoBtn.addEventListener("click", () => {
  infoModal.classList.remove("hidden");
});

infoBtnMobile.addEventListener("click", () => {
  infoModal.classList.remove("hidden");
});

closeModalBtnInfo.addEventListener("click", () => {
  infoModal.classList.add("hidden");
});

closeModalBtnProduct.addEventListener("click", () => {
  productModal.classList.add("hidden");
});

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
