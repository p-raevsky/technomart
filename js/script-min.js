const feedbackLink=document.querySelector(".button-contacts"),feedbackPopup=document.querySelector(".modal-feedback"),mapLink=document.querySelector(".map"),mapPopup=document.querySelector(".modal-map"),cartLink=document.querySelectorAll(".button-buy"),cartPopup=document.querySelector(".modal-cart"),cartClose=cartPopup.querySelector(".modal-close"),buttonDelivery=document.querySelector(".button-service-delivery"),buttonWarranty=document.querySelector(".button-service-warranty"),buttonCredit=document.querySelector(".button-service-credit"),descriptionDelivery=document.querySelector(".description-delivery"),descriptionWarranty=document.querySelector(".description-warranty"),descriptionCredit=document.querySelector(".description-credit"),serviceBlock=document.querySelector(".service-block"),slider=document.querySelector(".slider"),slidePerforators=document.querySelector(".slide-perforators"),slideDrills=document.querySelector(".slide-drills"),buttonBack=document.querySelector(".button-back"),buttonNext=document.querySelector(".button-next"),bulletFirst=document.querySelector(".bullet-first"),bulletSecond=document.querySelector(".bullet-second");var isStorageSupport=!0,storageName="",storageEmail="",sliderToggle=function(){slidePerforators.classList.contains("slide-current")?(slidePerforators.classList.remove("slide-current"),slideDrills.classList.add("slide-current"),slider.classList.add("slider-wrapper-2"),slider.classList.remove("slider-wrapper-1"),bulletFirst.classList.remove("bullet-current"),bulletSecond.classList.add("bullet-current")):(slidePerforators.classList.add("slide-current"),slideDrills.classList.remove("slide-current"),slider.classList.remove("slider-wrapper-2"),slider.classList.add("slider-wrapper-1"),bulletFirst.classList.add("bullet-current"),bulletSecond.classList.remove("bullet-current"))};buttonBack&&buttonBack.addEventListener("click",function(e){e.preventDefault(),sliderToggle()}),buttonNext&&buttonNext.addEventListener("click",function(e){e.preventDefault(),sliderToggle()}),bulletFirst&&bulletFirst.addEventListener("click",function(e){e.preventDefault(),sliderToggle()}),bulletSecond&&bulletSecond.addEventListener("click",function(e){e.preventDefault(),sliderToggle()}),buttonDelivery&&buttonDelivery.addEventListener("click",function(e){e.preventDefault(),buttonDelivery.classList.add("button-service-current"),buttonWarranty.classList.remove("button-service-current"),buttonCredit.classList.remove("button-service-current"),descriptionDelivery.classList.add("service-description-curent"),descriptionWarranty.classList.remove("service-description-curent"),descriptionCredit.classList.remove("service-description-curent"),serviceBlock.classList.add("service-wrapper-1"),serviceBlock.classList.remove("service-wrapper-2"),serviceBlock.classList.remove("service-wrapper-3")}),buttonWarranty&&buttonWarranty.addEventListener("click",function(e){e.preventDefault(),buttonDelivery.classList.remove("button-service-current"),buttonWarranty.classList.add("button-service-current"),buttonCredit.classList.remove("button-service-current"),descriptionDelivery.classList.remove("service-description-curent"),descriptionWarranty.classList.add("service-description-curent"),descriptionCredit.classList.remove("service-description-curent"),serviceBlock.classList.remove("service-wrapper-1"),serviceBlock.classList.add("service-wrapper-2"),serviceBlock.classList.remove("service-wrapper-3")}),buttonCredit&&buttonCredit.addEventListener("click",function(e){e.preventDefault(),buttonDelivery.classList.remove("button-service-current"),buttonWarranty.classList.remove("button-service-current"),buttonCredit.classList.add("button-service-current"),descriptionDelivery.classList.remove("service-description-curent"),descriptionWarranty.classList.remove("service-description-curent"),descriptionCredit.classList.add("service-description-curent"),serviceBlock.classList.remove("service-wrapper-1"),serviceBlock.classList.remove("service-wrapper-2"),serviceBlock.classList.add("service-wrapper-3")});try{storageName=localStorage.getItem("Name"),storageEmail=localStorage.getItem("Email")}catch(e){isStorageSupport=!1}if(feedbackPopup){const e=feedbackPopup.querySelector(".modal-close"),t=feedbackPopup.querySelector(".feedback-form"),r=feedbackPopup.querySelector(".feedback-name"),s=feedbackPopup.querySelector(".feedback-email"),c=feedbackPopup.querySelector(".feedback-letter");feedbackLink.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.add("modal-show"),storageName?(r.value=storageName,s.focus(),storageEmail&&(s.value=storageEmail,c.focus())):r.focus()}),e.addEventListener("click",function(e){e.preventDefault(),feedbackPopup.classList.remove("modal-show"),feedbackPopup.classList.remove("modal-error")}),t.addEventListener("submit",function(e){r.value&&s.value&&c.value?isStorageSupport&&(localStorage.setItem("Name",r.value),localStorage.setItem("Email",s.value)):(e.preventDefault(),feedbackPopup.classList.remove("modal-error"),feedbackPopup.offsetWidth=feedbackPopup.offsetWidth,feedbackPopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackPopup.classList.contains("modal-show")&&(e.preventDefault(),feedbackPopup.classList.remove("modal-show"),feedbackPopup.classList.remove("modal-error"))})}if(mapPopup){const e=mapPopup.querySelector(".modal-close");mapLink.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),e.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&(e.preventDefault(),mapPopup.classList.remove("modal-show"))})}for(var i=0;i<cartLink.length;i++)cartLink[i].addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.add("modal-show")});cartClose.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&cartPopup.classList.contains("modal-show")&&(e.preventDefault(),cartPopup.classList.remove("modal-show"))});