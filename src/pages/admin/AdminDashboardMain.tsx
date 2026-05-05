
import { Outlet } from 'react-router';
import AdminSidebar from '../../components/ui/sidebar/AdminSidebar';
import { useAuth } from '../../lib/hooks/useAuth';
import type { IUserDetail } from '../../components/auth/Auth.contract';
export default function AdminDashboardMain() {

    // auth context
    const { authUser } = useAuth();  // we are using the useAuth hook to access the authentication context and get the authenticated user information. this allows us to display the appropriate content in the AdminDashboardMain component based on the user's role or other user information that we get back from the server after a successful login. for example, we can show different dashboard widgets or navigation options based on the user's role or other user information that we get back from the server. this is a common practice to improve the user experience by showing personalized content in the dashboard based on the user's role or other user information that we get back from the server.

    const loggedInUser = authUser;  // we are assigning the authUser value from the authentication context to a new variable called loggedInUser. this is just a simple assignment, and we can use the loggedInUser variable to display the authenticated user information in our component or to perform any other operations that require access to the authenticated user information. this is a common practice to improve code readability and maintainability by using descriptive variable names that clearly indicate their purpose and meaning in the context of our application.

    return (
        <>
            <div className="flex flex-1">

                <AdminSidebar loggedInUser={loggedInUser as IUserDetail} /> {/* // ``loggedInUser as IUserDetail`` is a TypeScript type assertion that tells the TypeScript compiler to treat the loggedInUser variable as an object of type IUserDetail. This is necessary because the authUser value from the authentication context may be of a more general type (e.g., it could be null or undefined if the user is not authenticated), and we want to ensure that we are passing an object of the correct type (IUserDetail) to the AdminSidebar component. By using this type assertion, we can avoid potential type errors and ensure that the AdminSidebar component receives the expected props for rendering the sidebar with the authenticated user's information. */}
                <main className="w-full bg-gray-50">
                    <section>

                        <Outlet />   {/* This is where the nested routes will be rendered. For example, when you navigate to /admin it will render the Dashboard component. And when you navigate to /admin/users the UserList component will be rendered here. And when you navigate to /admin/products the ProductList component will be rendered here. This allows you to have a consistent layout (with the AdminSidebar) while changing the main content based on the route. */}

                    </section>
                </main>
            </div>
        </>
    )
}

/*
`flex-1` makes it fill remaining space after header.
`flex-1` is a Tailwind CSS utility class that applies the `flex: 1` CSS property to an element. This means that the element will grow to fill the available space in its parent container. In the context of the AdminDashboardMain component, applying `flex-1` to the main container div allows it to expand and take up all the remaining space next to the AdminSidebar. This ensures that the main content area (where the nested routes will be rendered) will always fill the available space, providing a responsive and flexible layout for the admin dashboard. By using `flex-1`, we can create a layout where the sidebar has a fixed width while the main content area adjusts dynamically based on the screen size and available space.
*/