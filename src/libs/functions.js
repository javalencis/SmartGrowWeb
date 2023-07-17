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


export const formatDate = (dateISO)=> {
    const date = new Date(dateISO);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${day}-${month}-${year}`;
}

export const formatHour = (dateISO)=> {
    const date = new Date(dateISO);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    // Formatear las horas para el formato de 12 horas
    hours = hours % 12 || 12;
  
    // Agregar un 0 antes de los minutos si son menores a 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    return `${hours}:${minutes} ${ampm}`;
  }