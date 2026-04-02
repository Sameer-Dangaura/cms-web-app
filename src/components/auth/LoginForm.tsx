import { LoginSchema, type ICredential } from './Auth.contract';

import { FormLabel } from './../ui/form/Lable';
import { TextInput } from './../ui/form/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';  // we are using the zodResolver to validate the credential object using the LoginSchema. the zodResolver is a function that takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape of the credential object and the validation rules for each property. we are using this resolver to validate the form data before sending it to the server for authentication. if the validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.
// import { useState } from 'react';

// import Cookies from 'js-cookie'; // we are using the js-cookie library to set cookies in a more secure way. it provides a simple API to set, get, and delete cookies in the browser. it also provides options to set the expiresIn, path, domain, secure, and HttpOnly flags for the cookies which can help to prevent cross-site scripting (XSS) attacks and other security vulnerabilities. we can use this library to set cookies in a more secure way instead of using the js default method which does not provide any security features.

import axiosInstance from '../../config/ApiClient';

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



    // 3. Handle form submission: to handle the form submission and perform the login logic. we will create a function called login which will be called when the form is submitted. this function will take the event object as an argument and we will use it to prevent the default behavior of the form submission which is to refresh the page. then we will log the credential object to the console to see the current state of the credential object when the form is submitted. then we will validate the credential object using the LoginSchema before sending it to the server for authentication.
    // We will handle the login logic in the login function which will be called when the form is submitted:
    const login = async (credentials: ICredential) => {
        try {
            console.log(credentials) // we are logging the credential object to the console to see the current state of the credential object when the form is submitted. in this case, we will see the updated state of the credential object when we click the login button. this is because we are using the useForm hook to manage the form state and validation. it returns an object with properties such as register, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the defaultValues property to initialize the form state with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset. 


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
            // let response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}auth/login`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         // "Content-Type": "multipart/form-data" // If you want to upload images/files
            //         // "Content-Type": "application/x-www-form-urlencoded" // If you want to send data in URL-encoded format
            //     },
            //     body: JSON.stringify(credentials), // we are using the JSON.stringify method to convert the credential object into a JSON string before sending it to the server for authentication. this is because the fetch API expects the request body to be a string when sending data in JSON format.
            // });
            // response = await response.json();   // .json() converts the response from the server into a JavaScript object.
            // console.log(response) // we are logging the response from the server to the console to see the current state of the response object when the form is submitted. in this case, we will see the response from the server when we click the login button. this is because we are using the fetch API to send a POST request to the server with the credential object as the request body. then we are using the json method to parse the response from the server and log it to the console to see what we get back from the server after sending the login request. this is a common practice to see what we get back from the server and how to handle it in our application. in a real application, we would handle the response from the server and update the UI accordingly based on whether the login was successful or not.

            //---
            // Instead of fetch() API, we can also use the axios library to make API requests to the server for authentication. axios is a popular HTTP client library that provides a simple and efficient way to make API requests in JavaScript. it has a more intuitive API and provides features such as interceptors, request cancellation, and automatic JSON parsing which can simplify our code and improve the user experience. we can use axios to send a POST request to the server with the credential object as the request body and handle the response from the server in a more efficient way compared to using the fetch API. we can also use an axios instance to set a base URL for all our API requests and to manage common configurations such as headers and timeouts in one place. this can help us to keep our code cleaner and more maintainable when working with APIs in our application.
            const response = await axiosInstance.post("auth/login", credentials);   // .post() is a method provided by the axios library to send a POST request to the server. it takes two arguments, the first one is the URL endpoint for the login API and the second one is the credential object which contains the username and password that we want to send to the server for authentication. this method returns a promise that resolves to the response from the server which we can use to handle the login logic in our application. we can also use an axios instance to set a base URL for all our API requests and to manage common configurations such as headers and timeouts in one place. this can help us to keep our code cleaner and more maintainable when working with APIs in our application.
            // console.log(response) // we are logging the response from the server to the console to see the current state of the response object when the form is submitted. in this case, we will see the response from the server when we click the login button. this is because we are using the axios library to send a POST request to the server with the credential object as the request body. then we are logging the response from the server to the console to see what we get back from the server after sending the login request. this is a common practice to see what we get back from the server and how to handle it in our application. in a real application, we would handle the response from the server and update the UI accordingly based on whether the login was successful or not.
            console.log(response.data) // we are logging the data property of the response object to the console to see the actual data that we get back from the server when we submit the login form. this is because the response object returned by axios contains several properties such as status, headers, config, etc. but the actual data that we get back from the server is contained in the data property of the response object. by logging response.data to the console, we can see the actual data that we get back from the server after sending the login request and how to handle it in our application. in a real application, we would handle this data and update the UI accordingly based on whether the login was successful or not.


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


