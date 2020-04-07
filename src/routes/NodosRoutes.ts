import { Request, Response, Router } from 'express';

import Nodo from '../models/Nodo';

class NodoRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getNodos(req: Request, res: Response): Promise<void> {
        const nodos = await Nodo.find();
        res.json(nodos);
    }

    public async getNodo(req: Request, res: Response): Promise<void> {
        const nodo = await Nodo.findOne({name: req.params.name}).populate('feeds'); // Visualizar el json completo de cada uno de los campos
        res.json(nodo);
    }

    public async createNodo(req: Request, res: Response): Promise<void> {
        /*
        const newNodo = new Nodo(req.body);
        awit newNodo.save();
        res.json({data: newNodo});
        */

        console.log(req.body);
        res.json('Received');
    }

    public async updateNodo(req: Request, res: Response): Promise<void> {
        const { name } = req.params;
        const nodo = await Nodo.findOneAndUpdate({ name }, req.body, { new: true });
        res.json(nodo);
    }

    public async deleteNodo(req: Request, res: Response): Promise<void> {
        const { name } = req.params;
        await Nodo.findOneAndDelete({name});
        res.json({response: 'Nodo eliminado correctamente'});
    }

    routes() {
        this.router.get('/', this.getNodos);
        this.router.get('/:url', this.getNodo);
        this.router.post('/', this.createNodo);
        this.router.put('/:url', this.updateNodo);
        this.router.delete('/:url', this.deleteNodo);
    } 

}

const nodoRoutes = new NodoRoutes();
export default nodoRoutes.router;