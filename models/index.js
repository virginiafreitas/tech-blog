const Comment = require('./Comment')
const User = require('./User')
const Post = require('./Post')

// User can have many blog posts
User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// blog belongs to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
})

// user can have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

// comment belongs to one user 
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// Blog can have many comments
Post.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
})

// comment belongs to one blog
Comment.belongsTo(Post, {
    foreignKey: 'blog_id'
})


module.exports = {
    Comment, User, Post
}