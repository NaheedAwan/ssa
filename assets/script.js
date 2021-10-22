// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Naheed Awan" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Ginger Bread cookies
// let menu = document.querySelectorAll(".menu")
// menu.textContent="add-gb"
// menu.addEventListener("add-gb",function(){
//     menu.addNumber=+1
// })

// let selectedmenu= "gb"
// let btnAdd = document.getElementById("#add-gb")
// let btnMinus = document.getElementById ("#minus-gb")
// let btnQtn = document.getElementById ("#qty-gb")
// btnAdd.addEventListener("click",function(e){
//     btnQtn.value = parseInt(btnQtn.value) + 1
// })
// btnMinus.addEventListener( "click", function (){
//     btnQtn.value = parseInt(btnQtn.value) - 1
// })


document.getElementById('add-gb').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-gb")
    
    btnQtn.textContent = gb + 1
    gb=gb+1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent = gb + 1
    })

document.getElementById('minus-gb').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-gb")
    btnQtn.textContent = gb - 1
    gb=gb-1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent =  gb - 1
    })
document.getElementById('add-cc').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-cc")
    btnQtn.textContent = cc + 1
    btnQtn.value = parseInt(btnQtn.value) + 1
    cc = cc + 1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent =  cc +1
})
document.getElementById('minus-cc').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-cc")
    btnQtn.textContent = cc - 1
    btnQtn.value = parseInt(btnQtn.value) - 1
    cc = cc - 1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent = cc - 1
})
document.getElementById('add-sugar').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-sugar")
    btnQtn.textContent = sugar + 1
    btnQtn.value = parseInt(btnQtn.value) + 1
    sugar = sugar + 1
    btnTotal= document.querySelector("#qty-total")
    btnTotal.textContent = sugar + 1

})
document.getElementById('minus-sugar').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-sugar")
    btnQtn.textContent = sugar - 1
    btnQtn.value = parseInt(btnQtn.value) - 1
    sugar = sugar - 1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent = sugar - 1
    
})
   
    btnTotal = document.querySelector("#qty-total")
 
    total = gb + cc + sugar
   






