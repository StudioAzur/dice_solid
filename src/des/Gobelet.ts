import { Lanceable } from "./../interface/Lanceable";
class Gobelet implements Lanceable {
  protected _valeur: number = 0;
  protected contenu: Lanceable[];

  constructor(lanceables: Lanceable[]) {
    this.contenu = lanceables;
  }

  lancer(): void {
    this.valeur = 0;
    this.contenu.forEach((lanceable: Lanceable) => {
      lanceable.lancer();
      this.valeur += lanceable.valeur;
    });
  }

  public get valeur(): number {
    return this._valeur;
  }

  public set valeur(newValeur: number) {
    this._valeur = newValeur;
  }
}

export default Gobelet;
