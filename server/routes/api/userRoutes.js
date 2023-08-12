const router = require('express').Router();
const {
  postUser,
  postTiers,
  getTiers,
  authCheck,
  loginUser
} = require('../../controllers/userController');


router.route('/').post(postUser).get(getTiers)
router.route('/login').post(loginUser)
router.route('/auth').get(authCheck)
router.route('/:userId').put(postTiers)


module.exports = router;
