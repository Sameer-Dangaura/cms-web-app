import { LuChevronLeft, LuChevronRight, LuPencil, LuPlus, LuTrash2 } from "react-icons/lu";
import { H1 } from "../../../components/ui/typography/PageTitle";
import { NavLink } from "react-router";
import ShowComponent from "../../../components/auth/AllowAccess";
import { RowSkeleton } from "../../../components/ui/table/Skeleton";

export default function UserList() {
    return (
        <>
            <section className="bg-white p-5 rounded-lg shadow">
                <div className="flex w-full justify-between items-center border-b border-b-gray-400/20 pb-5">
                    <H1 className="text-3xl text-blue-900 font-bold">User List</H1>

                    <div className="w-1/3 flex items-center gap-3">
                        <input type="search" className="w-full bg-gray-50 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded-md" placeholder="Search users..." />


                        <ShowComponent role="admin">
                            <NavLink to="/admin/users/create" className={'w-50 flex items-center justify-center gap-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500 hover:scale-96 font-semibold'}>
                                <LuPlus className="size-5" />Add users
                            </NavLink>
                        </ShowComponent>

                    </div>
                </div>

                <div className="w-full">
                    <table className="w-full mt-5">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4 border border-gray-600/50">Name</th>
                                <th className="p-4 border border-gray-600/50">Email</th>
                                <th className="p-4 border border-gray-600/50">Role</th>
                                <th className="p-4 border border-gray-600/50">Status</th>
                                <th className="p-4 border border-gray-600/50">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RowSkeleton rows={7} cols={5} showAction={true} />

                            <tr className="border-b border-b-gray-600/50">
                                <td className="text-center py-2 px-4 border border-gray-600/50">John Doe</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">john.doe@example.com</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Admin</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Active</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                    <div className="flex gap-2 items-center justify-center">
                                        <NavLink className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500" to="/admin/users/123/edit">
                                            <LuPencil />
                                        </NavLink>
                                        <NavLink className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-500 ml-2" to="/admin/users/123/delete">
                                            <LuTrash2 />
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-b-gray-600/50">
                                <td className="text-center py-2 px-4 border border-gray-600/50">John Doe</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">john.doe@example.com</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Admin</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Active</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                    <div className="flex gap-2 items-center justify-center">
                                        <NavLink className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500" to="/admin/users/abc/edit">
                                            <LuPencil />
                                        </NavLink>
                                        <NavLink className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-500 ml-2" to="/admin/users/abc/delete">
                                            <LuTrash2 />
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-b-gray-600/50">
                                <td className="text-center py-2 px-4 border border-gray-600/50">John Doe</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">john.doe@example.com</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Admin</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Active</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                    <div className="flex gap-2 items-center justify-center">
                                        <NavLink className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500" to="/admin/users/567/edit">
                                            <LuPencil />
                                        </NavLink>
                                        <NavLink className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-500 ml-2" to="/admin/users/567/delete">
                                            <LuTrash2 />
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-b-gray-600/50">
                                <td className="text-center py-2 px-4 border border-gray-600/50">John Doe</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">john.doe@example.com</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Admin</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Active</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                    <div className="flex gap-2 items-center justify-center">
                                        <NavLink className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500" to="/admin/users/xyz/edit">
                                            <LuPencil />
                                        </NavLink>
                                        <NavLink className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-500 ml-2" to="/admin/users/xyz/delete">
                                            <LuTrash2 />
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b border-b-gray-600/50">
                                <td className="text-center py-2 px-4 border border-gray-600/50">John Doe</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">john.doe@example.com</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Admin</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">Active</td>
                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                    <div className="flex gap-2 items-center justify-center">
                                        <NavLink className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500" to="/admin/users/989/edit">
                                            <LuPencil />
                                        </NavLink>
                                        <NavLink className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-500 ml-2" to="/admin/users/989/delete">
                                            <LuTrash2 />
                                        </NavLink>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="flex w-full mt-5 items-center justify-end">
                    <ul className="flex gap-2 items-center">
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <LuChevronLeft />
                        </li>
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <span>1</span>
                        </li>
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <span>2</span>
                        </li>
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <span>3</span>
                        </li>
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <span>4</span>
                        </li>
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <span>5</span>
                        </li>
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <LuChevronRight />
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}


/*
- `focus:outline-none` is a Tailwind CSS utility class that removes the default focus outline from an element when it receives focus. This is often used to create a cleaner and more customized appearance for interactive elements like buttons, links, or form inputs. However, it's important to ensure that you provide an alternative visual indication of focus (such as a different background color, border, or shadow) to maintain accessibility for keyboard users.
import { LuPencil } from 'react-icons/lu';

- `focus:ring-2` is a Tailwind CSS utility class that applies a ring (a visual outline) around an element when it receives focus. The `-2` indicates the thickness of the ring, which in this case is 2 pixels. This class is often used in conjunction with `focus:outline-none` to provide a custom focus style while removing the default browser focus outline. The ring can be styled further with additional classes to change its color, opacity, or other properties to enhance the user experience and accessibility.

- `focus:ring-blue-500` is a Tailwind CSS utility class that sets the color of the focus ring to a specific shade of blue (blue-500) when an element receives focus. This class is typically used in combination with `focus:ring-2` to create a visually distinct focus state for interactive elements like buttons, links, or form inputs. By using this class, you can enhance the accessibility and user experience by providing a clear visual indication of which element is currently focused, especially for keyboard users.

- `transition duration-500` is a Tailwind CSS utility class that applies a transition effect to an element, with a duration of 500 milliseconds. This means that when the element's state changes (such as on hover, focus, or active), the transition will smoothly animate the change over half a second. This can be used to create visually appealing effects, such as changing the background color, scaling the element, or altering its opacity, providing a more engaging user experience.
*/


// `animate-pulse`: is a Tailwind CSS utility class that applies a pulsing animation to an element. This animation creates a subtle fade-in and fade-out effect, often used to indicate loading or placeholder content. When applied, the element will continuously transition between a lighter and darker shade, giving the appearance of a "breathing" or "pulsing" effect. This can be particularly useful for skeleton screens or loading states, providing users with a visual cue that content is being loaded or processed.