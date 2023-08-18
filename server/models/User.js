const { Schema, model, Types } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tiers:[]

    

});

// Use a pre-save hook to hash the user password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = model('User', userSchema);

module.exports = User;