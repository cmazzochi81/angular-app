const express = require('express');
const router = express.Router();

//Mongoose is a NodeJS package to connect to the MongoDb. 
//Mongoose also provides object modeling. 
const mongoose = require('mongoose'); 
const article = require('../models/article');

//The MongoDb connection string from Mlab. 
const db = "mongodb://cmazzochi81:Tonybaj_81@ds023593.mlab.com:23593/blogapp";

//Establish connection with the database. 
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Error connecting');
    }
});

//READ
router.get('/all', function(req, res) {

    article.find({})
        .exec(function(err, articles) {
            if (err) {
                console.log('Error getting the articles');
            } else {
                console.log(articles);
                res.json(articles);
            }
        });
});

//READ ONE
router.get('/articles/:id', function(req, res) {
    console.log('Requesting a specific article');
    article.findById(req.params.id)
    .exec(function(err, articles) {
        if (err) {
            console.log('Error getting the articles');
        } else {
            console.log(articles);
            res.json(articles);
        }
    });
})

//CREATE
router.post('/create', function(req, res) {
    console.log('Posting an Article');
    var newArticle = new article();
    newArticle.title = req.body.title;
    newArticle.content = req.body.content;
    newArticle.save(function(err, article) {
        if (err) { 
            console.log('Error inserting the article');
        } else {
            res.json(article);
        }
    });
});

//UPDATE
router.post('/update/:id', function(req, res) {
    console.log('Updating an Article');

    article.findById(req.params.id)
        .exec(function(err, article) {
            if (err) {
                console.log('Could not find the article');
            } else {
                article.title = req.body.title;
                article.content = req.body.content;
                article.save();
                res.json(article);
            }
        });
});

router.get('/delete/:id', function(req, res) {
    console.log('Deleting an Article');
    article.findByIdAndRemove(req.params.id)
        .exec(function(err, article) {
            if (err) {
                console.log('Error deleting the article');
            } else {
                res.json(article);
            }
        });
});



module.exports = router;