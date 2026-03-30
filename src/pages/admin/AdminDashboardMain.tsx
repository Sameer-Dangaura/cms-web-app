
import { Outlet } from 'react-router';
import AdminSidebar from '../../components/ui/sidebar/AdminSidebar';
export default function AdminDashboardMain() {

    // In a real application, you would get the logged in user information from your authentication context or state management. For this example, we will hardcode a logged in user object. 
    const loggedInUser = {
        name: "John Doe",
        role: "admin" // This can be "admin" or "user"
    }

    return (
        <>
            <div className="flex ">

                {/* we cannot use if...else block in jsx code. Instead of that we have to use conditional operator: */}

                {
                    (loggedInUser.role === 'admin') ? <AdminSidebar /> : <></>  // This means that if the logged in user is an admin then we will render the AdminSidebar component. Otherwise, we will render an empty fragment.
                }
                <main className="w-full bg-gray-50">
                    <section>

                        <Outlet />   {/* This is where the nested routes will be rendered. For example, when you navigate to /admin it will render the Dashboard component. And when you navigate to /admin/users the UserList component will be rendered here. And when you navigate to /admin/products the ProductList component will be rendered here. This allows you to have a consistent layout (with the AdminSidebar) while changing the main content based on the route. */}

                    </section>
                </main>
            </div>
        </>
    )
}