function changeText() {
    document.querySelector("h2").innerText = "You clicked the button!";
    console.log("Button was clicked!");
}
function greet(name) {
    alert("Hello, " + name + "!");
}
function changeText() {

    document.getElementById("message").innerHTML = "Text changed!";

}
document.getElementById("btn").addEventListener("click", function () {

    alert("Button clicked");

});

document.getElementById("colorBtn").addEventListener("click", function () {

    let cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.style.background = "lightblue";

    });
});

