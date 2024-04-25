const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


//Middlware

app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routers/ContactRoute');
const routeruser = require('./routers/UserRoute');

app.use('/contact', router);
app.use('/user', routeruser)

// test api

app.get('/', (req, res) => {
   res.header("Access-Control-Allow-Origin", "*")
   res.json({ message: 'Hello bienvenu 2' })
})

//port
const port = process.env.port || 8081
//server

app.listen(port, () => {
   console.log(`le serveur utilise le port ${port}`)
})
