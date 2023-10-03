const db = require('../config/db');

exports.resetData = (req, res) => {
    var Num = req.params['num'];
    res.json({ message : 'done', data : Num});
}