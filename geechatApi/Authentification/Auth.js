const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.Authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'USER_GEECHAT_RANDOM_TOKEN_SECRET');
        const userId = decodedToken.userId;
        req.auth = {
            userId : userId,
        }
        
    } catch (error) { res.status('401').json({message : 'Token not valid'})}
}