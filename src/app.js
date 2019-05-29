console.log("terreviento");
const express=require('express');
const app=express();

const PORT=3000;

app.listen(PORT, ()=>{
    console.log('Está furuling :)');
})
app.get('/',(request,response)=>
response.send("Hello World"))