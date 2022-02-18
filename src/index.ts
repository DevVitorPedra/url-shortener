import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'
const port =process.env.PORT || 5000
const app = express()
app.use(express.json())
const database = new MongoConnection

database.connect()

const urlController =  new URLController;
app.get('/',urlController.redirect)
app.post('/shorten',urlController.shorten)


app.listen(5000,()=>{
    console.log('rodando na ', port )

})