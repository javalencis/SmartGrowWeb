import '../styles/LayoutModal.scss'
export const LayoutModal = ({children,setModalAlert}) => {
    const handleClickModal = (event)=>{
        if(event.target.className === 'LayoutModal'){
       
            setModalAlert(e=>!e)
        }
    }
  return (
    <div className='LayoutModal' onClick={handleClickModal}>
        {children}
    </div>
  )
}
