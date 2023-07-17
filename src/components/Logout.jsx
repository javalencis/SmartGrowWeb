
export const Logout = () => {

    const handleOnClickExit = () =>{
        sessionStorage.removeItem('token')
        window.location.reload()
    }

    return (
        <button className="LateralMenuButtonExit" onClick={handleOnClickExit}>
            Cerrar Sesión
        </button>
    )
}
