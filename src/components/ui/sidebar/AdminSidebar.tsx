import { LuLayoutDashboard, LuLogOut, LuMail, LuSettings, LuShoppingBag, LuUsers } from "react-icons/lu";
import { NavLink } from "react-router";
import type { IUserDetail } from "../../auth/Auth.contract";
import ShowComponent from './../../auth/AllowAccess';


export default function AdminSidebar({ loggedInUser }: Readonly<{ loggedInUser: IUserDetail }>) {
    return (
        <>
            <aside className="w-70 h-[91vh] sticky top-0 z-0 flex flex-col justify-between bg-gray-100">
                <div className="flex flex-col py-5">
                    <div>
                        <ul>
                            <li>
                                <div className="border-b-black-300/10 border-b pb-0.5">

                                    <ShowComponent role={"admin"}>
                                        <NavLink to="/admin" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                            <LuLayoutDashboard />
                                            <span>Dashboard</span>
                                        </NavLink>

                                        <NavLink to="/admin/users" className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2" end>
                                            <LuUsers />
                                            <span>Users</span>
                                        </NavLink>
                                    </ShowComponent>



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
                    </div>
                </div>

                <div className="border border-gray-300 ">
                    <article className="flex gap-2 items-center py-3">
                        <img
                            src={loggedInUser?.image}
                            alt=""
                            className="size-10 rounded-full object-cover"
                        />

                        <div className="text-xs min-w-0 break-all"> {/* // min-w-0 and break-all are used together to ensure that the text will break and wrap to the next line if it exceeds the width of the container. This is particularly useful for displaying long email addresses or names without causing layout issues. The min-w-0 class allows the container to shrink to fit its content, while the break-all class forces the text to break at any point if it exceeds the container's width, preventing overflow and ensuring that all content is visible within the sidebar. */}
                            <strong className="block font-medium">{loggedInUser?.firstName + " " + loggedInUser?.lastName}</strong>
                            <span>{loggedInUser?.email}</span>
                        </div>
                    </article>

                </div>
            </aside >
        </>
    )
}