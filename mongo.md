mongo

db.addUser("root", "xxx")

use admin

show dbs

db.col.insert({"title": "this is title", "by":"zigzag", "likes": 120})

db.col.find()

db.col.find().pretty() 

add monk

test mongodb in local

nodejs 连接 mongo

mongod --dbpath $dbpath(数据库数据文件路径) (../data/db)  开启 mongodb 

mongod --dbpath ../data/db       访问 http://127.0.0.1:27017/ 即可访问 mongodb 了

C:\Program Files\MongoDB\Server\3.2\bin>mongod --dbpath D:/project/mongo/data/db