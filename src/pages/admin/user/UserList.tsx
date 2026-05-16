import { LuChevronLeft, LuChevronRight, LuPencil, LuPlus, LuTrash2 } from "react-icons/lu";
import { H1 } from "../../../components/ui/typography/PageTitle";
import { NavLink } from "react-router";
import ShowComponent from "../../../components/auth/AllowAccess";
import { RowSkeleton } from "../../../components/ui/table/Skeleton";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import axiosInstance from "../../../config/ApiClient";
import type { IUserDetail } from "../../../components/auth/Auth.contract";
import { ucFirst } from "../../../lib/utilities/helpers";
import { Badge } from "../../../components/ui/badge/Badge";


// type definition:
export interface IUserListResponse {
    limit: number,
    skip: number,
    total: number,
    users: Array<IUserDetail>
}

export interface IPaginationType {
    limit: number,
    skip: number,
    total: number,
    totalNoOfPages: number,
    currentPage?: number
}

export default function UserList() {
    // Manage user listing:

    const [keyword, setKeyword] = useState<string>(''); // The `keyword` state variable is used to store the current search term entered by the user in the search input field. It is initialized as an empty string, indicating that there is no search term when the component first mounts. As the user types into the search input, the `onChange` event handler updates this state with the current value of the input field. This allows us to keep track of the user's input in real-time and use it to filter or search through the list of users based on the entered keyword. By managing this state, we can implement a dynamic search functionality that responds to user input and provides a more interactive and responsive user experience when browsing through the user list.

    const [loading, setLoading] = useState<boolean>(true);  // The `loading` state variable is used to track whether the user data is currently being fetched from the server. It is initialized to `true`, indicating that the data is being loaded when the component first mounts. This state can be used to conditionally render a loading indicator (such as a skeleton screen) while the data is being fetched, and then display the actual user list once the data has been successfully retrieved. By managing this state, we can provide a better user experience by giving visual feedback during the data fetching process.

    const [users, setUsers] = useState<Array<IUserDetail> | null>(null);  // The `users` state variable is used to store the list of user details fetched from the server. It is initialized to `null`, indicating that there are no users loaded when the component first mounts. Once the data is successfully fetched, this state will be updated with an array of user details (of type `IUserDetail`), allowing the component to render the user list in the UI. By managing this state, we can ensure that the component re-renders with the new data once it is available, providing a dynamic and responsive user interface.

    const [pagination, setPagination] = useState<IPaginationType>({ // The `pagination` state variable is used to manage the pagination information for the user list. It is initialized with default values, including `limit`, `skip`, `total`, and `totalNoOfPages`. This state can be updated based on the response from the server when fetching user data, allowing us to keep track of how many users are being displayed per page (`limit`), how many users have been skipped (`skip`), the total number of users available (`total`), and the total number of pages based on the limit and total users (`totalNoOfPages`). By managing this pagination state, we can implement pagination controls in the UI, enabling users to navigate through different pages of the user list effectively.
        limit: 10,  // The `limit` property in the pagination state is used to specify the maximum number of user records that should be fetched and displayed per page. This value is typically sent as a query parameter in the API request to control how many users are returned in the response. By setting a limit, we can manage the amount of data being loaded at once, improving performance and providing a better user experience when navigating through large lists of users.
        skip: 0,    // The `skip` property in the pagination state is used to indicate how many user records should be skipped when fetching data from the server. This is particularly useful for implementing pagination, as it allows us to control which subset of user data is retrieved based on the current page. For example, if we are on the first page, `skip` would be 0, meaning no records are skipped and we fetch the first set of users. If we move to the second page, `skip` would be updated to 20 (assuming a limit of 20), meaning the first 20 records are skipped and we fetch the next set of users. By updating the `skip` value based on user interactions with pagination controls, we can efficiently manage the retrieval of user data in a paginated manner.
        total: 0,   // The `total` property in the pagination state is used to keep track of the total number of user records available on the server. This value is typically returned in the response from the API when fetching user data, allowing us to know how many users exist in total. By having this information, we can calculate the total number of pages needed for pagination and provide accurate navigation controls for users to browse through the user list. For example, if the total number of users is 100 and our limit is 20, we can determine that there are 5 pages of users (100 / 20 = 5), which helps us to render the appropriate pagination controls in the UI.

        totalNoOfPages: 1,

        currentPage: 1  // The `currentPage` property in the pagination state is used to keep track of the currently active page in the pagination controls. This value can be updated based on user interactions with the pagination buttons, allowing us to know which page of user data is currently being displayed. By managing the `currentPage` state, we can provide visual feedback to users about their current position in the pagination and ensure that the correct subset of user data is fetched and rendered based on the selected page. For example, when a user clicks on a pagination button for page 2, we would update `currentPage` to 2, which can then be used to calculate the appropriate `skip` value for fetching the next set of users.
    })

    // data fetch
    const getAllUsers = async (limit = pagination.limit, skip = pagination.skip, page = 1) => {
        try {
            // 'https://dummyjson.com/users?limit=5&skip=10&select=firstName,age' is an API endpoint that allows you to fetch a list of users with specific query parameters, which we are using below in the code. But, we donot use this endpoint directly in API request, instead we use '/users' endpoint and pass the query parameters in the `params` object of the axios request.
            const response = await axiosInstance.get('/users', {
                params: {   // The `params` object is used to specify query parameters that will be appended to the URL when making the GET request. In this case, we are sending three parameters: `limit`, `skip`, and `select`. These parameters are likely used by the server to control the pagination and filtering of the user data being fetched. // `limit` specifies the maximum number of user records to return, `skip` indicates how many records to skip (useful for pagination), and `select` defines which fields of the user data should be included in the response (in this case, only the `id`, `firstName`, `lastName`, `email`, `role`, `gender`, and `address` fields). By using these parameters, we can efficiently manage the amount of data being retrieved and ensure that we only get the necessary information for our user list.
                    limit: limit,
                    skip: skip,
                    select: "id,firstName,lastName,email,role,gender,address,image"
                }
            }) as IUserListResponse;  // The response from the API request is being cast to the `IUserListResponse` type, which we defined earlier. This type includes properties such as `limit`, `skip`, `total`, and `users`, where `users` is an array of user details of type `IUserDetail`. By casting the response to this type, we can ensure that we have a clear structure for the data we are working with, making it easier to access and manipulate the user information in our component. This also helps with TypeScript's type checking, providing better code safety and autocompletion features when working with the response data.

            // console.log("Users fetched:", response); // This line is commented out, but if it were active, it would log the response from the API request to the console. This can be useful for debugging purposes, allowing developers to see the structure of the data being returned and verify that the API request is working as expected. The response object typically contains information such as the status of the request, headers, and the actual data payload (in this case, the list of users). By inspecting this logged information, developers can ensure that they are receiving the correct data and can troubleshoot any issues that may arise during the data fetching process.

            setUsers(response.users);   // The `setUsers` function is called with the `users` property from the API response to update the `users` state variable. This allows the component to re-render with the new user data, enabling us to display the list of users in the UI. By updating the state with the fetched user data, we can ensure that our component reflects the most current information retrieved from the server, providing a dynamic and responsive user experience.

            setPagination({
                limit: +response.limit,
                skip: +response.limit,
                total: +response.total,
                totalNoOfPages: Math.ceil(+response.total / +response.limit),
                currentPage: page
            })  // The `setPagination` function is called with an object that updates the pagination state based on the API response. The `limit`, `skip`, and `total` properties are set using the corresponding values from the response, ensuring that the pagination state reflects the current data being fetched. The `totalNoOfPages` is calculated by dividing the total number of users by the limit and rounding up to the nearest whole number using `Math.ceil`, which gives us the total number of pages needed for pagination. The `currentPage` is set to the page number that was passed as an argument to the `getAllUsers` function, allowing us to keep track of which page is currently active in the pagination controls. By updating the pagination state with this information, we can effectively manage the pagination logic in our component and provide accurate navigation controls for users to browse through different pages of the user list.
        } catch (error) {
            console.log("Error fetching users:", error);
            toast.error("Failed to fetch users. Please try again later.");  // The `toast.error` function is used to display an error notification to the user when the API request to fetch users fails. It takes a string message as an argument, which in this case is "Failed to fetch users. Please try again later." This message will be shown in a toast notification, providing feedback to the user about the failure of the data fetching process. By using toast notifications, we can enhance the user experience by giving immediate and clear feedback about the status of their actions or any issues that may arise.
        } finally {
            setLoading(false);  // The `finally` block is used to ensure that the `setLoading(false)` function is called regardless of whether the API request was successful or if an error occurred. This means that once the data fetching process is complete (either successfully or with an error), the `loading` state will be set to `false`, allowing the component to update and render the appropriate content (such as the user list or an error message) based on the new state. This helps to ensure that the loading indicator is removed and the user interface is updated correctly after the data fetching process is finished.
        }
    }

    const searchUsers = async (page = 1, search = '') => {
        try {
            // 'https://dummyjson.com/users/search?q=John' is an API endpoint that allows you to search for users based on a query parameter `q`. In this case, we are using the `/users/search` endpoint and passing the search keyword as a query parameter in the `params` object of the axios request. The `q` parameter is used by the server to filter the user data based on the search term provided by the user. By using this endpoint, we can implement a search functionality that allows users to find specific users in the list based on their input, enhancing the user experience by providing a way to quickly locate relevant user information.
            const response = await axiosInstance.get('/users/search', {
                params: {   // The `params` object is used to specify query parameters that will be appended to the URL when making the GET request to the search endpoint. In this case, we are sending the `q` parameter, which contains the search keyword entered by the user. This allows the server to filter the user data based on the search term and return only the relevant results that match the query. By using this parameter, we can implement a dynamic search functionality that responds to user input and provides a more interactive and responsive user experience when searching through the user list.
                    q: search
                }
            }) as IUserListResponse;  // The response from the API request is being cast to the `IUserListResponse` type, which we defined earlier. This type includes properties such as `limit`, `skip`, `total`, and `users`, where `users` is an array of user details of type `IUserDetail`. By casting the response to this type, we can ensure that we have a clear structure for the data we are working with, making it easier to access and manipulate the user information in our component. This also helps with TypeScript's type checking, providing better code safety and autocompletion features when working with the response data.

            console.log("Users fetched:", response); // This line is commented out, but if it were active, it would log the response from the API request to the console. This can be useful for debugging purposes, allowing developers to see the structure of the data being returned and verify that the API request is working as expected. The response object typically contains information such as the status of the request, headers, and the actual data payload (in this case, the list of users). By inspecting this logged information, developers can ensure that they are receiving the correct data and can troubleshoot any issues that may arise during the data fetching process.

            setUsers(response.users);   // The `setUsers` function is called with the `users` property from the API response to update the `users` state variable. This allows the component to re-render with the new user data, enabling us to display the list of users in the UI. By updating the state with the fetched user data, we can ensure that our component reflects the most current information retrieved from the server, providing a dynamic and responsive user experience.

            setPagination({
                limit: +response.limit,
                skip: +response.limit,
                total: +response.total,
                totalNoOfPages: Math.ceil(+response.total / +response.limit),
                currentPage: page
            })  // The `setPagination` function is called with an object that updates the pagination state based on the API response. The `limit`, `skip`, and `total` properties are set using the corresponding values from the response, ensuring that the pagination state reflects the current data being fetched. The `totalNoOfPages` is calculated by dividing the total number of users by the limit and rounding up to the nearest whole number using `Math.ceil`, which gives us the total number of pages needed for pagination. The `currentPage` is set to the page number that was passed as an argument to the `getAllUsers` function, allowing us to keep track of which page is currently active in the pagination controls. By updating the pagination state with this information, we can effectively manage the pagination logic in our component and provide accurate navigation controls for users to browse through different pages of the user list.
        } catch (error) {
            console.log("Error fetching users:", error);
            toast.error("Failed to fetch users. Please try again later.");  // The `toast.error` function is used to display an error notification to the user when the API request to fetch users fails. It takes a string message as an argument, which in this case is "Failed to fetch users. Please try again later." This message will be shown in a toast notification, providing feedback to the user about the failure of the data fetching process. By using toast notifications, we can enhance the user experience by giving immediate and clear feedback about the status of their actions or any issues that may arise.
        } finally {
            setLoading(false);  // The `finally` block is used to ensure that the `setLoading(false)` function is called regardless of whether the API request was successful or if an error occurred. This means that once the data fetching process is complete (either successfully or with an error), the `loading` state will be set to `false`, allowing the component to update and render the appropriate content (such as the user list or an error message) based on the new state. This helps to ensure that the loading indicator is removed and the user interface is updated correctly after the data fetching process is finished.
        }
    }

    const handleNextPageChange = async (page = 1) => {  // The `handleNextPageChange` function is an asynchronous function that is called when the user interacts with the pagination controls to change the page. It takes an optional `page` parameter, which defaults to 1 if not provided. This function is responsible for calculating the new `skip` value based on the selected page and then calling the `getAllUsers` function to fetch the appropriate set of users for that page. By updating the pagination state and fetching new data, this function allows users to navigate through different pages of the user list seamlessly.
        const skip = (page - 1) * pagination.limit;  // The `skip` variable is calculated based on the current page number and the limit of users per page. It is determined by multiplying the page number minus one by the limit. For example, if we are on page 1, `skip` will be 0 (since (1 - 1) * limit = 0), meaning no records are skipped and we fetch the first set of users. If we move to page 2, `skip` will be equal to the limit (since (2 - 1) * limit = limit), meaning the first set of users is skipped and we fetch the next set of users. This calculation allows us to control which subset of user data is retrieved from the server based on the current page, enabling effective pagination in our user list.

        setLoading(true);  // The `setLoading(true)` function is called to update the `loading` state variable to `true`, indicating that a new data fetching process is starting. This is typically done before making an API request to fetch the users for the selected page. By setting `loading` to `true`, we can conditionally render a loading indicator (such as a skeleton screen) in the UI, providing visual feedback to the user that the data is being loaded. Once the data fetching process is complete, we will set `loading` back to `false` to update the UI with the new user data.

        setPagination((prev) => ({ ...prev }));  // The `setPagination` function is called with a callback that takes the previous state (`prev`) and returns a new state object. In this case, we are spreading the previous state using the spread operator (`...prev`) to create a new object that retains all the existing properties of the pagination state. However, since we are not making any changes to the pagination properties in this callback, it effectively keeps the pagination state unchanged. This line may be redundant in this context, as it does not update any values in the pagination state. It could be removed without affecting the functionality of the component, unless there is an intention to trigger a re-render or to prepare for future updates to the pagination state.

        await getAllUsers(pagination.limit, skip, page);  // The `getAllUsers` function is called with the current `limit`, the newly calculated `skip` value, and the selected `page` number as arguments. This function will fetch the appropriate set of users from the server based on the pagination parameters. By awaiting this function call, we ensure that the component waits for the data fetching process to complete before proceeding, allowing us to update the UI with the new user data once it is available. This is essential for implementing pagination effectively, as it allows users to navigate through different pages of the user list and see the corresponding data for each page.
    }

    useEffect(() => {
        // debouncing the search input: means that we are adding a delay before making the API call to search for users based on the keyword entered by the user. This is done to prevent making an API call on every keystroke, which can lead to performance issues and unnecessary network requests. By using `setTimeout`, we can wait for a short period (in this case, 500 milliseconds) after the user stops typing before triggering the search function. If the user types again within that time frame, the previous timeout will be cleared, and a new one will be set, effectively debouncing the input and ensuring that the search function is only called when the user has finished typing.

        const timeout = setTimeout(() => {
            // data fetch on keyword change:
            if (keyword !== undefined && keyword !== '') {   // The condition `keyword !== undefined && keyword !== ''` is used to check if the `keyword` state variable is not undefined and not an empty string. This ensures that the search function is only called when there is a valid keyword to search for, preventing unnecessary API calls when the keyword is empty or undefined. If the condition is met, the `searchUsers` function is called with the current pagination parameters and the new search keyword, allowing us to fetch and display the filtered list of users based on the search term entered by the user.
                searchUsers(1, keyword);
            }
        }, 500);
        return () => clearTimeout(timeout);  // The `return () => clearTimeout(timeout)` statement is used to clean up the timeout when the component unmounts or when the `keyword` state variable changes. This is important to prevent memory leaks and ensure that the timeout does not continue to run after the component is no longer in use. By clearing the timeout, we can avoid potential issues with multiple timeouts being set if the user types rapidly in the search input, ensuring that only the most recent search term triggers the API call after a short delay (debouncing). This helps to optimize performance and reduce unnecessary API requests while providing a better user experience.

    }, [keyword])   // The `useEffect` hook is used to perform side effects in a React component. In this case, it is set up to run whenever the `keyword` state variable changes. This means that whenever the user types into the search input and updates the `keyword`, the `searchUsers` function will be called with the current pagination parameters and the new search keyword. This allows us to implement a dynamic search functionality, where the user list is filtered based on the entered keyword in real-time. By including `keyword` in the dependency array of the `useEffect`, we ensure that the search function is triggered every time the search term changes, providing an interactive and responsive user experience.

    useEffect(() => {
        getAllUsers();
    }, []); // The empty dependency array `[]` means that this effect will only run once when the component mounts. This is typically used for fetching data or performing setup tasks that should only happen once during the lifecycle of the component. In this case, it ensures that the `getAllUsers` function is called only once to fetch the user data when the component is first rendered.

    // console.log("Users:", users);  // This line logs the current state of the `users` variable to the console. This can be useful for debugging purposes, allowing developers to see the list of users that have been fetched from the API and stored in the state. By inspecting this logged information, developers can verify that the data fetching process is working correctly and that the `users` state is being updated as expected with the data retrieved from the server.   
    // console.log("Pagination:", pagination);  // This line logs the current state of the `pagination` variable to the console. This can be useful for debugging purposes, allowing developers to see the pagination information that has been set based on the API response. By inspecting this logged information, developers can verify that the pagination state is being updated correctly with the values for `limit`, `skip`, `total`, and `totalNoOfPages`, which are essential for managing pagination in the user list. This helps ensure that the pagination controls in the UI will function properly based on the current pagination state.

    return (
        <>
            <section className="bg-white p-5 rounded-lg shadow">
                {/* User List Header */}
                <div className="flex w-full justify-between items-center border-b border-b-gray-400/20 pb-5">
                    <H1 className="text-3xl text-blue-900 font-bold">User List</H1>

                    <div className="w-1/3 flex items-center gap-3">
                        <input type="search"
                            className="w-full bg-gray-50 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 p-1 rounded-md"
                            placeholder="Search users..."
                            value={keyword} // The `value` prop of the input field is set to the `keyword` state variable, which allows the input to be a controlled component. This means that the value displayed in the input field is always in sync with the `keyword` state. As the user types into the search input, the `onChange` event handler updates the `keyword` state with the current value of the input, ensuring that any changes made by the user are reflected in the component's state. This setup is essential for implementing features like search functionality, where you can use the `keyword` state to filter or search through the list of users based on the user's input.
                            onChange={(e) => setKeyword(e.target.value)}    // The `onChange` event handler is attached to the search input field to update the `keyword` state variable whenever the user types into the input. The event handler takes the event object `e` as an argument and calls the `setKeyword` function with the current value of the input field (`e.target.value`). This allows us to keep track of the user's input in real-time, enabling features such as live search or filtering of the user list based on the entered keyword. By updating the state with each change in the input, we can ensure that our component responds dynamically to user interactions and provides a seamless search experience.
                        />


                        <ShowComponent role="admin">
                            <NavLink to="/admin/users/create" className={'w-50 flex items-center justify-center gap-2 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500 hover:scale-96 font-semibold'}>
                                <LuPlus className="size-5" />Add users
                            </NavLink>
                        </ShowComponent>

                    </div>
                </div>

                {/* User List Table */}
                <div className="w-full">
                    <table className="w-full mt-5">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-4 border border-gray-600/50">Name</th>
                                <th className="p-4 border border-gray-600/50">Email</th>
                                <th className="p-4 border border-gray-600/50">Role</th>
                                <th className="p-4 border border-gray-600/50">Gender</th>
                                <th className="p-4 border border-gray-600/50">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {   // The conditional rendering checks the `loading` state. If `loading` is `true`, it renders the `RowSkeleton` component, which likely displays a placeholder skeleton screen to indicate that data is being loaded. The `RowSkeleton` component is passed props such as `rows`, `cols`, and `showAction` to customize its appearance. If `loading` is `false`, it renders the actual user data in a table row format. In this example, a single user with the name "John Doe", email "john.doe@example.com", and role "Admin" is displayed.
                                loading ? (<RowSkeleton rows={10} cols={5} showAction={true} />) : (
                                    users && users.map((user: IUserDetail, i: number) => {
                                        return (
                                            <tr key={i} className="border-b border-b-gray-600/50">{/* // The `key` prop is used to uniquely identify each row in the list of users being rendered. In this case, we are using the index `i` from the `map` function as the key. However, it is generally recommended to use a unique identifier from the data itself (such as `user.id`) instead of the index for better performance and to avoid potential issues with reordering or adding/removing items in the list. */}
                                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                                    <div className="flex gap-3 items-center w-full">
                                                        <img src={user.image} alt="user image" className="size-10 rounded-full" />
                                                        {` ${user.firstName} ${user.lastName} `}
                                                    </div>
                                                </td>
                                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                                    <a href={`mailto:${user.email}`} className="text-blue-500 hover:underline">
                                                        {user.email}
                                                    </a>
                                                </td>
                                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                                    <Badge type={user.role === "admin" ? "success" : (user.role === "moderator" ? "warning" : (user.role === "user" ? "info" : "danger"))} > {/* // The `type` prop of the `Badge` component is being set based on the user's role. If the user's role is "admin", the badge will have a "success" type, which likely corresponds to a green color. If the role is "moderator", it will have a "warning" type, which may correspond to a yellow color. If the role is "user", it will have an "info" type, which could correspond to a blue color. For any other role, it defaults to a "danger" type, which may correspond to a red color. This conditional logic allows for visually distinguishing users based on their roles using different badge styles. */}
                                                        {ucFirst(user.role)}    {/* // The `ucFirst` function is used to capitalize the first letter of the user's role before displaying it in the badge. This ensures that the role is presented in a more readable and visually appealing format (e.g., "Admin" instead of "admin"). By using this helper function, we can enhance the user interface by providing a consistent and polished display of user roles in the badge component. */}
                                                    </Badge>
                                                </td>
                                                <td className="text-center py-2 px-4 border border-gray-600/50">{ucFirst(user.gender)}</td>
                                                <td className="text-center py-2 px-4 border border-gray-600/50">
                                                    <div className="flex gap-2 items-center justify-center">
                                                        <NavLink className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-500" to={`/admin/users/${user.id}/edit`}>
                                                            <LuPencil />
                                                        </NavLink>
                                                        <NavLink className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700 transition duration-500 ml-2" to={`/admin/users/${user.id}/delete`}>
                                                            <LuTrash2 />
                                                        </NavLink>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex w-full mt-5 items-center justify-end">
                    <ul className="flex gap-2 items-center">
                        <li className="p-0.5 bg-gray-50 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow ">
                            <LuChevronLeft />
                        </li>
                        {
                            // The code snippet `[...Array(pagination.totalNoOfPages)].map((_, i: number) => ( ... ))` is used to create an array of a specific length based on the total number of pages (`pagination.totalNoOfPages`) and then map over that array to render pagination controls. The `Array(pagination.totalNoOfPages)` creates an array with a length equal to the total number of pages, and the spread operator `...` is used to convert it into an actual array that can be mapped over. The `map` function takes each element (which is ignored with `_`) and its index `i`, and returns a list item (`<li>`) for each page number. This allows us to dynamically generate pagination buttons based on the total number of pages available, providing users with the ability to navigate through different pages of the user list.
                            [...Array(pagination.totalNoOfPages)].map((_, i: number) => (
                                <li className={`p-0.5 size-7 hover:cursor-pointer hover:bg-gray-100 flex items-center justify-center rounded-md shadow 
                                    ${(i + 1) === pagination.currentPage ? 'bg-blue-100' : 'bg-gray-50'}`}
                                    key={i}
                                    onClick={() => { // The `onClick` event handler is attached to each pagination button (list item) to handle user interactions when they click on a specific page number. When a user clicks on a pagination button, the `handleNextPageChange` function is called with the page number as an argument. The page number is calculated as `i + 1` because the index `i` starts from 0, while page numbers typically start from 1. This allows the application to fetch and display the appropriate set of users corresponding to the selected page when the user interacts with the pagination controls. By providing this functionality, we can enhance the user experience by allowing seamless navigation through different pages of the user list.
                                        handleNextPageChange(i + 1);
                                    }}> {/* // The `key` prop is used to uniquely identify each pagination button in the list. In this case, we are using the index `i` from the `map` function as the key. This helps React to efficiently update and manage the list of pagination buttons when the component re-renders, ensuring that each button is correctly identified and updated based on user interactions or changes in the pagination state. By providing a unique key for each element in the list, we can improve performance and avoid potential issues with rendering and updating the pagination controls.                 // `(i + 1) === pagination.currentPage ? 'bg-blue-100' : 'bg-gray-50'` is a conditional expression used to apply different background colors to the pagination buttons based on whether they represent the current active page. If the page number (calculated as `i + 1`) matches the `currentPage` in the pagination state, the button will have a background color of `bg-blue-100`, indicating that it is the active page. If it does not match, it will have a background color of `bg-gray-50`, indicating that it is an inactive page. This visual distinction helps users easily identify which page they are currently on while navigating through the pagination controls.*/}
                                    <span>{i + 1}</span>
                                </li>
                            ))
                        }

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