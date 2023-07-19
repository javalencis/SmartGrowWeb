
export const UserRow = ({ handleClickExpand, data }) => {
    return (
        <tr onClick={handleClickExpand} className="UserRow">
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.role}</td>
            <td>E X</td>


        </tr>
    )
}
