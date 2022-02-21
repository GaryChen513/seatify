const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const floorSchema = new Schema(
    {   
        seats: {type: Array, default:[],required: true},
        floor_level: {type: Number, required: true},
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }
);

module.exports = model('Floor', floorSchema);