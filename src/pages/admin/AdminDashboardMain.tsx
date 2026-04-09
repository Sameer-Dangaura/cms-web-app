
import { Outlet } from 'react-router';
import AdminSidebar from '../../components/ui/sidebar/AdminSidebar';
import { useAuth } from '../../lib/hooks/useAuth';
export default function AdminDashboardMain() {

    // auth context
    const { authUser } = useAuth();  // we are using the useAuth hook to access the authentication context and get the authenticated user information. this allows us to display the appropriate content in the AdminDashboardMain component based on the user's role or other user information that we get back from the server after a successful login. for example, we can show different dashboard widgets or navigation options based on the user's role or other user information that we get back from the server. this is a common practice to improve the user experience by showing personalized content in the dashboard based on the user's role or other user information that we get back from the server.

    const loggedInUser = authUser;  // we are assigning the authUser value from the authentication context to a new variable called loggedInUser. this is just a simple assignment, and we can use the loggedInUser variable to display the authenticated user information in our component or to perform any other operations that require access to the authenticated user information. this is a common practice to improve code readability and maintainability by using descriptive variable names that clearly indicate their purpose and meaning in the context of our application.

    return (
        <>
            <div className="flex ">

                <AdminSidebar loggedInUser={loggedInUser} />
                <main className="w-full bg-gray-50">
                    <section>

                        <Outlet />   {/* This is where the nested routes will be rendered. For example, when you navigate to /admin it will render the Dashboard component. And when you navigate to /admin/users the UserList component will be rendered here. And when you navigate to /admin/products the ProductList component will be rendered here. This allows you to have a consistent layout (with the AdminSidebar) while changing the main content based on the route. */}

                    </section>
                </main>
            </div>
        </>
    )
}