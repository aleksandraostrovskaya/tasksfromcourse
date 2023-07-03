/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const carOne ={
	carBrand : 'camaro',
	price : 1333,
	isAvailableForSale : true
}
const carTwo ={
	carBrand : 'BMW',
	price : 5768,
	isAvailableForSale : true

}

const carThree ={
	carBrand : 'Ford',
	price : 789,
	isAvailableForSale : false

}

const carFour = {
	carBrand : 'Honda',
	price : 5600,
	isAvailableForSale : false

}

const myArray = [carOne, carTwo, carThree]

myArray.push(carFour)


console.log(myArray)