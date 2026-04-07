import { LoginSchema, type ICredential } from './Auth.contract';

import { FormLabel } from './../ui/form/Lable';
import { TextInput } from './../ui/form/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';  // we are using the zodResolver to validate the credential object using the LoginSchema. the zodResolver is a function that takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape of the credential object and the validation rules for each property. we are using this resolver to validate the form data before sending it to the server for authentication. if the validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.
// import { useState } from 'react';

import Cookies from 'js-cookie'; // we are using the js-cookie library to set cookies in a more secure way. it provides a simple API to set, get, and delete cookies in the browser. it also provides options to set the expiresIn, path, domain, secure, and HttpOnly flags for the cookies which can help to prevent cross-site scripting (XSS) attacks and other security vulnerabilities. we can use this library to set cookies in a more secure way instead of using the js default method which does not provide any security features.

import axiosInstance from '../../config/ApiClient';
import { useNavigate } from 'react-router';

export default function LoginForm() {

    // Instead of using custom validation for form handling and validation, we can also use react-hook-form which is a library that provides a simple and efficient way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as register, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the defaultValues property to initialize the form state with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset.
    // There are two ways to use react-hook-form for form handling and validation:

    // 1. Uncontrolled Input component/Using the register method: to register the input fields and handle the form submission using the handleSubmit method. Those input fields will be uncontrolled components which means that their state is managed by the DOM and not by React. we can use the `register` method to register the input fields and handle the form submission using the handleSubmit method. this is a simple and efficient way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as register, handleSubmit, errors, etc. which we can use to manage the form state and validation.

    // 2. Controlled Input component: Using the Controller component to wrap the input fields and handle the form submission using the handleSubmit method. those input fields will be controlled components which means that their state is managed by React and not by the DOM. we can use the `Controller` component to wrap the input fields and handle the form submission using the handleSubmit method. this is a more flexible way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation.

    // control is a property that is returned by the useForm hook and it is used to control the input fields in the form. it is used to wrap the input fields and handle the form submission using the handleSubmit method. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation.
    // handleSubmit is a method that is returned by the useForm hook and it is used to handle the form submission. it takes a function as an argument which will be called when the form is submitted. this function will receive the form data as an argument and we can use it to perform the login logic. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to managethe form state and validation.
    // formState is a property that is returned by the useForm hook and it is used to manage the form state. it has a property called errors which is an object that contains the validation errors for each input field in the form. we can use this property to display error messages to the user when the validation fails. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the errors object which is a property of the formState object returned by the useForm hook to get the error message for the username and password fields and pass it to the TextInput component to display it to the user when the validation fails. we are also using the isSubmitting property which is a boolean that indicates whether the form is currently being submitted or not. we can use this property to disable the submit button when the form is being submitted to prevent multiple submissions.
    const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<ICredential>({
        // we are using the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the defaultValues property to initialize the form state with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset. we are also using the resolver property to validate the form data against the defined schema using the zodResolver function which takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape of the credential object and the validation rules for each property. we are using this resolver to validate the form data before sending it to the server for authentication. if the validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.
        defaultValues: {
            username: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema) // we are using the zodResolver to validate the credential object using the LoginSchema. the zodResolver is a function that takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape ofthe credential object andthe validation rules for each property. we are using this resolver to validatethe form data before sending it tothe server for authentication. ifthe validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.
    });


    // local state management: 
    // const [loading, setLoading] = useState<boolean>(true);
    // local state management is not recommended for managing the user session and authentication state in a real application because it does not persist the state across page reloads and it can be easily manipulated by the user. 
    // Instead, we use global state management using libraries such as redux-toolkit, context API, zustand, jotai, tanstack query (api state) etc. to manage the user session and authentication state in a real application. these libraries provide a way to manage the global state of the application and persist it across page reloads and data share with multiple components. they also provide a way to handle side effects such as API calls and to manage the authentication state in a more secure way. we can use these libraries to manage the user session and authentication state in a real application instead of using local state management which is not recommended for this purpose. 




    // Router fetch to user in LoginForm component: this allows us to navigate to different pages in our application after a successful login. we can use the useNavigate hook from the react-router-dom library to navigate to different pages in our application after a successful login. the useNavigate hook returns a function that we can call to navigate to a different page in our application. we can use this function to navigate to the dashboard or home page after a successful login. this is a common practice to improve the user experience by redirecting the user to the appropriate page after a successful login.
    const router = useNavigate();

    // 3. Handle form submission: to handle the form submission and perform the login logic. we will create a function called login which will be called when the form is submitted. this function will take the event object as an argument and we will use it to prevent the default behavior of the form submission which is to refresh the page. then we will log the credential object to the console to see the current state of the credential object when the form is submitted. then we will validate the credential object using the LoginSchema before sending it to the server for authentication.
    // We will handle the login logic in the login function which will be called when the form is submitted:
    const login = async (credentials: ICredential) => {
        try {
            // console.log(credentials) // we are logging the credential object to the console to see the current state of the credential object when the form is submitted. in this case, we will see the updated state of the credential object when we click the login button. this is because we are using the useForm hook to manage the form state and validation. it returns an object with properties such as register, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the defaultValues property to initialize the form state with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset. 


            // There are two types of development: DDD (Domain-Driven Development) and TDD (Test-Driven Development). 
            // DDD is a software development approach that focuses on the core domain logic and the business rules of the application. it emphasizes the importance of understanding the domain and modeling it in a way that reflects the real-world concepts and relationships. Designer/Frontend developer develops and Backend developer should work as designer designed.
            // TDD is a software development approach that focuses on writing tests before writing the actual code. it emphasizes the importance of testing and ensuring that the code is working as expected before implementing the actual functionality. Backend Developer develops and Frontend developer integrates the API with the frontend.
            // Here, we are using TDD:
            // Where, API documentation is:
            /*
```            fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({

                  username: 'emilys',
                  password: 'emilyspass',
                  expiresInMins: 30, // optional, defaults to 60
                }),
                credentials: 'include' // Include cookies (e.g., accessToken) in the request
            })
            .then(res => res.json())
            .then(console.log);
```
            */
            // make sure while loging the form use username: emilys and password: emilyspass to get the successful response from the server as per API documentation. We can check in browser's developer tools network tab's Fetch/XHR section to see the request and response details when we submit the form. if we enter the correct username and password as per API documentation, we will get a successful response from the server which will contain the accessToken and other user information. we can use this accessToken to manage the user session and authentication state in our application. if we enter incorrect username or password, we will get an error response from the server which we can use to display error messages to the user or to prevent the form submission.

            //fetch(URL, parameter of request structure)
            // let response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}auth/login`, {   // we are using the fetch API to send a POST request to the server for authentication. the URL for the login API is constructed using an environment variable which allows us to easily change the base URL for different environments (development, staging, production) without changing the code. we are also using the async/await syntax to handle the asynchronous nature of the fetch API and to make our code more readable and easier to understand. 
            // //${import.meta.env.VITE_APP_BASE_URL} is the syntax to access the environment variable in a Vite project. we are using this syntax to construct the URL for the login API by appending the endpoint "auth/login" to the base URL defined in the environment variable. this allows us to easily manage and update the API endpoint in one place without having to change it in multiple places in our code. Where import.meta.env is an object that contains all the environment variables defined in our project and VITE_APP_BASE_URL is the specific environment variable that we are using to set the base URL for our API requests.
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",  // we are setting the Content-Type header to application/json for the login request. this means that we are sending JSON data in the request body.
            //         // "Content-Type": "multipart/form-data" // If you want to upload images/files
            //         // "Content-Type": "application/x-www-form-urlencoded" // If you want to send data in URL-encoded format
            //     },
            //     body: JSON.stringify(credentials), // we are using the JSON.stringify method to convert the credential object into a JSON string before sending it to the server for authentication. this is because the fetch API expects the request body to be a string when sending data in JSON format. // Since With fetch, we must manually JSON.stringify our JS object and set the Content-Type header. Axios does this automatically for plain objects, so we can pass the object directly without calling JSON.stringify.
            // });
            // response = await response.json();   // .json() converts the response from the server into a JavaScript object.
            // console.log(response) // we are logging the response from the server to the console to see the current state of the response object when the form is submitted. in this case, we will see the response from the server when we click the login button. this is because we are using the fetch API to send a POST request to the server with the credential object as the request body. then we are using the json method to parse the response from the server and log it to the console to see what we get back from the server after sending the login request. this is a common practice to see what we get back from the server and how to handle it in our application. in a real application, we would handle the response from the server and update the UI accordingly based on whether the login was successful or not.

            //---
            // Instead of fetch() API, we can also use the axios library to make API requests to the server for authentication. axios is a popular HTTP client library that provides a simple and efficient way to make API requests in JavaScript. it has a more intuitive API and provides features such as interceptors, request cancellation, and automatic JSON parsing which can simplify our code and improve the user experience. we can use axios to send a POST request to the server with the credential object as the request body and handle the response from the server in a more efficient way compared to using the fetch API. we can also use an axios instance to set a base URL for all our API requests and to manage common configurations such as headers and timeouts in one place. this can help us to keep our code cleaner and more maintainable when working with APIs in our application.
            const response = await axiosInstance.post("auth/login", { ...credentials, expiresInMins: 24 * 60, });  // axiosInstance is an instance of the axios library that we have created to set a base URL for all our API requests and to manage common configurations such as headers and timeouts in one place.
            // the POST method is primarily used to create new resources on a server. It is a fundamental "write" operation that sends data to the server to be processed and stored.
            // .post() is a method provided by the axios library to send a POST request to the server. it takes two arguments, the first one is the URL endpoint for the login API and the second one is the credential object which contains the username and password that we want to send to the server for authentication. this method returns a promise that resolves to the response from the server which we can use to handle the login logic in our application. we can also use an axios instance to set a base URL for all our API requests and to manage common configurations such as headers and timeouts in one place. this can help us to keep our code cleaner and more maintainable when working with APIs in our application.
            // we are sending the credential object along with an additional property called expiresInMins which is set to 24 * 60 (24 hours) to specify the expiration time for the access token that we will receive from the server after a successful login. this is because the API documentation for the login endpoint specifies that we can include an optional property called expiresInMins in the request body to set the expiration time for the access token. by setting this property, we can control how long the access token will be valid and when it will expire. this can help us to manage the user session and authentication state in our application more effectively by ensuring that the access token is only valid for a certain period of time and that it will expire after that period has passed.


            // Suppose, we get the accessToken from the server after a successful login through response.data.accessToken. And then,
            // accessToken => is assign locally(browser) in some key such as: auth_key, session_id, etc. are all different names for the token that we get back from the server after a successful login which we can use to manage the user session and authentication state in our application. the name of the token can vary depending on the API design and implementation. in this case, we are using accessToken as the name of the token that we get back from the server after a successful login. we can use this token to manage the user session and authentication state in our application by storing it in a secure way (e.g., HttpOnly cookies, localStorage with proper security measures) and using it to authenticate subsequent API requests to protected endpoints in our application.
            // Now,
            // store token: we are using the js-cookie library to set a cookie in the browser to store the access token that we receive from the server after a successful login. we are using the Cookies.set method to set a cookie with the name "auth_key" and the value of the access token that we get back from the server in the response.data.accessToken property. we are also setting an expiration time for the cookie using the expires option which is set to 1 day in this case. this means that the cookie will expire after 1 day and the user will need to log in again to get a new access token. by storing the access token in a cookie, we can manage the user session and authentication state in our application more effectively by ensuring that the access token is available for subsequent API requests to protected endpoints in our application until it expires. this can help us to provide a better user experience and improve the security of our application by ensuring that the access token is only valid for a certain period of time and that it will expire after that period has passed.
            Cookies.set("auth_key", response.data.accessToken, {
                expires: 1,
                secure: true, // we are setting the secure flag to true to ensure that the cookie is only sent over HTTPS connections which can help to prevent man-in-the-middle (MITM) attacks and other security vulnerabilities. by setting this flag, we can ensure that the cookie is only transmitted securely and that it cannot be intercepted by attackers who may be trying to steal the access token or other sensitive information from the cookie. this is a common practice to improve the security of our application when storing sensitive information such as access tokens in cookies.
                sameSite: "lax", // we are setting the sameSite flag to "Lax" to prevent cross-site request forgery (CSRF) attacks and to improve the security of our application. by setting this flag, we can ensure that the cookie is only sent in a first-party context and not in a third-party context which can help to prevent attackers from making unauthorized requests on behalf of the user. this is a common practice to improve the security of our application when storing sensitive information such as access tokens in cookies.

                // note: we can also use other options such as path, domain, etc. to further customize the behavior of the cookie based on our application's requirements and security needs. it is important to carefully consider the options we use when setting cookies to ensure that we are providing a secure and user-friendly experience for our users while also protecting their sensitive information from potential security threats.

            }); // now, this cookie will be stored in the browser and we can use it to manage the user session and authentication state in our application. we can also use this cookie to authenticate subsequent API requests to protected endpoints in our application by including it in the request headers or by using it to retrieve the access token from the cookie and include it in the request body or query parameters as needed. this can help us to provide a better user experience and improve the security of our application by ensuring that the access token is only valid for a certain period of time and that it will expire after that period has passed.


            // console.log(response) // we are logging the response from the server to the console to see the current state of the response object when the form is submitted. in this case, we will see the response from the server when we click the login button. this is because we are using the axios library to send a POST request to the server with the credential object as the request body. then we are logging the response from the server to the console to see what we get back from the server after sending the login request. this is a common practice to see what we get back from the server and how to handle it in our application. in a real application, we would handle the response from the server and update the UI accordingly based on whether the login was successful or not.
            // console.log(response.data) // we are logging the data property of the response object to the console to see the actual data that we get back from the server when we submit the login form. this is because the response object returned by axios contains several properties such as status, headers, config, etc. but the actual data that we get back from the server is contained in the data property of the response object. by logging response.data to the console, we can see the actual data that we get back from the server after sending the login request and how to handle it in our application. in a real application, we would handle this data and update the UI accordingly based on whether the login was successful or not.


            // Suppose, above given data is not enough for our application and we want to get more user information from the server after a successful login. in this case, we can make another API request to the server to get the user information using the access token that we received from the login response. we can use the access token to authenticate this request and retrieve the user information from the server which we can then use to update the UI and manage the user session and authentication state in our application more effectively. this is a common practice to get additional user information after a successful login to provide a better user experience and to manage the user session and authentication state in our application more effectively.   // Fetching response for currently logged in user (right below), here we are making a GET request to the "auth/me" endpoint to retrieve the information of the currently logged in user using the access token that we received from the login response. we are using the axiosInstance to make this request which allows us to include the access token in the request headers for authentication, which is necessary to access protected endpoints that require authentication and it has been already set up to include the access token in the request headers for all requests through the use of interceptors. by making this request, we can get additional user information from the server which we can then use to update the UI and manage the user session and authentication state in our application more effectively.
            const loggedInUserInfo = await axiosInstance.get("auth/me");
            // console.log(loggedInUserInfo);  // we are logging the response from the server to the console to see the current state of the loggedInUserInfo object when we submit the login form. this is because we are using the axios library to send a GET request to the server to retrieve the information of the currently logged in user using the access token that we received from the login response. then we are logging the response from the server to the console to see what we get back from the server after sending the request to get the logged in user information. this is a common practice to see what we get back from the server and how to handle it in our application. in a real application, we would handle the response from the server and update the UI accordingly based on whether we were able to retrieve the logged in user information successfully or not.
            router("/" + loggedInUserInfo.data.role) // we are using the router function returned by the useNavigate hook to navigate to a different page in our application after a successful login. in this case, we are navigating to a page with the URL path that includes the role of the logged in user which we get from the loggedInUserInfo response from the server. this is a common practice to improve the user experience by redirecting the user to a personalized page after a successful login based on their role or other user information that we get back from the server. by using the router function, we can programmatically navigate to different pages in our application based on the user's actions and the data we get back from the server after a successful login.





            // eslint-disable-next-line => is used to disable the eslint warning for the next line of code for using any type for the error object in the catch block. this is because we are not sure about the type of the error object that will be thrown during the login process and we want to log it to the console to see what went wrong. it is a common practice to log the error to the console to see what went wrong and how to fix it. in this case, if the validation fails, it will throw an error which we can catch and log to the console to see what went wrong during the validation process.
        } catch (error: any) {
            console.log(error) // we are logging the error to the console to see what went wrong during the login process. it is a common practice to log the error to the console to see what went wrong and how to fix it. in this case, if the validation fails, it will throw an error which we can catch and log to the console to see what went wrong during the validation process.
        }


    }


    return (
        <>
            <form onSubmit={handleSubmit(login)} action="" className="flex flex-col gap-5">
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">

                        {/* // This <TextInput /> component is a controlled input component which means that its state is managed by React and not by the DOM. we are using the `Controller` component to wrap the input fields and handle the form submission using the handleSubmit method. this is a more flexible way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation.                                                                          In this case, we are using the control property to wrap the TextInput component and handle the form submission using the handleSubmit method. this is a more flexible way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation. we are also passing the errMsg property to display error messages to the user when the validation fails. in this case, we are using the errors object which is a property of the formState object returned by the useForm hook to get the error message for the username field and pass it to the TextInput component to display it to the user when the validation fails. */}
                        <TextInput
                            control={control}
                            errMsg={errors?.username?.message}
                            type="text"
                            name="username"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="password">Password:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            control={control}
                            errMsg={errors?.password?.message}
                            type="password"
                            name="password"
                            className="border w-full border-grey-400 shadow bg-white rounded-md p-2"
                        />
                    </div>
                </div>
                <div className="flex w-full justify-end">
                    <a href="/forget-password" className="text-blue-400 size-sm cursor-pointer hover:underline hover:scale-95">Forget Password?</a>
                </div>
                <div className="flex gap-5 w-full ">
                    <button
                        type="reset"
                        className="w-full bg-red-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-red-600 hover:scale-98"

                        disabled={isSubmitting} // we are using the isSubmitting property which is a boolean that indicates whether the form is currently being submitted or not. we can use this property to disable the submit button when the form is being submitted to prevent multiple submissions. in this case, we are disabling the reset button when the form is being submitted to prevent multiple resets while the form is being submitted. this is a common practice to improve the user experience and prevent unintended actions while the form is being submitted.
                    >
                        Reset
                    </button>

                    <button type="submit" className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98" disabled={isSubmitting}>Login</button>
                </div>
            </form>
        </>
    )
}


