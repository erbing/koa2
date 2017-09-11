const monk = require('monk')
const url = 'localhost:27017/vuejs'
const db = monk(url)

db.then(() => {
    console.log('Connected correctly to server')
})

// 集合
const collection = db.get('document')

// db.createCollection("counters")
// db.counters.insert({_id:"productid",sequence_value:1})

collection.insert([{a: 1}, {a: 2}, {a: 3}])
.then((docs) => {
  // docs contains the documents inserted with added **_id** fields
  // Inserted 3 documents into the document collection
}).catch((err) => {
  // An error happened while inserting
}).then(
    // () => db.close()
)