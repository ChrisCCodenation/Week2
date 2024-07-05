
function swapHeadAndTail(array) {
    // Calculate the middle index
    const middleIndex = Math.floor(array.length / 2);

    // Split the array into head and tail
    const head = array.slice(0, middleIndex);
    const tail = array.slice(middleIndex);

    // Swap and concatenate head and tail
    const swappedArray = [...tail, ...head];

    return swappedArray;
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const swappedArray = swapHeadAndTail(originalArray);
console.log(swappedArray); // Output: [4, 5, 3, 1, 2]
