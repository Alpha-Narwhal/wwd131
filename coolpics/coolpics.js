const menuButton = document.querySelector(".menu");
const nav = document.querySelector("nav");

const handleResize = () => {
    if (window.innerWidth > 1000) {
        nav.classList.remove("show");
    } else {
        nav.classList.add("show");
    }
};

menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
});

const modal = document.querySelector(".viewer");
const closeViewerButton = document.querySelector(".close-viewer");

const openModal = (imageSrc) => {
    const modalImage = modal.querySelector("img");
    modalImage.src = imageSrc;
    modal.style.display = "grid";
};

const closeModal = () => {
    modal.style.display = "none";
};

closeViewerButton.addEventListener("click", closeModal);

const viewHandler = (event) => {
    const clickedImage = event.target;
    const imageSrc = clickedImage.src;
    const fullImageSrc = "norris-full.jpeg";
    
    openModal(fullImageSrc);
};

const picsContainer = document.querySelector(".pics");

const generateImages = () => {
    for (let i = 0; i < 9; i++) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = "norris-sm.jpeg";
        img.alt = "picture";
        figure.appendChild(img);
        picsContainer.appendChild(figure);
    }
};

picsContainer.innerHTML = "";
generateImages();

picsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        viewHandler(event);
    }
});

window.addEventListener("resize", handleResize);
handleResize();

modal.style.display = "none";
