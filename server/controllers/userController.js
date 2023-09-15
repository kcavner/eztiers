const express = require('express');
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { signToken } = require('../utils/auth')
const mongoose = require('mongoose')


module.exports = {

  async getTiers(req, res){
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      res.status(200).send({ tiers: user.tiers });
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  async deleteTier(req, res) {
    try {
      const user = await User.findById(req.params.userId);
  
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
  
      const { title } = req.body; 
  
      if (!title) {
        return res.status(400).json({ message: 'Title is required in the request body' });
      }
  

      const removedList = user.tiers.find((tier) => tier.title === title);
  
      if (!removedList) {
        return res.status(404).json({ message: 'List not found' });
      }
  
      user.tiers = user.tiers.filter((tier) => tier.title !== title);
      await user.save();
  
      return res.json({ message: 'List removed successfully', data: removedList });
    } catch (error) {
      console.error('Error removing list:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

 
  
  async postTiers(req, res){
    try {
      const userId = req.params.userId;
      console.log(userId)
      console.log("req body", req.body)
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

      const token = signToken(user)
      console.log(user)
    
  
  
      return res.status(200).json({ message: 'Login successful',token:token,user:user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
  async authCheck(req, res){
    if (req.session.user) {
      return res.status(200).json({ isAuthenticated: true });
    } else {
      console.log(req.session)
      return res.status(401).json({ isAuthenticated: false });
    }
  }
}
