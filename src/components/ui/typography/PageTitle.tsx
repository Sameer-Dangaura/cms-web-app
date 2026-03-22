// import type { ReactNode } from "react";
import { type IH1Props } from "./PageTitle.contract";

// props
// props is an object that contains all the properties that are passed to a component
// props is read only, we cannot modify it
// props is passed to a component as an argument

// interface IH1Props {
//     className?: string;
//     children: ReactNode;    // ReactNode is a type that represents any valid React element, string, number, boolean, null, undefined, or an array of these types.
// }


// export const H1 = (props: Readonly<IH1Props>) => {
export const H1 = ({ className = "text-blue-100 text-5xl", children }: Readonly<IH1Props>) => {
    // object data type
    // state -> hook
    // {props.children} -> children is a special property that is used to pass the content of a component
    return <h1 className={`${className} font-semibold`}>
        {children}
    </h1>;
}

/*
- ` children` => It is a special property that is used to pass the content of a component. It can be of any data type, but it is usually a string or a React element.`
- `className` => It is a special property that is used to pass the class name of a component. It is used to apply CSS styles to a component. It is optional and has a default value of "text-blue-100".
- `{children}` => It is used to render the content of a component. It is used to render the children of a component. It is used to render the content that is passed to a component as a child. e.g: <H1>Welcome to My App</H1> => children = "Welcome to My App"
*/