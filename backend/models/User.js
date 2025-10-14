require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'accountant', 'viewer'],
        default: 'user',
    },
    company: {
        name: { type: String },
        address: {
            street: String,
            city: String,
            state: String,
            postalCode: String,
            country: String,
        },
        taxId: String,
        phone: String,
    },
    preferences: {
        currency: { type: String, default: 'USD' },
        language: { type: String, default: 'en' },
        invoiceTemplate: { type: String, default: 'default' },
    },
    invoicesCreated: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Invoice',
        },
    ],
    isActive: {
        type: Boolean,
        default: true,
    },
    lastLoginAt: Date,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: Date,
});
UserSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.passwordHash);
};
UserSchema.methods.generateAuthToken = function () {
    const payload = { userId: this._id, role: this.role };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}
UserSchema.methods.setPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    this.passwordHash = await bcrypt.hash(password, salt);
}
module.exports = mongoose.model('User', UserSchema);
