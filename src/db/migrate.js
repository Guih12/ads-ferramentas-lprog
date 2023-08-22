const Database = require('./database')
const { createTableProducts } = require('./migrations/001_create_table_products')
const { createTableUsers } = require('./migrations/002_create_table_users')

const up = async () => {
    const database = Database.create("postgres")

    try{
        await database.connect()
        await database.query(createTableProducts())
        await database.query(createTableUsers())
    }catch(err){
        console.error(err)
    }finally{
        await database.disconnect()
    }
}

up()
