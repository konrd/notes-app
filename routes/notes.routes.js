const {Router} = require('express');

const router = Router();

router.post('/list', async (request, response) => {
    console.log('123');
});

module.exports = router;
