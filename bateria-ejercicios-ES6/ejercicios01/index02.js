// ! 3.1 Dado el siguiente array, crea una copia usando spread operators.✅
const pointsList = [32, 54, 21, 64, 75, 43]
const newPointList = [...pointsList]
console.log(newPointList)

// ! 3.2 Dado el siguiente objeto, crea una copia usando spread operators.✅
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const newToy = { ...toy }
console.log(newToy)

// !3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
//! spread operatos.✅
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointsLis2 = [54, 87, 99, 65, 32]
const newList = [...pointsList1, ...pointsLis2]
console.log(newList)

// ! 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// ! con spread operators.✅
const toy2 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' }
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }
const newUpdateToy = { ...toy2, ...toyUpdate }
console.log(newUpdateToy)

// ! 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// ! pero sin editar el array inicial. De nuevo, usando spread operatos.✅
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']

const copyColors = [...colors]

copyColors.splice(2, 1)

console.log(copyColors)

//! 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().✅
const users = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

console.log(users.map((user) => user.name))
//! 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
//! de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.✅
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
]

const names2 = users2.map((user) => {
  if (user.name[0] === 'A') {
    return 'Anacleto'
  } else {
    return user.name
  }
})
console.log(names2)
//! 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//! de la propiedad .name y añade al valor de .name el string ' (Visitado)'
//! cuando el valor de la propiedad isVisited = true.✅
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
]
const isVisitedCities = cities.map((city) => {
  if (city.isVisited === true) {
    return `${city.name} visitado`
  } else {
    return city.name
  }
})
console.log(isVisitedCities)
