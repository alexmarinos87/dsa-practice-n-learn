function check(nums: number[]): boolean {
    let drops = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const nextIndex = (i + 1) % n;

        if (nums[i] > nums[nextIndex]) {
            drops++;
        }

        if (drops > 1) {
            return false;
        }
    }

    return true;
}

console.log(check([3, 4, 5, 1, 2]));
console.log(check([2, 1, 3, 4]));
console.log(check([1, 2, 3]));
