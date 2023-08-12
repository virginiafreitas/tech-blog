const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res)=> {
  try{
      const {title, body} = req.body
      console.log(req.session.user_id)
      if(title && body){
          await Post.create({
              title,
              body,
              user_id: req.session.user_id
          })
          res.status(200).json({message: "Successfully uploaded"})
      }else {
          res.status(404).json({message: "Client side error, wrong body content passed in"})
      }
  }catch(err){
      res.status(500).json({message: "Server error while trying to post a new post", error: err})
  }
})


router.put('/:id', withAuth, async (req, res) => {
  try{
      const {title, body} = req.body
      if(title && body){
          await Post.update({
              title,
              body
          }, {
              where: {
                  id: req.params.id
              }
          }).catch(err => res.status(404).json({message: "Invalid ID for post", err}))
          res.status(200).json("Update success")
      }else {
          res.status(400).json("invalid body")
      }

  }catch(err){
      res.status(500).json({message: "Server error while trying to update a post", error: err})
  }
})

// when they delete a post
router.delete('/:id', withAuth, async (req, res) => {
  try{
      console.log('========================== \n Delete route hit \n ========================')
      await Post.destroy({
          where: {
              id: req.params.id
          }
      }).catch(err => res.status(404).json({message: "Invalid Id for post", err}))

      res.status(200).json("Delete success")

  }catch(err){
      res.status(500).json({message: "Server error while trying to delete a post", error: err})
  }
})

module.exports = router