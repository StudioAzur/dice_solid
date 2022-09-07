// Une interface représente un comportement qu'une classe doit respecter
// On peut le voir comme un contrat en le dev de l'interface et le developpeur de la classe qui implémente l'interface

export interface Lanceable {
  valeur: number;
  lancer(): void;
}
