import {Router} from 'express'
import ClassesControler from './controllers/ClassesController';

const routes = Router();
const classesControler = new ClassesControler();

routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);





export default routes