//! 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
//! los alumnos usando la función .reduce().✅
const exams = [
  { name: 'Yuyu Cabeza Crack', score: 5 },
  { name: 'Maria Aranda Jimenez', score: 1 },
  { name: 'Cristóbal Martínez Lorenzo', score: 6 },
  { name: 'Mercedez Regrera Brito', score: 7 },
  { name: 'Pamela Anderson', score: 3 },
  { name: 'Enrique Perez Lijó', score: 6 },
  { name: 'Pedro Benitez Pacheco', score: 8 },
  { name: 'Ayumi Hamasaki', score: 4 },
  { name: 'Robert Kiyosaki', score: 2 },
  { name: 'Keanu Reeves', score: 10 }
]
const notas = exams.reduce((acc, exam) => acc + exam.score, 0)
console.log(notas)
//! 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
//! alumnos que esten aprobados usando la función .reduce().✅
const aprovedExams = exams.filter((exam) => exam.score >= 5)
const sumAprovedExams = aprovedExams.reduce((acc, exam) => acc + exam.score, 0)
console.log(sumAprovedExams)

//! 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().✅
const average =
  exams.reduce((accumulator, exam) => accumulator + exam.score, 0) /
  exams.length

console.log(average)

//! 8.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
//! .filter() y usa .reduce() para conseguir la media de sus .score.
//! La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
//! array .gender.✅

const videogames = [
  { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
  { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
  { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
  { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
  { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
  { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10 }
]
const filter = videogames.filter((videogame) =>
  videogame.genders.find((gender) => gender === 'RPG')
)
const averageRpg =
  filter.reduce((acc, videogame) => acc + videogame.score, 0) / filter.length
console.log(averageRpg)
