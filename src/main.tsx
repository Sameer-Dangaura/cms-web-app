import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/global.css";
import RouterConfig from './config/Router';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
)





/*
Before routing, we used this code:
// import HomePage from './pages/home/HomePage';
import ForgetPassword from './pages/auth/ForgetPassword';
import RouterConfig from './config/Router';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
    <ForgetPassword />
  </StrictMode>,
)
*/

/*
- We have imported the RouterConfig component from the config folder. This component is responsible for defining the routes in our application. It uses the BrowserRouter, Routes, and Route components from the react-router library to define the routes and their corresponding components.
import DashboardLayout from './pages/layouts/DashboardLayout';

- We have wrapped the RouterConfig component inside the StrictMode component. StrictMode is a tool for highlighting potential problems in an application. It does not render any visible UI, but it activates additional checks and warnings for its descendants. It helps to identify unsafe lifecycle methods, legacy API usage, and other potential issues in the application.

- By using RouterConfig, we can manage our routes in a centralized way. We can define all our routes in the RouterConfig component and then use it in our main entry point (main.tsx) to render the appropriate components based on the URL. This makes our code cleaner and more maintainable.
*/