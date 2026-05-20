function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length;
    const answer = new Array<number>(n);
    const frequency = new Array<number>(n + 1).fill(0);
    let commonCount = 0;

    for (let i = 0; i < n; i++) {
        frequency[A[i]]++;
        if (frequency[A[i]] === 2) {
            commonCount++;
        }

        frequency[B[i]]++;
        if (frequency[B[i]] === 2) {
            commonCount++;
        }

        answer[i] = commonCount;
    }

    return answer;
}

console.log(findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]));
console.log(findThePrefixCommonArray([2, 3, 1], [3, 1, 2]));
