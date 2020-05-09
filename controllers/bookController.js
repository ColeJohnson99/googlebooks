const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.books
            .find(req.query)
            .sort({ date: -1 })
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.books
            .findById(req.params.id)
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Book
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.books
            .findOneAndUpdate({_id: req.params.id }, req.body)
            .then(dbmodel => res.json(dbmodel))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.books
            .findById({_id: req.params.id })
            .then(dbmodel => dbmodel.remove())
            .then(dbModel => res.json(dbmodel))
            .catch(err => res.status(422).json(err));
    }
    
};