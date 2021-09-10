const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Blog = require('../models/Blog');

router.get('/', auth, async(req, res) => {
    try {
       const blogs = await Blog.find({user: req.user.id}).sort({date: -1});
       res.send(blogs);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
})
router.get('/:id', auth, async(req, res) => {
    try {
       const blog = await Blog.findById(req.params.id);
       res.send(blog);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
})

router.post('/', auth, async(req, res) => {
    const {title, tags, category, image, content} = req.body
    try {
       const newblogs = new Blog({
        title, tags, category, image, content, user: req.user.id
       })
      const blogs = await newblogs.save();
      res.send({blogs})
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
})

router.delete('/:id',  (req, res) =>{
    Blog.findByIdAndRemove(req.params.id).exec(),
    function(err){
        if(!err) {
            return res.send('blog deleted')
        } else return res.send('blog deleted')
    }
});

router.put('/:id', async (req, res) => {
    const blogId = req.params.id;
    const blog = await Blog.findOne({_id: blogId})
    if(blog) {
        blog.title = req.body.title;
        blog.tags = req.body.tags;
        blog.category = req.body.category;
        blog.image = req.body.image;
        blog.content = req.body.content;

        const updatedBlog = await blog.save()

        res.send(updatedBlog);


    }

});


module.exports = router;