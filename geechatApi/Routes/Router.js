const router = require('express').Router();
const controller = require('../controllers/controller');
// const auth = require('../Authentification/Auth')

router.post('/login', controller.login)
router.post('/register', controller.register)
router.post('/conversation', controller.conversation)
router.get('/conversation/:userId', controller.getConversation)

module.exports = router;