function countFrequencies<T>(elements: T[]): Map<T, number> {
    const counts = new Map<T, number>();

    for (const item of elements) {
        const currentCount = counts.get(item);

        if (currentCount === undefined) {
            counts.set(item, 1);
        } else {
            counts.set(item, currentCount + 1);
        }
    }

    return counts;
}

const words = ["a", "b", "a", "c", "b", "a"];
const numbers = [10, 20, 10, 30, 20, 10];

console.log(Array.from(countFrequencies(words).entries()));
console.log(Array.from(countFrequencies(numbers).entries()));
