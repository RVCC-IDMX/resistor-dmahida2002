import { getResistorOhms } from './resistor.js';

const bandProp = {

    color1: 'red',
    color2: 'green',
    multiplier: 'violet',
    tolerance: 'gold',
  };

const band1 = document.querySelectorAll('#color0');

band1.forEach((band1, index) => {

    band1.addEventListener('click', (e) => {

        update(e.target.className.split(' ')[1], 0);
    })
})

const band2 = document.querySelectorAll('#color1');

band2.forEach((band2, index) => {

    band2.addEventListener('click', (e) => {

        update(e.target.className.split(' ')[1], 1);
    })
})

const multiplier = document.querySelectorAll('#color2');

multiplier.forEach((multiplier, index) => {

    multiplier.addEventListener('click', (e) => {

        update(e.target.className.split(' ')[1], 2);
    })
})

const tolerance = document.querySelectorAll('#color3');

tolerance.forEach((tolerance, index) => {

    tolerance.addEventListener('click', (e) => {

        update(e.target.className.split(' ')[1], 3);
    })
})

function update(color, container) {

    if(container === 0) {

        const ceramicColor1 = document.querySelector("#b0");

        ceramicColor1.className = `band ${color}`;

        const values = document.querySelector('.answer');

        bandProp.color1 = color;

        values.innerText = getResistorOhms(bandProp);
    }

    if(container === 1) {

        const ceramicColor2 = document.querySelector("#b1");

        ceramicColor2.className = `band ${color}`;

        const values = document.querySelector('.answer');

        bandProp.color2 = color;

        values.innerText = getResistorOhms(bandProp);
    }

    if(container === 2) {

        const ceramicColor3 = document.querySelector("#b2");

        ceramicColor3.className = `band ${color}`;

        const values = document.querySelector('.answer');

        bandProp.multiplier = color;

        values.innerText = getResistorOhms(bandProp);
    }

    if(container === 3) {

        const ceramicColor4 = document.querySelector("#b3");

        ceramicColor4.className = `band ${color}`;

        const values = document.querySelector('.answer');

        bandProp.tolerance = color;

        values.innerText = getResistorOhms(bandProp);
    }
}