function find_duplicates<T>(elements: string[]): string[] { // T[] whatever type array contains 
    const seen = new Set<string>(); // or use String[]
    const duplicates = new Set<string>();

    for (const item of elements) {
        if (seen.has(item)) {
            duplicates.add(item); 
        } else {
            seen.add(item);
            }
        }

    return Array.from(duplicates)
}