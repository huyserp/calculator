const numDisplay = document.querySelector('.numdisplay');

function checkDisplayLength() {
    let displayLength = numDisplay.textContent;
    if(displayLength.length > 7){
        numDisplay.textContent = displayLength.slice(0, 8);
    };
};

let numArr = [];
let latestOperator;


//////////////////////////////////////////////////
///////////////// Number Buttons /////////////////
//////////////////////////////////////////////////

const btnZero = document.querySelector('.zero')
btnZero.addEventListener('click', () => {
    numDisplay.textContent += btnZero.textContent;
    checkDisplayLength();
});

const btnPoint = document.querySelector('.point');
btnPoint.addEventListener('click', () => {
    if (numDisplay.textContent.includes('.')) {
        return;
    } else {
        numDisplay.textContent += btnPoint.textContent;
    };
    checkDisplayLength();
});

const btnOne = document.querySelector('.one');
btnOne.addEventListener('click', () => {
    numDisplay.textContent += btnOne.textContent;
    checkDisplayLength();
});


const btnTwo = document.querySelector('.two');
btnTwo.addEventListener('click', () => {
    numDisplay.textContent += btnTwo.textContent;
    checkDisplayLength();
});

const btnThree = document.querySelector('.three');
btnThree.addEventListener('click', () => {
    numDisplay.textContent += btnThree.textContent;
    checkDisplayLength();
});

const btnFour = document.querySelector('.four');
btnFour.addEventListener('click', () => {
    numDisplay.textContent += btnFour.textContent;
    checkDisplayLength();
});

const btnFive = document.querySelector('.five');
btnFive.addEventListener('click', () => {
    numDisplay.textContent += btnFive.textContent;
    checkDisplayLength();
});

const btnSix = document.querySelector('.six');
btnSix.addEventListener('click', () => {
     numDisplay.textContent += btnSix.textContent;
    checkDisplayLength();
});

const btnSeven = document.querySelector('.seven');
btnSeven.addEventListener('click', () => {
    numDisplay.textContent += btnSeven.textContent;
    checkDisplayLength();
});

const btnEight = document.querySelector('.eight');
btnEight.addEventListener('click', () => {
    numDisplay.textContent += btnEight.textContent;
    checkDisplayLength();
});

const btnNine = document.querySelector('.nine');
btnNine.addEventListener('click', () => {
    numDisplay.textContent += btnNine.textContent;
    checkDisplayLength();
});

document.addEventListener('keydown', useKeyboard);

function useKeyboard(e) {
    if(e.key === '1' || e.key === '2' || e.key === '3' 
        || e.key === '4' || e.key === '5' || e.key === '6' 
        || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '.') {
    numDisplay.textContent += `${e.key}`;
    } else {
        return;
    };
    checkDisplayLength();
};


///////////////////////////////////////////////////
///////////////// Control Buttons /////////////////
///////////////////////////////////////////////////

function clearDisplay() {
    numDisplay.textContent = '';
}
function clearAll() {
    numArr = [];
}

const btnClear = document.querySelector('.clear');
btnClear.addEventListener('click', () => {
    clearDisplay();
    clearAll();
});

const btnBackspace = document.querySelector('.backspace');
btnBackspace.addEventListener('click', goBackspace);

function goBackspace() {
    let del = numDisplay.textContent;
    let oneLess = del.substring(0, del.length - 1);
    numDisplay.textContent = oneLess;
};

const btnPlusMinus = document.querySelector('.plusminus');
btnPlusMinus.addEventListener('click', () => {
    let flip = numDisplay.textContent;
    if (!flip.includes('-')) {
        let oppSign = '-' + flip;
        numDisplay.textContent = oppSign;
    } else {
        let oppSign = flip.substring(1, flip.length);
        numDisplay.textContent = oppSign;
    };
});


////////////////////////////////////////////////////    
///////////////// Operator Buttons /////////////////
////////////////////////////////////////////////////


const btnDivide = document.querySelector('#divide');
btnDivide.addEventListener('click', () => {
    latestOperator = btnDivide.textContent;
    numArr.push(+numDisplay.textContent);
    divide();
});

    
const btnMultiply = document.querySelector('#multiply');
btnMultiply.addEventListener('click', () => {
    latestOperator = btnMultiply.textContent;
    numArr.push(+numDisplay.textContent);
    multiply();
});

const btnSubtract = document.querySelector('#subtract');
btnSubtract.addEventListener('click', () => {
    latestOperator = btnSubtract.textContent;
    numArr.push(+numDisplay.textContent);
    subtract();
});
    
const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', () => {
    latestOperator = btnAdd.textContent;
    numArr.push(+numDisplay.textContent);
    add();
});

const btnEquals = document.querySelector('.equals');
btnEquals.addEventListener('click', () => {
    numArr.push(+numDisplay.textContent);
    equals();
});

function add() {
    if (numArr[1]) {
        let sum = numArr[0] + numArr[1];
        numArr = [];
        numArr.push(sum);
        numDisplay.textContent = '';
        curbLongAnswer();
    } else {
        numDisplay.textContent = '';
    };
};

function subtract() {
    if (numArr[1]) {
        let dif = numArr[0] - numArr[1];
        numArr = [];
        numArr.push(dif);
        numDisplay.textContent = '';
        curbLongAnswer();
    } else {
        numDisplay.textContent = '';
    };
};

function multiply() {
    if (numArr[1]) {
        let product = numArr[0] * numArr[1];
        numArr = [];
        numArr.push(product);
        numDisplay.textContent = '';
        curbLongAnswer();
    } else {
        numDisplay.textContent = '';
    };
};

function divide() {
    if (numArr[1] && numArr[0] !== 0 && numArr[1] !== 0) {
        let product = numArr[0] / numArr[1];
        numArr = [];
        numArr.push(product);
        numDisplay.textContent = '';
        curbLongAnswer();
    } else if (numArr[0] === 0 || numArr[1] === 0) {
        numArr[0] = "NOPE!";
    } else {
        numDisplay.textContent = '';
    };
};

function equals() {
    if(!latestOperator) {
        return;
    } else if(latestOperator === "+") {
        add();
        numDisplay.textContent = numArr[0];
        curbLongAnswer();
        clearAll();
    } else if (latestOperator === "-") {
        subtract();
        numDisplay.textContent = numArr[0];
        curbLongAnswer();
        clearAll();
    } else if (latestOperator === "x") {
        multiply();
        numDisplay.textContent = numArr[0];
        curbLongAnswer();
        clearAll();
    } else if (latestOperator === "÷") {
        divide();
        numDisplay.textContent = numArr[0];
        curbLongAnswer();
        clearAll();
    };
};

function curbLongAnswer() {
    let answer = numDisplay.textContent;
    if(parseFloat(answer) < 1 && answer.length > 7){
        numDisplay.textContent = parseFloat(answer).toFixed(7);
    } else if(parseInt(answer) > 1 && answer.length > 7){
        numDisplay.textContent = parseInt(answer).toExponential(3);
    };
};

function checkForStringOp() {
// if (NumArr[1] && an operator button was just pushed){
//     numArr[0] = numArr[1]; 
//     numArr.pop(1);
//     continue with rest of function...or something like that
};