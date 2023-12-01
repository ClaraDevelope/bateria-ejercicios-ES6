//! Dado el siguiente javascript usa forof para recorrer el array de películas,
//! genera un nuevo array con las categorías de las películas e imprime por
//! consola el array de categorías. Ten en cuenta que las categorías no deberían
//! repetirse.
//! Para filtrar las categorías puedes ayudarte de la función .includes().✅

const movies = [
  {
    title: 'Bracula: Condemor II',
    duration: 192,
    categories: ['comedia', 'aventura']
  },
  {
    title: 'Spider-Man: No Way Home',
    duration: 122,
    categories: ['aventura', 'acción']
  },
  {
    title: 'The Voices',
    duration: 223,
    categories: ['comedia', 'thriller']
  },
  {
    title: 'Shrek',
    duration: 111,
    categories: ['comedia', 'aventura', 'animación']
  }
]
const categories = []
for (const movie of movies) {
  for (const category of movie.categories) {
    if (!categories.includes(category)) {
      categories.push(category)
    }
  }
}
console.log(categories)
//! Dado el siguiente javascript usa forof y forin para hacer la media del
//! volumen de todos los sonidos favoritos que tienen los usuarios.✅

const users = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]
let totalVolume = 0
let countSound = 0
for (const user of users) {
  for (const favoriteSound in user.favoritesSounds) {
    totalVolume += user.favoritesSounds[favoriteSound].volume
    countSound++
  }
}
const average = totalVolume / countSound
console.log(average)

//! Dado el siguiente javascript usa forof y forin para saber cuantas veces ha
//! sido cada sonido agregado por los usuarios a favorito.
//! Para ello recorre la lista de usuarios y usa forin para recoger el nombre
//! de los sonidos que el usuario tenga como favoritos.
//! Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada
//! vez que ese sonido se repita como favorito en cada usuario.
//! Este ejercicio es un poco complicado con los conocimientos actuales pero...a
//! la vez un buen reto y oportunidad para comprender que hay muchas formas de
//! hacer las cosas en javascript.✅

const users2 = [
  {
    name: 'Alberto',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 50 },
      rain: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Antonio',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 30 },
      shower: { format: 'ogg', volume: 55 },
      train: { format: 'mp3', volume: 60 }
    }
  },
  {
    name: 'Pedro',
    favoritesSounds: {
      shower: { format: 'mp3', volume: 50 },
      train: { format: 'ogg', volume: 60 },
      firecamp: { format: 'mp3', volume: 80 }
    }
  },
  {
    name: 'Cristina',
    favoritesSounds: {
      waves: { format: 'mp3', volume: 67 },
      wind: { format: 'ogg', volume: 35 },
      firecamp: { format: 'mp3', volume: 60 }
    }
  }
]

for (const user2 of users2) {
  for (const sound in user2.favoritesSounds) {
    const name = [sound]
    console.log(name[0])
  }
}

//! Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.✅
//! Haz varios ejemplos y compruebalos.✅

//! Sugerencia de función:
function findArrayIndex(array, text) {
  for (let i = 0; i <= array.length; i++) {
    element = array[i]
    if (element === text) {
      return i
    }
  }
}
const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]
findArrayIndex(mainCharacters, Luke)

//! Usando la función anterior beneficiate de poder conocer el indice del array
//! para crear una función llamada removeItem que pasandole un array y un texto
//! como parametros (los mismos parametros que en el anterior ejercicio) llame a
//! la función anteriormente creada findArrayIndex y obten el indice para
//! posteriormente usar la función de javascript .splice() para eliminar el
//! elemento del array.

//! Finalmente retorna el array.

//! De nuevo haz varios ejemplos para practicar y comprueba que funcionan
//! correctamente.✅

function removeItem(array, text) {
  const index = findArrayIndex(array, text)
  array.splice(index, 1)
  return array
}

console.log(mainCharacters, Anakin)
// !___________________________________________________________________________________

// !Crea una función llamada rollDice() que reciba como parametro el numero de caras
//! que queramos que tenga el dado que deberá simular el codigo dentro de la función.
//! Como hemos dicho, que la función use el parametro para simular una tirada de dado
//! y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te
//! preocupes! Busca información sobre la función de javascript Math.random()✅
const rollDice = (numFaces) => {
  const randomNumber = Math.floor(Math.random() * numFaces) + 1
  return randomNumber
}
//! Crea una función llamada swap que reciba un array y dos parametros que sean
//! indices del array. La función deberá intercambiar la posición de los valores de
//! los indices que hayamos enviado como parametro. Retorna el array resultante.✅

const swap = (array, index1, index2) => {
  for (let index = 0; index < array.length; index++) {
    const element = array[i]
    if (element.index === index1) {
      index2 === element.index
    }
    return array
  }
}

const fantasticFour = [
  'La antorcha humana',
  'Mr. Fantástico',
  'La mujer invisible',
  'La cosa'
]
