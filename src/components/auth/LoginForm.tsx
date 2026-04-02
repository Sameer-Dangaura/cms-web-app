import { LoginSchema, type ICredential } from './Auth.contract';

import { FormLabel } from './../ui/form/Lable';
import { TextInput } from './../ui/form/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';  // we are using the zodResolver to validate the credential object using the LoginSchema. the zodResolver is a function that takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape of the credential object and the validation rules for each property. we are using this resolver to validate the form data before sending it to the server for authentication. if the validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.
// import { useState } from 'react';

// import Cookies from 'js-cookie'; // we are using the js-cookie library to set cookies in a more secure way. it provides a simple API to set, get, and delete cookies in the browser. it also provides options to set the expiresIn, path, domain, secure, and HttpOnly flags for the cookies which can help to prevent cross-site scripting (XSS) attacks and other security vulnerabilities. we can use this library to set cookies in a more secure way instead of using the js default method which does not provide any security features.

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


            // In future response (token) will be stored in web storage to maintain the user session and to authenticate the user for subsequent requests to the server. we can use any of the web storage options such as cookies, local storage, or session storage to store the token:
            const response = {
                token: "alphanumberic text" // this is a mock response that we will receive from the server after successful authentication. in a real application, we will send the credential object to the server for authentication and the server will return a response that contains the token if the authentication is successful. we are using this mock response to demonstrate how to store the token in web storage after successful authentication. // cookie can only store string values, so we are storing the token as a string. if the token is an object, we can convert it to a string using JSON.stringify() before storing it in the cookie and we can use JSON.parse() to convert it back to an object when we retrieve it from the cookie. in this case, we are assuming that the token is a string and we are storing it directly in the cookie.
            }

            // web storages :
            // i) cookies => mostly used for authentication and authorization purposes to store authentication tokens, session IDs, and other sensitive information that needs to be sent to the server with each request.
            // a) using by js default => 
            // document.cookie = "token=" + response.token + "; expiresIn=" + new Date() + "; path=/" // this will set a cookie with the name 'token' and the value 'alphanumberic text' that will expire in 7 days and will be available for all paths in the domain. we are using the document.cookie property to set the cookie. we are setting the name of the cookie to 'token' and the value to the token received from the server. we are also setting the expiresIn property to a date that is 7 days from the current date to specify when the cookie should expire. we are also setting the path property to '/' to make the cookie available for all paths in the domain. // this is a simple way to set a cookie using the js default method. however, it is not recommended to use this method because it does not provide any security features such as HttpOnly or Secure flags which can help to prevent cross-site scripting (XSS) attacks and other security vulnerabilities. it is recommended to use a library such as js-cookie to set cookies in a more secure way.

            // b) using js library => js-cookie => 
            // Cookies.set('token', response.token, {
            //     domain: 'localhost', // this will set the domain for the cookie which means that the cookie will be available for all subdomains of the specified domain. this can be useful if you want to share the cookie across multiple subdomains of your application. for example, if you set the domain to 'example.com', the cookie will be available for 'www.example.com', 'api.example.com', etc. it is recommended to set this property to a specific domain to enhance the security of the application and prevent unauthorized access to the cookie from other domains.

            //     expires: 7,

            //     path: '/',

            //     secure: true, // this will set the Secure flag for the cookie which means that the cookie will only be sent over HTTPS connections. this can help to prevent cross-site scripting (XSS) attacks and other security vulnerabilities by ensuring that the cookie is only sent over secure connections. it is recommended to set this flag for cookies that contain sensitive information such as authentication tokens to enhance the security of the application.

            //     // sameSite: 'strict' // this will set the SameSite flag for the cookie which means that the cookie will only be sent in a first-party context and not in a third-party context. this can help to prevent cross-site request forgery (CSRF) attacks by ensuring that the cookie is only sent when the user is interacting with the site that set the cookie. it is recommended to set this flag for cookies that contain sensitive information such as authentication tokens to enhance the security of the application.
            //     sameSite: 'lax' // this will set the SameSite flag for the cookie which means that the cookie will be sent in a first-party context and also in a third-party context but only when the user is interacting with the site that set the cookie. this can help to prevent cross-site request forgery (CSRF) attacks by ensuring that the cookie is only sent when the user is interacting with the site that set the cookie. it is recommended to set this flag for cookies that contain sensitive information such as authentication tokens to enhance the security of the application while still allowing some cross-site interactions.
            // }); // this will set a cookie with the name 'token' and the value response.token that will expire in 7 days and will be available for all paths in the domain.

            // remove cookie => Cookies.remove('token') // this will remove the cookie with the name 'token' from the browser. we can use this method to remove the cookie when the user logs out of the application to ensure that the token is no longer available in the browser and to enhance the security of the application.

            // update cookie => Cookies.set('token', newToken) // this will update the value of the cookie with the name 'token' to newToken. we can use this method to update the token in the cookie when the token is refreshed or when the user logs in again to ensure that the latest token is stored in the cookie and to enhance the security of the application.

            // read or get cookie => Cookies.get('token') // this will return the value of the cookie with the name 'token' from the browser. we can use this method to get the token from the cookie when we need to authenticate the user for subsequent requests to the server. it is important to note that we should validate the token on the server side to ensure that it is valid and has not been tampered with before allowing access to protected resources in the application.


            // ii) local storage : mostly used when we use react to manage global state using redux, context api, etc and we want to persistant data in the browser to maintain the user session and to authenticate the user for subsequent requests to the server.
            // set local storage => 
            localStorage.setItem('token', response.token) // this will set an item in the local storage with the key 'token' and the value response.token. we can use this method to store the token in the local storage after successful authentication to maintain the user session and to authenticate the user for subsequent requests to the server. it is important to note that storing sensitive information such as authentication tokens in local storage can be a security risk because it is accessible through JavaScript and can be vulnerable to cross-site scripting (XSS) attacks. 

            // get local storage => 
            localStorage.getItem('token') // this will return the value of the item with the key 'token' from the local storage. we can use this method to get the token from the local storage when we need to authenticate the user for subsequent requests to the server. it is important to note that we should validate the token on the server side to ensure that it is valid and has not been tampered with before allowing access to protected resources in the application.

            // remove local storage => 
            // localStorage.removeItem('token') // this will remove the item with the key 'token' from the local storage. we can use this method to remove the token from the local storage when the user logs out of the application to ensure that the token is no longer available in the browser and to enhance the security of the application.

            // remove all local storage => 
            // localStorage.clear() // this will remove all items from the local storage. we can use this method to clear the local storage when the user logs out of the application to ensure that all sensitive information is removed from the browser and to enhance the security of the application.


            // iii) session storage
            // same function used for session storage as local storage just replace localStorage with sessionStorage =>
            // sessionStorage.setItem('token', response.token) 
            // sessionStorage.getItem('token')
            // sessionStorage.removeItem('token')
            // sessionStorage.clear()


            // We can see the token in the browser's developer tools under the Application tab in the Cookies section if we are using cookies to store the token. if we are using local storage or session storage, we can see the token in the Application tab under the Local Storage or Session Storage section respectively. it is important to note that storing sensitive information such as authentication tokens in local storage or session storage can be a security risk because they are accessible through JavaScript and can be vulnerable to cross-site scripting (XSS) attacks. it is recommended to use cookies with appropriate security flags (HttpOnly, Secure, SameSite) to store authentication tokens to enhance the security of the application.               // We can manipulate the value of the token in the browser's developer tools and this can be a security risk because it can allow attackers to gain unauthorized access to the application by using a manipulated token. it is important to implement proper security measures such as validating the token on the server side and using secure cookies to mitigate this risk.



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
                            type="email"
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


