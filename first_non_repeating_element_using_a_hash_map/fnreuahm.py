from collections.abc import Hashable
from typing import TypeVar

T = TypeVar("T", bound=Hashable)


def first_non_repeating(elements: list[T]) -> T | None:
    counts: dict[T, int] = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    for item in elements:
        if counts[item] == 1:
            return item

    return None


words = ["a", "b", "a", "c", "b"]
numbers = [4, 5, 4, 6, 5]
all_repeated = [1, 1, 2, 2, 3, 3]

print(first_non_repeating(words))
print(first_non_repeating(numbers))
print(first_non_repeating(all_repeated))
