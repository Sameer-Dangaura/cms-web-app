// Class Based
//:
// Stateful Components
// 

import LeftSidePanel from "../../components/auth/LeftSidePanel";
import RightSidePanel from "../../components/auth/RightSidePanel";

// Functional components
//:
// Stateless components

// export: default or, named

// HomePage is a higher order component because it is composed of multiple lower order components like LeftSidePanel and RightSidePanel
export default function HomePage() {

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