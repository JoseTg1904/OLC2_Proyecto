import * as gramatica from './GramaticaXquery';

export class AnalizadorXquery {

    public ejecutarCodigo(entrada: string) {
        entrada = `
        for $x in /bookstore/book
return if ($x/@category="children")
then <child>{data($x/title)}</child>
else <adult>{data($x/title)}</adult>
        `
        console.log(gramatica.parse(entrada));
    }

}