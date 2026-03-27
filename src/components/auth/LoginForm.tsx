import { LoginSchema, type ICredential } from './Auth.contract';

import { FormLabel } from './../ui/form/Lable';
import { TextInput } from './../ui/form/Input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';  // we are using the zodResolver to validate the credential object using the LoginSchema. the zodResolver is a function that takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape of the credential object and the validation rules for each property. we are using this resolver to validate the form data before sending it to the server for authentication. if the validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.

export default function LoginForm() {

    // Instead of using custom validation for form handling and validation, we can also use react-hook-form which is a library that provides a simple and efficient way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as register, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the defaultValues property to initialize the form state with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset.
    // There are two ways to use react-hook-form for form handling and validation:

    // 1. Uncontrolled Input component/Using the register method: to register the input fields and handle the form submission using the handleSubmit method. Those input fields will be uncontrolled components which means that their state is managed by the DOM and not by React. we can use the `register` method to register the input fields and handle the form submission using the handleSubmit method. this is a simple and efficient way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as register, handleSubmit, errors, etc. which we can use to manage the form state and validation.

    // 2. Controlled Input component: Using the Controller component to wrap the input fields and handle the form submission using the handleSubmit method. those input fields will be controlled components which means that their state is managed by React and not by the DOM. we can use the `Controller` component to wrap the input fields and handle the form submission using the handleSubmit method. this is a more flexible way to handle form state and validation in React. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation.

    // control is a property that is returned by the useForm hook and it is used to control the input fields in the form. it is used to wrap the input fields and handle the form submission using the handleSubmit method. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation.
    // handleSubmit is a method that is returned by the useForm hook and it is used to handle the form submission. it takes a function as an argument which will be called when the form is submitted. this function will receive the form data as an argument and we can use it to perform the login logic. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to managethe form state and validation.
    // formState is a property that is returned by the useForm hook and it is used to manage the form state. it has a property called errors which is an object that contains the validation errors for each input field in the form. we can use this property to display error messages to the user when the validation fails. it allows us to define the form schema and validation rules using a simple API and it also provides a way to handle form submission and reset. we can use the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation.
    const { control, handleSubmit, formState: { errors } } = useForm<ICredential>({
        // we are using the useForm hook to manage the form state and validation. it returns an object with properties such as control, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the defaultValues property to initialize the form state with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset. we are also using the resolver property to validate the form data against the defined schema using the zodResolver function which takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape of the credential object and the validation rules for each property. we are using this resolver to validate the form data before sending it to the server for authentication. if the validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.
        defaultValues: {
            username: "",
            password: ""
        },
        resolver: zodResolver(LoginSchema) // we are using the zodResolver to validate the credential object using the LoginSchema. the zodResolver is a function that takes a zod schema as an argument and returns a resolver function that can be used to validate the form data against the defined schema. in this case, we are using the LoginSchema which is a zod schema that defines the shape ofthe credential object andthe validation rules for each property. we are using this resolver to validatethe form data before sending it tothe server for authentication. ifthe validation fails, it will return an error which we can use to display error messages to the user or to prevent the form submission.
    })


    // 3. Handle form submission: to handle the form submission and perform the login logic. we will create a function called login which will be called when the form is submitted. this function will take the event object as an argument and we will use it to prevent the default behavior of the form submission which is to refresh the page. then we will log the credential object to the console to see the current state of the credential object when the form is submitted. then we will validate the credential object using the LoginSchema before sending it to the server for authentication.
    // We will handle the login logic in the login function which will be called when the form is submitted:
    const login = async (credentials: ICredential) => {
        try {
            console.log(credentials) // we are logging the credential object to the console to see the current state of the credential object when the form is submitted. in this case, we will see the updated state of the credential object when we click the login button. this is because we are using the useForm hook to manage the form state and validation. it returns an object with properties such as register, handleSubmit, errors, etc. which we can use to manage the form state and validation. in this case, we are using the defaultValues property to initialize the form state with an object that has two properties, username and password, both of which are set to empty strings. this is because we want to clear the input fields after login or reset. 

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
                    <button type="reset" className="w-full bg-red-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-red-600 hover:scale-98">Reset</button>
                    <button type="submit" className="w-full bg-green-700 cursor-pointer text-white flex item-center justify-center p-2 rounded-md hover:bg-green-600 hover:scale-98">Login</button>
                </div>
            </form>
        </>
    )
}


