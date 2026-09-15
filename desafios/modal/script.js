const openModalButon = document.querySelector("#open-modal");
const closeModalButon = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fadee = document.querySelector('#fadee');

const toggleModal = () => {
    modal.classList.toggle("hide")
    fadee.classList.toggle("hide")
}

[openModalButon, closeModalButon, fadee].forEach((el) => {
    el.addEventListener("click", () => toggleModal() )
})