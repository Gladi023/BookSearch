const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

const extractToken = (req) => {
  const token = req.body.token || req.query.token || req.headers.authorization;
  if (!token) {
    return null;
  }

  return req.headers.authorization
    ? token.split(' ').pop().trim()
    : token;
};

const authMiddleware = (req) => {
  const token = extractToken(req);
  if (!token) {
    return req;
  }
  
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log('Invalid token');
  }

  return req;
};

const signToken = (payload) => {
  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = {
  authMiddleware,
  signToken,
};
    