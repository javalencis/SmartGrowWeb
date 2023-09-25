import { useForm } from 'react-hook-form'
import '../styles/Control.scss'
import api from '../api/api'
import { useState } from 'react'
export const Control = () => {

    const [isSaved, setIsSaved] = useState(false);
    const { register, handleSubmit } = useForm()

    const handleSubmitFormControl = async (data) => {
        const token = sessionStorage.getItem('token')
        const bControl = {
            hora_inicio: data.start_time,
            hora_final: data.end_time,
            tiempo_encendido: Number(data.on_time),
            tiempo_apagado: Number(data.off_time),
            bloque: parseInt(data.block)
        }

        const res = await api.post('/control/', bControl, {
            headers: {
                Authorization: token
            }
        })
        if (res.status) {
            setIsSaved(true);
        }

    }
    return (
        <section className="Control">
            <h3>Control</h3>
            {
                isSaved && (
                    <p>Datos almacenados con exito</p>
                )
            }
            <form onSubmit={handleSubmit(handleSubmitFormControl)}>
                <div>
                    <label htmlFor="block">
                        Bloque:
                    </label>
                    <input
                        type="number"
                        id='block'
                        min='1'
                        max='20'
                        required
                        {...register('block')} />
                </div>
                <div>
                    <label htmlFor="startTime">
                        Hora de inicio:
                    </label>
                    <input
                        type="time"
                        id='startTime'
                        required
                        {...register('start_time')} />
                </div>
                <div>
                    <label htmlFor="endTime">
                        Hora final:
                    </label>
                    <input
                        type="time"
                        id='endTime'
                        required
                        {...register('end_time')} />
                </div>
                <div>
                    <label htmlFor="onTime">
                        Tiempo de encendido:
                    </label>
                    <input
                        type="number"
                        id='onTime'
                        required
                        {...register('on_time')} />
                </div>
                <div>
                    <label htmlFor="offTime">
                        Tiempo de apagado:
                    </label>
                    <input
                        type="number"
                        id='offTime'
                        required
                        {...register('off_time')} />
                </div>
                <button type='submit'>
                    Aplicar
                </button>
            </form>
        </section>
    )
}
