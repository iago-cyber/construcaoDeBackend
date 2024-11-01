function validarTolken(req, res, next){
    const token = req.headers['authorization'];
    if(token == '12345678'){
        next();
    }else {
        res.status(401).json({msg: 'acesso negado'});
    }
}

module.exports = validarTolken;