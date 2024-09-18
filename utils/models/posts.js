import mongoose from 'mongoose';

// Define the Blog Post Schema
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String, // URL or path to the image
    required: false,
    trim: true,
  },
}, {
  timestamps: true, // Automatically manage createdAt and updatedAt timestamps
});

// Create the BlogPost model
const BlogPost = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;
