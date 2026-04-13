import { useEffect, useState, type ReactNode } from "react";
import AuthContext from "../AuthContext";
import type { ICredential, IUserDetail } from "../../components/auth/Auth.contract";
import Cookies from "js-cookie";
import axiosInstance from "../../config/ApiClient";
import Loading from "../../components/ui/loading/Loading";


export default function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {

    const [authUser, setAuthUser] = useState<IUserDetail | null>(null);  // we are using the useState hook to create a state variable named authUser and a function named setAuthUser to update the value of authUser. the initial value of authUser is set to null, which indicates that there is no authenticated user by default. this allows us to manage the authentication state of our application and update it when a user successfully logs in or logs out. by using the useState hook, we can ensure that any changes to the authUser state will trigger a re-render of our components that consume the authentication context, allowing us to display the appropriate UI based on the authentication status of the user.

    const [authLoading, setAuthLoading] = useState<boolean>(true);  // we are using the useState hook to create a state variable named authLoading and a function named setAuthLoading to update the value of authLoading. the initial value of authLoading is set to true, which indicates that the authentication state is currently being loaded or checked. this allows us to manage the loading state of our authentication process and display appropriate UI (such as a loading spinner) while we are checking the authentication status of the user. by using the useState hook, we can ensure that any changes to the authLoading state will trigger a re-render of our components that consume the authentication context, allowing us to provide a better user experience by showing appropriate loading indicators based on the authentication status of the user.

    const getLoggedInUser = async () => {
        try {
            const loggedInUserInfo = await axiosInstance.get("auth/me") as IUserDetail
            setAuthUser(loggedInUserInfo); // `setAuthUser` is a function that we get from the useState hook, and we are using it to update the value of the authUser state with the information of the logged in user that we get back from the server after a successful login. by calling setAuthUser with the loggedInUserInfo, we are updating the authUser state with the details of the authenticated user, which allows us to manage the authentication state of our application and display personalized content based on the user's information.  
            // set the authenticated user information in the state so that it can be accessed by any component that consumes the authentication context. `loggedInUserInfo` is the response from the server that contains the details of the authenticated user, such as name, email, role, etc. by setting this information in the state using `setAuthUser`, we can ensure that all components that need to access the authenticated user information have access to the same data, which helps to keep our code consistent and maintainable. // we can also use this information to display personalized content in our application based on the user's role or other user information that we get back from the server after a successful login.
            // console.log(loggedInUserInfo);
            return loggedInUserInfo;
        } catch (error) {
            console.log(error);
            throw error;  // we are throwing the error to allow the calling code to handle the error appropriately. by throwing the error, we can ensure that any errors that occur during the process of getting the logged in user information are properly propagated and can be handled in a consistent way across our application. this allows us to provide a better user experience by showing appropriate error messages or taking other actions based on the specific error that occurred during the process of getting the logged in user information.
        } finally {
            setAuthLoading(false);  // we are setting the authLoading state to false in the finally block to ensure that it is updated regardless of whether the operation to get the logged in user information was successful or if it resulted in an error. this allows us to manage the loading state of our authentication process and display appropriate UI (such as hiding a loading spinner) once we have determined the authentication status of the user, providing a better user experience. by placing this code in the finally block, we can ensure that the loading state is properly updated even if an error occurs during the process of getting the logged in user information.
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

    // we are using the useEffect hook to perform a side effect when the AuthProvider component is mounted. in this case, we are checking if there is an authentication token (auth_key) stored in the cookies when the component mounts. if there is a token, we call the getLoggedInUser function to retrieve the details of the currently logged in user and update the authUser state accordingly. if there is no token, we set the authLoading state to false to indicate that we have finished checking for authentication status. by using the useEffect hook, we can ensure that this authentication check is performed only once when the component mounts, and it allows us to manage the authentication state of our application in a clean and organized way. form `onSubmit`  
    useEffect(() => {
        return () => {
            const token = Cookies.get("auth_key");
            if (token) {
                getLoggedInUser()
            } else {
                setAuthLoading(false);
            }
        }
    }, [])


    return authLoading ?    // we are checking the value of authLoading state to determine whether to show a loading indicator or to render the children components wrapped by the AuthContext.Provider. if authLoading is true, it means that the authentication state is currently being loaded or checked, and we want to show a loading indicator (in this case, a simple message "Loading..") to inform the user that the authentication process is in progress. once authLoading becomes false, it means that the authentication state has been determined (either a user is authenticated or not), and we can render the children components wrapped by the AuthContext.Provider, allowing them to access the authentication context and display appropriate UI based on the authentication status of the user. this approach helps to provide a better user experience by showing appropriate loading indicators while we are determining the authentication status of the user.
        (
            <section className="w-full h-screen flex items-center justify-center">
                <Loading />
            </section>
        ) : (
            <AuthContext.Provider value={{
                login: login,   // we are providing the login method in the context value so that it can be accessed by any component that consumes the authentication context. this allows us to manage user authentication state across our application in a clean and organized way, and makes it easier to maintain and scale our application as it grows. by providing the login method in the context value, we can ensure that all components that need to perform login operations have access to the same implementation of the login logic, which helps to keep our code consistent and maintainable. // `login: login` 1st `login` is the property name in the context value, and the 2nd `login` is the variable that holds the login function defined in our AuthProvider component. by using this syntax, we are creating a property named `login` in the context value and assigning it the value of the `login` function defined in our AuthProvider component. this allows us to access the login functionality from any component that consumes the authentication context, making it easier to manage user authentication state across our application in a clean and organized way. // we can also use the shorthand syntax `login` instead of `login: login` since the property name and variable name are the same, which makes our code cleaner and more concise. this is a common practice in JavaScript to improve code readability and maintainability.

                authUser: authUser, // we are providing the authUser state in the context value so that it can be accessed by any component that consumes the authentication context. this allows us to manage user authentication state across our application in a clean and organized way, and makes it easier to maintain and scale our application as it grows. by providing the authUser state in the context value, we can ensure that all components that need to access the authenticated user information have access to the same data, which helps to keep our code consistent and maintainable.

                getLoggedInUser: getLoggedInUser,  // we are providing the getLoggedInUser method in the context value so that it can be accessed by any component that consumes the authentication context. this allows us to manage user authentication state across our application in a clean and organized way, and makes it easier to maintain and scale our application as it grows. by providing the getLoggedInUser method in the context value, we can ensure that all components that need to access the authenticated user information have access to the same implementation of the logic for getting the logged in user information, which helps to keep our code consistent and maintainable. // `getLoggedInUser: getLoggedInUser` 1st `getLoggedInUser` is the property name in the context value, and the 2nd `getLoggedInUser` is the variable that holds the getLoggedInUser function defined in our AuthProvider component. by using this syntax, we are creating a property named `getLoggedInUser` in the context value and assigning it the value of the `getLoggedInUser` function defined in our AuthProvider component. this allows us to access the functionality for getting the logged in user information from any component that consumes the authentication context, making it easier to manage user authentication state across our application in a clean and organized way. // we can also use the shorthand syntax `getLoggedInUser` instead of `getLoggedInUser: getLoggedInUser` since the property name and variable name are the same, which makes our code cleaner and more concise. this is a common practice in JavaScript to improve code readability and maintainability.

                authLoading: authLoading,  // we are providing the authLoading state in the context value so that it can be accessed by any component that consumes the authentication context. this allows us to manage the loading state of our authentication process across our application in a clean and organized way, and makes it easier to maintain and scale our application as it grows. by providing the authLoading state in the context value, we can ensure that all components that need to access the loading state of the authentication process have access to the same data, which helps to keep our code consistent and maintainable. // `authLoading: authLoading` 1st `authLoading` is the property name in the context value, and the 2nd `authLoading` is the variable that holds the authLoading state defined in our AuthProvider component. by using this syntax, we are creating a property named `authLoading` in the context value and assigning it the value of the `authLoading` state defined in our AuthProvider component. this allows us to access the loading state of the authentication process from any component that consumes the authentication context, making it easier to manage user authentication state across our application in a clean and organized way. // we can also use the shorthand syntax `authLoading` instead of `authLoading: authLoading` since the property name and variable name are the same, which makes our code cleaner and more concise. this is a common practice in JavaScript to improve code readability and maintainability.
            }}>
                {children}
            </AuthContext.Provider>
        )
}