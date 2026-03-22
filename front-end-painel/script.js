const body = document.getElementById('body');
const heroLightButtonImg = document.getElementById('heroLightButtonImg')
const heroLightButton2Img = document.getElementById('heroLightButton2Img')
const sideMenu = document.querySelectorAll('.sideMenu');
const statsImg = document.querySelectorAll('.statsImg');
const calendarImg = document.querySelectorAll('.calendarImg');
const sideInfo = document.querySelectorAll('.sideInfo');
const sideInfoTitle = document.querySelectorAll('.sideInfoTitle');
const sideInfoCalendar = document.querySelectorAll('.sideInfoCalendar');
const sideInfoClock = document.querySelectorAll('.sideInfoClock');
const sideInfoMoney = document.querySelectorAll('.sideInfoMoney');
const sideInfoButtonArrrow = document.querySelectorAll('.sideInfoButtonArrrow');
const barbName = document.querySelectorAll('.barbName');
const sideInfoButtonTextHolderText1 = document.querySelectorAll('.sideInfoButtonTextHolderText1');

const hero = document.querySelectorAll('.hero');
const heroTitle = document.querySelectorAll('.heroTitle');
const heroBoxTitle = document.querySelectorAll('.heroBoxTitle');
const heroTextData = document.querySelectorAll('.heroTextData');
const heroBoxCardRightTextBoxText = document.querySelectorAll('.heroBoxCardRightTextBoxText');
const heroBoxCardLeftText = document.querySelectorAll('.heroBoxCardLeftText');
const heroBoxCardRightTextBoxTitle = document.querySelectorAll('.heroBoxCardRightTextBoxTitle');
const heroBoxCardRightImg = document.querySelectorAll('.heroBoxCardRightImg');
const heroBoxCotoneteHead = document.querySelectorAll('.heroBoxCotoneteHead');
const heroBoxCotoneteBody = document.querySelectorAll('.heroBoxCotoneteBody');
const heroBoxCardRight = document.querySelectorAll('.heroBoxCardRight');
const sideMenuButton = document.querySelectorAll('.sideMenuButton');
const sideInfoBoxCardText = document.querySelectorAll('.sideInfoBoxCardText');
const sideInfoBoxCardValue = document.querySelectorAll('.sideInfoBoxCardValue');
const sideInfoBoxCardBorder = document.querySelectorAll('.sideInfoBoxCardBorder');
const heroLightButton = document.getElementById('heroLightButton')
const heroLightButton2 = document.getElementById('heroLightButton2')

let heroLightButton_state = false;

function trocarModoEscuro() {
    barbName.forEach(el => el.style.color = 'white');
    sideInfoButtonTextHolderText1.forEach(el => el.style.color = '#d4d4d4');
    sideInfoButtonArrrow.forEach(el => el.src = './icons/shuffle(1).png');
    sideInfoCalendar.forEach(el => el.src = './icons/calendar.png');
    sideInfoClock.forEach(el => el.src = './icons/clock-five.png');
    sideInfoMoney.forEach(el => el.src = './icons/sack-dollar.png');
    sideInfo.forEach(el => el.style.backgroundColor = '#303030');
    sideInfoTitle.forEach(el => el.style.color = '#ffffff');
    sideMenu.forEach(el => el.style.backgroundColor = '#303030');
    statsImg.forEach(el => el.src = './icons/stats2.png');
    calendarImg.forEach(el => el.src = './icons/calendar.png');
    heroLightButtonImg.src = './icons/brightness(1).png'
    heroLightButton2Img.src = './icons/brightness(1).png'
    body.style.backgroundColor = '#1f1f1f';
    heroTextData.forEach(el => el.style.color = '#6060dd');
    heroTitle.forEach(el => el.style.color = 'white');
    heroBoxTitle.forEach(el => el.style.color = 'white');
    heroBoxCardRightImg.forEach(el => el.style.border = '2px solid transparent');
    sideInfoBoxCardBorder.forEach(el => el.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) , white 40%)');
    sideInfoBoxCardText.forEach(el => el.style.color = '#ffffff');
    sideInfoBoxCardValue.forEach(el => el.style.color = '#bfbfff');
    sideMenuButton.forEach(el => el.style.color = '#ffffff');
    heroBoxCardRightTextBoxText.forEach(el => el.style.color = '#c5c5c5');
    heroBoxCardLeftText.forEach(el => el.style.color = 'white');
    heroBoxCotoneteHead.forEach(el => el.style.backgroundColor = 'white');
    heroBoxCotoneteBody.forEach(el => el.style.backgroundColor = 'white');
    heroBoxCardRight.forEach(el => el.style.border = '2px solid white');
    heroBoxCardRightTextBoxTitle.forEach(el => el.style.color = 'white');
}

function trocarModoClaro() {
    barbName.forEach(el => el.style.color = 'black');
    sideInfoButtonTextHolderText1.forEach(el => el.style.color = 'gray');
    sideInfoButtonArrrow.forEach(el => el.src = './icons/shuffle.png');
    sideInfoCalendar.forEach(el => el.src = './icons/calendar-day.png');
    sideInfoClock.forEach(el => el.src = './icons/clock.png');
    sideInfoMoney.forEach(el => el.src = './icons/money-bag.png');
    sideInfo.forEach(el => el.style.backgroundColor = '#ffffff');
    sideInfoTitle.forEach(el => el.style.color = '#000000');
    sideMenu.forEach(el => el.style.backgroundColor = 'white');
    statsImg.forEach(el => el.src = './icons/stats.png');
    calendarImg.forEach(el => el.src = './icons/calendar-day.png');
    heroLightButtonImg.src = './icons/brightness.png'
    heroLightButton2Img.src = './icons/brightness.png'
    body.style.backgroundColor = 'white';
    heroTextData.forEach(elemento => {
        elemento.style.color = '#3232a0d5';
    });
    heroTitle.forEach(elemento => {
        elemento.style.color = 'black';
    });
    heroBoxTitle.forEach(elemento => {
        elemento.style.color = 'black';
    });
    heroBoxCardRightImg.forEach(el => el.style.border = '2px solid black');
    sideInfoBoxCardBorder.forEach(elemento => {
        elemento.style.background = 'linear-gradient(to left, rgba(0, 0, 0, 0) , black 40%)';
    });
    sideInfoBoxCardText.forEach(elemento => {
        elemento.style.color = '#000000';
    });
    sideInfoBoxCardValue.forEach(elemento => {
        elemento.style.color = '#3232A0';
    });
    sideMenuButton.forEach(elemento => {
        elemento.style.color = '#3232A0';
    });
    heroBoxCardRightTextBoxText.forEach(elemento => {
        elemento.style.color = 'rgb(97, 97, 97)';
    });
    heroBoxCardLeftText.forEach(elemento => {
        elemento.style.color = 'black';
    });
    heroBoxCotoneteHead.forEach(elemento => {
        elemento.style.backgroundColor = 'black';
    });
    heroBoxCotoneteBody.forEach(elemento => {
        elemento.style.backgroundColor = 'black';
    });
    heroBoxCardRight.forEach(elemento => {
        elemento.style.border = '2px solid black';
    });
    heroBoxCardRightTextBoxTitle.forEach(elemento => {
        elemento.style.color = 'black';
    });
}

heroLightButton.addEventListener('click', function (){
    if(heroLightButton_state == false){
        heroLightButton_state = true
        trocarModoEscuro()
    } else if(heroLightButton_state == true){
        heroLightButton_state = false
        trocarModoClaro()
    }
})

heroLightButton2.addEventListener('click', function (){
    if(heroLightButton_state == false){
        heroLightButton_state = true
        trocarModoEscuro()
    } else if(heroLightButton_state == true){
        heroLightButton_state = false
        trocarModoClaro()
    }
})



const elementosData = document.querySelectorAll('.heroTextData');
const hoje = new Date();

const dataFormatada = hoje.toLocaleDateString('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

elementosData.forEach((elemento) => {
  elemento.textContent = dataFormatada;
});

const sideInfoButton1 = document.getElementById('sideInfoButton1')
const sideInfoButton2 = document.getElementById('sideInfoButton2')
const sideInfoButtonHolder = document.getElementById('sideInfoButtonHolder')
let sideInfoo = false

const hero1 = document.getElementById('hero1')
const hero2 = document.getElementById('hero2')

sideInfoButton1.addEventListener('click', function () {
    sideInfoButton1.style.display = 'none'
    sideInfoButton2.style.display = 'flex'
    hero1.style.display = 'none'
    hero2.style.display = 'flex'
})

sideInfoButton2.addEventListener('click', function () {
        sideInfoButton2.style.display = 'none'
        sideInfoButton1.style.display = 'flex'
        hero1.style.display = 'flex'
        hero2.style.display = 'none'
})