// Function to simulate an asynchronous operation
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 2000);
  });
}

// Async function to use the fetchData function
async function getData() {
  console.log("Fetching data...");
  const data = await fetchData();
  console.log(data);
}

// Call the async function
getData();
