function buildArray(target: number[], n: number): string[] {
    const operations: string[] = [];
    let targetIndex = 0;

    for (let num = 1; num <= n; num++) {
        if (targetIndex === target.length) {
            break;
        }

        operations.push("Push");

        if (num === target[targetIndex]) {
            targetIndex++;
        } else {
            operations.push("Pop");
        }
    }

    return operations;
}