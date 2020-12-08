const {Router} = require('express');

const router = Router();

router.post('/list', async (request, response) => {

    response.status(200).json([
        {name: 'test1', text: 'awdawd awd aw faedwa daw da w', image: null},
        {name: 'test2', text: 'awdawd awd aw faedwa daw da w', image: null},
        {name: 'test3', text: 'awdawd awd aw faedwa daw da w', image: null},
        {name: 'test4', text: 'awdawd awd aw faedwa daw da w', image: null},
        {name: 'test5', text: 'awdawd awd aw faedwa daw da w', image: null}
    ]);
});

router.post('/add', async (request, response) => {

    const data = request.body;
    console.log(data);
});

module.exports = router;
