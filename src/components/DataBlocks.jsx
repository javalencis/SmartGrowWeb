import { useForm } from 'react-hook-form'
import api from '../api/api'
import { useState } from 'react'
import '../styles/DataBlocks.scss'
import toast, { Toaster } from 'react-hot-toast'

export const DataBlocks = () => {
    const { register, handleSubmit } = useForm()
    const [isSaved, setIsSaved] = useState(false)
    const [error, setError] = useState(false)
    const handleSubmitDataBlocks = async (data) => {
        const token = sessionStorage.getItem('token')
        const dataBlock = { ...data, estado: 'off' }
        const res = await api.post('/garlands/', dataBlock, {
            headers: {
                Authorization: token
            }
        })
        if (res.data.status) {
            setIsSaved(true)
            setError(false)
        }else{
            setError(true)
            setIsSaved(false)
        }
    }

    const notify = () => toast('✅ Agregado Correctamente')
    return (
        <section className="DataBlocks">
            <h3>Agregar bloque</h3>
            {
                error && (
                    <p className='AddError'>La guirnalda ya se encuentra</p>
                )
            }
            <form onSubmit={handleSubmit(handleSubmitDataBlocks)}>
                <input type="number" placeholder="Bloque" required {...register('bloque')} />
                <input type="number" placeholder="Guirnalda" required {...register('guirnalda')} />
                <input type="number" placeholder="Umbral" required {...register('umbral')} />
                <input type="number" placeholder="Cantidad de Bombillas" required {...register('num_bombillas')} />
                <button type='onsubmit' onClick={notify}>Agregar</button>
                {
                    isSaved && (

                        <Toaster
                            position="bottom-center"
                            reverseOrder={false}
                        />
                    )
                }
            </form>
        </section>
    )
}
