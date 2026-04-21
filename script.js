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

// // Javascript tasks that can be easily converted to react
// // 1. Create a counter with increase and decrease buttons
// // 2. Toggle visibility of text when button is clicked(hide and show) 3. Take input from the user and display it in the
// console
// // 4. Add two numbers entered by user
// // 5. Todo list: add items and display them using list
// // 6. Count characters in input field
// // 7. Filter items based in search input (use .filter and list)
// // 8. Generate random numbers on button click
// // 9. Check if input is empty before submit
// // 10. Switch between light and dark mode.

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta http-equiv="X-UA-Compatible" content="IE=edge">
//         <meta name="viewport" content="~width=device-width, initial-scale=1.0">
//         <title>Functionalities</title>
//         <style>
            
//         </style>
//     </head>
//     <body>
//         <h1>Functionalities</h1>
//         <h1 id ="count">0</h1>
//         <button onclick="Increasecounter()">Increase</button>
//         <button onclick="Decreasecounter()">Decrease</button>

//         <h1>2. Toggle Visiblity</h1>
//         <p id="texts">This is the text for test case.</p>
//         <button onclick="toggle()">Click to hide/show text</button>

//         <h1>3. Take input from user and display in console</h1>
//         <input type="text" id="userInput" placeholder="Enter something...">
//         <button onclick="displayInput()">Display in Console</button>


//         <h1>5. Todo List</h1>
//         <input type="text" id="wishes" placeholder="Enter your todos">
//         <ul id="list"></ul>
//         <button onclick="addtodos()">Add TODOS</button>

//         <h1>5. Count Character</h1>
//         <input type="text" id="str" placeholder="Enter your text" oninput="countchars()">
//         <p >Total Characters:<span id="val">0</span> </p>


//         <h1> 8. Generate Random Numbers</h1>
//         <button onclick="generate()">Generate Random Number</button>
//         <p id="random"></p>

//         <h1>9. Check if input is empty</h1>
//         <input type="text" id="checkInp" placeholder="enter anything.........">
//         <button onclick="check()">Submit</button>



//     <script>
//         let count = 0
//         function Increasecounter(){
//             count ++;
//             document.getElementById("count").innerText = count;

//         }
//         function Decreasecounter(){
//             count --;
//             document.getElementById("count").innerText = count;

//         }

//         function toggle(){
//             let text = document.getElementById("texts");
//             if(text.style.display==='none'){
//                 text.style.display= 'block';
//             }
//             else{
//                 text.style.display='none';
//             }


//         }

//         function displayInput(){
//             alert("Check console for user input");
//             let userinp = document.getElementById("userInput").value;
//             console.log(userinp);
//         }

//         function addtodos(){
//             let text = document.getElementById("wishes").value;
//             let list = document.getElementById("list");
//             let li = document.createElement("li");
//             li.innerText = text;
//             list.appendChild(li);

//         }

//         function countchars(){
//             let text = document.getElementById("str").value;
//             let val = document.getElementById("val");
//             val.innerText = text.length;
//         }

//         function check(){
//             let text = document.getElementById("checkInp").value;
//             if (text.trim() === ''){
//                 alert("The input cannot be empy!");
//             }
//             else{
//                 alert("input submitted!");
//             }
//         }

//         function generate(){
//             let val = Math.floor(Math.random() * 100);
//             document.getElementById("random").innerText = val;
//         }



//     </script>
//     </body>
// </html>
