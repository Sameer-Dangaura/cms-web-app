import type { ReactNode } from "react";

export const Badge = ({ children, type = 'success' }: Readonly<{ children: ReactNode; type: 'success' | 'danger' | 'info' | 'warning' }>) => {
    return (
        <span className={`py-2 flex items-center justify-center
    ${type === 'success' ? 'bg-green-100 text-green-800' : (
                type === 'danger' ? 'bg-red-100 text-red-800' : (
                    type === 'info' ? 'bg-blue-100 text-blue-800' : (
                        type === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'text-gray-800 bg-gray-100')))
            } rounded-full text-sm font-medium`}>

            {children}
        </span>
    )
}