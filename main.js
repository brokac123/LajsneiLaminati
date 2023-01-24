const egger = document.querySelector('#egger');
const krono = document.querySelector('#krono');
const binyl = document.querySelector('#binyl');

const eggerSort = document.querySelectorAll('.egger')
const kronoSort = document.querySelectorAll('.krono');
const binylSort = document.querySelectorAll('.biynl')

egger.addEventListener('click', () => {
    for (let i = 0; i < eggerSort.length; i++) {
        eggerSort[i].classList.remove('none');
    }
    for (let i = 0; i < kronoSort.length; i++) {
        kronoSort[i].classList.add('none');
    }
    for (let i = 0; i < binylSort.length; i++) {
        binylSort[i].classList.add('none');
    }
})
krono.addEventListener('click', () => {
    for (let i = 0; i < kronoSort.length; i++) {
        kronoSort[i].classList.remove('none');
    }
    for (let i = 0; i < eggerSort.length; i++) {
        eggerSort[i].classList.add('none');
    }
    for (let i = 0; i < binylSort.length; i++) {
        binylSort[i].classList.add('none');
    }
})
binyl.addEventListener('click', () => {
    for (let i = 0; i < binylSort.length; i++) {
        binylSort[i].classList.remove('none');
    }
    for (let i = 0; i < kronoSort.length; i++) {
        kronoSort[i].classList.add('none');
    }
    for (let i = 0; i < eggerSort.length; i++) {
        eggerSort[i].classList.add('none');
    }
})
