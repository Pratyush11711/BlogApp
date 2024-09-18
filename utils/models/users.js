import mongoose from 'mongoose';

// Define the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
 
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});

// Create the User model
const User =mongoose.models.User || mongoose.model('User', userSchema);

export default User;
