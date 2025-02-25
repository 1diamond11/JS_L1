function findMissing(sequence) {
    const n = sequence.length;
    const totalDiff = sequence[n - 1] - sequence[0];
    const commonDiff = totalDiff / n; 
    
    for (let i = 1; i < n; i++) {
        if (sequence[i] - sequence[i - 1] !== commonDiff) {
            return sequence[i - 1] + commonDiff;
        }
    }
    
    return null; 
}

console.log(findMissing([1, 3, 5, 9, 11]));
