// import mongoose, { Schema } from "mongoose";

// mongoose.connect(process.env.MONGODB_URI);

// mongoose.Promise = global.Promise;

// const SuspendedSolidsTestSchema = new Schema(
//   {
//     testNumber: String,
//     dishNumber: String,
//     testData: {
//       A_weightDryFilterAndSolids: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },
//       B_weightOfCleanFilter: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },
//       // A - B
//       C_weightOfDrySolids: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },

//       D_volumeOfSampleFiltered: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },

//       // C/D * 1,000,000
//       E_TSS: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },

//       F_weightOfFilterAndAsh: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },

//       // F-B
//       G_weightOfAsh: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },

//       // C - G
//       H_weightOfVolatileSolids: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },

//       // H / D * 1,000,000
//       I_VSS: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },

//       // I / E * 100
//       J_percentVolatileSolids: {
//         mixedLiquor: String,
//         influent: String,
//         final: String,
//       },
//     },

//     notes: String,
//   },
//   {
//     timestamps: true,
//   }
// );

// const TotalSuspendedSolidTest =
//   mongoose.models.TotalSuspendedSolidTest ||
//   mongoose.model("Total Suspended Solids Test", SuspendedSolidsTestSchema);

// export default TotalSuspendedSolidTest;
