function CreateCards(CardName, CardNumber, CardAttack, CardDef, PCost, DCost, Level) {

    this.CardName = CardName;
    this.CardNumber = CardNumber;
    this.CardDef = CardDef;
    this.CardAttack = CardAttack;
    this.PCost = PCost;
    this.DCost = DCost;
    this.Level = Level
}

let allCards = Array(10);

const card0 = new CreateCards("Tokomon", 0, 1, 1, 0, 0, 2)
allCards[0] = card0;
const card1 = new CreateCards("Patamon", 1, 2, 1, 3, 0, 3)
allCards[1] = card1;
const card2 = new CreateCards("Angemon", 2, 3, 2, 5, 2, 4)
allCards[2] = card2;
const card3 = new CreateCards("HolyAngemon", 3, 4, 4, 7, 3, 5)
allCards[3] = card3;
const card4 = new CreateCards("Seraphimon", 4, 5, 6, 12, 3, 6)
allCards[4] = card4;
const card5 = new CreateCards("Tailmon", 5, 1, 4, 6, 2, 4)
allCards[5] = card5;
const card6 = new CreateCards("Angewomon", 6, 2, 5, 7, 3, 5)
allCards[6] = card6;
const card7 = new CreateCards("Ophanimon", 7, 3, 10, 12, 3, 6)
allCards[7] = card7;
const card8 = new CreateCards("Agumon", 8, 3, 1, 3, 0, 3)
allCards[8] = card8;
const card9 = new CreateCards("Greymon", 9, 5, 2, 5, 2, 4)
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
            document.getElementsByClassName("NumerosD")[x].value = parseInt(quantidades[x].value)
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

// MONTANDO O DECK

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


// EMBARALHANDO O DECK


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


// COMEÇANDO O JOGO



document.getElementById("btn").addEventListener("click", MostraCards)
let rodada;

function MostraCards(){
    let D = []
    let D2 = []
    let counter = 1;
    var PrevMemory = 10;
    
    for (let x = 0; x < 5; x++) {
        D[x] = document.createElement("img");
        D[x].src = `assets/${deck[x]["CardName"]}.jfif`
        D[x].style.height = "265px"
        D[x].style.width = "190px"
        D[x].style.cursor = "pointer"

        D[x].addEventListener("click", () => {
            if (rodada == true && deck[x].PCost <= 10) {
                document.getElementById("SubContainer").style.display = "flex"
                document.getElementById("SubContainer").appendChild(D[x])
                

                if (PrevMemory - deck[x].PCost < 10) {
                    rodada = false;
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory - deck[x].PCost].style.border = "2px dashed red"
                    PrevMemory = PrevMemory - deck[x].PCost;
                    document.getElementById("p1").style.display = "none"
                    document.getElementById("p2").style.display = "flex" 
                }

                else {
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory - deck[x].PCost].style.border = "2px dashed blue"
                    PrevMemory = PrevMemory - deck[x].PCost;
                    rodada = true;
                }
                
            }
            else {
                alert("Não é a vez desse jogador! \n Ou o custo da carta é muito alto!")
            }
        })
        document.getElementById("p1").appendChild(D[x])
    }


    for (let y = 5; y < 10; y++) {
        D2[y] = document.createElement("img");
        D2[y].src = "assets/VersoCarta.webp"
        D2[y].style.height = "265px"
        D2[y].style.width = "190px"

        D2[y].addEventListener("click", () => {
            if (rodada == false && deck[y].PCost <= 10) {
                document.getElementById("SubContainer").style.display = "flex"
                document.getElementById("SubContainer").appendChild(D2[y])
                if (PrevMemory + deck[y].PCost > 10) {
                    rodada = true;
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory + deck[y].PCost].style.border = "2px dashed red"
                    PrevMemory = PrevMemory + deck[y].PCost;
                    D2[y].src = `assets/${deck[y].CardName}.jfif`
                    document.getElementById("p2").style.display = "none"
                    document.getElementById("p1").style.display = "flex"
                }
                else {
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory + deck[y].PCost].style.border = "2px dashed blue"
                    PrevMemory = PrevMemory + deck[y].PCost;
                    D2[y].src = `assets/${deck[y].CardName}.jfif`
                    rodada = false;
                }
            }
            else {
                alert("Não é a vez desse jogador! \n Ou o custo da carta é muito alto!")
            }
        })

        document.getElementById("p2").appendChild(D2[y])
    }


    document.getElementById("btn").style.display = "none";
    document.getElementById("MemoryCounter").style.display = "block";

    let z = Math.round(Math.random() * 10);

    if (z % 2 == 0) {
        alert("Você começa jogando!");
        document.getElementsByClassName("Memory")[10].style.border = " 2px dashed blue"
        rodada = true;
    }
    else {
        alert("Seu oponente começa jogando!")
        document.getElementsByClassName("Memory")[10].style.border = " 2px dashed red"
        rodada = false;
    }

    document.getElementsByTagName("body")[0].style.background = "linear-gradient(90deg, #00FFEC 0%, #0070FF 50%,  #2A00FF 100%)"
    document.getElementsByTagName("body")[0].style.animation = "none"
}





