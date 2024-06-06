import mongoose, { Schema } from "mongoose";
import { SettleometerTestSchema } from "./SettleometerTest";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const SolidsReportSchema = new Schema(
  {
    settleometer: SettleometerTestSchema,
  },
  {
    timestamps: true,
  }
);

const SolidReport =
  mongoose.models.SolidsReport ||
  mongoose.model("Solids Report", SolidsReportSchema);

export default Report;
