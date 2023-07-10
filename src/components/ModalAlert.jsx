import { useForm } from 'react-hook-form'
import '../styles/ModalAlert.scss'
import api from '../api/api'
export const ModalAlert = ({ alert,setModalAlert }) => {

    const { register, handleSubmit } = useForm()
    const handleOnSubmitForm =async (data) => {
        const token = sessionStorage.getItem('token')
        const body = {
            id:alert._id,
            estado:true,
            edicion:data
        }
        const res = await api.put('/alerts',body,{
            headers:{
                Authorization:token
            } 
        })

        


    }
    const handleClickExitModal = ()=>{
        setModalAlert(false)
    }

    return (
        <div className='ModalAlert'>
            <button className='ModalAlert-btnexit' onClick={handleClickExitModal}>
                X
            </button>
            <p className='ModalAlert-description'>{alert.descripcion}</p>
            <div className='ModalAlert-bg'>
                <p>Bloque: {alert.bloque}</p>
                <p>Guirnalda: {alert.guirnalda}</p>
            </div>
            <p className='ModalAlert-status'>Estado:{alert.estado ? "Corregido" : "No Corregido"}</p>
            <form onSubmit={handleSubmit(handleOnSubmitForm)}>
                <div>
                    <select name="component" id="component" {...register('componente')} required>
                        <option value="bombillo">Bombillo</option>
                        <option value="sensor">Sensor</option>
                    </select>
                    <select name="change" id="change" {...register('tipo')} required>
                        <option value="ajuste">Ajuste</option>
                        <option value="cambio">Cambio</option>
                    </select>

                </div>
                <button type='submit'>
                    Resolver
                </button>
            </form>

        </div>
    )
}
