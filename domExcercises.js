// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Document</title>
// </head>
// <body>
//     <div class="header">
//     </div>
//     <section id="container">
//         <ul>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ul>
//         <ol>
//             <li class="first">one</li>
//             <li class="second">two</li>
//             <li class="third">three</li>
//         </ol>
//     </section>
//     <div class="footer">
//     </div>
// </body>
// </html>

// Select the section with an id of container without using querySelector.
let container = document.getElementById("id")

// 2 - Select the section with an id of container using querySelector.
let container = document.querySelector("#container")

// 3 - Select all of the list items with a class of "second".
let second = document.querySelectorAll(".second")

// 4 - Select a list item with a class of third, but only the list item inside of the ol tag.
 let third = document.querySelector("ol .third")

 // 5 - Give the section with an id of container the text "Hello!".
 let container = document.getElementById("container")
 container.innerText = "Hello!"

 // 6 - Add the class main to the div with a class of footer.
 let footer = document.querySelector(".footer")
 footer.classList.add("main")

//  OR
footer.className += "main";

// 7 - Remove the class main on the div with a class of footer.
let removeMain = document.querySelector(".footer")
removeMain.classList.remove("main")

// 8 - Create a new li element.
let newLi = document.createElement("li");

// 9 - Give the li the text "four".
newLi.innerText = "four"

// 10 - Append the li to the ul element.
let ulElement = document.querySelector("ul")
ulElement.appendChild(newLi)

// 11 - Loop over all of the lis inside the ol tag and give them a background color of "green".
insideOl = document.querySelector("ol li")
for(let i = 0; i < insideOl.length; i++) {
    insideOl[i].style.backgroundColor = "green"
}

// 12 - Remove the div with a class of footer.
removeFooter = document.querySelector('.footer')
removeFooter.remove()