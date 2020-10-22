const feedbackLink = document.querySelector(".button-contacts");
const feedbackPopup = document.querySelector(".modal-feedback");
const feedbackClose = feedbackPopup.querySelector(".modal-close");
const feedbackForm = feedbackPopup.querySelector(".feedback-form");
const feedbackName = feedbackPopup.querySelector(".feedback-name");
const feedbackEmail = feedbackPopup.querySelector(".feedback-email");
const feedbackLetter = feedbackPopup.querySelector(".feedback-letter");

const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const mapClose = mapPopup.querySelector(".modal-close");

const cartLink = document.querySelector(".button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
    storageName = localStorage.getItem("Name");
    storageEmail = localStorage.getItem("Email");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");

    if (storageName) {
        feedbackName.value = storageName;
        feedbackEmail.focus();

        if (storageEmail) {
            feedbackEmail.value = storageEmail;
            feedbackLetter.focus();
        }

    } else {
        feedbackName.focus();
    }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-error");
        feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
        feedbackPopup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("Name", feedbackName.value);
            localStorage.setItem("Email", feedbackEmail.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            feedbackPopup.classList.remove("modal-show");
            feedbackPopup.classList.remove("modal-error");
        }
    }
});

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            mapPopup.classList.remove("modal-show");
        }
    }
});

cartLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
});

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
            evt.preventDefault();
            cartPopup.classList.remove("modal-show");
        }
    }
});
