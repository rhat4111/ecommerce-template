const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User, validate } = require('../models/user');

router.get('/', async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        const user = await new User({
          ...req.body,
          password: hash
        }).save();
        res.send(user);
      })
    })
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});

module.exports = router;