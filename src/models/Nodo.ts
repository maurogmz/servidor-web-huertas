import { Schema, model } from 'mongoose';

const NodoSchema = new Schema ({
    name: { type: String, required: true },
    description: { type: String },
    field1: { type: String, required: true },
    field2: { type: String, required: true },
    field3: { type: String},
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date,
    feeds: [{
        type: Schema.Types.ObjectId,
        ref: 'Feed'
    }]
});

export default model('Nodo', NodoSchema);