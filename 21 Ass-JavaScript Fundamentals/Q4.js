function extractWithGroups(pattern, str) {
    // Create a regular expression object with the provided pattern
    let regex = new RegExp(pattern);

    // Use the exec() method of the regular expression to search for matches
    let match = regex.exec(str);

    // If there is a match
    if (match) {
        // Extract the captured groups
        let groups = match.slice(1);
        return groups;
    } else {
        // If no match found, return null
        return null;
    }
}

// Test function with a pattern to extract parts of a date (day, month, year)
let datePattern = /(\d{2})-(\d{2})-(\d{4})/;
let dateString = "Today's date is 09-03-2024";
let extractedDate = extractWithGroups(datePattern, dateString);

if (extractedDate) {
    console.log("Day:", extractedDate[0]);
    console.log("Month:", extractedDate[1]);
    console.log("Year:", extractedDate[2]);
} else {
    console.log("No match found for the date pattern.");
}
