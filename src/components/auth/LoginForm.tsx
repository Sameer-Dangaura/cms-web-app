import { useState, type BaseSyntheticEvent } from 'react';
import { LoginSchema, type ICredential } from './Auth.contract';

import { FormLabel } from './../ui/form/Lable';
import { TextInput } from './../ui/form/Input';

export default function LoginForm() {

    // Custom validation logic for the login form. we will handle the login logic in the login function which will be called when the form is submitted. we will also handle the input change event to update the state of the credential object when the user types in the input fields. we will also validate the credential object before sending it to the server for authentication.

    // 1. State manage: to manage the state of the credential object which contains username and password. useState is a hook that allows us to add state to functional components. it returns an array with two elements, the first element is the current state and the second element is a function that allows us to update the state.
    const [credentials, setCredentials] = useState<ICredential>({
        // we are using useState to manage the state of the credential object which contains username and password. useState is a hook that allows us to add state to functional components. it returns an array with two elements, the first element is the current state and the second element is a function that allows us to update the state. 
        // `setCredentials` is the function that allows us to update the state of the credential object. we are initializing the state of the credential object with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset.

        username: "",   // it can be email or username, but for now we are using email as username which is set to empty string.

        password: ""    // it is also set to empty string because we want to clear the password field after login or reset.
    })

    // console.log(credentials) // we are logging the credential object to the console to see the current state of the credential object. it is a common practice to log the state of the component to the console to see how the state changes when we interact with the component. in this case, we will see the updated state of the credential object when we type in the input fields.


    // 2. Handle input change: to handle the change event of the input fields and update the state of the credential object accordingly. we will create a function called handleInputChange which will be called when the value of the input fields changes. this function will take the event object as an argument and we will use it to update the state of the credential object.
    const handleInputChange = (e: BaseSyntheticEvent) => {
        // console.log(e.target.value) // we are logging the value of the input field to the console when the value of the input changes. it is a common practice to handle the change event of the input element in the parent component and pass the handleChange function as a prop to the child component. this way we can manage the state of the input element in the parent component and update it when the value of the input changes. in this case, we are logging the value of the input field to the console when the value of the input changes.

        const { name, value } = e.target // we are destructuring the name and value properties from the event target object. the event target object is the input element that triggered the change event. it has properties such as name and value which we can use to update the state of the credential object. in this case, we are using the name property to determine which property of the credential object to update and the value property to update the value of that property in the credential object.

        setCredentials((prev) => ({ ...prev, [name]: value })) // we are updating the state of the credential object when the value of the input changes. we are using the spread operator to copy the previous state of the credential object and then we are updating the username property with the new value of the input field. this way we can manage the state of the credential object in the parent component and update it when the value of the input changes. 
    }


    // 3. Handle form submission: to handle the form submission and perform the login logic. we will create a function called login which will be called when the form is submitted. this function will take the event object as an argument and we will use it to prevent the default behavior of the form submission which is to refresh the page. then we will log the credential object to the console to see the current state of the credential object when the form is submitted. then we will validate the credential object using the LoginSchema before sending it to the server for authentication.
    // We will handle the login logic in the login function which will be called when the form is submitted:
    const login = async (e: BaseSyntheticEvent) => {
        // we will handle the login logic here. Here `e` => is the event object that is passed to the login function when the form is submitted. it is of type BaseSyntheticEvent which is a type that represents the synthetic event object that is passed to event handlers in React. it is a wrapper around the native event object and has the same properties and methods as the native event object. it is used to define the type of the event object that is passed to the login function.

        try {
            e.preventDefault() // we are preventing the default behavior of the form submission which is to refresh the page. 

            console.log(credentials) // we are logging the credential object to the console to see the current state of the credential object when the form is submitted. it is a common practice to log the state of the component to the console to see how the state changes when we interact with the component. in this case, we will see the updated state of the credential object when we click the login button.


            // 4. Validation: to validate the credential object before sending it to the server for authentication. we will use the LoginSchema to validate the credential object. LoginSchema is a schema that we have defined using zod to validate the credential object. it is used to define the shape of the data and validate it against the defined schema. in this case, we are defining a schema for the credential object which has two properties, username and password, both of which are of type string and are required. we can use this schema to validate the credential object before sending it to the server for authentication. if the validation fails, it will throw an error which we can catch and show an error message to the user. if the validation passes, it will return the validated credential object which we can then send to the server for authentication. parseAsync is a method that we are using to validate the credential object asynchronously. it returns a promise that resolves to the validated credential object if the validation is successful or rejects with an error if the validation fails. we are using parseAsync instead of parse because parse is a synchronous method that will block the execution of the code until the validation is complete, while parseAsync allows us to handle the validation asynchronously without blocking the execution of the code.
            //-> Validate => is the credential object to check if the username and password are not empty. we can also add more validation rules such as checking the format of the email or the strength of the password. if the validation fails, we can show an error message to the user and ask them to correct the input. if the validation passes, we can proceed with the login logic.
            await LoginSchema.parseAsync(credentials) // we are using the LoginSchema to validate the credential object before sending it to the server for authentication. LoginSchema is a schema that we have defined using zod to validate the credential object. it is used to define the shape of the data and validate it against the defined schema. in this case, we are defining a schema for the credential object which has two properties, username and password, both of which are of type string and are required. we can use this schema to validate the credential object before sending it to the server for authentication. if the validation fails, it will throw an error which we can catch and show an error message to the user. if the validation passes, it will return the validated credential object which we can then send to the server for authentication. // parseAsync is a method that we are using to validate the credential object asynchronously. it returns a promise that resolves to the validated credential object if the validation is successful or rejects with an error if the validation fails. we are using parseAsync instead of parse because parse is a synchronous method that will block the execution of the code until the validation is complete, while parseAsync allows us to handle the validation asynchronously without blocking the execution of the code.

            // if validation pass then,
            //-> mapping/modeling (optional) => is done when we want to map the credential object to a different object that is required by the server. for example, if the server expects an object with properties email and password instead of username and password, then we can map the credential object to a new object that has the required properties before sending it to the server.
            // then,
            //-> submit the credential object to the server to authenticate the user. we can use fetch or axios to send a POST request to the server with the credential object in the request body. we can also handle the response from the server to see if the authentication was successful or not and then we can update the UI accordingly.

            // Now we can handle the login logic here. we can send the credential object to the server to authenticate the user.

            //-> after that, we have to handle the response from the server:
            // i) if successful => we can redirect the user to the dashboard or home page and we can also store the token in local storage or cookies for future authentication.
            // ii) if failed => we can show an error message to the user and ask them to try again or reset the password if they have forgotten it.

        } catch (error) {
            console.log(error) // we are logging the error to the console to see what went wrong during the login process. it is a common practice to log the error to the console to see what went wrong and how to fix it. in this case, if the validation fails, it will throw an error which we can catch and log to the console to see what went wrong during the validation process.
        }

        // onSubmit = {login} is a prop that we are passing to the form element which will be called when the form is submitted. it is a common practice to handle the form submission in a function that is called when the form is submitted. in this case, we will call the login function when the form is submitted and we will log the credential object to the console to see the current state of the credential object when the form is submitted. in this case, we will see the updated state of the credential object when we click the login button.                                This is called event binding in React, where we bind an event handler function to an event on a DOM element. In this case, we are binding the login function to the onSubmit event of the form element. When the form is submitted, the login function will be called and we will log the credential object to the console to see the current state of the credential object when the form is submitted.
    }


    return (
        <>
            <form onSubmit={login} action="" className="flex flex-col gap-5">
                <div className="flex gap-2 w-full">
                    <FormLabel htmlFor="email">Email:</FormLabel>
                    <div className="w-2/3 flex flex-col gap-1">
                        <TextInput
                            handleChange={handleInputChange}
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
                            handleChange={handleInputChange}
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
                    <button type="reset" className="w-full bg-red-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-red-600 hover:scale-98">Reset</button>
                    <button type="submit" className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98">Login</button>
                </div>
            </form>
        </>
    )
}


