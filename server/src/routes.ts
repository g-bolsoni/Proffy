import {Router} from 'express'
import ClassesControler from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = Router();
const classesControler = new ClassesControler();
const connectionsController = new ConnectionController();

routes.get('/classes', classesControler.index);
routes.post('/classes', classesControler.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);




export default routes