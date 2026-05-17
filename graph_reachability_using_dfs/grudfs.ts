function canReach(arr: number[], start: number): boolean {
    const n = arr.length;
    const stack: number[] = [start];
    const visited = new Set<number>();

    while (stack.length > 0) {
        const i = stack.pop() as number;

        if (i < 0 || i >= n || visited.has(i)) {
            continue;
        }

        if (arr[i] === 0) {
            return true;
        }

        visited.add(i);

        stack.push(i + arr[i]);
        stack.push(i - arr[i]);
    }

    return false;
}

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
console.log(canReach([4, 2, 3, 0, 3, 1, 2], 0));
console.log(canReach([3, 0, 2, 1, 2], 2));
