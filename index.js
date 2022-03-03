// Import the library fs.
const fs = require('fs');

// Start a try catch with sync methods to read and write the files.
try {
  // Read file synchronized
  const data = fs.readFileSync('products-ecommerce.txt', 'utf8')
  // Convert the raw data into a JSON.
  const json = JSON.parse(data);
  
  // Create a empty eskeleton for the JSON of that will be writen in the file as result.
  var ans = {};
  ans.items = [];
  
  // Iterate through the items in the JSON that was read.
  json.items.forEach(item =>  {
    // It will only add to the solution, the items with a price lower than 10.000.
    if(parseInt(item.price.amount) < 10000){
      // Push into the array of items, the items with the specified price.
      ans.items.push(item);
      } 
    }
  );

  // When the iteration is done it will format and write the resulting items to the file synchronously. 
  //(It will start a new file every time the code is runned).
  // The answer file will be stored in the folder of the project under the name of: product-results.txt.
  fs.writeFileSync('products-result.txt', JSON.stringify(ans, null, 2));

} catch (err) {
  // If there is an error it will print it to the console
  console.error(err);
}


