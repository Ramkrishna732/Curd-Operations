import express from 'express';
const app=express()
import path from 'path';
import web from './routes/web.js'
const port=process.env.PORT || '3000';
import {connectDb} from './db/connectdb.js'
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://0.0.0.0:27017"; // making with database connnetion with url 

connectDb(DATABASE_URL);



app.use(express.urlencoded({extended:false}))////this is a built in middle ware function in Express .it parses incoming request with urlencoded payloads and is based on body parser

//static file 
app.use('/student',express.static(path.join(process.cwd(),"public")))
app.use('/student/edit',express.static(path.join(process.cwd(),"public")))

app.set("view engine","ejs")// here we are telling the browser that we are use ejs as a  view engine




app.use('/student',web); //here we are using the route  

app.listen(port,()=>{
    console.log(`server running on ${port} port`)
})



