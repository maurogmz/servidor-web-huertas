"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const NodoSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String },
    field1: { type: String, required: true },
    field2: { type: String, required: true },
    field3: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date,
    feeds: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Feed'
        }]
});
exports.default = mongoose_1.model('Nodo', NodoSchema);
