//This schema will map to your mongo db collection, and it will define the shape of the documents within the collection. 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: String,
    content: String
});

module.exports = mongoose.model('article', articleSchema);