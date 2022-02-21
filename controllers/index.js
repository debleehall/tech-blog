const router = require("express").Router();

const apiRoutes = require("./api");

//handlebars
const homeRoutes = require("./home-routes");

router.get('/login', (req, res) => {
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
  });

  router.get('/dashboard', (req, res) => {
    res.render('dashboard');
  });

  router.get('/logout', (req, res) => {
    res.render('dashboard');
  });

router.use("/api", apiRoutes);

//handlebars
router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;