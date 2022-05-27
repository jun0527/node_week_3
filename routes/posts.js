const express = require('express');
const Post = require('../models/posts');
const errHandle = require('../handle/errHandle');
// 建立router實體
const router = express.Router();

router.get('/', async (req, res) => {
  const post = await Post.find({});
  console.log(post);
  res.status(200).json({
    'status': 'success',
    'data': post,
  })
})
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newPost = await Post.create(data);
    res.status(200).json({
      'status': 'success',
      'data': newPost,
    })
  } catch(err) {
    console.log(err);
    errHandle(res, 400);
  }
})
router.delete('/', async (req, res) => {
  const newPost = await Post.deleteMany({});
  res.status(200).json({
    'status': 'success',
    'data': await Post.find(),
  })
})
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const newPost = await Post.findByIdAndDelete(id);
  res.status(200).json({
    'status': 'success',
    'data': await Post.find(),
  })
})
router.patch('/:id', async (req, res) => {
  try {
    const data = req.body;
    const id = req.params.id;
    const newPost = await Post.findByIdAndUpdate(id, data);
    res.status(200).json({
      'status': 'success',
      'data': await Post.find(),
    })
  } catch(err) {
    console.log(err);
    errHandle(res, 400);
  }
})

module.exports = router;