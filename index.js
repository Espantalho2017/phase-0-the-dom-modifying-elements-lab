// Write your code here!

// Remove the main id tag

document.querySelector('main').remove();


// 2nd test wants the below (as shown in indexTest.js):
// has a 'newHeader' variable that points to an <h1> node", 
// () => {
// expects newHeader.nodeName,
// "Make sure you create an <h1> and assign it to 
// the 'newHeader' variable").eql("H1"

const newHeader = document.createElement('h1') ;
newHeader.id = 'victory' ;
newHeader.textContent = "Roscoe is the champion" ;
newHeader.className = "Roscoe" ;
document.body.append(newHeader) ;

// after index.js is processed
// the 'newHeader' variable that points to the <h1> node has an id of 'victory':

console.dir(newHeader);


