var resultDiv = document.createElement('div');
resultDiv.id = 'display';
resultDiv.addEventListener('click', buttonClick);
document.body.appendChild(resultDiv);

var buttonsDiv = document.createElement('div');
buttonsDiv.id = 'btn';
document.body.appendChild(buttonsDiv);

var btnIds = ['btn0', 'btn1', 'btnClr', 'btnEql', 'btnum', 'btnub', 'btnMul', 'btnDiv'];
var btnSambol = ['0', '1', 'C', '=', '+', '-', '*', '/'];
var btnClass = ['btnBinary', 'btnBinary', 'btnUtility', 'btnUtility', 'btnOperator', 'btnOperator', 'btnOperator', 'btnOperator'];

for (var i = 0; i < btnIds.length; i++) {
    var button = document.createElement('button');
    button.innerHTML = btnSambol[i];
    button.id = btnIds[i];
    button.className = 'button ' + btnClass[i];
    button.addEventListener('click', buttonClick);
    buttonsDiv.appendChild(button);
}

var operator = '';

function buttonClick(e) {
    var button = e.target || e.srcElement;
 
    if (button.id == 'btnClr') {
        operator = '';
        resultDiv.innerHTML = '';
    }    
    else if (button.id != 'btnEql') {
      
        if (button.id != 'btn0' && button.id != 'btn1') {
            
            if (operator != '') {
                evaluate();
            }
            
            operator = button.innerHTML;
        }      
        resultDiv.innerHTML += button.innerHTML;
    }
    
    else {
        evaluate();
    }
}

function evaluate() {
    var operands = resultDiv.innerHTML.split(operator);
   
    resultDiv.innerHTML = (
            Math.floor(
                eval(parseInt(operands[0], 2) 
                + operator 
                + parseInt(operands[1], 2))
            )
        ).toString(2);

    
    operator = '';
}