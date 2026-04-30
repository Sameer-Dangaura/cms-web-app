
export const RowSkeleton = ({ rows = 7, cols, showAction = true }: Readonly<{ rows?: number, cols: number, showAction?: boolean }>) => {

    return (
        [...Array(rows)].map((_, i: number) => {    // Create an array of length 'rows' and map over it to generate skeleton rows

            const noOfCols = showAction ? cols - 1 : cols;  // Adjust column count if action column is shown

            return (
                <tr key={i} className="border-b border-b-gray-600/50">
                    {
                        [...Array(noOfCols)].map((_, j: number) => (    // Create an array of length 'noOfCols' and map over it to generate skeleton columns for each row

                            <td key={j} className="text-center py-4 px-4 border border-gray-600/50">
                                <div className="w-full h-5 bg-gray-300 rounded-full animate-pulse"></div>
                            </td>

                        ))
                    }

                    {   // If showAction is true, render an additional column for actions with skeleton loading animation otherwise, render an empty fragment
                        showAction ? < td className="text-center py-4 px-4 border border-gray-600/50">
                            <div className="flex gap-3 items-center justify-center">
                                <div className="w-1/5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
                                <div className="w-1/5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
                            </div>
                        </td> : <></>
                    }
                </tr >
            )
        })
    )
}


/*
`[...Array(rows)]` creates an array of a specified length (rows) filled with undefined values. This allows us to use the map function to iterate over it and generate the desired number of skeleton rows for the table. Each row will contain a specified number of columns (cols) with a loading animation, and optionally an action column if showAction is true.
*/