import java.util.*;

class Solution {
    public List<String> buildArray(int[] target, int n) {
        List<String> operations = new ArrayList<>();
        int targetIndex = 0;

        for (int num = 1; num <= n; num++) {
            if (targetIndex == target.length) {
                break;
            }

            operations.add("Push");

            if (num == target[targetIndex]) {
                targetIndex++;
            } else {
                operations.add("Pop");
            }
        }

        return operations;
    }
}