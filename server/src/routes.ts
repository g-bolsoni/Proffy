import {Router} from 'express'
import ClassesControler from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = Router();
const classesControler = new ClassesControler();
const connectionsController = new ConnectionController();


routes.post('/classes', classesControler.create);
routes.get('/classes', classesControler.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);




export default routes