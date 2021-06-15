
export class xpathBusqueda {

    constructor() {
    }

    getNodesByFilters(filter: any, param: any, objects: any) {
        if (filter === '1') {
            console.log('val nodo\n\t', this.findByRootName(param, objects));
        }
        if (filter === '2') {
            console.log('val nodo\n\t', this.validateRootNode(param.substring(1), objects));
        }
        if (filter === '3') {
            console.log('val nodo\n\t', this.findByPath(param, objects));
        }
    }

    // 1. Obtener cuando solo se escribe el nombre
    findByRootName(param: any, objects: any): string {
        var valorNodo = '';
        objects.forEach((obj: any) => {
            if (obj.identificador === param) {
                valorNodo += '\n - ';
                if (obj.listaObjetos.length !== 0) {
                    valorNodo += this.findValuesNodes(obj);
                } else {
                    valorNodo += obj.text;
                }
            }
        });
        return valorNodo;
    }

    // 2. Obtener cuando la ruta empiza por el root '/'
    validateRootNode(param: any, objects: any): string {
        var parameters = param.split('/');
        var texto = '';
        var root = parameters[0];
        objects.forEach((obj: any) => {
            var tmpParam = param.split('/');
            if (obj.identificador === root) {
                if (tmpParam.length === 1) {
                    texto += `++ ${this.findValuesNodes(obj)}\n`;
                } else {
                    tmpParam.shift();
                    texto += this.findByRootNode(tmpParam, obj);
                }
            }
        });
        return texto;
    }

    findByRootNode(param: any, objects: any): string {
        var texto = '';
        var parameters = param;
        var root = parameters[0];
        if (objects.listaObjetos.length !== 0) {
            objects.listaObjetos.forEach((obj: any) => {
                var tmpParam = parameters;
                if (obj.identificador === root) {
                    if (tmpParam.length === 1) {
                        texto += `++ ${this.findValuesNodes(obj)}\n`;
                    } else {
                        tmpParam.shift();
                        texto += this.findByRootNode(tmpParam, obj);
                    }
                }
            });
        } else if (objects.identificador === root) {
            texto += objects.texto;
        }
        return texto;
    }

    // 3. Obtener por ruta no relativa 
    findByPath(param: any, objects: any) {
        var parameters = param.split('/');
        var texto = '';
        var root = parameters[0];
        objects.forEach((obj: any) => {
            var tmpParam = param.split('/');
            if (obj.identificador === root) {
                if (tmpParam.length === 1) {
                    texto += `-- ${this.findValuesNodes(obj)}\n`;
                } else {
                    tmpParam.shift();
                    texto += this.findNodesByPath(tmpParam, obj);
                }
            } else {
                texto += this.findNodesByPath(tmpParam, obj);
            }
        });
        return texto;
    }

    findNodesByPath(param: any, objects: any) {
        var texto = '';
        var parameters = param;
        var root = parameters[0];
        if (objects.listaObjetos.length !== 0) {
            objects.listaObjetos.forEach((obj: any) => {
                var tmpParam = parameters;
                if (obj.identificador === root) {
                    console.log('node ', obj.identificador);
                    if (tmpParam.length === 1) {
                        console.log('entra');
                        texto += `++ ${this.findValuesNodes(obj)}\n`;
                    } else {
                        tmpParam.shift();
                        texto += this.findNodesByPath(tmpParam, obj);
                    }
                } else {
                    texto += this.findNodesByPath(tmpParam, obj);
                }
            });
        } else if (objects.identificador === root) {
            texto += objects.texto;
        }
        return texto;
    }


    // Obtener el valor de los nodos
    findValuesNodes(nodeList: any): string {
        var texto = ' ';
        if (nodeList.listaObjetos.length !== 0) {
            nodeList.listaObjetos.forEach((obj: any) => {
                texto += this.findValuesNodes(obj);
            });
        } else {
            texto += nodeList.texto;
        }
        return texto;
    }

}
/*
1   all by name

*/