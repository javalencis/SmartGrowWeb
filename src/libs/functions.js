export const getStateBlocks = (arrayBlocks) => {
    //Hacer pruebas para saber cuando hay on y off a la vez un bloque
    let statesBlocks = []
    let warning = false
    let state;
    for (let i = 1; i <= arrayBlocks.length; i++) {
        const arrayBloque = arrayBlocks.filter(obj => obj.bloque === i)
        arrayBloque.forEach(obj => {
            if (obj.estado === "warning") {
                warning = true
            } else {
                state = obj.estado
            }
        });

        statesBlocks.push({
            bloque: i,
            estado: warning ? "warning":state

        })
        warning =false
      


    }
    return statesBlocks

}