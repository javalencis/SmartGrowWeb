
export const Logout = () => {

    const handleOnClickExit = () =>{
        sessionStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <button onClick={handleOnClickExit}>
            Cerrar Sesión
        </button>
    )
}
