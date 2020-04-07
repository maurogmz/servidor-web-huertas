import { Schema, model } from 'mongoose';

const FeedSchema = new Schema ({
    createdAt: { type: Date, default: Date.now() },
    field1: { type: String, required: true },
    field2: { type: String, required: true },
    field3: { type: String},
});

export default model('Feed', FeedSchema);