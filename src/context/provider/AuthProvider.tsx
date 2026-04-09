import { useState, type ReactNode } from "react";
import AuthContext from "../AuthContext";
import type { ICredential, IUserDetail } from "../../components/auth/Auth.contract";
import Cookies from "js-cookie";
import axiosInstance from "../../config/ApiClient";

export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {

    const [authUser, setAuthUser] = useState<IUserDetail>();

    const getLoggedInUser = async () => {
        try {
            const loggedInUserInfo = await axiosInstance.get("auth/me") as IUserDetail
            setAuthUser(loggedInUserInfo);  // set the authenticated user information in the state so that it can be accessed by any component that consumes the authentication context. `loggedInUserInfo` is the response from the server that contains the details of the authenticated user, such as name, email, role, etc. by setting this information in the state using `setAuthUser`, we can ensure that all components that need to access the authenticated user information have access to the same data, which helps to keep our code consistent and maintainable. // we can also use this information to display personalized content in our application based on the user's role or other user information that we get back from the server after a successful login.
            // console.log(loggedInUserInfo);
            return loggedInUserInfo;
        } catch (error) {
            console.log(error);
            throw error;  // we are throwing the error to allow the calling code to handle the error appropriately. by throwing the error, we can ensure that any errors that occur during the process of getting the logged in user information are properly propagated and can be handled in a consistent way across our application. this allows us to provide a better user experience by showing appropriate error messages or taking other actions based on the specific error that occurred during the process of getting the logged in user information.
        }
    }


    const login = async (credentials: ICredential): Promise<void | IUserDetail> => {

        console.log("Login function called with credentials:", credentials);
        try {
            // console.log(credentials)

            const response = await axiosInstance.post("auth/login", {
                ...credentials,
                expiresInMins: 24 * 60,
            }) as { accessToken: string }

            Cookies.set("auth_key", response.accessToken, {
                expires: 1,
                secure: true,
                sameSite: "lax",
                // note: we can also use other options such as path, domain, etc. to further customize the behavior of the cookie based on our application's requirements and security needs. it is important to carefully consider the options we use when setting cookies to ensure that we are providing a secure and user-friendly experience for our users while also protecting their sensitive information from potential security threats.
            });
            console.log(response)

            return await getLoggedInUser();

        } catch (error: any) {

            console.log(error)

            throw error;  // we are throwing the error to allow the calling code to handle the error appropriately. by throwing the error, we can ensure that any errors that occur during the login process are properly propagated and can be handled in a consistent way across our application. this allows us to provide a better user experience by showing appropriate error messages or taking other actions based on the specific error that occurred during the login process.

            // return Promise.reject(error);   // we are returning a rejected promise with the error object to allow the calling code to handle the error appropriately. by returning a rejected promise, we can ensure that any errors that occur during the login process are properly propagated and can be handled in a consistent way across our application. this allows us to provide a better user experience by showing appropriate error messages or taking other actions based on the specific error that occurred during the login process.
        }


    }
    return (
        <AuthContext.Provider value={{
            login: login,   // we are providing the login method in the context value so that it can be accessed by any component that consumes the authentication context. this allows us to manage user authentication state across our application in a clean and organized way, and makes it easier to maintain and scale our application as it grows. by providing the login method in the context value, we can ensure that all components that need to perform login operations have access to the same implementation of the login logic, which helps to keep our code consistent and maintainable. // `login: login` 1st `login` is the property name in the context value, and the 2nd `login` is the variable that holds the login function defined in our AuthProvider component. by using this syntax, we are creating a property named `login` in the context value and assigning it the value of the `login` function defined in our AuthProvider component. this allows us to access the login functionality from any component that consumes the authentication context, making it easier to manage user authentication state across our application in a clean and organized way. // we can also use the shorthand syntax `login` instead of `login: login` since the property name and variable name are the same, which makes our code cleaner and more concise. this is a common practice in JavaScript to improve code readability and maintainability.

            authUser: authUser, // we are providing the authUser state in the context value so that it can be accessed by any component that consumes the authentication context. this allows us to manage user authentication state across our application in a clean and organized way, and makes it easier to maintain and scale our application as it grows. by providing the authUser state in the context value, we can ensure that all components that need to access the authenticated user information have access to the same data, which helps to keep our code consistent and maintainable.
        }}>
            {children}
        </AuthContext.Provider>
    )
}