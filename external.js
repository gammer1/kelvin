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

    function addToCartClicked(){
        alert("button clicked")
        var bu=event,target
        var shopitem=bu.parentElement.parentElement
        var title=document.getElementsByClassName("shop-item-title")[0].innerText
        var price=document.getElementsByClassName("shop-item-prize")[0].innerText
        var image=document.getElementsByClassName("shop-item-image")[0].src
        addItemToCart(title,price,Image)
    }
    function addItemToCart(){
    var cartrow=document.createElement("div")
    carteow.classlist.add("cart-row")
    var cartitems=document.getElementsByClassName("")
    }
}