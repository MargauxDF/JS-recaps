/* 
Exercice 1 : Calculer la somme des éléments d'un tableau
Écrivez une fonction qui prend en entrée un tableau de nombres 
et qui renvoie la somme de ses éléments.
Exemple :

sum([1, 2, 3, 4, 5]); // Renvoie 15
*/

const arr = [1, 2, 3, 4, 5]

// Définition de la fonction sum => ne retourne rien en tant que tel
function sum(arrayOfNumbers) {
  let sumOfNumbers = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sumOfNumbers += arrayOfNumbers[i];
    // sumOfNumbers = sumOfNumbers + arrayOfNumbers[i];
  }

  return sumOfNumbers;
}


console.log("exercice 1: ", sum(arr));

/*
Exercice 2 : Trouver le plus grand élément d'un tableau
Écrivez une fonction qui prend en entrée un tableau de nombres
et qui renvoie le plus grand élément de ce tableau.

Exemple :

max([1, 2, 3, 4, 5]); // Renvoie 5 
*/

function max(arrayOfNumbers) {
  let numberMax;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (numberMax === undefined || arrayOfNumbers[i] > numberMax) {
      numberMax = arrayOfNumbers[i];
    }
  }

  return numberMax;
}

console.log("exercice 2: ", max([-2, -3]));


/*
Exercice 3 : Inverser l'ordre des éléments d'un tableau
Écrivez une fonction qui prend en entrée un tableau 
et qui renvoie un nouveau tableau avec les mêmes éléments 
mais dans l'ordre inverse.
Exemple :

reverse([1, 2, 3, 4, 5]); // Renvoie [5, 4, 3, 2, 1] 
*/

function reverse(array) {
  const reversedArray = [];

  for (let i = array.length -1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

console.log("exercice 3: ", reverse(arr));

/*
Exercice 4 : Vérifier si un élément est présent dans un tableau
Écrivez une fonction qui prend en entrée un tableau 
et un élément, et qui renvoie true si cet élément est présent 
dans le tableau, false sinon.
Exemple :

contains([1, 2, 3, 4, 5], 3); // Renvoie true contains([1, 2, 3, 4, 5], 6); // Renvoie false 
*/

// function contains(array, valueToFind) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === valueToFind) {
//       return true;
//     }
//   }
//   return false;
// }

function contains(array, valueToFind) {
  if (array.indexOf(valueToFind) !== -1){
    return true;
  } 
  return false;
}

console.log("exercice 4: ", contains([1, 2, 3, 4, 5], 3), contains([1, 2, 3, 4, 5], 7));

/*
Exercice 5 : Compter le nombre d'éléments d'un tableau qui satisfont à une condition donnée
Écrivez une fonction qui prend en entrée un tableau 
et une fonction de test, et qui renvoie le nombre d'éléments 
du tableau qui satisfont à cette fonction de test.
Exemple :

countElements([1, 2, 3, 4, 5], function(element) { return element % 2 === 0; }); // Renvoie 2 (car il y a 2 éléments pairs dans le tableau) 
*/

console.log("exercice 5: ");

/*
Exercice 6 : Créer une fonction qui remet les éléments d'un tableau
dans le bon ordre

Exemple :
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

function sortArray(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      if (arrayOfNumbers[i] > arrayOfNumbers[j]) {
        let tempValue = arrayOfNumbers[i];
        arrayOfNumbers[i] = arrayOfNumbers[j];
        arrayOfNumbers[j] = tempValue;
      }
    }
  }
  return arrayOfNumbers;
}

console.log("Exercice 6: ", sortArray([ -3, 8, 7, 6, 5, -4, 3, 2, 1 ]));
