import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const SuspendedSolidsTestSchema = new Schema(
  {
    testNumber: String,
    // dishNumber: String,
    // testData: {
    //   A_weightDryFilterAndSolids: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },
    //   B_weightOfCleanFilter: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },
    //   // A - B
    //   C_weightOfDrySolids: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },

    //   D_volumeOfSampleFiltered: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },

    //   // C/D * 1,000,000
    //   E_TSS: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },

    //   F_weightOfFilterAndAsh: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },

    //   // F-B
    //   G_weightOfAsh: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },

    //   // C - G
    //   H_weightOfVolatileSolids: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },

    //   // H / D * 1,000,000
    //   I_VSS: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },

    //   // I / E * 100
    //   J_percentVolatileSolids: {
    //     mixedLiquor: "",
    //     influent: "",
    //     final: "",
    //   },
    // },

    // notes: String,
  },
  {
    timestamps: true,
  }
);

const TotalSuspendedSolidsTest =
  mongoose.models.TotalSuspendedSolidsTest ||
  mongoose.model("Total Suspended Solids Test", SuspendedSolidsTestSchema);

export default TotalSuspendedSolidsTest;
