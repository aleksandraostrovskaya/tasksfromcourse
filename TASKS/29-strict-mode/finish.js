/** ЗАДАЧА 29 - Строгий режим
 *
 * 1. Исправьте ошибку, которая возникает при включенном строгом режиме
 *
 * 2. Что будет, если отключить строгий режим?
 */

'use strict'

function myFunction() {
   const a = 2
  return a
}

myFunction()


// Чтобы убрать ошибку нужно добавить const на 11 строку 

// Если отключить строгий режим ошибки не будет так как без строго режима можна использовать переменные без их обьявления