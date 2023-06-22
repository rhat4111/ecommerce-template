const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { User, validate } = require('../models/user');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send('Authentication failed');
    }

    bcrypt.compare(password, user.password, function (err, result) {
      if (result) {
        return res.send(user)
      }
      return res.status(401).send('Authentication failed');
    });
  } catch (error) {
    res.send("An error occured");
    console.log(error);
  }
});


router.post('/register', async (req, res) => {
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