export const Table = ({children,headers,name}) => {
    return (
        <table className={name}>
            <thead>
                <tr className="TableHeaders">
                    {headers.map((header, index) => (
                        <th className="TableHeader" key={index}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {
                   children
                }
            </tbody>
        </table>
    )
}
