const {Comment} = require('../../models/index')
const router = require('express').Router()

router.post('/', async (req, res) => {
    try {
        const {text, post_id} = req.body
        if (text && post_id){
            await Comment.create({
                text,
                user_id: req.session.user_id,
                post_id
            })
            res.status(200).json("Successful upload")
        } else {
            res.status(400).json({message: "Invalid body passed"})
        }
    } catch(error) {
        res.status(500).json({message: "Error while trying to post a comment", error})
    }

})



module.exports = router