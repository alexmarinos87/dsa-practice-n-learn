function firstNonRepeating<T>(elements: T[]): T | null {
    const counts = new Map<T, number>();

    for (const item of elements) {
        const currentCount = counts.get(item);

        if (currentCount === undefined) {
            counts.set(item, 1);
        } else {
            counts.set(item, currentCount + 1);
        }
    }

    for (const item of elements) {
        if (counts.get(item) === 1) {
            return item;
        }
    }

    return null;
}

const words = ["a", "b", "a", "c", "b"];
const numbers = [4, 5, 4, 6, 5];
const allRepeated = [1, 1, 2, 2, 3, 3];

console.log(firstNonRepeating(words));
console.log(firstNonRepeating(numbers));
console.log(firstNonRepeating(allRepeated));
