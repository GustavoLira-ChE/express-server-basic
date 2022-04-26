// Importar express
import express from "express";

//App de express
const app = express();

//Puerto en que se verá la aplicación: localhost:3000
const port = 3000;

//tring give an html file as server response with express.static
app.use(express.static('public'));

//path inicial, responderá a la url localhost:3000
app.get('/',(req,res) => {
    res.send('Hello World!')
});

//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchX')
});

//Agregar nueva ruta y regresar objeto
//localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {
        name: 'John',
        msg: 'Hola'
    }
    res.send(explorer)
});

//Query params: Receive parameters using url
//localhost:3000/explorers/john
app.get('/explorer/:explorerName', (req, res) => {
    res.send(req.params)
});


//Para inicializar la app
app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`)
});