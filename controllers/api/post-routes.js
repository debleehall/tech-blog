const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Group } = require("../../models");

router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    }
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res
          .status(404)
          .json({ message: "There was no post located for this id." });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  Post.create({
    post_text: req.body.post_text,
    user_id: req.body.user_id,
    group_id: req.body.group_id,
    post_content: req.body.post_content
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});


module.exports = router;
