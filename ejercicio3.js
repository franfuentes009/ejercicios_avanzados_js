const contadorSonidos = {};

for (const user of users) {
  for (const sound in user.favoritesSounds) {
    if (contadorSonidos[sound]) {
      contadorSonidos[sound]++;
    } else {
      contadorSonidos[sound] = 1;
    }
  }
}

console.log("Veces que se ha añadido cada sonido como favorito:");
console.log(contadorSonidos);