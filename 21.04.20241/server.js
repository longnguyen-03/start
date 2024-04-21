function lengthOfLongestSubstring(s) {
    let charMap = new Map(); // Hashmap to store characters and their indices
    let maxLength = 0; // Length of the longest substring without repeating characters
    let start = 0; // Start index of the current substring

    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        // If the current character is already in the hashmap and its index is greater than or equal to the start index,
        // update the start index to move one character after the last occurrence of the character
        if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
            start = charMap.get(currentChar) + 1;
        }
        // Update the length of the current substring
        maxLength = Math.max(maxLength, end - start + 1);
        // Update the index of the current character in the hashmap
        charMap.set(currentChar, end);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("bbbbacdecd")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
