const router = require('express').Router();

router.get('/', (req, res, next) => {
    res.send('<h1>About to login</h1>')
})

module.exports = router;