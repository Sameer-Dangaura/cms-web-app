
import { type ReactNode } from 'react';

export interface IButtonProps {
    type?: "button" | "submit" | "reset";
    className?: string;
    children: ReactNode;
}