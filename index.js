import app from "./server.js"
import mongodb from "mongodb"
import ReviewDAO from "./dao/reviewsDAO.js"

const MongoClient = mongodb.MongoClient
const mongo_username = process.ev['MONGO_USERNAME']
const mongo_password = process.ev['MONGO_PASSWORD']
const uri = 'mongodb+srv://bynhi:cayruongrong2@cluster0.xuugji2.mongodb.net/'

const port = 8000

MongoClient.connect(
    uri, 
    {
        maxPoolSize: 50,
        wttimeoutMS: 2500,
        useNewUrlParser: true
    })
    .catch(err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client => {
        await RevireDAO.injectDB(client)
        app.listen(port, () => {
            console.log('listening on port ${port}')
        })
    })