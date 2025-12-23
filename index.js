const addBtn = document.getElementById("add-review-btn");
const reviewText = document.getElementById("review-text");
const reviewAuthor = document.getElementById("review-author");
const reviewsContainer = document.getElementById("reviews-container");

addBtn.addEventListener("click", () => {
  const text = reviewText.value.trim();
  const author = reviewAuthor.value.trim();

  if (text && author) {
    const newReview = document.createElement("div");
    newReview.classList.add("recommendation");
    newReview.innerHTML = `
        <p>"${text}"</p>
        <strong>- ${author}</strong>
        <button class="delete-btn">Удалить</button>
      `;
    reviewsContainer.appendChild(newReview);

    newReview.querySelector(".delete-btn").addEventListener("click", () => {
      newReview.remove();
    });

    reviewText.value = "";
    reviewAuthor.value = "";
  } else {
    alert("Пожалуйста, заполните оба поля!");
  }
});

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItems = document.getElementById("cart-items");
const checkoutBtn = document.getElementById("checkout-btn");
const modal = document.getElementById("order-modal");
const closeModal = document.querySelector(".modal .close");

addToCartButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Добавлено в корзину ниже!");
    const itemName = btn.parentElement.querySelector("h3").innerText;
    const li = document.createElement("li");
    li.innerHTML = `${itemName} <button class="remove-btn">Удалить</button>`;
    cartItems.appendChild(li);

    li.querySelector(".remove-btn").addEventListener("click", () => {
      li.remove();
    });
  });
});

checkoutBtn.addEventListener("click", () => {
  if (cartItems.children.length === 0) {
    alert("Ваша корзина пуста!");
    return;
  }
  modal.style.display = "block";
  cartItems.innerHTML = "";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
