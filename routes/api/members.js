const express = require('express');
const router = express.Router();
const memberController = require('../../controllers/members-controller')

// router.get('/',memberController.getAllMembers)

router.post('/v2',memberController.getMemberByBirthday)

module.exports = router;
