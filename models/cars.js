const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const carSchema = new Schema({
  model: {
    type: String,
    enum: [
      "Challenger",
      "Charger",
      "Duragno",
      "Journey",
      "Grand Caravan",
      "Ram 1500",
    ],
  },
  year: {
    type: Number,
    min: 2000,
    max: 2021
  },
  color: {
    type: String,
    enum: [
      "Knuckle White",
      "Destroyer Grey",
      "Hellraisin Purple",
      "F8 Green",
      "Pitch Black",
      "Octane Red",
    ],
  },
  titleCondition: {
    type: String,
    enum: ["Clean", "Salvage", "Rebuilt"],
  },
  comment: [commentSchema],
});

module.exports = mongoose.model("Car", carSchema);
