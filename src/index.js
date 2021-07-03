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

