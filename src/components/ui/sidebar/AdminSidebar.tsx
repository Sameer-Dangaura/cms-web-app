import { LuLayoutDashboard, LuLogOut, LuMail, LuSettings, LuShoppingBag, LuUsers } from "react-icons/lu";


export default function AdminSidebar() {
    return (
        <>
            <div className="w-60 bg-gray-100 h-screen flex flex-col py-5">
                <aside>
                    <ul>
                        <li>
                            <div className="border-b-black-300/10 border-b pb-2">
                                <a href="/admin">
                                    <div className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2">
                                        <LuLayoutDashboard />
                                        <span>Dashboard</span>A
                                    </div>
                                </a>

                                <a href="/products">
                                    <div className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2">
                                        <LuShoppingBag />
                                        <span>Products</span>
                                    </div>
                                </a>

                                <a href="/messages">
                                    <div className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2">
                                        <LuMail />
                                        <span>Messages</span>
                                    </div>
                                </a>

                                <a href="/customers">
                                    <div className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2">
                                        <LuUsers />
                                        <span>Customers</span>
                                    </div>
                                </a>
                            </div>
                            <div className="pt-2">
                                <a href="/settings">
                                    <div className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2">
                                        <LuSettings />
                                        <span>Settings</span>
                                    </div>
                                </a>

                                <a href="/signout">
                                    <div className="flex items-center gap-3 hover:bg-gray-300 px-5 py-2">
                                        <LuLogOut />
                                        <span>Sign Out</span>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    )
}