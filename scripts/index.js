const editProfileBtn = document.querySelector(".profile__edt-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

// Profile elements
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");

// Modal utility functions
function openModal(modal) {
  modal.classList.add("modal_opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

// Open Edit Profile Modal
editProfileBtn.addEventListener("click", () => {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
});

// Close Edit Profile Modal
editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

// Save profile on submit
editProfileForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
});

newPostModal.addEventListener("click", (e) => {
  newPostInput = newPostModal.querySelector("#image-link-input");
  newPosteDescriptionInput = newPostModal.querySelector("#post-caption-input");
  newPostEl = document.querySelector(".profile__post");
  closeModal(newPostModal);
});

newPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  newPostEl.textContent = newPostInput.value;
  newPostDescriptionEl.textContent = newPosteDescriptionInput.value;
  closeModal(newPostModal);
});

// Open New Post Modal
newPostBtn.addEventListener("click", () => {
  openModal(newPostModal);
});

// Close New Post Modal
newPostCloseBtn.addEventListener("click", () => {
  closeModal(newPostModal);
});
