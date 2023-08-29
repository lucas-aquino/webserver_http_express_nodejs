import express from "express";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs'
import 'dotenv/config'

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express()
const port = process.env.PORT

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(`${ __dirname }/views/partials`, (err) => err ? console.log(err) : null)

//servir contenido estatico
app.use( express.static('public') )

const info = {
  nombre: 'Lucas Aquino',
  info: 'Curso Nodejs'
}


app.get('/', (req, res) => {
  res.render('home', {
    ...info
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    ...info
  })
})

app.get('/elements', (req, res) => {
  res.render('elements', {
    ...info
  })
})

/* send html
app.get('*', (req, res) => {
  res.sendFile(`${ __dirname }/public/404.html`)
})
*/

app.get('*', (req, res) => {
  res.render('404', {
    ...info
  })
})

app.listen(port, () => {
  console.log(`Corriendo en el puerto ${ port }`)
})