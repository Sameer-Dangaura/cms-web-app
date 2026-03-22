import { type ReactNode } from "react";

export interface IH1Props {
    className?: string;
    children: ReactNode;    // ReactNode is a type that represents any valid React element, string, number, boolean, null, undefined, or an array of these types.
}

/*
This file defines the contract for the H1 component. It defines the props that the H1 component will accept. It is used to ensure that the H1 component is used correctly and to provide type safety. The IH1Props interface defines the shape of the props object that the H1 component will receive. It has two properties: className and children. The className property is optional and has a default value of "text-blue-100". The children property is required and can be of any data type, but it is usually a string or a React element.
*/