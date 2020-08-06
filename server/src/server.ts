import express from 'express';
import routes from './routes';

const app = express();
app.use(express.json())
app.use(routes);

//https://localhost:3333/users
//https://localhost:3333/contacts


app.listen(3333);



