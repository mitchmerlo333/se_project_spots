const editProfileBtn = document.querySelector(".profile__edt-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");



const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");


const profileNameEl = document.querySelector("click", function () {}
const profileDescriptionEl = document.querySelector(".profile__description");



editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal-is-open");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal-is-open");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal-is-open");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal-is-open");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal-is-open");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
