/**
 * Easy HTTP Library
 * Library for making HTTP requests
 *
 * @version 1.0.0
 * @author  Jonas Boone
 * @license MIT
 *
 **/

// Import class
import EasyHTTP from "./js/app";

// Initialize HTTP
const http = new EasyHTTP();

// Get request all users
http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(e => console.log(`Error message ${e}`));

// Post request

// Create fake user data
const data = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@gmail.com"
}

// Post data
http.post("https://jsonplaceholder.typicode.com/users", data)
    .then(data => console.log(data))
    .catch(e => console.log(`Error message ${e}`));

// Put request
http.put("https://jsonplaceholder.typicode.com/users/1", data)
    .then(data => console.log(data))
    .catch(e => console.log(`Error message ${e}`));

// Delete request
http.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(message => console.log(message))
    .catch(e => console.log(`Error message ${e}`));
