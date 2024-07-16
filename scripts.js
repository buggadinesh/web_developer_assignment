document.getElementById('btn').addEventListener("click", function () {
    document.querySelector('.for').style.display = 'flex';
})
document.getElementById('close').addEventListener("click", function () {
    document.querySelector('.for').style.display = 'none';
})
let img = document.querySelector("#i");
function change() {
    img.src = "./images/image.png"
}
function change1() {
    img.src = "./images/2.png"

}
function change2() {
    img.src = "./images/1.png"
}