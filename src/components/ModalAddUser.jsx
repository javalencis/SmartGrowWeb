import { useForm } from 'react-hook-form'
import '../styles/ModalAddUser.scss'
import { useState } from 'react'
import api from '../api/api'
export const ModalAddUser = () => {
    const [savedUserCorrect, setSavedUserCorrect] = useState(false)
    const { register, handleSubmit } = useForm()
    const handleSaveUser = async(data) =>{
        const token = sessionStorage.getItem('token')
    
        const res = await api.post('/users/register',data,{
            headers:{
                Authorization:token
            } 
        })
        if(res.data.status){
            setSavedUserCorrect(true)
        }
        console.log(data)
    }
    return (
        <div className="ModalAddUser">
            <h3>Agregar Usuario</h3>
            {
                savedUserCorrect && (
                    <p className='MsnSuccess'>Usuario registrado correctamente</p>
                )
            }
            <form onSubmit={handleSubmit(handleSaveUser)}>
                <input type="text" placeholder="Nombre" {...register('name')} required />
                <input type="text" placeholder="Usuario"  {...register('username')}  required/>
                <div className='SelectRole'>

                    <label htmlFor="role">Rol: </label>
                    <select name="role" id="role"  {...register('role')} required>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <input type="password" placeholder="Contraseña"  {...register('password')} required/>
                <button>
                    Agregar
                </button>
            </form>
        </div>
    )
}
