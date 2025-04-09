function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
  }
  
  const fantasticFour = [
    "La antorcha humana",
    "Mr. Fantástico",
    "La mujer invisible",
    "La cosa",
  ];
  
  console.log(swap([...fantasticFour], 1, 3)); // Intercambia Mr. Fantástico con La cosa
  console.log(swap([...fantasticFour], 0, 2)); // Intercambia Antorcha humana con Mujer invisible