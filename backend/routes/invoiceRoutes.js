const express = require('express');
const router = express.Router();
const invoice = require('../models/invoice')

router.post('/create', async (req, res) => {
    try {
        const {
            userId,
            invoiceNumber,
            invoiceDate,
            dueDate,
            client,
            items,
            subTotal,
            taxTotal,
            discount,
            total,
            currency,
            notes,
            terms,
            paymentDetails,
            status,
        } = req.body;


        const newInvoice = new Invoice({
            invoiceNumber,
            invoiceDate,
            dueDate,
            client,
            items,
            subTotal,
            taxTotal,
            discount,
            total,
            currency,
            notes,
            terms,
            paymentDetails,
            status,
            createdBy: userId,
        });
        await User.findByIdAndUpdate(req.user._id, {
            $push: { invoices: newInvoice._id },
        });
        await newInvoice.save();

        res.status(201).json(newInvoice);
    } catch (error) {
        console.error('Error creating invoice:', error);
        res.status(500).json({ message: 'Server error' });
    }
})
router.get('/:id', async (req, res) => {
    try {
        const inv = await invoice.findById(req.params.id);
        if (!inv) {
            return res.status(404).json({ message: 'Invoice not found' });
        }
        res.json(inv);
    } catch (error) {
        console.error('Error fetching invoice:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports = router;