/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */


const information = {
	name: 'Oleksandra',
	surname: 'Ostrovskaya',
	favoriteNumber: 2
}

const person = `My name is ${information.name} ${information.surname} and my favorite number is ${information.favoriteNumber}`

console.log(person)
    