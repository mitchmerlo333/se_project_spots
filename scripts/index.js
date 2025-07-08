const editProfileBtn = document.querySelector(".profile__edt-btn");

const editProfileModal = document.querySelector("#edit-profile-modal");

const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");

const newPostBtn = document.querySelector(".profile__add-btn");

const newPostModal = document.querySelector("#new-post-modal");

const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

editProfileBtn.addEventListener("click", function () {
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
