import java.util.*;

class Solution {
    public int longestCommonPrefix(int[] arr1, int[] arr2) {
        Set<Integer> prefixes = new HashSet<>();

        for (int number : arr1) {
            int current = number;

            while (current > 0) {
                prefixes.add(current);
                current /= 10;
            }
        }

        int longestLength = 0;

        for (int number : arr2) {
            int current = number;

            while (current > 0) {
                if (prefixes.contains(current)) {
                    longestLength = Math.max(longestLength, String.valueOf(current).length());
                    break;
                }

                current /= 10;
            }
        }

        return longestLength;
    }
}
