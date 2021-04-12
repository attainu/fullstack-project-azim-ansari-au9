var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema(
  {
    User: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    Amount: {
      type: Number,
      required: true,
      trim: true
    },
    Type: {
      type: String,
      required: true,
      trim: true
    },
    Category: {
      type: String,
      required: true,
      trim: true
    },
    TransactionDate: {
      type: Date,
      required: true
    }
  }
);


module.exports = mongoose.model('Transaction', transactionSchema);