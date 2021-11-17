import jwtService from '../services/jwtService.mjs';
const validate = jwtService.validate;

const ExecJWT = (req, res, next) => {
    let token = req.header('Authorization');
    if (token) {
        if (token.startsWith('Bearer ')) token = token.slice(7, token.length);
        req.user = validate(token);
    }
    next();
};

export default ExecJWT;
