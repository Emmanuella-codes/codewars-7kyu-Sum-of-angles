
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Find the total sum of internal angles (in degrees) in an n-sided simple polygon.</h1>`;


// Find the total sum of internal angles (in degrees) in an n-sided simple polygon. 
// N will be greater than 2
// A very familiar question
// formula = (2n-4) *90

const angle = n => {
  return (2*n-4) * 90
}
console.log(angle(3))
