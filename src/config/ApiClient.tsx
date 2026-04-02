import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,  // we are using environment variable to set the base URL for the API. this way we can easily change the base URL for different environments (development, staging, production) without changing the code. we can set the environment variable in a .env file at the root of our project and it will be automatically loaded by Vite.
    timeout: 50000,  // we are setting a timeout of 50000 milliseconds (50 seconds) for all requests made using this axios instance. this means that if the server does not respond within 50 seconds, the request will be aborted and an error will be thrown. this is useful to prevent our application from hanging indefinitely if the server is not responding or if there are network issues. The default timeout for axios is 0, which means that there is no timeout and the request will wait indefinitely for a response from the server. by setting a timeout, we can ensure that our application remains responsive and does not hang indefinitely in case of server issues or network problems.

    timeoutErrorMessage: "The request took too long and was aborted. Please try again later.",  // we are setting a custom error message for timeout errors. this message will be displayed to the user if the request takes longer than the specified timeout duration (50000 milliseconds in this case) and is aborted. this is useful to provide a better user experience by informing the user about the reason for the error and suggesting them to try again later instead of showing a generic error message or leaving them wondering why the request failed.

    headers: {
        "Content-Type": "application/json",  // we are setting the Content-Type header to application/json for all requests made using this axios instance. this means that we are sending JSON data in the request body and we expect to receive JSON data in the response from the server. this is a common practice when working with RESTful APIs (i.e. REST APIs) that use JSON as the data format for communication between the client and the server.
    },

    responseType: "json",  // we are setting the responseType to json for all requests made using this axios instance. this means that we expect to receive JSON data in the response from the server and axios will automatically parse the JSON data into a JavaScript object before returning it to us. this is useful to simplify our code and avoid having to manually parse the JSON data from the response every time we make a request to the server. by setting the responseType to json, we can directly work with JavaScript objects in our code instead of dealing with raw JSON strings.
});

// Benefits of using an axios instance:
// 1. We can set a base URL for all requests, which makes it easier to manage and update the API endpoint in one place.
// 2. We can set default headers for all requests, which is useful for authentication tokens or content type.
// 3. We can set a timeout for all requests, which helps to prevent our application from hanging indefinitely if the server is not responding.
// 4. We can set a custom error message for timeout errors, which provides a better user experience by informing the user about the reason for the error and suggesting them to try again later.
// 5. We can set the response type for all requests, which simplifies our code by automatically parsing the response data into the desired format (e.g., JSON) before returning it to us.

// Major benefits:
// Interceptors: is a powerful feature of axios that allows us to intercept requests and responses before they are handled by then or catch. This allows us to modify the request or response, add authentication tokens, handle errors globally, etc. For example, we can use an interceptor to automatically add an authentication token to the headers of every request, or to log the details of every response for debugging purposes. Interceptors can be added to the axios instance using the interceptors property, which provides methods for adding request and response interceptors. This feature is particularly useful for managing API interactions in a consistent way across our application and for handling common tasks such as authentication and error handling in a centralized manner.
// Intercepting requests and responses: We can use axios interceptors to intercept requests and responses before they are handled by then or catch. This allows us to modify the request or response, add authentication tokens, handle errors globally, etc.
// Canceling requests: We can use axios cancel tokens to cancel requests if they are no longer needed, which can help to improve performance and reduce unnecessary network traffic.
// Creating multiple instances: We can create multiple axios instances with different configurations (e.g., different base URLs, headers, timeouts) for different parts of our application, which allows us to manage API interactions more effectively and maintain cleaner code.


// How LoginForm.tsx component will interact with the API using this axios instance:
/*
```
React Component => Service(axios -> intercept) => Internet => Dummyjson API (or any other API) => Internet => Axios Instance(intercept -> response) => React Component
 ```

- In this flow, the React component (e.g., LoginForm) will call a service function that uses the axios instance to make an API request to the server (e.g., to authenticate the user). The axios instance will handle the request and response, including any interceptors that we have set up for adding authentication tokens or handling errors. The response from the server will be returned to the React component, which can then update the UI based on the response (e.g., show a success message, redirect the user, display error messages, etc.). This flow allows us to manage API interactions in a consistent way across our application and to handle common tasks such as authentication and error handling in a centralized manner using the axios instance and its features.
*/

// There are two types of API:
// i) Public API: which can be accessed without authentication (e.g., fetching product data, fetching user profiles, etc.)
// ii) Private API: which requires authentication (e.g., creating a new user, updating user information, etc.). For private APIs, we need to include an authentication token (e.g., JWT) in the headers of the request to access the protected resources on the server. We can use axios interceptors to automatically add the authentication token to the headers of every request that requires authentication, which simplifies our code and ensures that we are consistently including the necessary authentication information in our API requests. 




export default axiosInstance;  // we are exporting the axios instance so that we can use it in other parts of our application to make API requests. by using this axios instance, we can ensure that all our API requests have a consistent configuration (base URL, timeout, headers, response type) and we can easily manage and update this configuration in one place if needed. we can import this axios instance in any file where we need to make API requests and use it to send requests to the server and handle responses in a consistent way across our application.
