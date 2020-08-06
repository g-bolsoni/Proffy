import express from 'express';
//import routes from './models/routes'

const app = express();
app.use(express.json())

//https://localhost:3333/users
//https://localhost:3333/contacts
app.get('/users',(req,res) =>{
    const {name, age} = req.body
    console.log(`My name is ${name} and i have ${age} years old `)
    return res.json(name)
});

app.listen(3333);



