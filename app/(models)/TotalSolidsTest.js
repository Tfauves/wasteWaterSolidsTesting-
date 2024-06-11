// import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGODB_URI);

// mongoose.Promise = global.Promise;

// const TotalSolidsTestSchema = new Schema(
//   {
//     testNumber: String,
//     dishNumber: String,
//     testData: {
//       A_dryFilterWithSolids: String,
//       B_cleanFilter: String,
//       // A-B
//       C_drySolids: String,
//       D_volOfSample: String,
//       //C/D * 1,000,000
//       E_tssOfSample: String,
//       F_filterAndAsh: String,
//       //F-B
//       G_weightOfAsh: String,
//       //C-G
//       H_weightOfVolatileSolids: String,
//       //H/D * 1,000,000
//       I_volatileSolidsVSS: String,
//       //I/E *100
//       J_percentVolatileSolids: String,
//     },

//     notes: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// const TotalSolidsTest =
//   mongoose.models.TotalSolidsTest ||
//   mongoose.model("Total Solids Test", TotalSolidsTestSchema);

// export default TotalSolidsTest;
