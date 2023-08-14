import iEdit from '../assets/icons/editar.svg'
import iDelete from '../assets/icons/eliminar.svg'
import '../styles/UserRow.scss'

export const UserRow = ({ handleClickExpand, data }) => {
    return (
        <tr onClick={handleClickExpand} className="UserRow">
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.role}</td>
            <td className='RowOptions'>
                <div><img src={iEdit} alt="boton editar usuario" /></div> 
                <div><img src={iDelete} alt="boton eliminar usuario" /></div>
            </td>


        </tr>
    )
}
