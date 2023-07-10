import { Fragment, useEffect, useState } from 'react'
import api from '../api/api'
import '../styles/Blocks.scss'
import { getStateBlocks } from '../libs/functions'
export const Blocks = () => {
  const [blocks, setBlocks] = useState([])

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/api/garlands')

    eventSource.onmessage = (event) =>{
      setBlocks(JSON.parse(event.data))
    }

    return ()=>{
      eventSource.close()
    }
  }, [])
  return (
    <section className="Blocks">
      <h3>Bloques</h3>
      <div className='BlocksList'>
        {
          blocks.map((block)=>(
            <Fragment key={block.bloque}>
              <p className='Block-num'>{block.bloque}</p>
              {
                block.estado === "on" && (
                  <div className='BlockState on'></div>
                )
              }
              {
                block.estado === "off" && (
                  <div className='BlockState off'></div>
                )

              }
              {
                block.estado === "warning" && (
                  <div  className='BlockState warning'></div>
                )

              }
            </Fragment>
          ))
        }

      </div>

    </section>
  )
}
