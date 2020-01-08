const fs= require('fs')

const readfile= fs.readFileSync('1-json.json')
const stringData= readfile.toString()
const parsedData= JSON.parse(stringData)
console.log(parsedData)
parsedData.name="Sajal"
parsedData.age= 24

const userJSON= JSON.stringify(parsedData)
fs.writeFileSync('1-json.json', userJSON)