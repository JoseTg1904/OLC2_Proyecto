const { Error } = require('../Errores/Error');

export class ListaErrores {

    constructor() {
    }

    validateEtiquetas(listaO: any): any {
        var tmpArray = [];
        for (let i = 0; i < listaO.length; i++) {
            if (listaO[i].identificador !== listaO[i].cierre) {
                tmpArray.push(
                    new Error('Semantico',
                        `Etiquetas incorrectas ${listaO[i].identificador} !=== ${listaO[i].cierre}`,
                        listaO[i].linea,
                        listaO[i].columna
                    ));
            }
        }
        return tmpArray;
    }
}
