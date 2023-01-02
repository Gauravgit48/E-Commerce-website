const menu=document.querySelector(".fa-outdent")
const navLinks=document.querySelector("ul")
const close=document.querySelector(".fa-times")


if (menu){
menu.addEventListener("click",()=>{
    navLinks.classList.add("active");
})
}
if(close){
close.addEventListener("click",()=>{
    navLinks.classList.remove("active");
})
}

let open=document.querySelector("#open")
let cart=document.querySelector(".cart")
let close2=document.querySelector("#close")

open.addEventListener("click",()=>{
    cart.style.right="0px"
})
close2.addEventListener("click",()=>{
    cart.style.right="-300px"
})

// .....................Single product page............... 

// MainImg=document.querySelector("#main-img")
// Smallimg=document.querySelectorAll(".small-img")

// Smallimg.forEach((e)=>{
//     e.addEventListener('click',()=>{
//         MainImg.src=e.src
//     })
// }) 

// ..........................redirect to sigle product page ................ 

// allProduct=document.querySelectorAll(".products")
// console.log(allProduct);


// allProduct.forEach((product)=>{
//     product.addEventListener('click',()=>{
//         window.location.href="product.html"
//     })
// })



if (document.readyState=="loading"){
    document.addEventListener("DOMContentLoaded",ready);
}else{
    ready();
}

// making function  
 
function ready(){
    let removeCartButtons=document.getElementsByClassName('fa-trash-alt')
    // console.log(removeCartButtons)
    for(var i=0;i<removeCartButtons.length;i++){
        var button =removeCartButtons[i]
        button.addEventListener('click',removeCartItem)
        
    }



}
 
    // Remove Itmes form the cart 
    let removeCartItem=(e)=>{
        let buttonClicked=e.target;
        console.log("clicked")
        buttonClicked.parentElement.remove();
        alert("1 item removed")
        updatetotal();
    }

    const quantitychanged=(e)=>{
        var input=e.target;
      if(isNaN(input.value)|| input.value<=0){
        input.value=1;
      }
      updatetotal();
      }
    
    //   update total  
    
    let updatetotal=()=>{
        const cartContent=document.getElementsByClassName('cart-content')[0]
        const cartBoxes=document.getElementsByClassName('cart-box')
        var total=0;
        for(var i=0;i<cartBoxes.length;i++){
            var cartBox=cartBoxes[i]
            const priceElement=cartBox.getElementsByClassName('cart-price')[0]
            const quantityElement=cartBox.getElementsByClassName('cart-quanity')[0]
            const price=parseFloat(priceElement.innerText.replace("$",""));
            const quantity=quantityElement.value
            total=total+(price*quantity) 
             document.getElementsByClassName('total-price')[0].innerText="$" + total;
        }
        // updatetotal();   
        
    }
    
    




  

  
  

//   Add to cart ............................. 

let addToCart=document.getElementsByClassName('fa-shopping-cart')
var icon=document.getElementsByClassName('icon');


console.log(addToCart);
for(var i=0;i<addToCart.length;i++){    
    let button=addToCart[i];
    button.addEventListener('click',(e)=>{
        button=e.target;
        let shopProduct=button.parentElement.parentElement.parentElement;
        let title=shopProduct.getElementsByClassName('pro-tittle')[0].innerText;
        let price=shopProduct.getElementsByClassName('p-price')[0].innerText;
        let productImg=shopProduct.getElementsByClassName("pro-img")[0].src;
        addProductToCart(title,price,productImg);
        console.log(price);   
    })
    
}

function addProductToCart(title,price,productImg){
    let cartShopBox=document.createElement("div");
    cartShopBox.classList.add('cart-box')
    let cartItems=document.getElementsByClassName('cart-content')[0]
    let cartItemsNames=document.getElementsByClassName('cart-p-title')
    for(var i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText==title){
        alert("you have already add this item to cart");
        return;
    }
    updatetotal();
}



let cartBoxContent=`
<div class="products">
<img src="${productImg}" alt="">
<div class="detail-box">
<div class="cart-p-title">${title}</div>
   <div class="cart-price">${price}</div>
    <input type="number" value="1" class="cart-quanity"> 

</div>
<i class="fas  fa-trash-alt" ></i>

i
</div>`


cartShopBox.innerHTML=cartBoxContent
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('fa-trash-alt')[0].addEventListener('click',removeCartItem);
cartShopBox.getElementsByClassName('cart-quanity')[0].addEventListener('change',quantitychanged);
}







let buyButton=document.getElementsByClassName("btn")[0].addEventListener("click",()=>{
    alert("Your order is placed");
    // let cartContent=document.getElementsByClassName('cart-content')[0]
    // while(cartContent.hasChildNodes()){
    //     cartContent.removeChild(cartContent.firstChild)
    // }
    // updatetotal()
    
})      


for(var i=0;i<addToCart.length;i++){
    let button=addToCart[i];
    let count=0;
    button.addEventListener('click',()=>{       
		count+=1;  
        if(count>=1){
            alert("the item is already in the cart")
            document.getElementById("icon").style.visibility="hidden";
            
        }
        document.getElementById("icon1").innerHTML=count;
        
    console.log(count);
    })}

