
import { useForm } from 'react-hook-form'
import '../styles/FilterAlerts.scss'
import { arrayFilter } from '../libs/functions'

export const FilterAlerts = ({ alerts, setAlertsAux }) => {

    const { register, handleSubmit,reset } = useForm()
    const handleClickFilter = (data) => {

        setAlertsAux(arrayFilter(alerts, data))


    }
   

    return (
        <>
            <form className='FilterAlerts' onSubmit={handleSubmit(handleClickFilter)}>
                <div className='FilterAlertsDates'>
                    <div>

                        <label htmlFor="dateStart">Fecha inicio</label>
                        <input type="date" id='dateStart' {...register('fecha_inicio')} />
                    </div>
                    <div>

                        <label htmlFor="dateEnd">Fecha final</label>
                        <input type="date" id='dateEnd' {...register('fecha_final')} />
                    </div>
                </div>
                <div className='FilterAlertsNumbers'>
                    <div>

                        <label htmlFor="block">Bloque</label>
                        <input type="number" id='block' {...register('bloque')} />
                    </div>
                    <div>

                        <label htmlFor="garland">Guirnalda</label>
                        <input type="number" id='garland' {...register('guirnalda')} />
                    </div>
                    <button type='submit'>Filtrar</button>
                    <button onClick={()=>reset() }></button>
                </div>
            </form>
        </>

    )
}
