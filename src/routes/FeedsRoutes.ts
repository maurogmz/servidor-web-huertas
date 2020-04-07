import { Request, Response, Router } from 'express';

import Feed from '../models/Feed';

class FeedRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public async getFeeds(req: Request, res: Response): Promise<void> {
        const feeds = await Feed.find();
        res.json(feeds);
    }

    public async getFeed(req: Request, res: Response): Promise<void> {
        
    }

    public async createFeed(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        res.json('Feed Received');
    }

    public async updateFeed(req: Request, res: Response): Promise<void> {

    }

    public async deleteFeed(req: Request, res: Response): Promise<void> {

    }

    routes() {
        this.router.get('/', this.getFeeds);
        this.router.get('/:url', this.getFeed);
        this.router.post('/', this.createFeed);
        this.router.put('/:url', this.updateFeed);
        this.router.delete('/:url', this.deleteFeed);
    } 

}

const feedRoutes = new FeedRoutes();
export default feedRoutes.router;