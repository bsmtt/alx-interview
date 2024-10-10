#!/usr/bin/python3
"""Island perimeter
"""


def island_perimeter(grid):
    """Return the perimiter of an island.

    Args:
        grid (list): list of a list

    Returns:
        int: perimiter of an island
    """
    height, width, size, edges = len(grid), len(grid[0]), 0, 0

    for x in range(height):
        for y in range(width):
            if grid[x][y] == 1:
                size += 1
                if (y > 0 and grid[x][y - 1] == 1):
                    edges += 1
                if (x > 0 and grid[x - 1][y] == 1):
                    edges += 1

    return size * 4 - edges * 2
