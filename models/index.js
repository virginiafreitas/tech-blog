const Comment = require('./Comment')
const User = require('./User')
const Post = require('./Post')


// blog belongs to one user
Post.belongsTo(User, {
    foreignKey: 'user_id'
})


// comment belongs to one user 
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

// Blog can have many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})


module.exports = {
    Comment, User, Post
}