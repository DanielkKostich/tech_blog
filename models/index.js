const User = require('./User');
const Post = require('./post');

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });
  
  Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
  });
  
  module.exports = {
    User,
    Post
  };