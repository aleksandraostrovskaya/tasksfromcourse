/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */


let myString = 'Good Morning'

let myStringTwo = myString = 'Good Evening'

console.log(myStringTwo)
	

// option 2
const greeting = 'Good Morning'

const greetingTwo = greeting.replace('Morning', 'Evening')

console.log(greetingTwo)
