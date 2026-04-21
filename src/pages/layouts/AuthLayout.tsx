import { Outlet } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../lib/hooks/useAuth";
import { useNavigate } from "react-router";
import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidePanel from "../../components/auth/RightSidePanel";

export default function AuthLayout() {
    const { authUser } = useAuth();
    const navigate = useNavigate();

    const [pageContent, setPageContent] = useState({
        pageTitle: "Welcome To CMS!!!",
        content: "Welcome to CMS, your central workspace for managing content securely and efficiently. Sign in to access your personalized dashboard, collaborate with your team, and keep projects organized in one place. Stay updated with real-time changes and move your work forward with confidence. We're glad to have you here.",
        formTitle: "Sign In"
    }); // this state is used to store the content that will be displayed on the left side of the AuthLayout. It includes the page title, content, and form title. This state can be updated by the child routes (like HomePage, ForgetPassword, ResetPassword) using the setPageContent function provided through the context. This allows us to dynamically change the content of the AuthLayout based on the current route.

    useEffect(() => {

        if (authUser && authUser.role) {
            // i.e. logged in user
            navigate('/' + authUser.role)   // navigate to the dashboard of the user based on their role (e.g., /admin for admin users, /user for regular users, etc.)
        }

    }, [authUser])  // this useEffect will run whenever the authUser state changes. If there is a logged-in user (i.e., authUser is not null) and they have a role defined, it will navigate to the corresponding dashboard based on their role. For example, if the user's role is "admin", it will navigate to "/admin". If the user's role is "user", it will navigate to "/user". This ensures that when a user logs in, they are automatically redirected to the appropriate dashboard based on their role.

    return (
        <section className=" bg-gray-50 flex gap-5 h-screen p-5">

            <LeftSidePanel pageTitle={pageContent.pageTitle} content={pageContent.content} />

            <RightSidePanel formTitle={pageContent.formTitle}>

                <Outlet context={{
                    setPageContent: setPageContent  // this is the function that will be passed down to the child routes (like HomePage, ForgetPassword, ResetPassword) through the context. It allows those child routes to update the page content (like page title, content, form title) of the AuthLayout based on the current route. For example, when we navigate to the forget password page, that page can use this setPageContent function to update the content of the AuthLayout to show information relevant to forgetting a password. Similarly, when we navigate to the reset password page, it can update the content to show information relevant to resetting a password. This way, we can have dynamic content in the AuthLayout that changes based on the route we are on.       
                    // 1st `setPageContent` is the function that updates the state of `pageContent` in the AuthLayout. 2nd `setPageContent` is the name of the property in the context object that we are passing down to the child routes. The value of this property is the `setPageContent` function from the AuthLayout. This allows the child routes to access this function through the context and use it to update the page content in the AuthLayout when they are rendered.
                }} />

            </RightSidePanel>
        </section>
    )
}

// `h-screen` => equivalent to `height: 100vh` in CSS. It makes the section take up the full height of the viewport.

/*
- <Outlet /> is a component provided by react-router that serves as a placeholder for rendering the matched child route components. It allows you to define nested routes and render the appropriate component based on the current URL. When a route is matched, the corresponding component will be rendered inside the <Outlet /> component. This is useful for creating layouts where you want to have a common structure (like a header or sidebar) and render different content based on the route.
*/