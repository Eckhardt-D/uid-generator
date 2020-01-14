const table = document.getElementById('codes-table');

const LOWER = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 65 + i ) );
const UPPER = new Array( 26 ).fill( 1 ).map( ( _, i ) => String.fromCharCode( 97 + i ) );
const NUMS = new Array( 10 ).fill( 1 ).map( ( _, i ) => i);

const CODE_LENGTH = 8;
const ROWS = 10;
const COLUMNS = 4;

const ALL_CHARS = [...LOWER, ...UPPER, ...NUMS];

function getRandomItem(arr) {
  return Math.floor(Math.random() * arr.length);
}

function generateCode() {
  let code = '';

  for(i = 0; i < CODE_LENGTH; i++) {
    let random_index = getRandomItem(ALL_CHARS);
    console.log(ALL_CHARS[random_index]);
    code += `${ALL_CHARS[random_index]}`
  }

  return code;
}

function generateNewCodes() {
  table.innerHTML = ``;

  for(let i = 0; i < ROWS; i++) {
    table.innerHTML += `<tr></tr>`;
    for(let j = 0; j < COLUMNS; j++) {
      const trs = Array.from(document.querySelectorAll('table tr'));
      const currentTr = trs[i];
      currentTr.innerHTML += `
        <td>${generateCode()}</td>
      `
    }
  }  
}

generateNewCodes()