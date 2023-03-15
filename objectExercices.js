/* Exercice 1 : Accéder aux propriétés d'un objet
Créez un objet personne avec les propriétés nom, âge et ville, puis affichez chacune de ces propriétés dans la console.
Exemple :

*/

const personne = {nom: "Paillard", age: 35, ville: "Villeurbanne"};

console.log("Exercice 1 : ", personne.nom, personne.age, personne.ville);
//console.log(personne);

/*
Exercice 2 : Modifier une propriété d'un objet
Créez un objet personne avec les propriétés nom, âge et ville, puis modifiez la propriété ville pour la remplacer par "Lyon".
Exemple :

*/
const personne2 = {nom: "Paillard", age: 35, ville: "Villeurbanne"};

personne2.ville = "Lyon";

console.log("Exercice 2 : ", personne2.ville);

/*
Exercice 3 : Ajouter une propriété à un objet
Créez un objet personne avec les propriétés nom, âge et ville, puis ajoutez une nouvelle propriété profession avec la valeur "Ingénieur".
Exemple :

*/

const personne3 = {nom: "Paillard", age: 35, ville: "Villeurbanne"};

personne3["profession"] = "Professeur";

console.log("Exercice 3 : ", personne3.profession);

/*
Exercice 4 : Parcourir les propriétés d'un objet
Créez un objet personne avec les propriétés nom, âge et ville, 
puis parcourez toutes les propriétés de cet objet 
et affichez-les dans la console.
Exemple :
*/

const personne4 = {nom: "Paillard", age: 35, ville: "Villeurbanne"};

for (const property in personne4) {
  console.log("Exercice 4 : ", `${property} : ${personne4[property]}`)
}

/*
Exercice 5 : Ajouter une propriété à un objet
Écrivez une fonction qui prend en entrée un objet et une clé/valeur, 
et qui ajoute cette clé/valeur comme propriété à l'objet.
Exemple :
*/

function addProperty(object, propertyName, value) {
  object[propertyName] = value;

  return object;
}

const personne5 = {nom: "Francois", age: 32, ville: "Lyon"}

console.log("Exercice 5 : ", addProperty(personne5, "language", "Javascript"));
/*
Exercice 6 : Supprimer une propriété d'un objet
Écrivez une fonction qui prend en entrée un objet et une clé, et qui supprime cette clé comme propriété de l'objet.
Exemple :
*/

function deleteProperty(object, property) {
  delete object[property];

  return object;
}

const personne6 = {nom: "Francois", age: 32, ville: "Lyon"}

console.log("Exercice 6 : ", deleteProperty(personne6, "ville"));

/*
Exercice 7 : Copier un objet
Écrivez une fonction qui prend en entrée un objet et qui renvoie une copie de cet objet.
Exemple :
*/


/*
Exercice 8 : Fusionner deux objets
Écrivez une fonction qui prend en entrée deux objets et qui renvoie un nouvel objet qui est la fusion des deux objets.
Exemple :
*/
