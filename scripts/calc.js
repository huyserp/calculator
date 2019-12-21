const numDisplay = document.querySelector('.numdisplay');


/////// Number Buttons ///////

const btnZero = document.querySelector('.zero')
btnZero.addEventListener('click', () => {
    numDisplay.textContent += btnZero.textContent;});

const btnPoint = document.querySelector('.point');
btnPoint.addEventListener('click', () => {
    if (numDisplay.textContent.includes('.')) {
        return;
    } else {
        numDisplay.textContent += btnPoint.textContent;
    }
});

const btnOne = document.querySelector('.one');
btnOne.addEventListener('click', () => {
    numDisplay.textContent += btnOne.textContent;});

const btnTwo = document.querySelector('.two');
btnTwo.addEventListener('click', () => {
    numDisplay.textContent += btnTwo.textContent;});

const btnThree = document.querySelector('.three');
btnThree.addEventListener('click', () => {
    numDisplay.textContent += btnThree.textContent;});

const btnFour = document.querySelector('.four');
btnFour.addEventListener('click', () => {
    numDisplay.textContent += btnFour.textContent;});

const btnFive = document.querySelector('.five');
btnFive.addEventListener('click', () => {
    numDisplay.textContent += btnFive.textContent;});

const btnSix = document.querySelector('.six');
btnSix.addEventListener('click', () => {
    numDisplay.textContent += btnSix.textContent;});

const btnSeven = document.querySelector('.seven');
btnSeven.addEventListener('click', () => {
    numDisplay.textContent += btnSeven.textContent;});

const btnEight = document.querySelector('.eight');
btnEight.addEventListener('click', () => {
    numDisplay.textContent += btnEight.textContent;});

const btnNine = document.querySelector('.nine');
btnNine.addEventListener('click', () => {
    numDisplay.textContent += btnNine.textContent;});

/////// Operator Buttons ///////

const btnDivide = document.querySelector('.divide');
const btnMultiply = document.querySelector('.multiply');
const btnSubtract = document.querySelector('.subtract');
const btnAdd = document.querySelector('.add');
const btnEquals = document.querySelector('.equals');

/////// Control Buttons ///////

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    numDisplay.textContent = '';
});

const btnBackspace = document.querySelector('.backspace');
// btnBackspace.addEventListener('click', () => {
//     let del = numDisplay.textContent;
//     del.substring(0, del.length - 1);
// });

const btnPlusMinus = document.querySelector('.plusminus');
