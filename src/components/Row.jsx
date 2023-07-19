import { useState } from "react"


export const Row = ({children, data,RowType, expand }) => {
    const [expanded, setExpanded] = useState(false)
    const handleClickExpand = () => {
        setExpanded(e => !e)
    }
    return (
        <>
            <RowType handleClickExpand={handleClickExpand} data={data} />
            {
                expand && (
                    expanded && (
                       children
                    )
                )
            }

        </>


    )
}
