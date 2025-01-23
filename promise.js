// Create a new Promise
var myPromise = new Promise(function(resolve, reject) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(function() {
        var success = true; // Change this to false to simulate an error
        if (success) {
            resolve("Operation was successful!");
        } else {
            reject("Operation failed.");
        }
    }, 2000); // 2 seconds delay
});

// Handle the Promise
myPromise.then(function(result) {
    console.log(result); // This will run if the Promise is resolved
}).catch(function(error) {
    console.error(error); // This will run if the Promise is rejected
});
