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
            estado: warning ? "warning" : state

        })
        warning = false



    }
    return statesBlocks

}


export const formatDate = (dateISO) => {
    const date = new Date(dateISO);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

export const formatHour = (dateISO) => {
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
export const convertFormatDate = (dateAAAAMMDD) => {

    const [year, month, day] = dateAAAAMMDD.split('-');


    const dateDDMMAAAA = `${day}-${month}-${year}`;

    return dateDDMMAAAA;
}


export const arrayFilter = (array, filters) => {

    let arrayFiltered = array;

    if (filters.fecha_inicio != '' && filters.fecha_final != '') {
        arrayFiltered = array.filter((item) => {
            return filterDates(item, filters)

        })
    }

    if (filters.bloque != '') {
        arrayFiltered = arrayFiltered.filter((item) => {
            return filterBlocks(item, filters.bloque)

        })
    }

    if (filters.guirnalda != '') {
        arrayFiltered = arrayFiltered.filter((item) => {
            return filterGarland(item, filters.guirnalda)

        })
    }

    return arrayFiltered
}
const filterBlocks = (item, filter) => {

    return Number(filter) === item.bloque

}
const filterGarland = (item, filter) => {

    return Number(filter) === item.guirnalda

}

const filterDates = (item, filters) => {


    const fi = new Date(filters.fecha_inicio).getTime()
    const ff = new Date(filters.fecha_final).getTime()

    const date = new Date(convertFormatDate(formatDate(item.createdAt))).getTime()

    if (date >= fi && date <= ff) {

        return true

    }

}