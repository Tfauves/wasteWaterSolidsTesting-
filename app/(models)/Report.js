import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const ReportSchema = new Schema(
  {
    operatorID: String,
    description: String,
    category: String,
    timeMarks: {
      fivemin: String,
      tenmin: String,
      fifteenmin: String,
      twentymin: String,
      twentyfivemin: String,
      thirtymin: String,
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.models.Report || mongoose.model("Report", ReportSchema);

export default Report;
