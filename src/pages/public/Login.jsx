import { useForm } from 'react-hook-form'
import imgLogin from '../../assets/imgs/imgLogin.jpg'
import imgLogo from '../../assets/imgs/logo.png'
import '../../styles/Login.scss'
import api from '../../api/api'
export const Login = () => {
    const { register, handleSubmit } = useForm()
    const onSubmitFormLogin = async(data) => {
        try {
            const res= await api.post('/users/login',data)
            console.log(res)
            if(res.data.status){
                console.log(res.data.token)
                sessionStorage.setItem('token',res.data.token)
                window.location.reload()
            }
        } catch (error) {
            
        }
 
    }
    return (
        <section className="Login">
            <div className="LoginContainer">
                <div className='Login-img'>
                    <img src={imgLogin} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmitFormLogin)}>
                    <img src={imgLogo} alt=""/>
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
