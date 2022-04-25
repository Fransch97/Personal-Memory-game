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

// 18 cards
// ogni immagine deve aparire due volte
// alla prima generazione le carte devono essere scoperte
// al inizio del gioco devono essere coperte
//al click, la carta clickata deve essere scoperta
// se la seconda clickata dopo la prima è uguale allora assegnare un punto
//se non è uguale ricoprire entrambe
// ogni immagine deve essere creata random 

const container = document.querySelector('.container')
console.log("container",container)

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
    card.className = "card card d-flex justify-content-center align-content-center"
    console.log("created card",card)
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
        cardOne.innerHTML = `<div class="card-cover d-none"></div>`
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