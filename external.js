document.getElementById("one").style.color="blue"

if(document.readyState="loading"){
    document.addEventListener("DOMContentLoaded",ready)
}

else{
    ready()
}

function ready(){
    var btn=document.getElementsByClassName("shop-item-button")
    for(i=0;i<btn.length;i++){
        var button=btn[i]
        button.addEventListener("click",addToCartClicked)
    }

    var removecartitem=document.getElementsByClassName("btn-remove")
    for(i=0;i<removecartitem.length;i++)
        removecartitem.addEventListener("click",removecartitem)
}

function removecartitem(event){
    var buttoonclicked=event.target
    buttoonclicked.parentElement.parentElement.remove()
}

    function addToCartClicked(event){
        var button=event.target
        var shopitem=button.parentElement.parentElement
        var title=shopitem.getElementsByClassName("shop-item-title")[0].innerText
        var price=shopitem.getElementsByClassName("shop-item-price")[0].innerText
        var imagesrc=shopitem.getElementsByClassName("shop-item-image")[0].src
        addItemToCart(title,price,imagesrc)
    }
    function addItemToCart(title,price,imagesrc){
    var cartrow=document.createElement("div")
    cartrow.classList.add("cart-row")
    var cartitems=document.getElementsByClassName("cart-items")[0]

    var cartrowcontents=`
    <div class="cart-item cart-column">
        <img class="cart-item-image" src=${imagesrc} width="100" heoght="100">
            <span class="cart-item-title">${title}</span>
    </div>
   <span class="cart-price">${price}</span>
<div>
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn-remove" type="button">Remove</button>
</div>
`
cartrow.innerHTML=cartrowcontents
cartitems.append(cartrow)
cartrow.getElementsByClassName("btn-danger")[0].addEventListener("click",removecartitem)
cartrow.getElementsByClassName("cart-quantity-input")[0].addEventListener("click", quantityChanged)
    }
