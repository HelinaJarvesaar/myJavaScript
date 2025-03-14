//HAMBURGER MENÜÜ LEHE LISAMINE:

/* const väärtust hiljem muuta ei saa! */
/* querySelector - võimaldab otsida elemente html märgendi, classi, id järgi */

const btnHamburger = document.querySelector('.hamburger'); // Määrame muutujale btnHamburger HTML-element, mille ID on hamburger
const menuPanel = document.querySelector('.menu-panel');

/* addEventListener('sündmus', (sündmus)=>{}) - sündmuste jälgimine */
/* kui toimub 'click' siis pane käima kõik mis on {}selle sees */
/* toggel - lüliti, edasi-tagasi */
/* nb! console.log-i lõppproejkti ei jäeta, neid saab kasutada vahepeal kontrollimisteks*/

btnHamburger.addEventListener('click', (event) => { /* lisame sündume btnHamburger nupule; kui click hamburger-il*/
    /* console.log(menuPanel.classList); /* saan Console-st klassi näha */
    menuPanel.classList.toggle('active'); /* kontrollib kas on Active, kui ei ole, siis lisab kui on siis eemaldab*/
    /* console.log(menuPanel.classList); */
})


// HAMBURGER MENÜÜ LEHE NÄHTAVALE/PEITU:

/*kontrollime, kus klikitakse, kas väljapool menu-paneeli ja hamburgeri*/
document.addEventListener('click', (event) => { /* lisame sündmuse kogu dokumenidle; kui click documendis */
    if (!menuPanel.contains(event.target) && !btnHamburger.contains(event.target)) { /* kontrollime, kas click toimus väljapool menuPanel-it ehk event.target-it ja hamburgeri*/
        menuPanel.classList.remove('active'); /* Eemaldame klassi active menüü paneelist, et see sulgeda */
    }
})

const menuLinks = document.querySelectorAll('.menu-panel a');

/* Console.log(link.innerHTML); -  innerHTML - teksitiline väärtus */
menuLinks.forEach((link) => { // käime läbi kõik lingid mis asuvad menuLinks muutujas
    link.addEventListener('click', () => { // Lisame iga lingi jaoks sündmuse jälgimise, mis reageerib klikkimisele
        menuPanel.classList.remove('active'); /* menu-panel läheb kinni kui click home, myworks jne peal*/
    })
})

const closeX = document.querySelector('#x');

closeX.addEventListener('click', ()=>{
    menuPanel.classList.remove('active');
})


// KARUSSELL:

const frameImage = document.querySelector('#frame');
/* console.log(frameImage.src) - kontrollimiseks */
const images = ['1.webp', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp'];
/*console.log(images[6]); - saame vastuseks undefined */
let currentImageIndex = 0;

document.addEventListener('click', () => {
    /*console.log('image clicked') - kontrollime */
    currentImageIndex++; // +1

    if (currentImageIndex >= 6) {
        currentImageIndex = 0;
    }
    frameImage.src = 'img/' + images[currentImageIndex];
    /* console.log(currentImageIndex); - kontrollime*/
})

