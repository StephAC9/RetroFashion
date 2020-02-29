const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.memberIsAuth = false;
        return next();
    }
    const token = authHeader.split(' ')[1];
    if (!token || token === '') {
        req.memberIsAuth = false;
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETKEY);
    } catch (err) {
        req.memberIsAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.memberIsAuth = false;
        return next();
    }
    req.memberIsAuth = true;
    req.memberId = decodedToken.id;
    next();
};