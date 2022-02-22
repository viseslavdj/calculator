function add(a,b){
    return parseFloat(a) + parseFloat(b);
}
function substract(a,b){
    return parseFloat(a) - parseFloat(b);
}
function multiply(a,b){
    return parseFloat(a) * parseFloat(b);
}
function divide(a,b){
    if (parseFloat(b) === 0){
        alert("Can't divide with ZERO");
    } else {
    return parseFloat(a) / parseFloat(b);
    }
}

function operate(op,a,b){
    if (op === '+'){
        return add(a,b);
    }
    else if (op === '-'){
        return substract(a,b);
    }
    else if (op === '*'){
        return multiply(a,b);
    }
    else if (op === '/'){
        return divide(a,b);
    }
}
let fn = '';
let sn = '';
let operation = null;

const numbersB = document.querySelectorAll('.eq');
const opB = document.querySelectorAll('ops');
const eqB = document.getElementById('equal');
const clearB = document.getElementById('clear');
const nextOper = document.getElementById('prevOp');
const currOper = document.getElementById('currOp');

window.addEventListener('keydown', kbInput);
eqB.addEventListener('click', math);
clearB.addEventListener('click', clear);

numbersB.forEach((button) =>{
    button.addEventListener('click', () => setNum(button.textContent));
});

opB.forEach((button) =>{
    button.addEventListener('click', () => setOp(button.textContent));
});

function setNum(num){
    if (currOper.textContent === '0')
        currOper.textContent = '';
      currOper.textContent +=  num;
}
// event.key
function kbInput(event){
    if (event.key >= 0 && event.key <=9)
        setNum(event.key);
    if (event.key === '=' || event.key === 'Enter')
        math();
    if (event.key === 'Escape')
        clear();
    if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/')
        setOp(convertOp(event.key));
}
function convertOp(keyOp){
    if (keyOp === '/')
        return '/';
    if (keyOp === '*')
        return '*';
    if (keyOp === '+')
        return '+';
    if (keyOp === '-')
        return '-';
}

function math(){
    if (operation === null)
        return;
    sn = currOper.textContent;
    currOper.textContent = operate(operation, fn, sn);
    nextOper.textContent = `${fn} ${operation} ${sn} =`
    operation = null;    
}
function clear(){
    currOper.textContent ='0';
    nextOper.textContent = '';
    fn = '';
    sn ='';
    operation = null;
}
function setOp(op){
    if (operation !== null)
        math();
    fn = currOper.textContent;
    operation = op;
    nextOper.textContent = `${fn} ${operation}`;
    currOper.textContent = '';
}