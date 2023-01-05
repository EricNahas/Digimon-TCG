function CreateCards(CardName, CardNumber, CardAttack, CardDef) {

    this.CardName = CardName;
    this.CardNumber = CardNumber;
    this.CardDef = CardDef;
    this.CardAttack = CardAttack

}

let allCards = Array(10);

const card0 = new CreateCards("Tokomon", 0, 1, 1)
allCards[0] = card0;
const card1 = new CreateCards("Patamon", 1, 1, 1)
allCards[1] = card1;
const card2 = new CreateCards("Angemon", 2, 1, 1)
allCards[2] = card2;
const card3 = new CreateCards("HolyAngemon", 3, 1, 1)
allCards[3] = card3;
const card4 = new CreateCards("Seraphimon", 4, 1, 1)
allCards[4] = card4;
const card5 = new CreateCards("Tailmon", 5, 1, 1)
allCards[5] = card5;
const card6 = new CreateCards("Angewomon", 6, 1, 1)
allCards[6] = card6;
const card7 = new CreateCards("Ophanimon", 7, 1, 1)
allCards[7] = card7;
const card8 = new CreateCards("Agumon", 8, 1, 1)
allCards[8] = card8;
const card9 = new CreateCards("Greymon", 9, 1, 1)
allCards[9] = card9;

let deck = Array(10);

//SOMANDO DIGIMONS

let quantidades = document.getElementsByClassName("Quantidade")
let somatoria = document.getElementById("soma").value;
let valortotal = parseInt(document.getElementById("soma").value);
let BOTAO = document.getElementById("Button");

BOTAO.disabled = true;
BOTAO.textContent = "ADICIONE 10 DIGIMONS!"

for (const y of quantidades) {
    y.addEventListener("change", Somatoria)
}

function Somatoria() {
    let total = 0;

    for (let x in quantidades) {
        if (typeof quantidades[x].value == "string") {
            total += parseInt(quantidades[x].value)
        }
    }

    if (total != 10) {
        document.getElementById("Button").disabled = true;
        if (total < 10) {
            BOTAO.textContent = `FALTAM ${10 - total} DIGIMONS!`
        }
        if (total > 10) {
            BOTAO.textContent = `RETIRE ${total - 10} DIGIMONS!`
        }
    }
    else {
        document.getElementById("Button").disabled = false;
        BOTAO.textContent = "VAMOS COMEÇAR!"
    }

    document.getElementById("soma").innerHTML = total;

}


const Clique = document.getElementById("Button");
Clique.addEventListener("click", MontaDeck);


function MontaDeck() {
    let x = 0
    let y = 0
    while (x < quantidades.length) {
        if (parseInt(quantidades[x].value) == 1) {
            deck[y] = allCards[parseInt(quantidades[x].name)]
            y++;
            x++;
        }
        else if (parseInt(quantidades[x].value) == 2) {
            deck[y] = allCards[parseInt(quantidades[x].name)]
            y++;
            deck[y] = allCards[parseInt(quantidades[x].name)]
            y++;
            x++; 
            
        }
        else if (parseInt(quantidades[x].value) == 3) {
            deck[y] = allCards[parseInt(quantidades[x].name)]
            y++;
            deck[y] = allCards[parseInt(quantidades[x].name)]
            y++;
            deck[y] = allCards[parseInt(quantidades[x].name)]
            y++;
            x++;
        }
        else {
            x++;
        }
    }
    Clique.style.display = "none";
    document.getElementById("Tabela").style.display = "none";
    document.getElementById("Tabela2").style.display = "flex";
}


document.getElementById("Button2").addEventListener("click", Embaralha)




function Embaralha() {

    let cont = 0;
    while (cont < 1000) {
        var A = Math.round(Math.random() * 9);
        var B = Math.round(Math.random() * 9);
        var C;

        C = deck[A];
        deck[A] = deck[B];
        deck[B] = C;

        cont++;
    }

    console.log(deck)

    document.getElementById("agu").style.display = "flex";
    document.getElementById("Button2").style.animation = "sumir 1s";
    setInterval(() => { document.getElementById("Button2").style.display = "none" }, 980)
    setInterval(() => { document.getElementById("agu").style.animation = "sumir 1s" }, 3000)
    setInterval(() => { document.getElementById("agu").style.display = "none" }, 3900)
    setInterval(() => { document.getElementById("Tabela2").style.display = "none" }, 3900)

    setInterval(() => { document.getElementById("Container").style.display = "flex" }, 4000)

}


document.getElementById("btn").addEventListener("click", MostraCards)

function MostraCards(){
    let D = []
    let imagem;
    for (let x = 0; x < 5; x++) {
        D[x] = document.createElement("img");
        D[x].src = `assets/${deck[x]["CardName"]}.jfif`
        document.getElementById("p1").appendChild(D[x])
    }
}




