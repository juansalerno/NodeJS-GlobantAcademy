const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisisanodecourse', /* optional argument: { expiresIn: '7 days' }*/)
    console.log(token)

    const data = jwt.verify(token, 'thisisanodecourse')
    console.log(data)
}

myFunction()