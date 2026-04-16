// Class Based
//:
// Stateful Components
// 

import { useEffect } from "react";
import { useAuth } from "../../lib/hooks/useAuth";
import { useNavigate } from "react-router";

import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidePanel from "../../components/auth/RightSidePanel";

// Functional components
//:
// Stateless components

// export: default or, named

// HomePage is a higher order component because it is composed of multiple lower order components like LeftSidePanel and RightSidePanel
export default function HomePage() {

    const { authUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {

        if (authUser && authUser.role) {
            // i.e. logged in user
            navigate('/' + authUser.role)   // navigate to the dashboard of the user based on their role (e.g., /admin for admin users, /user for regular users, etc.)
        }

    }, [authUser])  // this useEffect will run whenever the authUser state changes. If there is a logged-in user (i.e., authUser is not null) and they have a role defined, it will navigate to the corresponding dashboard based on their role. For example, if the user's role is "admin", it will navigate to "/admin". If the user's role is "user", it will navigate to "/user". This ensures that when a user logs in, they are automatically redirected to the appropriate dashboard based on their role.

    return (
        // do always return something from a component, even if it is null or empty div 

        <>
            {/* // <></> is React Fragment: it is a way to group multiple elements without adding an extra node to the DOM */}

            <section className=" bg-gray-50 flex gap-5 h-screen p-5">
                <LeftSidePanel />   {/* LeftSidePanel is lower order component*/}
                <RightSidePanel />  {/* RightSidePanel is lower order component*/}
            </section>
        </>
    )
}

/*
- `h-screen` => equivalent to `height: 100vh` in CSS. It makes the section take up the full height of the viewport.
*/