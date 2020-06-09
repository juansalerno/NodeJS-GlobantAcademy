const http = require('http');

const url = `http://api.weatherstack.com/current?access_key=0f84a0355d6df4a96ba93c8a628d5130&query=45,-75`;

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data += chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()