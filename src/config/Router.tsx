import { createBrowserRouter, RouterProvider } from "react-router";

import NotFound from "../pages/error/NotFound";

import { AdminRouter } from "../lib/router/admin-router";
import { UserRouter } from "../lib/router/user-router";
import { PublicRouter } from "../lib/router/public-router";


const routerData = createBrowserRouter([
    ...PublicRouter, // we are using the spread operator to spread the PublicRouter array into the main routerData array. This way, we can keep the public routes organized in a separate file (public-router.tsx) and still include them in the main router configuration. The PublicRouter array contains all the routes that are accessible to the public, such as the home page, forget password page, reset password page, etc. By spreading it into the main routerData array, we ensure that all these public routes are included in our application's routing configuration without having to define them directly in this file. This approach helps to keep our code modular and organized by separating concerns and allowing us to manage public-related routes in a dedicated file.

    // user route:
    ...UserRouter,  // we are using the spread operator to spread the UserRouter array into the main routerData array. This way, we can keep the user routes organized in a separate file (user-router.tsx) and still include them in the main router configuration. The UserRouter array contains all the routes related to the user dashboard, such as the dashboard itself and the user profile page. By spreading it into the main routerData array, we ensure that all these user routes are included in our application's routing configuration without having to define them directly in this file. This approach helps to keep our code modular and organized by separating concerns and allowing us to manage user-related routes in a dedicated file.

    // admin route: 
    ...AdminRouter, // we are using the spread operator to spread the AdminRouter array into the main routerData array. This way, we can keep the admin routes organized in a separate file (admin-router.tsx) and still include them in the main router configuration. The AdminRouter array contains all the routes related to the admin dashboard, such as the dashboard itself, user listing, user registration, user details, etc. By spreading it into the main routerData array, we ensure that all these admin routes are included in our application's routing configuration without having to define them directly in this file. This approach helps to keep our code modular and organized by separating concerns and allowing us to manage admin-related routes in a dedicated file.



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
import PermissionCheck from './PermissionCheck';
import UserLayout from './../pages/layouts/UserLayout';

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