// import { Button } from "../../ui/button/Button";
// import { FaSearch } from "react-icons/fa";
import { LuBell, LuCircleUser } from "react-icons/lu";


export default function Navbar() {
    return (
        <nav>
            <div className="flex gap-5 items-center">
                <form action="">
                    <div className="flex gap-5 justify-center items-center">
                        <input type="search" name="q" placeholder="Search..." className="border border-gray-300 text-gray-900 rounded-md px-2" />
                        {/* <FaSearch className="search-icon text-gray-500" /> */}
                    </div>
                </form>

                <div className=" hover:cursor-pointer">
                    <LuBell className="text-gray-500 text-xl hover:text-white hover:bg-gray-700" />
                </div>

                <div className="flex gap-2 items-center hover:cursor-pointer text-gray-500 bg-gray-50 px-2 py-1 rounded-md hover:bg-gray-700 hover:text-white">
                    <div>
                        <LuCircleUser />
                    </div>
                    <div>
                        <span>John Doe</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}