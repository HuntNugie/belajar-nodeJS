// mengimport module thrid party
// untuk memvalidasi data
import validator from "validator"
// untuk mengubah berwarna
import chalk from "chalk"

// mencoba valdator
console.log(validator.isEmail("Nugie"))
console.log(validator.isEmail("nugiekurniawan02@gmail.com"))
console.log(validator.contains("javascript","javascript"))
console.log(validator.isMobilePhone("087157933682","id-ID"))
console.log(validator.isDecimal("087157933682"))
// mencoba chalk
console.log(chalk.blue.bgRed("Persib bandung"))
console.log(chalk.bold.black.bgWhite("Nugie ganteng"))
