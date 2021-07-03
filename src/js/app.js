// Create class for HTTP request
 export default class EasyHTTP {
    async get(url) {
        try {
            const response = await fetch(url);
            return await response.json();
        } catch (e) {
            console.log(`Error ${e}`);
        }
    }
}

