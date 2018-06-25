const express = require('express');

const router = express.Router();

const AdUnit = require('./AdUnit.model');

// create route   [OK!]
router.post('/add', async (req, res) => {

  let ad_unit = new AdUnit({name: req.body.name, price: req.body.price});
  try {
    let data = await ad_unit.save();
    res.status(201).send(data);
  } catch (e) {
    res.status(500).send(e, 'Failed to save to the database!');
  }
});


// get data (index or listing) route   [OK!]
router.get('/', async (req, res) => {
  try {
    let ad_units = await AdUnit.find();
    res.send(ad_units);
  } catch (e) {
    res.status(500).send(e, 'Failed to retrieve ad units from the database!');
  }
});


// get ad unit by id    [OK!]
router.get('/unit/:id', async (req, res) => {
  try {
    let ad_unit = await AdUnit.findById(req.params.id);
    res.send(ad_unit);
  } catch (e) {
    res.status(500).send(e, 'Failed to retrieve ad unit from the database!');
  }
});


// update route     [OK!]
router.put('/update/:id', async (req, res) => {
  try {
    let data = await AdUnit.findByIdAndUpdate(req.params.id, {name: req.body.name, price: req.body.price});
    res.send('ad unit successfully updated!');
  } catch (e) {
    res.status(500).send(e, 'Failed to update ad unit!');
  }
});


// delete route      [OK!]
router.delete('/delete/:id', async (req, res) => {
  try {
    await AdUnit.findByIdAndRemove(req.params.id);
    res.status(200).send('Successfully deleted ad unit from the database!');
  } catch (e) {
    res.status(500).send(e, 'Failed to delete ad unit from the database!');
  }
});


module.exports = router;
