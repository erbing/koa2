mongo

db.addUser("root", "xxx")

use admin

show dbs

db.col.insert({"title": "this is title", "by":"zigzag", "likes": 120})

db.col.find()

db.col.find().pretty() 