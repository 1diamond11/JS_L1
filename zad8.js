function expandedForm(num) {
    return num
      .toString()
      .split('')
      .map((digit, index, array) => digit !== '0' ? digit + '0'.repeat(array.length - index - 1) : '')
      .filter(str => str !== '')
      .join(' + ');
  }
  
  console.log(expandedForm(12));   
  console.log(expandedForm(42));    
  console.log(expandedForm(70304)); 
  