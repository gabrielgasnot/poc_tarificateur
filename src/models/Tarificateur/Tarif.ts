import { TarifLigne } from './TarifLigne';

export class Tarif {
    public Lignes = Array<TarifLigne>();
    public MontantHT : number;
    public MontantTaxes : number;
    public MontantCommission : number;
    public MontantReversementCompagnie : number;
    public MontantTTC : number;

    constructor(lignes : Array<TarifLigne>) {
        this.Lignes = lignes;
        this.calculate();
    }

    calculate()
    {
        this.reset();

        this.Lignes.forEach(element => {
            this.MontantHT += element.MontantHt;
            this.MontantTaxes += element.MontantTaxe;
            this.MontantCommission += element.MontantCommission;
            this.MontantReversementCompagnie += element.MontantReversementCompagnie;
        });

        this.MontantTTC = this.MontantHT + this.MontantTaxes;
    }

    reset() {
        this.MontantHT = 0.00;
        this.MontantCommission = 0.00;
        this.MontantTaxes = 0.00;
        this.MontantReversementCompagnie = 0.00;
        this.MontantTTC = 0.00;
    }
}