import { useForm } from 'react-hook-form'
import imgLogin from '../../assets/imgs/imgLogin.jpg'
import imgLogo from '../../assets/imgs/logo.png'
import '../../styles/Login.scss'
export const Login = () => {
    const { register, handleSubmit } = useForm()
    const onSubmitFormLogin = (data) => {
        console.log(data)
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
