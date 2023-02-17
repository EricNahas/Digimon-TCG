function CreateCards(CardName, CardNumber, CardAttack, PCost, DCost, Level) {

    this.CardName = CardName;
    this.CardNumber = CardNumber;
    this.CardAttack = CardAttack;
    this.PCost = PCost;
    this.DCost = DCost;
    this.Level = Level
}

let allCards = Array(10);

const card0 = new CreateCards("Tokomon", 0, 0, 0, 0, 2)
allCards[0] = card0;
const card1 = new CreateCards("Patamon", 1, 1000, 3, 0, 3)
allCards[1] = card1;
const card2 = new CreateCards("Angemon", 2, 3000, 5, 2, 4)
allCards[2] = card2;
const card3 = new CreateCards("HolyAngemon", 3, 6000, 7, 3, 5)
allCards[3] = card3;
const card4 = new CreateCards("Seraphimon", 4, 10000, 12, 3, 6)
allCards[4] = card4;
const card5 = new CreateCards("Tailmon", 5, 5000, 6, 2, 4)
allCards[5] = card5;
const card6 = new CreateCards("Angewomon", 6, 6000, 7, 3, 5)
allCards[6] = card6;
const card7 = new CreateCards("Ophanimon", 7, 3, 11000, 3, 6)
allCards[7] = card7;
const card8 = new CreateCards("Agumon", 8, 2000, 3, 0, 3)
allCards[8] = card8;
const card9 = new CreateCards("Greymon", 9, 4000, 5, 2, 4)
allCards[9] = card9;

let deck = Array(10);

//-------------------------------------------------------------------------------------------------------------//
//                                          SOMANDO DIGIMONS                                                   //
//-------------------------------------------------------------------------------------------------------------//

let quantidades = document.getElementsByClassName("Quantidade")
let somatoria = document.getElementById("soma").value;
let valortotal = parseInt(document.getElementById("soma").value);
let BOTAO = document.getElementById("Button");

BOTAO.disabled = true;
BOTAO.textContent = "ADD 10 DIGIMONS!"

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
            BOTAO.textContent = `${10 - total} DIGIMON(S) REMAINING!`
        }
        if (total > 10) {
            BOTAO.textContent = `REMOVE ${total - 10} DIGIMON(S)!`
        }
    }
    else {
        document.getElementById("Button").disabled = false;
        BOTAO.textContent = "LET'S BEGIN!"
    }

    document.getElementById("soma").innerHTML = total;

}

//-------------------------------------------------------------------------------------------------------------//
//                                           MONTANDO O DECK                                                   //
//-------------------------------------------------------------------------------------------------------------//

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
    document.getElementById("logo").style.display = "none";
    document.getElementById("pe").style.display = "none";
;}


//-------------------------------------------------------------------------------------------------------------//
//                                          EMBARALHANDO O DECK                                                //
//-------------------------------------------------------------------------------------------------------------//

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

//-------------------------------------------------------------------------------------------------------------//
//                                          COMEÇANDO O JOGO                                                   //
//-------------------------------------------------------------------------------------------------------------//


document.getElementById("btn").addEventListener("click", MostraCards)
let rodada;

function MostraCards(){
    var D = []
    var D2 = []
    let AtkP1, AtkP2;
    let LvlP1, LvlP2;
    let DigivolveP1 = false, DigivolveP2 = false;
    var counter = 0, counterP1 = 0, counterP2 = 0;
    var PrevMemory = 10;
    let z = Math.round(Math.random() * 10);

//-------------------------------------------------------------------------------------------------------------//
//                          ESTRUTURA DE CONTROLE RANDÔMICO DE ORDEM DE JOGADAS                                //
//-------------------------------------------------------------------------------------------------------------//


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

//------------------------------------------------------------------------//        
//                       COMO AS CARTAS VÃO APARECER                      //
//------------------------------------------------------------------------//

    ShowHideCards(D, D2, deck, rodada);
    

//-------------------------------------------------------------------------------------------------------------//
//                                  JOGADOR 1 ESTÁ EM SUA FASE DE AÇÃO                                         //
//-------------------------------------------------------------------------------------------------------------//


    for (let x = 0; x < 5; x++) {
        
        D[x].addEventListener("click", () => {

            if (counterP1 == 0) {
                LvlP1 = deck[x].Level;
            }
            
            if (deck[x].Level == LvlP1 + 1) {
                DigivolveP1 = true;
            }
            else {
                DigivolveP1 = false;
            }

            LvlP1 = deck[x].Level;
            
            //CASO SEJA O PRIMEIRO DIGIMON QUE O JOGADOR ESTÁ JOGANDO NA RODADA//
            if (rodada == true && deck[x].PCost <= PrevMemory && DigivolveP1 == false) {
                document.getElementById("SubContainer1").style.display = "flex"
                document.getElementById("SubContainer1").appendChild(D[x])
                
                //CASO O DIGIMON TENHA CUSTO ALÉM DA MEMÓRIA//
                if (PrevMemory - deck[x].PCost < 10) {
                    rodada = false;
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory - deck[x].PCost].style.border = "2px dashed red"
                    PrevMemory = PrevMemory - deck[x].PCost;
                    counter++;
                    AtkP1 = deck[x].CardAttack;
                    Vencedor(counter, AtkP1, AtkP2);


                    ShowCards(D, D2, deck);

                    
                }
                
                //CASO AINDA HAJA MEMÓRIA A SER GASTA//
                else {
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory - deck[x].PCost].style.border = "2px dashed blue"
                    PrevMemory = PrevMemory - deck[x].PCost;
                    counterP1++;
                    rodada = true;
                }
            }

            //CASO NÃO SEJA O PRIMEIRO DIGIMON QUE O JOGADOR ESTÁ JOGANDO NA RODADA//
            else if (rodada == true && deck[x].DCost <= PrevMemory && DigivolveP1 == true) {
                document.getElementById("SubContainer1").style.display = "flex"
                document.getElementById("SubContainer1").appendChild(D[x])
                if (PrevMemory - deck[x].DCost < 10) {
                    rodada = false;
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory - deck[x].DCost].style.border = "2px dashed red"
                    PrevMemory = PrevMemory - deck[x].DCost;
                    counter++;
                    AtkP1 = deck[x].CardAttack;
                    Vencedor(counter, AtkP1, AtkP2);

                    ShowCards(D, D2, deck,);

                    
                }
                else {
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory - deck[x].DCost].style.border = "2px dashed blue"
                    PrevMemory = PrevMemory - deck[x].DCost;
                    rodada = true;
                    counterP1++;
                }
            }
            else {
                alert("Não é a vez desse jogador! \nOu o custo da carta é muito alto!")
            }
        })
        document.getElementById("p1").appendChild(D[x])
    }

//-------------------------------------------------------------------------------------------------------------//
//                                  JOGADOR 2 ESTÁ EM SUA FASE DE AÇÃO                                         //
//-------------------------------------------------------------------------------------------------------------//


    for (let y = 5; y < 10; y++) {

        D2[y].addEventListener("click", () => {

            if (counterP2 == 0) {
                LvlP2 = deck[y].Level;
            }
            
            if (deck[y].Level == LvlP2 + 1) {
                DigivolveP2 = true;
            }
            else {
                DigivolveP2 = false;
            }

            LvlP2 = deck[y].Level;
            
            //CASO SEJA O PRIMEIRO DIGIMON QUE O JOGADOR ESTÁ JOGANDO NA RODADA//
            if (rodada == false && deck[y].PCost <= 20 - PrevMemory && DigivolveP2 == false) {
                document.getElementById("SubContainer2").style.display = "flex"
                document.getElementById("SubContainer2").appendChild(D2[y])
                
                //CASO O DIGIMON TENHA CUSTO ALÉM DA MEMÓRIA//
                if (PrevMemory + deck[y].PCost > 10) {
                    rodada = true;
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory + deck[y].PCost].style.border = "2px dashed red"
                    PrevMemory = PrevMemory + deck[y].PCost;
                    counter++;
                    AtkP2 = deck[y].CardAttack;

                    ShowCards(D, D2, deck);

                    Vencedor(counter, AtkP1, AtkP2);
                }
                //CASO AINDA HAJA MEMÓRIA A SER GASTA//
                else {
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory + deck[y].PCost].style.border = "2px dashed blue"
                    PrevMemory = PrevMemory + deck[y].PCost;
                    counterP2++;
                    rodada = false;
                }
            }
            //CASO NÃO SEJA O PRIMEIRO DIGIMON QUE O JOGADOR ESTÁ JOGANDO NA RODADA//
            else if (rodada == false && deck[y].DCost <= 20 - PrevMemory && DigivolveP2 == true) {
                document.getElementById("SubContainer2").style.display = "flex"
                document.getElementById("SubContainer2").appendChild(D2[y])

                //CASO O DIGIMON TENHA CUSTO ALÉM DA MEMÓRIA//
                if (PrevMemory + deck[y].DCost > 10) {
                    rodada = true;
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory + deck[y].DCost].style.border = "2px dashed red"
                    PrevMemory = PrevMemory + deck[y].DCost;
                    counter++;
                    AtkP2 = deck[y].CardAttack;

                    ShowCards(D, D2, deck);

                    Vencedor(counter, AtkP1, AtkP2);
                    
                }
                //CASO AINDA HAJA MEMÓRIA A SER GASTA//
                else {
                    document.getElementsByClassName("Memory")[PrevMemory].style.border = "none"
                    document.getElementsByClassName("Memory")[PrevMemory + deck[y].DCost].style.border = "2px dashed blue"
                    PrevMemory = PrevMemory + deck[y].DCost;
                    rodada = false;
                    counterP2++;
                }
            }
            else {
                alert("Não é a vez desse jogador! \nOu o custo da carta é muito alto!")
            }})


        document.getElementById("p2").appendChild(D2[y])
    }


    document.getElementById("btn").style.display = "none";
    document.getElementById("MemoryCounter").style.display = "block";



}




function Vencedor(cont, atkP1, atkP2) {
    if (cont != 0 && cont % 2 == 0) {
        if (atkP1 > atkP2) {
            alert("Player1 wins!")
        }
        else if (atkP2 > atkP1) {
            alert("Player2 wins!")
        }
        else {
            alert("Draw!")
        }
    }
    else {
        alert("aa")
    }
}

function ShowHideCards(thisD, thisD2, thisdeck, thisrodada) {
    for (let x = 0; x < 5; x++) {
        thisD[x] = document.createElement("img");
        if (thisrodada == true) {
            thisD[x].src = `assets/${thisdeck[x]["CardName"]}.jfif`
        }
        else {
            thisD[x].src = "assets/VersoCarta.webp"
        }
        thisD[x].style.height = "265px"
        thisD[x].style.width = "190px"
        thisD[x].style.cursor = "pointer"
    }

    for (let y = 5; y < 10; y++) {
        thisD2[y] = document.createElement("img");
        if (thisrodada == false) {
            thisD2[y].src = `assets/${thisdeck[y]["CardName"]}.jfif`
        }
        else {
            thisD2[y].src = "assets/VersoCarta.webp"
        }
        thisD2[y].style.height = "265px"
        thisD2[y].style.width = "190px"
    }
}

function ShowCards(thisD, thisD2, thisdeck) {
    for (let x = 0; x < 5; x++) { 
        thisD[x].src = `assets/${thisdeck[x]["CardName"]}.jfif`;
    }
    for (let y = 5; y < 10; y++) {
        thisD2[y].src = `assets/${thisdeck[y]["CardName"]}.jfif`; 
    }
}
