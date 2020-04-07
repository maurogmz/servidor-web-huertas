"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FeedSchema = new mongoose_1.Schema({
    createdAt: { type: Date, default: Date.now() },
    field1: { type: String, required: true },
    field2: { type: String, required: true },
    field3: { type: String },
});
exports.default = mongoose_1.model('Feed', FeedSchema);
