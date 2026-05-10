import java.util.*;

class Solution {
    public <T> Map<T, Integer> countFrequencies(List<T> elements) {
        Map<T, Integer> counts = new HashMap<>();

        for (T item : elements) {
            if (counts.containsKey(item)) {
                counts.put(item, counts.get(item) + 1);
            } else {
                counts.put(item, 1);
            }
        }

        return counts;
    }
}
