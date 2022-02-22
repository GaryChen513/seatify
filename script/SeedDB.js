const mongoose = require("mongoose");
const db = require("../models");
const floorSchema = require("../models/floor.js");
// const level = require("./seed");
const _ = require("lodash");

const table_size = 128; // default number of table is 128;
const num_of_table_per_floor = 32;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seatifyDB", {
  useNewUrlParser: true,
});

async function seed() {
  await db.Floor.deleteMany({});
  await db.Seat.deleteMany({});

  
  const num_of_floor = table_size / num_of_table_per_floor;

  for (let level = 0; level < num_of_floor; level++) {
    const aFloor = new db.Floor({ floor_level: level + 1 });
    for (let i = 0; i < num_of_table_per_floor; i++) {

      const table_num = level * num_of_table_per_floor + i;
      const aSeat = new db.Seat({ table_num: table_num, occupiedTime: [9, 10, 11, 12] });
      
      aFloor.seats.push(aSeat);
      aSeat.save()
    }
    aFloor.save();
  // db.Floor.find({})
  //   .populate({ path: "seats", model: db.Seat })
  //   .then((res) => console.log(res[0]));
  }
}

seed();
