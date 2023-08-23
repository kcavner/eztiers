const router = require('express').Router();
const {
  postUser,
  postTiers,
  getTiers,
  authCheck,
  loginUser
} = require('../../controllers/userController');


router.route('/').post(postUser)
router.route('/login').post(loginUser)
router.route('/auth').get(authCheck)
router.route('/:userId').put(postTiers).get(getTiers)


module.exports = router;
