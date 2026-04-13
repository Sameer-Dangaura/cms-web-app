import { createBrowserRouter, RouterProvider } from "react-router";

// import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NotFound from "../pages/error/NotFound";

// import Dashboard from "../pages/admin/Dashboard";
import UserList from "../pages/admin/user/UserList";
import UserRegister from "../pages/admin/user/UserRegister";

import AdminLayout from "../pages/layouts/AdminLayout";
import AdminDashboard from "../pages/admin/Dashboard";
import ResetPassword from "../pages/auth/ResetPassword";

import UserDetail from "../pages/admin/user/UserDetail";
import { Suspense } from "react";
import Loading from "../components/ui/loading/Loading";


const routerData = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", Component: ForgetPassword },
    { path: "/reset-password", Component: ResetPassword },

    { path: "/moderator", Component: AdminLayout },
    { path: "/user", Component: AdminLayout },

    // grouping admin routes together:
    {
        path: "/admin",
        element: (
            <Suspense fallback={<Loading />}>   {/* // we are using the Suspense component from React to wrap the AdminLayout component. The Suspense component is used to handle the loading state of the AdminLayout component while it is being loaded asynchronously. The fallback prop of the Suspense component specifies what should be rendered while the AdminLayout component is being loaded. In this case, we are rendering a Loading component as a fallback, which will show a loading indicator to the user while the AdminLayout component is being loaded. Once the AdminLayout component has finished loading, it will be rendered in place of the Loading component. This approach helps to improve the user experience by providing feedback to the user that something is happening while they wait for the AdminLayout component to load, rather than showing a blank screen or an unresponsive UI. */}
                <AdminLayout />
            </Suspense>
        ),
        children: [   // This means that when the user navigates to any route that starts with "/admin", the AdminLayout element will be rendered. The children array defines the nested routes that will be rendered inside the AdminLayout component based on the specific path. This is working because of the <Outlet /> component used in the AdminDashboardMain component, which allows the nested routes to be rendered within the AdminLayout.

            { index: true, Component: AdminDashboard },   // this will be the default route for the /admin path, so when you navigate to /admin it will render the <AdminLayout /> element and inside that the AdminDashboard component will also be rendered, Where it is inside Dashboard.tsx. The index: true property indicates that this route should be rendered when the parent route ("/admin") is matched exactly.

            // User listing table :
            { path: "users", element: <UserList /> },   // this defines the route for the UserList component under the "/admin" path which is already nested under the "/admin" path. This "users" paths says that when the user navigates to "/admin/users", the UserList component will be rendered inside the AdminLayout component, where it is inside AdminDashboardMain.tsx. Do not use "/admin/users" here because it is already nested under the "/admin" path, so we can just use "users" to define the route for the UserList component. Also, do not use "/users" because it will be treated as an absolute path and will not be nested under the "/admin" path.

            // user form  for creating a new user by the admin:
            { path: "users/create", element: <UserRegister /> },  // this defines the route for the UserRegister component under the "/admin" path which is already nested under the "/admin" path. This "users/create" paths says that when the user navigates to "/admin/users/create", the UserRegister component will be rendered inside the AdminLayout component, where it is inside AdminDashboardMain.tsx. Do not use "/admin/users/create" here because it is already nested under the "/admin" path, so we can just use "users/create" to define the route for the UserRegister component. Also, do not use "/users/create" because it will be treated as an absolute path and will not be nested under the "/admin" path.

            // user details page for showing the details of a user:
            { path: "users/:username/details", element: <UserDetail /> }, // this defines the route for the UserDetail component under the "/admin" path which is already nested under the "/admin" path. This "users/:username/details" paths says that when the user navigates to "/admin/users/:username/details", the UserDetail component will be rendered inside the AdminLayout component, where it is inside AdminDashboardMain.tsx. The ":username" part is a route parameter that can be accessed in the UserDetail component to get the specific user username whose details need to be shown. Do not use "/admin/users/:username/details" here because it is already nested under the "/admin" path, so we can just use "users/:username/details" to define the route for the UserDetail component. Also, do not use "/users/:username/details" because it will be treated as an absolute path and will not be nested under the "/admin" path.                          `:username` is a dynamic URL parameter (a variable inside the URL). It acts like a placeholder that gets replaced by real values. This route will match URLs like: `/admin/users/john/details`, `/admin/users/jane/details`, `/admin/users/bob/details`, etc.               The value of `:username` can be accessed in the component that is rendered for this route (e.g., UserDetail component) using the `useParams` hook from react-router. For example, if the URL is `/admin/users/john/details`, then `useParams` will return an object like `{ username: "john" }`, allowing you to access the specific user username whose details need to be shown.

            // user edit form for editing an existing user:
            { path: "users/:username/edit", element: <> User edit </> },  // this defines the route for editing a user under the "/admin" path which is already nested under the "/admin" path. This "users/:username/edit" paths says that when the user navigates to "/admin/users/:username/edit", the User edit component will be rendered inside the AdminLayout component, where it is inside AdminDashboardMain.tsx. The ":username" part is a route parameter that can be accessed in the User edit component to get the specific user username that needs to be edited. Do not use "/admin/users/:username/edit" here because it is already nested under the "/admin" path, so we can just use "users/:username/edit" to define the route for editing a user. Also, do not use "/users/:username/edit" because it will be treated as an absolute path and will not be nested under the "/admin" path.                          `:username` is a dynamic URL parameter (a variable inside the URL). It acts like a placeholder that gets replaced by real values. This route will match URLs like: `/admin/users/john/edit`, `/admin/users/jane/edit`, `/admin/users/bob/edit`, etc.               The value of `:username` can be accessed in the component that is rendered for this route (e.g., UserEdit component) using the `useParams` hook from react-router. For example, if the URL is `/admin/users/john/edit`, then `useParams` will return an object like `{ username: "john" }`, allowing you to access the specific user username that needs to be edited.


            // user delete confirmation page for confirming the deletion of a user:
        ]
    },
    // alternative way to define the admin routes without using nested routes:
    // { path: "/admin", element: <Dashboard /> },
    // { path: "/admin/users", element: <UserList /> },


    // POS
    // Product:
    // product listing page
    // product create form
    // - name, description, price, category, brand, code, stock, images,
    // - createdBy, updatedBy, vendor, sku, status(stock, out of stock, discontinued), etc.
    // product edit form
    // product details page
    // product delete confirmation page

    // Order:
    // order listing page
    // order details page
    // order update form
    // order delete confirmation page

    // Inventory:
    // Stock listing page
    // Stock update form
    // Stock delete confirmation page

    // Transaction:
    // Transaction listing page
    // Transaction details page
    // Transaction delete confirmation page



    // always keep this route at the end of the array, because it will match any URL that does not match the above routes. It is used to handle 404 Not Found errors.
    { path: "*", element: <NotFound /> }
])

export default function RouterConfig() {
    return (
        <RouterProvider router={routerData} />
    )
}




/*
# Declarative Routing method in React JS:

export default function RouterConfig() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/forget-password" Component={ForgetPassword}></Route>
            </Routes>
        </BrowserRouter>
    )
}

*/

/*
- <BrowserRouter></BrowserRouter> is a component that provides the routing context to the application. It uses the HTML5 history API to keep the UI in sync with the URL. It is basically a wrapper around the entire application that enables routing functionality.

- <Routes></Routes> is a component that is used to define the routes in the application. It is a container for <Route> components. It is responsible for rendering the first child <Route> or <Redirect> that matches the location. In simple terms, it looks at the current URL and renders the first <Route> that matches that URL.

- <Route></Route> is a component that is used to define a single route in the application. It has two main props: path and element. The path prop defines the URL path that this route will match, and the element prop defines the component that will be rendered when this route is matched. For example, <Route path="/forget-password" Component={ForgetPassword}></Route> means that when the URL is "/forget-password", the ForgetPassword component will be rendered. and <Route path="/" element="{<HomePage />}"></Route> means that when the URL is "/", the HomePage component will be rendered. "/" is the root path of the application, and it will match any URL that starts with "/". Therefore, it is important to place the more specific routes (like "/forget-password") before the less specific routes (like "/") to ensure that the correct component is rendered for each URL.
import NotFound from './../pages/error/NotFound';
import UserRegister from './../pages/admin/user/UserRegister';

- `element` prop is used to specify the component that should be rendered when the route is matched. It is a JSX element that represents the component to be rendered. For example, `element={<HomePage />}` means that when the route is matched, the `HomePage` component will be rendered.

- `Component` prop is used to specify the component that should be rendered when the route is matched. It is a reference to the component itself, not a JSX element. For example, `Component={ForgetPassword}` means that when the route is matched, the `ForgetPassword` component will be rendered.
*/

//--- 

/*
const routerData = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/forget-password", Component: ForgetPassword }
])

export default function RouterConfig() {
    return (
        <RouterProvider router={routerData} />
    )
}

=> This is an alternative way to define routes in React JS using the createBrowserRouter and RouterProvider components from the react-router library.

- createBrowserRouter is a function that creates a router object based on the provided route configuration. It takes an array of route objects, where each object defines a path and the corresponding component to be rendered when that path is matched. In this example, we have defined two routes: the root path ("/") which renders the HomePage component, and the "/forget-password" path which renders the ForgetPassword component.

- RouterProvider is a component that provides the router context to the application. It takes the router object created by createBrowserRouter and makes it available to the rest of the application. By wrapping our application with RouterProvider, we can use the routing functionality provided by react-router throughout our app.
*/


/*
    { path: "/admin", element: <Dashboard /> },
    { path: "/admin/users", element: <UserList /> },

- insttead of defining the routes for the admin dashboard and user list separately, we can group them together under a common parent route ("/admin") and use nested routes to define the child routes for the dashboard and user list. This way, we can have a consistent layout for all admin-related pages while still rendering different components based on the specific route.

*/