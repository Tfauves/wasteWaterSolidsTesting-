import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const TotalSolidsTestSchema = new Schema(
  {
    //enter schema here for the total solids test
  },
  {
    timestamps: true,
  }
);

export default TotalSolidsTestSchema;
