function separateDigits(nums: number[]): number[] {
    const answer: number[] = [];

    for (let number of nums) {
        const digitsOfCurrentNumber: number[] = [];

        while (number > 0) {
            digitsOfCurrentNumber.push(number % 10);
            number = Math.floor(number / 10);
        }

        digitsOfCurrentNumber.reverse();
        answer.push(...digitsOfCurrentNumber);
    }

    return answer;
}

console.log(separateDigits([13, 25, 83, 77]));
console.log(separateDigits([7, 1, 3, 9]));
