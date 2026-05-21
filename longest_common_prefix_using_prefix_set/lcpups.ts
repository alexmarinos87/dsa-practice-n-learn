function longestCommonPrefix(arr1: number[], arr2: number[]): number {
    const prefixes = new Set<number>();

    for (const number of arr1) {
        let current = number;

        while (current > 0) {
            prefixes.add(current);
            current = Math.floor(current / 10);
        }
    }

    let longestLength = 0;

    for (const number of arr2) {
        let current = number;

        while (current > 0) {
            if (prefixes.has(current)) {
                longestLength = Math.max(longestLength, String(current).length);
                break;
            }

            current = Math.floor(current / 10);
        }
    }

    return longestLength;
}

console.log(longestCommonPrefix([1, 10, 100], [1000]));
console.log(longestCommonPrefix([1, 2, 3], [4, 4, 4]));
