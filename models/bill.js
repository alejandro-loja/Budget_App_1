const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// creating scheme with mongoose for each added bill/subscription
// included service name, cost of the subscription (in cents), date the bill is due, bill category
// information about the service, and level of importance

const billSchema = new Schema({
    serviceName: { type: String, required: true },
    monthlyCostCents: { type: Number, required: true },
    currency: { type: String, required: true },
    dateDue: { type: Date, required: false },
    // less important info
    category: { type: String, required: false },
    informationBill: { type: String, required: false },
    importance: {type: String, required: false}
});

const Bills = mongoose.model("Bills", billSchema);

module.exports = Bills;