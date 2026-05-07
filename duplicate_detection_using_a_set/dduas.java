import java.util.*;

class Solution { // similar to TypeScript
    public <T> List<T> findDuplicates(List<T> elements) {
        Set<T> seen = new HashSet<>();
        Set<T> duplicates = new HashSet<>();

        for (T item : elements) {
            if (seen.contains(item)) {
                duplicates.add(item);
            } else {
                seen.add(item);
            }
        }

        return new ArrayList<>(duplicates);
    }
}
