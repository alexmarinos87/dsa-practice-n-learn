def find_duplicates(elements):
    """
    Detect and return duplicates in a list using a set.
    
    Args:
    elements (list): The input list of elements
    
    Returns:
    list: A list of duplicate elements found in the input
    """
    seen = set()         # Set to store unique elements encountered
    duplicates = set()   # Set to store duplicates

    for item in elements:
        if item in seen:
            duplicates.add(item)  # If already seen, it's a duplicate
        else:
            seen.add(item)        # Otherwise, add it to seen set

    return list(duplicates)  # Convert set to list before returning