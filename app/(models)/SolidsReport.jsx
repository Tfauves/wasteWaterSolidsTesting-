import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const SolidsReportSchema = new Schema(
  {
    operatorID: String,
    description: String,
    category: String,
  },
  {
    timestamps: true,
  }
);

const NewReport =
  mongoose.models.SolidsReport ||
  mongoose.model("SolidsReport", SolidsReportSchema);

export default NewReport;
