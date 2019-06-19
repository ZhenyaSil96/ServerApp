let express = require('express');
let router = express.Router();

let user_controller = require('../Controllers/UserController');

router.get('/user/userget', user_controller.finduserget);
router.post('/user/userpost', user_controller.finduserpost);
router.put('/user/userput', user_controller.finduserput);
router.delete('/user/userdelete', user_controller.finduserdelete);

module.exports = router;