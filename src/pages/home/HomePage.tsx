import { useEffect, type SetStateAction } from "react";
import { useOutletContext } from "react-router";
import LoginForm from "../../components/auth/LoginForm";
import type { Dispatch, ReactNode } from "react";


export default function HomePage() {

    const { setPageContent } = useOutletContext<{ setPageContent: Dispatch<SetStateAction<{ pageTitle: string; content: string; formTitle: ReactNode }>> }>(); // this hook is used to access the context provided by the parent route (i.e., AuthLayout in this case). It allows us to get the setPageContent function from the AuthLayout, which we can use to update the page content (like page title, content, form title) based on the current route. This way, we can dynamically change the content of the AuthLayout based on whether we are on the login page, forget password page, or reset password page. 
    // Defining the type of the context object is important here to ensure that we have proper type checking and autocompletion when we use the setPageContent function in this component. By specifying the type of the context object, we can ensure that we are using the setPageContent function correctly and passing the right type of data to it when we want to update the page content in the AuthLayout. 
    // Dispatch and SetStateAction are types from React that are used to define the type of the setPageContent function. Dispatch is a type that represents a function that can be used to dispatch an action to update the state, and SetStateAction is a type that represents the type of the action that can be dispatched to update the state. In this case, we are using these types to define the type of the setPageContent function, which is a function that takes an action (which is of type SetStateAction) to update the state of pageContent in the AuthLayout. This ensures that we have proper type checking when we use the setPageContent function in this component.
    useEffect(() => {
        // console.log(setPageContent); // this will log the context object provided by the AuthLayout, which should contain the setPageContext function. This is useful for debugging to ensure that we are receiving the correct context from the parent route.

        setPageContent({
            pageTitle: "Welcome To CMS!!!",
            content: "Welcome to CMS, your central workspace for managing content securely and efficiently. Sign in to access your personalized dashboard, collaborate with your team, and keep projects organized in one place. Stay updated with real-time changes and move your work forward with confidence. We're glad to have you here.",
            formTitle: "Sign In"
        })
    }, [])  // this useEffect will run only once when the component is mounted (i.e., when the user navigates to the home page). It sets the initial page content for the AuthLayout, which includes a welcome message and a prompt to sign in. This ensures that when the user first visits the home page, they see the appropriate content in the AuthLayout. If we navigate to other routes like forget password or reset password, those routes can update the page content accordingly using the same setPageContent function from the context.


    return (
        // do always return something from a component, even if it is null or empty div 

        <>
            <LoginForm />
        </>
    )
}

/*
- `h-screen` => equivalent to `height: 100vh` in CSS. It makes the section take up the full height of the viewport.
*/