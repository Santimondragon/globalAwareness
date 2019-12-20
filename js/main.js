/* jslint esversion: 6*/

const burguer = document.querySelector('.burguer');
const navegation = document.querySelector('.navegation');
const menuItems = [...document.querySelectorAll('.navegation .item')];
const causes = [...document.querySelectorAll('#causes #mainCauses .mainCause')];
const more = [...document.querySelectorAll('#causes #mainCauses .mainCause .more')];

burguer.addEventListener('click', () => {
    if (navegation.className === 'navegation close'){
        navegation.className = 'navegation open';
    } else {
        navegation.className = 'navegation close';
    }
});

menuItems.forEach(e => {
    e.addEventListener('click', () => { 
        navegation.className = 'navegation close';
    });
});

more.forEach((e, i) => {
    causes.forEach((elem, index) => {
        e.addEventListener('click', () => {
            console.log("causes");
            if (i === index) {
                if (elem.className === 'mainCause collapsed') {
                    elem.className = 'mainCause opened';
                } else {
                    elem.className = 'mainCause collapsed';
                }
            }
        });
    });
});
