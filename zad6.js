function toWeirdCase(str) {
    return str.split(' ') 
              .map(word => word.split('') 
                                .map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()) 
                                .join('')) 
              .join(' '); 
}

console.log(toWeirdCase("This is a test")); 
console.log(toWeirdCase("")); 
console.log(toWeirdCase("unique")); 
console.log(toWeirdCase("UPPER CASE")); 
console.log(toWeirdCase("lower case")); 