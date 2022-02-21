const mongoose = require("mongoose");
const db = require("../models");
const level = require("./seed");
const _ = require("lodash");

const table_size = 128; // default number of table is 128;
const num_of_table_per_floor = 32;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seatifyDB", {
  useNewUrlParser: true,
});

async function seed() {
  await db.Floor.deleteMany({});
  await db.Seat.deleteMany({});

  // generate Seat table
  for (let i = 0; i < table_size; i++) {
    await db
      .Seat({
        table_num: i,
        occupiedTime: [9, 10, 11, 12],
      })
      .save();
  }

  // generate Floor table
  const num_of_floor = table_size / num_of_table_per_floor;

  for (let level = 0; level < num_of_floor; level++) {

    const seat_list = [];
    for (let i = 0; i < num_of_table_per_floor; i++) {

      const table_num = level * num_of_table_per_floor + i;
      const seat = await db.Seat.find( { table_num } );
      seat_list.push(seat[0]);
    }

    await db.Floor({
      floor_level: level,
      seats: seat_list
    })
    .save();

  }

  
}

seed();
