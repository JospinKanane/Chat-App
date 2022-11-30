const router = require('express').Router();
const controller = require('../controllers/controller');
// const auth = require('../Authentification/Auth')

router.post('/login', controller.login)
router.post('/register', controller.register)
router.post('/conversation', controller.conversation)
router.get('/conversation/:userId', controller.getConversation)
router.post('/messages', controller.messages)
router.get('/messages/:conversationId', controller.getMessages)
router.post('/user', controller.getUsers)
router.get('/user/:userId', controller.getOneUser)

module.exports = router;