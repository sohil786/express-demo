const express = require('express');
const router = express.Router();
const httpStatus = require('lib/httpStatus');
const Role = require('../models/Role');

// Add
router.post('/', function (req, res, next) {
  console.log('===============START=====================');
  console.log(req.body);
  Role.create({ name: req.body.name,key: req.body.key },
      function (err, data) {
        if (err) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Server error: ${err.message}`);
        res.status(httpStatus.OK).send(data);
      });
});

// List
router.get('/', function (req, res) {
  Role.find({}, function (err, data) {
    if (err) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Server error: ${err.message}`);
    res.status(httpStatus.OK).send(data);
  }).select('-password -__v').sort({ name: 1 });
});

// Update
router.get('/:id', function (req, res) {
  Role.findById(req.params.id, function (err, data) {
    if (err) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Server error: ${err.message}`);
    if (!data) return res.status(httpStatus.NOT_FOUND).send('data not found');
    res.status(httpStatus.OK).send(data);
  }).select('-password -__v');
});

// Delete
router.delete('/:id', function (req, res) {
  Role.findByIdAndRemove(req.params.id, function (err, data) {
    if (err) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Server error: ${err.message}`);
    res.status(httpStatus.OK).send("data: " + data.name + " was deleted.");
  });
});

// View
router.put('/:id', function (req, res) {
  Role.findByIdAndUpdate(req.params.id, {
    $set: { email: req.body.email, name: req.body.name }
  }, { new: false }, function (err, data) {
    if (err) return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Server error: ${err.message}`);
    res.status(httpStatus.NO_CONTENT).send(user);
  });
});

module.exports = router;
