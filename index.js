function minPlanesRequired(fuel) {
    // Print the input array for debugging
    console.log(fuel);

    const n = fuel.length;

    // If there are no airports, return -1 (impossible to reach the destination)
    if (n === 0) return -1;

    let planes = 0; // Tracks the number of planes hired
    let maxReach = 0; // Tracks the farthest airport we can reach at any point
    let currentEnd = 0; // The current range limit of the selected plane

    for (let i = 0; i < n - 1; i++) {
        // Update maxReach: the maximum distance we can go from this point
        maxReach = Math.max(maxReach, i + fuel[i]);
        // If we have reached the end of the current plane's fuel range
        if (i === currentEnd) {
            planes++; // Hire a new plane
            currentEnd = maxReach; // Extend the range to maxReach

            // If we've reached or surpassed the last airport, return the number of planes hired
            if (currentEnd >= n - 1) return planes;
        }
        // If we are stuck (can't move forward anymore), return -1
        if (i >= maxReach) return -1;
    }
  
    return -1; // If we exit the loop without reaching the last airport, return -1
}

// Test cases
console.log(minPlanesRequired([2, 1, 2, 3, 1]));
console.log(minPlanesRequired([1, 6, 3, 4, 5, 0, 0, 0, 6]));
console.log(minPlanesRequired([1, 1, 0, 1])); 