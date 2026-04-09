import { LuLayoutDashboard, LuLogOut, LuMail, LuSettings, LuShoppingBag, LuUsers } from "react-icons/lu";
import { NavLink } from "react-router";
import type { IUserDetail } from "../../auth/Auth.contract";


export default function AdminSidebar({ loggedInUser }: Readonly<{ loggedInUser?: IUserDetail }>) {
    return (
        <>
            <div className="w-60 bg-gray-100 h-screen flex flex-col py-5">
                <aside>
                    <ul>
                        <li>
                            <div className="border-b-black-300/10 border-b pb-0.5">
                                {
                                    // In a real application, you would get the logged in user information from your authentication context or state management. For this example, we will hardcode a logged in user object. And we will check the role of the logged in user. If the role is admin then we will show the dashboard link in the sidebar. Otherwise, we will not show the dashboard link. 
                                    // (loggedInUser) && (loggedInUser.role === 'admin') means that if the logged in user exists and the role of the logged in user is admin then we will render the dashboard link. Otherwise, we will render an empty fragment. This is a common way to conditionally render components in React based on the user's role or permissions.
                                    (loggedInUser) && (loggedInUser.role === 'admin') ? <NavLink to="/admin" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                        <LuLayoutDashboard />
                                        <span>Dashboard</span>
                                    </NavLink> : <></>
                                }

                                {/* // Instead of <a> tag we can use <NavLink> component from react-router. The NavLink component is used to create navigation links in a React application that uses react-router for routing. <a> tag relods the entire page when clicked, while <NavLink> allows for client-side navigation without reloading the page. This means that when you click on a NavLink, it will update the URL and render the corresponding component without refreshing the whole page, providing a smoother user experience. `to` prop is used to specify the path to navigate to when the link is clicked. In this example, `to="/admin"` means that when the user clicks on this link, it will navigate to the "/admin" route. The `end` prop is used to indicate that this NavLink should only be active when the URL exactly matches the `to` path. This is useful for cases where you have nested routes and you want to ensure that the NavLink is only active for the specific route and not for any of its sub-routes. For example, if you have a NavLink with `to="/admin"` and you navigate to "/admin/users", the NavLink will not be active because of the `end` prop, which ensures that it only matches "/admin" and not any sub-routes like "/admin/users".
                                // It is similar to the <Link> component but it provides additional styling attributes to indicate the active state of the link. When the current URL matches the path specified in the NavLink, it will apply an "active" class to the link, allowing you to style it differently (e.g., highlight it) to indicate that it is the currently active page. In this example, we are using NavLink for the dashboard link so that it will be highlighted when the user is on the dashboard page.  */}
                                <NavLink to="/products" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                    <LuShoppingBag />
                                    <span>Products</span>
                                </NavLink>

                                <NavLink to="/orders" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                    <LuMail />
                                    <span>Orders</span>
                                </NavLink>

                                <NavLink to="/admin/users" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                    <LuUsers />
                                    <span>Users</span>
                                </NavLink>
                            </div>
                            <div className="pt-0.5">
                                <NavLink to="/settings" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                    <LuSettings />
                                    <span>Settings</span>
                                </NavLink>

                                <NavLink to="/signout" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                    <LuLogOut />
                                    <span>Sign Out</span>
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
}