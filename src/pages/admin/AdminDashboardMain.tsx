
import { Outlet } from 'react-router';
import Aside from '../../components/common/aside/Aside';
export default function AdminDashboardMain() {
    return (
        <>
            <div className="flex ">
                <Aside />
                <div className="w-full bg-gray-50">
                    <section>

                        <Outlet />   {/* This is where the nested routes will be rendered. For example, when you navigate to /admin it will render the Dashboard component. And when you navigate to /admin/users the UserList component will be rendered here. And when you navigate to /admin/products the ProductList component will be rendered here. This allows you to have a consistent layout (with the Aside) while changing the main content based on the route. */}

                    </section>
                </div>
            </div>
        </>
    )
}