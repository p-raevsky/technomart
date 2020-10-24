const feedbackLink = document.querySelector(".button-contacts");
const feedbackPopup = document.querySelector(".modal-feedback");
const mapLink = document.querySelector(".map");
const mapPopup = document.querySelector(".modal-map");
const cartLink = document.querySelectorAll(".button-buy");
const cartPopup = document.querySelector(".modal-cart");
const cartClose = cartPopup.querySelector(".modal-close");
const buttonDelivery = document.querySelector(".button-service-delivery");
const buttonWarranty = document.querySelector(".button-service-warranty");
const buttonCredit = document.querySelector(".button-service-credit");
const descriptionDelivery = document.querySelector(".description-delivery");
const descriptionWarranty = document.querySelector(".description-warranty");
const descriptionCredit = document.querySelector(".description-credit");
const serviceBlock = document.querySelector(".service-block");
const slider = document.querySelector(".slider");
const slidePerforators = document.querySelector(".slide-perforators");
const slideDrills = document.querySelector(".slide-drills");
const buttonBack = document.querySelector(".button-back");
const buttonNext = document.querySelector(".button-next");
const bulletFirst = document.querySelector(".bullet-first");
const bulletSecond = document.querySelector(".bullet-second");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

var sliderToggle = function () {
    if (slidePerforators.classList.contains("slide-current")) {
        slidePerforators.classList.remove("slide-current");
        slideDrills.classList.add("slide-current");
        slider.classList.add("slider-wrapper-2");
        slider.classList.remove("slider-wrapper-1");
        bulletFirst.classList.remove("bullet-current");
        bulletSecond.classList.add("bullet-current");
    } else {
        slidePerforators.classList.add("slide-current");
        slideDrills.classList.remove("slide-current");
        slider.classList.remove("slider-wrapper-2");
        slider.classList.add("slider-wrapper-1");
        bulletFirst.classList.add("bullet-current");
        bulletSecond.classList.remove("bullet-current");
    }
};

if (buttonBack) {
    buttonBack.addEventListener("click", function (evt) {
        evt.preventDefault();
        sliderToggle();
    });
}

if (buttonNext) {
    buttonNext.addEventListener("click", function (evt) {
        evt.preventDefault();
        sliderToggle();
    });
}

if (bulletFirst) {
    bulletFirst.addEventListener("click", function (evt) {
        evt.preventDefault();
        sliderToggle();
    });
}

if (bulletSecond) {
    bulletSecond.addEventListener("click", function (evt) {
        evt.preventDefault();
        sliderToggle();
    });
}

if (buttonDelivery) {
    buttonDelivery.addEventListener("click", function (evt) {
        evt.preventDefault();
        buttonDelivery.classList.add("button-service-current");
        buttonWarranty.classList.remove("button-service-current");
        buttonCredit.classList.remove("button-service-current");
        descriptionDelivery.classList.add("service-description-curent");
        descriptionWarranty.classList.remove("service-description-curent");
        descriptionCredit.classList.remove("service-description-curent");
        serviceBlock.classList.add("service-wrapper-1");
        serviceBlock.classList.remove("service-wrapper-2");
        serviceBlock.classList.remove("service-wrapper-3");
    });
}

if (buttonWarranty) {
    buttonWarranty.addEventListener("click", function (evt) {
        evt.preventDefault();
        buttonDelivery.classList.remove("button-service-current");
        buttonWarranty.classList.add("button-service-current");
        buttonCredit.classList.remove("button-service-current");
        descriptionDelivery.classList.remove("service-description-curent");
        descriptionWarranty.classList.add("service-description-curent");
        descriptionCredit.classList.remove("service-description-curent");
        serviceBlock.classList.remove("service-wrapper-1");
        serviceBlock.classList.add("service-wrapper-2");
        serviceBlock.classList.remove("service-wrapper-3");
    });
}

if (buttonCredit) {
    buttonCredit.addEventListener("click", function (evt) {
        evt.preventDefault();
        buttonDelivery.classList.remove("button-service-current");
        buttonWarranty.classList.remove("button-service-current");
        buttonCredit.classList.add("button-service-current");
        descriptionDelivery.classList.remove("service-description-curent");
        descriptionWarranty.classList.remove("service-description-curent");
        descriptionCredit.classList.add("service-description-curent");
        serviceBlock.classList.remove("service-wrapper-1");
        serviceBlock.classList.remove("service-wrapper-2");
        serviceBlock.classList.add("service-wrapper-3");
    });
}

try {
    storageName = localStorage.getItem("Name");
    storageEmail = localStorage.getItem("Email");
} catch (err) {
    isStorageSupport = false;
}

if (feedbackPopup) {
    const feedbackClose = feedbackPopup.querySelector(".modal-close");
    const feedbackForm = feedbackPopup.querySelector(".feedback-form");
    const feedbackName = feedbackPopup.querySelector(".feedback-name");
    const feedbackEmail = feedbackPopup.querySelector(".feedback-email");
    const feedbackLetter = feedbackPopup.querySelector(".feedback-letter");

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
};

if (mapPopup) {
    const mapClose = mapPopup.querySelector(".modal-close");

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
};

for (var i = 0; i < cartLink.length; i++) {
    cartLink[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    });
}

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
