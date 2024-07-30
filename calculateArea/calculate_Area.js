let groceryone;
let grocerytwo;
let grocerythree;

function calculateArea() {
    groceryone = parseFloat(document.getElementById('grocery-1').value);
    grocerytwo = parseFloat(document.getElementById('grocery-2').value);
    grocerythree = parseFloat(document.getElementById('grocery-3').value);
   
   let sum = groceryone + grocerytwo + grocerythree;
   console.log(sum)
   document.getElementById('result').innerText = `The area of the rectangle is: ${sum}`;
   }

 