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
const Nodo_1 = __importDefault(require("../models/Nodo"));
class NodoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getNodos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nodos = yield Nodo_1.default.find();
            res.json(nodos);
        });
    }
    getNodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const nodo = yield Nodo_1.default.findOne({ name: req.params.name }).populate('feeds'); // Visualizar el json completo de cada uno de los campos
            res.json(nodo);
        });
    }
    createNodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            /*
            const newNodo = new Nodo(req.body);
            awit newNodo.save();
            res.json({data: newNodo});
            */
            console.log(req.body);
            res.json('Received');
        });
    }
    updateNodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            const nodo = yield Nodo_1.default.findOneAndUpdate({ name }, req.body, { new: true });
            res.json(nodo);
        });
    }
    deleteNodo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.params;
            yield Nodo_1.default.findOneAndDelete({ name });
            res.json({ response: 'Nodo eliminado correctamente' });
        });
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
exports.default = nodoRoutes.router;
