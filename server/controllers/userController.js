const express = require('express');
const router = express.Router();
const User = require('../models/User')

module.exports = {

  async getTiers(req, res){
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.status(200).send({ tiers: user.tiers });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  async postTiers(req, res){
    try {
      const userId = req.params.userId;
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $push: { tiers: req.body } }, // Use $push to push to the tiers array
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  },
  
  async postUser(req,res){
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
      } catch (error) {
        res.status(400).send(error);
      }
}
}
