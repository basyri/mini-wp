const router = require('express').Router()
const ArticleController = require('../controllers/articleController')
const {authenticate, authorize} = require('../middlewares/middleware')

router.get('/', ArticleController.findAll)
router.use('/', authenticate)
router.get('/:userId', ArticleController.findByUser)
router.delete('/:id', authorize, ArticleController.delete)
router.post('/add', ArticleController.add)
router.patch('/:id', authorize, ArticleController.update)

module.exports = router