import { Lanceable } from "./interface/Lanceable";
import De from "./des/De";
import Gobelet from "./des/Gobelet";

//const de1: De = new De(6);
/* const de2: De = new De(10);
const de3: De = new De(12);*/
const de4: De = new De(20); 

const boiteADe: De[] = [];
const boiteALanceable: Lanceable[] = [];

for (let index = 0; index < 10; index++) {
  const de = new De(20);
  boiteADe.push(de);
}

boiteALanceable.push(de4);

// Principe de substition de Liskov
const gobelet: Gobelet = new Gobelet(boiteADe);
const gobeletLiskov: Gobelet = new Gobelet(boiteALanceable);

gobelet.lancer();
gobeletLiskov.lancer();

// Ranger les dés dans une boîte à dés

// Mieux ranger les dés dans un boîte de lanceable

boiteADe.forEach((de) => de.lancer);
console.table(boiteADe);

console.log(`Gobelet de ${boiteADe.length} dès`, gobelet.valeur);
console.log(`Gobelet Liskov de 1 dé , valeur : ${gobeletLiskov.valeur}`);
