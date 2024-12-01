var stickersHomer = document.querySelector("#cantidad-stickers-homer");
var stickersBart = document.querySelector("#cantidad-stickers-bart");
var stickersVenus = document.querySelector("#cantidad-stickers-venus");
var resultado = document.querySelector(".resultado");


function calcularTotal() {
    var total = Number(stickersHomer.value) + Number(stickersBart.value) + Number(stickersVenus.value);


if (total <= 10) {
    resultado.innerHTML = "Llevas " + total + " stickers"
}
else if (total > 10) {
    resultado.innerHTML = "Llevas demasiados stickers"
}


}

stickersHomer.addEventListener("input", calcularTotal);
stickersBart.addEventListener("input", calcularTotal);
stickersVenus.addEventListener("input", calcularTotal);

calcularTotal();

