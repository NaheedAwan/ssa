
let yourName = "Naheed Awan" 

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-gb")
    btnQtn.textContent = gb + 1
    gb = gb+1
    
    btnTotal = document.querySelector("#qty-total")
 
    btnTotal.textContent = gb + cc + sugar 

    


    
    })

document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0) {
    btnQtn=document.querySelector("#qty-gb")
    btnQtn.textContent = gb - 1
    gb = gb-1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent =  gb + cc + sugar 
} 
    })
document.getElementById('add-cc').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-cc")
    btnQtn.textContent = cc + 1
    cc = cc + 1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent =  cc + sugar  + gb
})
document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0) {
    btnQtn=document.querySelector("#qty-cc")
    btnQtn.textContent = cc - 1
    cc = cc - 1
    btnTotal = document.querySelector("#qty-total")
     btnTotal.textContent = cc + sugar  + gb
    }
})
document.getElementById('add-sugar').addEventListener('click', function() {
    btnQtn=document.querySelector("#qty-sugar")
    btnQtn.textContent = sugar + 1
    sugar = sugar + 1
    btnTotal= document.querySelector("#qty-total")
     btnTotal.textContent = sugar + cc + gb

})
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0) {
    btnQtn=document.querySelector("#qty-sugar")
    btnQtn.textContent = sugar - 1
    sugar = sugar - 1
    btnTotal = document.querySelector("#qty-total")
    btnTotal.textContent = sugar + cc + gb
    }
    
})
 
//   btnTotal = document.querySelector("#qty-total")
//   total = btnTotal.addAll
   





