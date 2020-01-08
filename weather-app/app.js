const request = require('request')
const url = "https://api.darksky.net/forecast/eb2048c191eb2a27ab8083c2a1b3dc87/37.8267,-122.4233"

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})




// console.log('starting')

// setTimeout(() => {
//     console.log('3 second timer')
// }, 3000)


// setTimeout(()=>{
//     console.log('2 second timer')
// },2000)
// console.log('stopping')