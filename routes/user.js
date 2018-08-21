const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.send('user 기본 페이지');
});

router.get('/:id', (req, res, next) => {    
    if(!Number.isNaN(parseInt(req.params.id),10)){
        return res.send(req.params.id);
    }    
    console.error(`파라미터 error : ${req.params.id}`);
    return res.redirect('./');
});

module.exports = router;