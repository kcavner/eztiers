const router = require('express').Router();
const {
  postUser,
  postTiers,
  getTiers,
  authCheck,
  loginUser,
  deleteTier
} = require('../../controllers/userController');


router.route('/').post(postUser)
router.route('/login').post(loginUser)
router.route('/auth').get(authCheck)
router.route('/:userId').put(postTiers).get(getTiers)
router.route('/delete/:userId').put(deleteTier)


module.exports = router;
