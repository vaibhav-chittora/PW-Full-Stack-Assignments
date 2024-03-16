// Create a new instance of XMLHttpRequest
var xhr = new XMLHttpRequest();

// Define the request URL
var url = 'https://jsonplaceholder.typicode.com/users';

// Configure the request
xhr.open('GET', url, true);

// Set up a function to handle the response
xhr.onreadystatechange = function() {
    // Check if the request is complete and successful
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // Parse the response JSON data
        var users = JSON.parse(xhr.responseText);

        // Log a list of user names to the browser console
        console.log('List of user names:');
        users.forEach(function(user) {
            console.log(user.name);
        });
    }
};

// Send the request
xhr.send();

        