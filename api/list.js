const monk = require('monk')
const url = 'localhost:27017/vuejs'
const db = monk(url)

console.log(db)

db.then(() => {
    console.log('Connected correctly to server')
})

// db.createCollection("counters")
// db.counters.insert({_id:"productid",sequence_value:1})