import { useForm } from 'react-hook-form'
import imgLogin from '../../assets/imgs/imgLogin.jpg'
import imgLogo from '../../assets/imgs/logo.png'
import '../../styles/Login.scss'
import api from '../../api/api'
import {useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '../../contexts/AppContext'
export const Login = () => {

    const [error, setError] = useState(false)


    const { register, handleSubmit } = useForm()
    const { setIsLogin, setUser } = useContext(AppContext)
    const navigate = useNavigate()
    const onSubmitFormLogin = async (data) => {
        try {
            const res = await api.post('/users/login', data)

            if (res.data.status) {

                sessionStorage.setItem('token', res.data.token)
                setUser(res.data.user)
                setIsLogin(true)
                if (res.data.user.role === 'admin') {

                    navigate('/admin/estado-guirnaldas')
                } else {
                    navigate('/app/estado-guirnaldas')
                }
            } else {
                throw new Error('Usuario o contraseña incorrecto')
            }
        } catch (error) {
            setError(true)
        }

    }
    return (
        <section className="Login">
            <div className="LoginContainer">
                <div className='Login-img'>
                    <img src={imgLogin} alt="" />
                </div>

                <form onSubmit={handleSubmit(onSubmitFormLogin)}>
                    <img src={imgLogo} alt="" />
                    {
                        error && (
                            <p className='LoginError'>Usuario o contraseña incorrectas</p>
                        )
                    }
                    <input
                        type="text"
                        placeholder="Usuario"
                        {...register('username')}
                        required />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        {...register('password')}
                        required />
                    <button type='submit'>
                        Ingresar
                    </button>
                </form>
            </div>
        </section >
    )
}
