// Importar express
import express from "express";

//App de express
const app = express();

//Puerto en que se verá la aplicación: localhost:3000
const port = 3000;

//path inicial, responderá a la url localhost:3000
app.get('/',(req,res) => {
    res.send('Hello World!')
});

//Para inicializar la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})