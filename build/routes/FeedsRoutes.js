"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Feed_1 = __importDefault(require("../models/Feed"));
class FeedRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getFeeds(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const feeds = yield Feed_1.default.find();
            res.json(feeds);
        });
    }
    getFeed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    createFeed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            res.json('Feed Received');
        });
    }
    updateFeed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    deleteFeed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
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
exports.default = feedRoutes.router;
