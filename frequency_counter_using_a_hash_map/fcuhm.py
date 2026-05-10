from collections.abc import Hashable
from typing import TypeVar

T = TypeVar("T", bound=Hashable)


def count_frequencies(elements: list[T]) -> dict[T, int]:
    counts: dict[T, int] = {}

    for item in elements:
        if item in counts:
            counts[item] += 1
        else:
            counts[item] = 1

    return counts


words = ["a", "b", "a", "c", "b", "a"]
numbers = [10, 20, 10, 30, 20, 10]

print(count_frequencies(words))
print(count_frequencies(numbers))