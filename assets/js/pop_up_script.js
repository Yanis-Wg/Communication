import { expositions_corea } from "./data_corea.js";
import { expositions_europ } from "./data_europ.js";

const page = document.body.dataset.page;
const expositions = page === "corea" ? expositions_corea : expositions_europ;

function openPopup(expo) {
    const textContainer = document.querySelector(".text-container");
    const popup = document.querySelector(".pop-up");
    popup.classList.add("active");
    document.body.style.overflow = "hidden";
    popup.style.backgroundImage = `url(${expo.cover})`;

    document.querySelector(".img-container img").src = expo.image;

    const sectionsHTML = expo.sections.map(section => `
        <h2>${section.subtitle}</h2>
        <p>${section.paragraph}</p>
    `).join("");

    textContainer.innerHTML = `
        <h1>${expo.title}</h1>
        ${sectionsHTML}
    `;
}

function closePopup() {
    document.querySelector(".pop-up").classList.remove("active");
    document.body.style.overflow = "";
}

document.querySelectorAll(".basic-container").forEach((btn, index) => {
    btn.addEventListener("click", function () {
        openPopup(expositions[index]);
    });
});

document.querySelector(".close-button").addEventListener("click", function () {
    closePopup();
});

document.querySelector(".pop-up").addEventListener("click", function (e) {
    if (e.target === this) {
        closePopup();
    }
});