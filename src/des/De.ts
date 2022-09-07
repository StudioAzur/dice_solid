class De {
  nombreFace: number;
  protected _valeur: number = 0;

  constructor(nombreFace: number) {
    this.nombreFace = nombreFace;
    this.lancer();
  }

  lancer() {
    this._valeur = Math.ceil(Math.random() * this.nombreFace);
  }

  public get valeur() {
    return this._valeur;
  }

  protected set valeur(newVal: number) {
    // Car seul lancer appelle le setter 
    // -> YAGNI : You Ain't Gonna Need It ! 
    if (newVal < 1 || newVal > 6) {
      throw new Error("Le dé doit avoir une valeur entre 1 et 6 inclus");
    } else {
      this._valeur = newVal;
    }
  }
}
export default De;
