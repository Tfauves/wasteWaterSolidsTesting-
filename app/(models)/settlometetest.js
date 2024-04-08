import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const settlometerReportSchema = new Schema(
  {
    fiveMinMark: Number,
    tenMinMark: Number,
  },
  {
    timestamps: true,
  }
);

const SettlometerReport =
  mongoose.models.SettlometerReport ||
  mongoose.model("SettlometerReport", settlometerReportSchema);

export default SettlometerReport;
