// Create class for HTTP request
 export default class EasyHTTP {
    // Make a GET request
    async get(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (e) {
            console.log(`Error ${e}`);
        }
    }
    // Make a POST request
     async post(url, data) {
         try {
             const response = await fetch(url, {
                 method: "POST",
                 headers: {
                     "Content-type": "application/json"
                 },
                 body: JSON.stringify(data)
             });
             return await response.json();
         } catch (e) {
             console.log(`Error ${e}`);
         }
     }
    // Make a PUT request
     async put(url, data) {
         try {
             const response = await fetch(url, {
                 method: "PUT",
                 headers: {
                     "Content-type": "application/json"
                 },
                 body: JSON.stringify(data)
             });
             return await response.json();
         } catch (e) {
             console.log(`Error ${e}`);
         }
     }
     // Make a DELETE request
     async delete(url) {
         try {
             const response = await fetch(url, {
                 method: "DELETE",
                 headers: {
                     "Content-type": "application/json"
                 }
             });
             return "Resource deleted!";
         } catch (e) {
             console.log(`Error ${e}`);
         }
     }

}

