/**
 * 
 * 包含了 对于 mongodb 数据库的 集合 进行 增删改查
 * 
 * insert 增加
 * 
 * remove 删除
 * 
 * update 更新
 * 
 * find   查询
 * 
 * index  自动增加索引方法
 */

const monk = require('monk')
const url = 'localhost:27017/vuejs'
const db = monk(url)

// 创建 集合 以及 索引 
/**
 * 
 * @param {collection name} name 
 * @param {id's name} idName 
 */
const creatCollectionAndIndex = (name, idName) => {
    let mainId = idName ? idName : 'id'
    db.createCollection(name)
    db.counters.insert({_id: mainId, sequence_value: 1})
}



// 添加索引    功能待定
const addIndex = (collection) => {
    db.get(collection).find({}).then((docs) => {
        var _id = docs[0].sequence_value
        function autoAdd() {
            return ++ _id
        }
    })
}



// 增加 数据
/**
 * 
 * @param {collection} collection 
 * @param {array content} content 
 */

const insert = (collection, content) => {
    db.get(collection).insert(content)
}



// 删除 数据 (集合)
/**
 * 
 * @param {collection} collection 
 */
const deleteCollection = (collection) => {
    db.get(collection).remove()
}
// 删除 数据 （单条数据）
/**
 * 
 * @param {collection} collection 
 * @param {row} row 
 */
const deleteRow = (collection, row) => {
    db.get(collection).remove(row)
}



// 修改数据
const update = (collection, raw) => {
    db.get(collection).update(raw)
}



// 查询数据   所有数据
const findAll = (collection, cb) => {
    db.get(collection).find({}).then((doc) => {
        cb(doc)
    })
}
// 条件查询单条数据
const findOne = (collection, query) => {
    db.get(collection).find(query).then((doc) => {})    // 指定 查询id 返回数据
}

module.exports = {
    creatCollectionAndIndex: creatCollectionAndIndex,
    addIndex: addIndex,
    insert: insert,
    deleteCollection: deleteCollection,
    deleteRow: deleteRow,
    update: update,
    findAll: findAll,
    findOne: findOne
}