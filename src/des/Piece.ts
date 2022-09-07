import { Lanceable } from './../interface/Lanceable';
class Piece implements Lanceable{
   protected _valeur: number = 0;

   lancer(){
     this.valeur = Math.ceil(Math.random() * 2)
   }

   public get valeur (){
    return this._valeur;
   }

   public set valeur(newValeur){
      this._valeur = newValeur;
   }
}

export default Piece