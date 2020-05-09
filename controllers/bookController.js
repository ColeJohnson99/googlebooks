const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.books
            .find(req.query)
    }
    
}