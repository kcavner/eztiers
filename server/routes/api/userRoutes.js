const router = require('express').Router();
const {
  postUser,
  postTiers,
  getTiers,
  authCheck
} = require('../../controllers/userController');


router.route('/').post(postUser).get(getTiers)
router.route('/auth').get(authCheck)
router.route('/:userId').put(postTiers)


module.exports = router;
