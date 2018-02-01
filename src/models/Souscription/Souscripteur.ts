export class Souscripteur {
  public Age: number;
  public Anciennete: number;
  public CodePostal: string;
  public Ville: string;

  constructor(age, anciennete, codePostal, ville) {
    this.Age = age;
    this.Anciennete = anciennete;
    this.CodePostal = codePostal;
    this.Ville = ville;
  }
}