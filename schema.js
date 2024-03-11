//BELOW IS THE MONGODB SCHEMA OF THE "Product" TABLE.


const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: 'Number',
        required: [true, "title is required"]
    },
    name: {
        type: 'String',
        required: [true, "name is required"]
    },
    desc: {
        type: 'String',
        required: [true, "desc is required"]
    },
    SKU: {
        type: 'String',
        required: [true, "SKU is required"]
    },
    category_id: {
        type: 'Number',
        required: [true, "category_id is required"]
    },
    inventory_id: {
        type: 'Number',
        required: [true, "inventory_id is required"]
    },
    price: {
        type: 'Number',
        required: [true, "price is required"]
    },
    discount_id: {
        type: 'Number',
        required: [true, "discount_id is required"]
    },
    created_at: {
        type: 'Date',
        required: [true, "created_at is required"]
    },
    modified_at: {
        type: 'Date',
        required: [true, "modified_at is required"]
    },
    deleted_at: {
        type: 'Date',
        required: [true, "deleted_at is required"]
    },
}, { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;