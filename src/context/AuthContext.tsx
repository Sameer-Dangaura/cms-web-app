import { createContext } from "react";
import type { ICredential, IUserDetail } from "../components/auth/Auth.contract";


export interface IAuthContext {
    login(credential: ICredential): Promise<void | IUserDetail>   // type define for login method, it takes credential as parameter and returns a promise that resolves to void or IUserDetail. Promise is used here because login is an asynchronous operation, it may involve making an API call to authenticate the user, and we want to handle the result of that operation once it's completed.
    authUser?: IUserDetail;  // type define for authUser, it is an optional property that can hold the details of the authenticated user. we are using the IUserDetail interface to define the shape of the authUser object, which includes properties such as name, email, role, etc. this allows us to have a consistent structure for the authenticated user information across our application and makes it easier to manage and access this information in our components.
}


// createContext is used to create a context object that can be used to share data across components without having to pass props down manually at every level of the component tree. It provides a way to manage global state in a React application. // createContext takes an optional default value as an argument and returns a context object with a Provider and a Consumer component. The Provider component is used to wrap the part of the component tree that needs access to the context, while the Consumer component is used to consume the context value in any child component. // The context object can also be used with the useContext hook to access the context value in functional components. Overall, createContext is a powerful tool for managing state and sharing data across components in a React application.
const AuthContext = createContext<IAuthContext>({
    // default values: can be data, methods

    async login() { }   // Since, it's type defined as a method that returns a promise, so we need to define it as an asynchronous function that returns a promise. In this case, we are defining an empty implementation of the login method, which means that it doesn't do anything when called. This is just a placeholder implementation, and the actual implementation will be provided by the AuthProvider component that will wrap the part of the component tree that needs access to the authentication context. // This function is not a function definition, it's just a (fallback) placeholder implementation that satisfies the type definition of the IAuthContext interface. The actual implementation of the login method will be provided by the AuthProvider component, which will use this context to share the login functionality across the components that need it.

})

export default AuthContext;