function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === text) {
        return i;
      }
    }
    return -1;
  }
  
  // Ejemplos
  const personajes = [
    "Luke",
    "Leia",
    "Han Solo",
    "Chewbacca",
    "Rey",
    "Anakin",
    "Obi-Wan",
  ];
  
  console.log(findArrayIndex(personajes, "Rey")); // 4
  console.log(findArrayIndex(personajes, "Obi-Wan")); // 6
  
  function removeItem(array, text) {
    const index = findArrayIndex(array, text);
    if (index !== -1) {
      array.splice(index, 1);
    }
    return array;
  }
  
  // Ejemplos
  console.log(removeItem([...personajes], "Leia")); // elimina a Leia
  console.log(removeItem([...personajes], "Luke")); // elimina a Luke