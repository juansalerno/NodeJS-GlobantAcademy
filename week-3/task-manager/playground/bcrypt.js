// npm module to hashing passwords
const bcrypt = require('bcryptjs')

// hashing is an irreversible action, while encrypting is reversible

const myFunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    console.log(isMatch)
}

myFunction()