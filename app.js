
document.addEventListener('DOMContentLoaded', function () { })
// var titles = document.getElementsByClassName('title');
// Array.from(titles).forEach(function(item){
//     console.log(item)
// })


// let second_li_content = document.querySelector('.second-li');
// console.log(second_li_content)


// selecting element with the same class name and using for each loop
// to list them.
// let secondLi = document.querySelectorAll('.name');

//you can change the text content or appened it with a string
// Array.from(secondLi).forEach(function(book){
//     console.log(book.textContent += ` let's go on`)
// })


// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = `<h2>Books to read and more ... </h2>`

// //append it with p tag

// bookList.innerHTML += `<p>You gotto read</p>`

let h2 = document.querySelector('#book-list h2')
h2.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
})


// let btns = document.querySelectorAll('#book-list .delete');

// Array.from(btns).forEach(function(item){
//     item.addEventListener('click', function(e){
//         const li = e.target.parentNode;
//         li.parentNode.removeChild(li);

//     })
// })



let link = document.querySelector('#page-banner a')

link.addEventListener('click', function(e){
    e.preventDefault();
    console.log('navigation to', e.target.textContent, ' was prevented')
})

//Bobbling event

const list = document.querySelector('#book-list ul')
//we didnt caall the parent node here because list is the parent
list.addEventListener('click', function(e){
    if (e.target.className == 'delete') {
        const li = e.target.parentNode
        list.removeChild(li)
    }
})

//add form

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const inputValue = addForm.querySelector('input[type="text"]').value;
    console.log(inputValue);

    //create element
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    bookName.textContent = inputValue;
    deleteBtn.textContent = 'delete';

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    
})


// Hide Books
const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function (e) {
    if (hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
})

// filter Books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function (e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function (book) {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    })
})

// Tabbed-Content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', function (e) {
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function (panel) {
            if (panel == targetPanel) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})



// let last-li-element = document.querySelector('li:last-child')