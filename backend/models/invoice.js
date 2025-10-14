const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true,
    },
    invoiceDate: {
        type: Date,
        required: true,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['draft', 'sent', 'paid', 'overdue', 'cancelled'],
        default: 'draft',
    },
    client: {
        name: { type: String, required: true },
        address: {
            street: String,
            city: String,
            state: String,
            postalCode: String,
            country: String,
        },
        email: { type: String, required: true },
        phone: String,
        taxId: String,
    },
    items: [
        {
            description: { type: String, required: true },
            quantity: { type: Number, required: true, min: 1 },
            unitPrice: { type: Number, required: true, min: 0 },
            taxRate: { type: Number, default: 0 },
            total: { type: Number, required: true },
        },
    ],
    subTotal: { type: Number, required: true },
    taxTotal: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    total: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    notes: String,
    terms: String,
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
    paymentDetails: {
        method: String,
        paidAt: Date,
        transactionId: String,
    },
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
