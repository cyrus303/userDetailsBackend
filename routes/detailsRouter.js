const {Router} = require('express');
const router = Router();
const UserDetails = require('../db');

router.get('/users', async (req, res) => {
  try {
    const usersData = await UserDetails.find({});

    if (usersData) {
      res.status(200).send(usersData);
    } else {
      res.status(404).send({msg: 'no user data available'});
    }
  } catch (error) {
    res.status(404).send({msg: 'no user data available'});
  }
});

router.post('/user', async (req, res) => {
  const {name, description, linkedin, twitter, interests} = req.body;

  try {
    const userData = await UserDetails.create({
      name,
      description,
      linkedin,
      twitter,
      interests,
    });
    res.status(201).send(userData);
  } catch (error) {
    res.status(503).send({msg: 'record could not be created'});
  }
});

router.delete('/destroy', async (req, res) => {
  const {_id} = req.body;

  try {
    const userData = await UserDetails.deleteOne({_id: _id});
  } catch (error) {
    res.status(503).send({msg: 'record could not be deleted'});
  }
});

module.exports = router;
