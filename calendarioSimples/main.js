var select = document.getElementById('theme');
var html = document.querySelector('html');
document.body.style.padding = '10px';

var select2 = document.getElementById('calendario');
var list    = document.querySelector('ul');
var h1      = document.querySelector('h1');


function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

//operador ternário para If Else
/* select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
} */

//operador ternário para Switch
select.onchange = function() {
    var choice = select.value;
  
    switch(choice) {
      case 'black':
        update('black','white');
        break;
      case 'white':
        update('white','black');
        break;
      case 'purple':
        update('purple','white');
        break;
      case 'yellow':
        update('yellow','darkgray');
        break;
      case 'psychedelic':
        update('lime','purple');
        break;
    }
  }

function createCalendar() {
    var choice = select2.value;
    var dias   = 3;
    if (choice === 'fevereiro') {
        dias = 28;
    } else if (choice === 'abril' || choice === 'junho' || choice === 'setembro' || choice === 'novembro') {
        dias = 30;
    }
    list.innerHTML = '';
    h1.textContent = choice;
    for (var i = 1; i <= dias; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = i;
        list.appendChild(listItem);
    }
}

select2.addEventListener('change', createCalendar);

