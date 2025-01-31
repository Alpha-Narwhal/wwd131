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
    const imageSrc = clickedImage.src.split("/").pop().split(".")[0]; // Adjusting this part
    const fullImageSrc = "norris-full.jpeg";
    
    openModal(fullImageSrc);
};

const pics = document.querySelector(".pics");

pics.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
        viewHandler(event);
    }
});

window.addEventListener("resize", handleResize);
handleResize();

modal.style.display = "none";
