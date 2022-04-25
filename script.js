console.log("working")
/*
<i class="fa-solid fa-baseball"></i>
<i class="fa-brands fa-apple text-center"></i>
<i class="fa-solid fa-bell"></i>
<i class="fa-solid fa-bell"></i>
<i class="fa-solid fa-battery-full"></i>
<i class="fa-solid fa-bed"></i>
<i class="fa-brands fa-bilibili"></i>
<i class="fa-solid fa-biohazard"></i>
<i class="fa-solid fa-biohazard"></i>
*/

// 18 cards FATTO
// ogni immagine deve aparire due volte FATTO
// alla prima generazione le carte devono essere scoperte DA FARE
// al inizio del gioco devono essere coperte DA FARE
//al click, la carta clickata deve essere scoperta FATTO
// se la seconda clickata dopo la prima è uguale allora assegnare un punto DAFARE
//se non è uguale ricoprire entrambe FATTO
// ogni immagine deve essere creata random FATTO
// segnalare quando il gioco è finito FATTO

const container = document.querySelector('.container')
console.log("container",container)

let showCards = 0;
const openedCards = []
const recoverCovers = []
let winControll = 0;

const imgList = [
    "",
    '<i class="fa-solid fa-baseball"></i>',
    '<i class="fa-brands fa-apple text-center"></i>',
    '<i class="fa-solid fa-bell"></i>',
    '<i class="fa-solid fa-battery-full"></i>',
    '<i class="fa-solid fa-bed"></i>',
    '<i class="fa-brands fa-bilibili"></i>',
    '<i class="fa-solid fa-biohazard"></i>',
    '<i class="fa-solid fa-biohazard"></i>',
    '<i class="fa-solid fa-address-card"></i>',
    '<i class="fa-brands fa-adn"></i>'
]

console.log("img list ", imgList)

// generatore numero random 
function randomNum(to){
    const number = Math.ceil(Math.random()*to);
    return number
}
console.log("random to 9",randomNum(9))

//crea una card
function creatCards(){
    const card = document.createElement('div')
    card.className = "card d-flex justify-content-center align-content-center"
    console.log("created card",card)
    card.addEventListener('click',()=>{
        const cover = card.getElementsByClassName('card-cover')[0];
        if(showCards<1 && !cover.classList.contains('d-none')){
            cover.classList.toggle('d-none');
            showCards+=1
            openedCards.push(card);
            console.log("opened card",openedCards);
            recoverCovers.push(cover)

        }else if(showCards<2 && !cover.classList.contains('d-none')){
            cover.classList.toggle('d-none');
            showCards = 0;
            console.log("opened card",openedCards);
            openedCards.push(card);
            console.log(openedCards[0].lastChild.classList )
            console.log(openedCards[1].lastChild.classList )
            const uguali = openedCards[1].lastChild.classList[1] === openedCards[0].lastChild.classList[1] 
            recoverCovers.push(cover)
            console.log(recoverCovers,"to hide")
            if(uguali){
                console.log("hai fatto un punto");
                recoverCovers.length = 0;
                openedCards.length = 0;
                winControll += 2
                if(winControll === 18){
                    console.log("hai finito il gioco il tuo score quale sarà?")
                }

            }else if (!uguali){
                        console.log("mi dispiace non hai fatto un punto");
                        for(let i = 0; i < recoverCovers.length; i++){
                            recoverCovers[i].className = "card-cover";
                        }
                        recoverCovers.length = 0;
                        openedCards.length = 0;
            }

        }
        // cover.classList.contains('d-none'); true ore false HMMM
           
    })
    container.append(card)
    
    return card
}

//scelta di un immagine
function creatImg(){
    return imgList[randomNum(10)]
}

const firstTime = []
const secondTime = []

//iniziazione del gioco
function parteOneGame(){
    for(let i = 0; i < 18; i++){
        const cardOne = creatCards();
        
        cardOne.innerHTML = `<div class="card-cover"></div>`
        let imgOne = creatImg();
        let tested = false;
        while(!tested){
            if(firstTime.includes(imgOne) && secondTime.includes(imgOne)){
                imgOne = creatImg();
            }else if(!firstTime.includes(imgOne)){
                firstTime.push(imgOne);
                tested = true;
                console.log(firstTime)
            }else if(!secondTime.includes(imgOne)){
                secondTime.push(imgOne);
                tested = true;
                console.log(secondTime)
            }
        }
        cardOne.innerHTML += `${imgOne}`;
        

    }
}

parteOneGame() 