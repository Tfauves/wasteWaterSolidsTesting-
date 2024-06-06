import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const SettleometerTestSchema = new Schema(
  {
    operatorID: String,
    description: String,
    category: String,
    timeMarks: {
      five: String,
      ten: String,
      fifteen: String,
      twenty: String,
      twentyFive: String,
      thirty: String,
    },
  },
  {
    timestamps: true,
  }
);

const SettleometerTest =
  mongoose.models.SettleometerTest ||
  mongoose.model("Settleometer Test", SettleometerTestSchema);

export default SettleometerTest;

export { SettleometerTestSchema };
