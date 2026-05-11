import java.util.*;

class Solution {
    public int[] separateDigits(int[] nums) {
        List<Integer> answer = new ArrayList<>();

        for (int number : nums) {
            List<Integer> digitsOfCurrentNumber = new ArrayList<>();

            while (number > 0) {
                digitsOfCurrentNumber.add(number % 10);
                number /= 10;
            }

            Collections.reverse(digitsOfCurrentNumber);
            answer.addAll(digitsOfCurrentNumber);
        }

        int[] resultArray = new int[answer.size()];
        for (int i = 0; i < resultArray.length; i++) {
            resultArray[i] = answer.get(i);
        }

        return resultArray;
    }
}
