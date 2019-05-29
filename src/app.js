const exphbs = require('express-handlebars');
const express=require('express');
const app=express();

const PORT=3000;

app.listen(PORT, ()=>{

    console.log('Está furuling :)');
})
//Preparamos el entorno de plantillas Handlebars
app.engine("handlebars",exphbs())
app.set("view engine", "handlebars")
app.get('/',(request,response)=>
response.render("index"))


