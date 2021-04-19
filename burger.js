//Imposto un alert per consigliare all'utente cosa digitare per ottenere un eventuale sconto
alert("Scegli un coupon, digita 'burgerking', 'mcdonalds' o 'subway' e scopri se hai vinto uno sconto!");
var submitButton = document.getElementById("button");
var burgerName = document.getElementById("name");
var ingredientList = document.querySelectorAll(".ingredient [type='checkbox']");

//Imposto un event listener che si verificherà quando l'utente premerà il pulsante
submitButton.addEventListener("click", function() {
    var startPrice = 50;

    //Utilizzo una variabile per ottenere i prezzi dei singoli ingredienti da sommare al costo totale
    for (var i = 0; i < ingredientList.length; i++) {
        var ingredient = ingredientList[i];

    startPrice = getTotalPrice(startPrice, ingredient);

    }

    //Imposto un alert per ricordare all'utente di dare un nome al suo panino
    if (!burgerName.value) {
        alert("Per favore, scegliere un nome al panino")
    }

    //Dichiaro due variabili che mi servono per ottenere il codice coupon che l'utente inserirà
    var coupon = document.getElementById("coupon");
    var couponDiscount = coupon.value;

    //Imposto le condizioni che il codice deve rispettare per applicare correttamente il coupon scelto dall'utente
    //al prezzo totale 
    if (couponDiscount == "burgerking") {
        var burgerKing = startPrice - (startPrice * 0.5);
        document.getElementById("price").innerHTML = burgerKing + " 50% di sconto!";
    } else if (couponDiscount == "mcdonalds") {
        var mcDonalds = 0
        document.getElementById("price").innerHTML = mcDonalds + " 100% di sconto!";
    } else {
        document.getElementById("price").innerHTML = startPrice + " Niente sconto!";
    }

})

//Creo una funzione che consenta di calcolare il prezzo totale addizionando tutti gli ingredienti 
//scelti dall'utente al prezzo iniziale
function getTotalPrice(totalPrice, listIngredient) {
    if (listIngredient.checked) {
        totalPrice += parseInt(listIngredient.value)
    }

    return totalPrice

}