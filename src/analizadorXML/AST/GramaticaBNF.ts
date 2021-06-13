
export class GramaticaBNF {

    public reporte: any;
    public reporte2: any;

    constructor(repo: any, repo2: any) {
        this.reporte = repo;
        this.reporte2 = repo2;
    }

    getBNFReport(): string {
        var reportBody = `<TABLE BORDER> \n`;
        reportBody += `    <thead> \n`;
        reportBody += `        <tr> \n`;
        reportBody += `        <th>Producción</th> \n`;
        reportBody += `        <th>Regla Semantica</th> \n`;
        reportBody += `        </tr> \n`;
        reportBody += `    </thead> \n`;
        reportBody += `    <tbody> \n`;

        for (let i = 0; i < this.reporte.length; i++) {
            reportBody += this.generarBodyReporte(this.reporte[i], this.reporte2[i]);
        }

        reportBody += `    </tbody> \n`;
        reportBody += `</TABLE> \n`;
        return reportBody;
    }

    generarBodyReporte(object: any, object2: any): string {
        var fila = `  <tr> \n`;
        fila += `      <td class="text-left">${object}</td>\n`;
        fila += `      <td class="text-left">${object2}</td>\n`;
        fila += `  </tr> \n`;
        return fila;
    }

}

