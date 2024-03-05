// spread operator
const odd = [3, 5, 7];
const combined = [2, 4, 6, ...odd];
console.log(combined);

// rest operator
function numb(a, b, ...args) {
  console.log(args);
}

numb(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

function compare(a, b) {
  return a - b;
}

const nombres = [7, 16];
console.log(compare(...nombres));

let rivers = ["Nile", "Ganges", "Yangte"];
let moreRivers = ["Danube", "Amazon"];
rivers.push(...moreRivers);
console.log(rivers);

let rivers2 = [...rivers, ...moreRivers];
console.log(rivers2);

let copyRivers2 = [...rivers2];
console.log(copyRivers2);
