const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
  content: {
    type: String,
  },
  model: {
    type: String,
    enum: [
      "Challenger",
      "Charger",
      "Durango",
      "Journey",
      "Grand-Caravan",
      "Ram-1500",
    ],
  },
  year: {
    type: Number,
    min: 2000,
    max: 2021,
  },
  color: {
    type: String,
    enum: [
      "Knuckle-White",
      "Destroyer-Grey",
      "Hellraisin-Purple",
      "F8-Green",
      "Pitch-Black",
      "Octane-Red",
    ],
  },
  titleCondition: {
    type: String,
    enum: ["Clean", "Salvage", "Rebuilt"],
  },
},
{
  timestamps: true,
}
);

const carSchema = new Schema(
  {
  model: {
    type: String,
    enum: [
      "Challenger",
      "Charger",
      "Durango",
      "Journey",
      "Grand Caravan",
      "Ram 1500",
    ],
  },
  comment: [commentSchema],  
},
{
  timestamps: true
}
);

module.exports = mongoose.model("Car", carSchema);
