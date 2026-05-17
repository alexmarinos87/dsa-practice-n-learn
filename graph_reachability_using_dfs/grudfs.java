import java.util.*;

class Solution {
    public boolean canReach(int[] arr, int start) {
        int n = arr.length;
        Deque<Integer> stack = new ArrayDeque<>();
        Set<Integer> visited = new HashSet<>();

        stack.push(start);

        while (!stack.isEmpty()) {
            int i = stack.pop();

            if (i < 0 || i >= n || visited.contains(i)) {
                continue;
            }

            if (arr[i] == 0) {
                return true;
            }

            visited.add(i);

            stack.push(i + arr[i]);
            stack.push(i - arr[i]);
        }

        return false;
    }
}
