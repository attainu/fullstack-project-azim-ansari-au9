const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mutualFundsSchema = new Schema(
  {
    Date: {
      type: Date,
    },
    Mutual_Fund_Family: {
      type: String,
      required: true,
      trim: true,
    },
    Scheme_Category: {
      type: String,
      required: true,
      trim: true,
    },
    Scheme_Name: {
      type: String,
      required: true,
      trim: true,
    },
    Scheme_Type: { type: String, required: true, trim: true },

    Net_Asset_Value: {
      type: String,
      required: true,
    },
    Scheme_Code: { type: String, required: true },
  },
  { strict: false }
);

module.exports = mongoose.model("MutualFunds", mutualFundsSchema);;
