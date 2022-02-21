const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const seatSchema = new Schema(
    {
        occupiedTime: {type: Array, default:[], required: true},
        table_num: { type: String, required: true},
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { timestamps: true }

);

module.exports = model("Seat", seatSchema);