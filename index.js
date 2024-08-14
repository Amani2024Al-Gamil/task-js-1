prompt("welcome to our website,are you ready?")


var a = document.querySelector('a')
var Allproducts = document.querySelectorAll(' a')
var div1 = document.querySelector('#div1')
var btn1 = document.querySelector('#btnPrice')
var totalPrice = 0
Allproducts.forEach(function(item){item.onclick=function()
    
    {totalPrice += (item.getAttribute('price'))
        div1.innerHTML+=item.textContent + '////////////////'



        div1.innerHTML+=(item.getAttribute('price'))
    
}})
btn1.onclick=function(){console.log(totalPrice)}