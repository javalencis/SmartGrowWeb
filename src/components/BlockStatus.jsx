import { useEffect, useState } from "react"

export default function BlockStatus() {
  const [blocks, setBlocks] = useState([])

  useEffect(() => {
    const eventSource = new EventSource('http://localhost:3001/api/blocks/all')

    eventSource.onmessage = (event) => {

      setBlocks(JSON.parse(event.data))
    }

    return () => {
      eventSource.close()
    }
  }, [])

  return (
    <section className="BlockStatus">
      
    </section>
  )
}

