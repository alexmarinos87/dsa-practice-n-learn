import java.util.*;

class Solution {
    public <T> T firstNonRepeating(List<T> elements) {
        Map<T, Integer> counts = new HashMap<>();

        for (T item : elements) {
            if (counts.containsKey(item)) {
                counts.put(item, counts.get(item) + 1);
            } else {
                counts.put(item, 1);
            }
        }

        for (T item : elements) {
            if (counts.get(item) == 1) {
                return item;
            }
        }

        return null;
    }
}
