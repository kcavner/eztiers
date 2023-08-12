const express = require('express');
const User = require('../models/User')
const bcrypt = require('bcrypt')

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
},
  async loginUser(req,res){
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });

      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      return res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
