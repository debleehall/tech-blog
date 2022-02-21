const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

const router = require('express').Router();


router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_content',
        'user_id',
        'created_at'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});   

  router.get('/login', (req, res) => {
    res.render('login');
  });

module.exports = router;