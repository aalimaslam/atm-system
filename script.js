const atmPinContainer = document.getElementById("atmpin")
const atmpin = document.getElementById("pin")

const amountContainer = document.querySelector(".amount")
const amount = document.getElementById("amount")

const dataContainer = document.querySelector(".data")
const data = document.querySelectorAll(".data p span");

let twoThousand = 0,fiveHundred = 0, twoHundred = 0,oneHundred = 0, fifty = 0, twenty = 0,ten = 0,five=0, two=0,one = 0;

let notesCollection = [];

function checkPin(){
    if(atmpin.value.length < 4 || atmpin.value.length > 4) alert("4 Numbered Pin")
    else if(atmpin.value == "2560"){
        atmPinContainer.style.display = "none"
        amountContainer.style.display = "block"
    }
    else alert("Enter a Valid Pin")
}
function amounts(){
    twoThousand = 0,fiveHundred = 0, twoHundred = 0,oneHundred = 0, fifty = 0, twenty = 0,ten = 0,five=0, two=0,one = 0;
    notesCollection = [];
    let amountVal = parseInt(amount.value);
    if(amount.value <= 0 || amount.value.length == 0) alert("Please Enter a valid Amount");

    while(amountVal != 0){
        if(amountVal >= 2000){
            console.log("200")
            twoThousand++;
            amountVal -= 2000
        }
        else if(amountVal >= 500){
            fiveHundred ++;
            amountVal -= 500
        }
        else if(amountVal >= 200){
            twoHundred++;
            amountVal -= 200
        }
        else if(amountVal >= 100){
            oneHundred++
            amountVal -= 100
        }
        else if(amountVal >= 50){
            fifty++;
            amountVal -= 50
        }
        else if(amountVal >= 20){
            twenty++;
            amountVal -= 20
        }
        else if(amountVal >= 10){
            ten++
            amountVal -= 10
        }
        else if(amountVal >= 5){
            five++
            amountVal -= 5
        }
        else if(amountVal >= 2){
            two++
            amountVal -= 2
        }
        else if(amountVal >= 1){
            one++
            amountVal -= 1
        }
    }

    notesCollection.push([twoThousand],[fiveHundred],[twoHundred],[oneHundred],[fifty],[twenty],[ten],[five],[two],[one])
    return notesCollection
}

function displayData(){
    let notes = amounts();
    dataContainer.style.display = "block"
    amountContainer.style.display = "none"

    for(let i =0; i < data.length;i++){
        data[i].innerText = notes[i]
    }
}