/**********************************/
/*** Import des modules nécessaires */
const express = require('express')
const cors = require('cors')


/*****************************/
/*** Import de la connesion a la DB */
let DB = require('./db.config')

/*****************************/
/*** Initialisation de L'API */
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


/***************************/
/*** Mise en place du routage */

app.get('/', (req, res) => res.send(`I'm online. Weldone !`))

app.get('*', (req, res) => res.status(501).send(`Qu'est-ce que tu fou du con ?`))

/*******************************/
/*** Start server avec test DB */
DB.authenticate()
    .then(() => console.log('base connecté'))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`le server toune sur le port ${process.env.SERVER_PORT}`)
        })
    })
    .catch(err => console.log('connexion échoué', err))