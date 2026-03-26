import { type ComponentType, type ReactNode } from "react";

export interface IAuthProps {
    children: ReactNode;
    component: ComponentType; // React.ComponentType is a type that represents a React component. It is used to define the type of the component prop in the IAuthProps interface. The component prop is a special prop that is used to pass a React component as a prop to another component. It can be of any data type, but it is usually a React component. It is used to define the type of the component prop in the IAuthProps interface.
}