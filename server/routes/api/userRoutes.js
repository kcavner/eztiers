const router = require('express').Router();
const {
  postUser,
  postTiers,
  getTiers
} = require('../../controllers/userController');


router.route('/').post(postUser).get(getTiers)

router.route('/:userId').put(postTiers)


module.exports = router;
