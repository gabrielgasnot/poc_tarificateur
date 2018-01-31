export class TarifLigne {
    public ObjetComptable : string;
    public PrimePure : number;
    public MontantHt : number;
    public TauxTaxe : number;
    public MontantTaxe : number;
    public TauxCommission : number;
    public MontantCommission : number;
    public MontantReversementCompagnie : number;

    constructor(objetComptable, primePure, montantHt, tauxTaxe, montantTaxe, tauxCommission, montantCommission, reversementCompagnie) {
        this.ObjetComptable = objetComptable;
        this.PrimePure = primePure;
        this.MontantHt = montantHt;
        this.TauxTaxe = tauxTaxe;
        this.MontantTaxe = montantTaxe;
        this.TauxCommission = tauxCommission;
        this.MontantCommission = montantCommission;
        this.MontantReversementCompagnie = reversementCompagnie;
    }
}