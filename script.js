var card = document.querySelector("#card")
var iso = document.querySelector("#attribute i")
var ice = document.querySelector("#card i")

iso.addEventListener("click", ()=>{
    card.style.opacity = 1;
})
ice.addEventListener("click", ()=>{
    card.style.opacity = 0;
})