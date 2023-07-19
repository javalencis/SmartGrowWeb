import { useForm } from 'react-hook-form'
import '../styles/Control.scss'
export const Control = () => {

    const {register,handleSubmit} = useForm()

    const handleSubmitFormControl = (data) =>{
        console.log(data)
    }
    return (
        <section className="Control">
            <h3>Control</h3>
            <form onSubmit={handleSubmit(handleSubmitFormControl)}>
                <div>
                    <label htmlFor="startTime">
                        Hora de inicio:
                    </label>
                    <input 
                        type="time" 
                        id='startTime'
                        required 
                        {...register('start_time')}/>
                </div>
                <div>
                    <label htmlFor="endTime">
                        Hora final:
                    </label>
                    <input 
                        type="time" 
                        id='endTime' 
                        required
                        {...register('end_time')}/>
                </div>
                <div>
                    <label htmlFor="onTime">
                        Tiempo de encendido:
                    </label>
                    <input 
                        type="number" 
                        id='onTime' 
                        required
                        {...register('on_time')}/>
                </div>
                <div>
                    <label htmlFor="offTime">
                        Tiempo de apagado:
                    </label>
                    <input 
                        type="number" 
                        id='offTime' 
                        required
                        {...register('off_time')}/>
                </div>
                <button type='submit'>
                    Aplicar
                </button>
            </form>
        </section>
    )
}
