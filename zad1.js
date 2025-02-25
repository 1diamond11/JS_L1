function hasTwoCubeSums(n) {
    let pairs = [];
    let limit = Math.cbrt(n) | 0; 

    for (let a = 1; a <= limit; a++) {
        let a3 = a ** 3;
        for (let b = a + 1; b <= limit; b++) { 
            let b3 = b ** 3;
            if (a3 + b3 === n) {
                pairs.push([a, b]);
                if (pairs.length > 1) return true; 
            }
        }
    }
    return false;
}


