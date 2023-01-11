const { Router } = require('express');

const { handlerHealthcheck } = require('./healthcheck.controller')

const router = Router();


router.post('/', handlerHealthcheck);

export default router;
